<!-- websocket 示例 -->
<script lang="ts" setup>
import SockJS from "sockjs-client";
import Stomp from "stompjs";

import { useUserStoreHook } from "@/store/modules/user";
import { ref } from "vue";

const userStore = useUserStoreHook();

const isConnected = ref(false);
const socketEndpoint = ref(""); // 线上

const receiver = ref();

interface MessageType {
  type?: string; // 消息类型： tip-提示消息
  sender?: string;
  content: string;
}

const messages = ref<MessageType[]>([]);

const topicMessage = ref(""); // 广播消息

const queneMessage = ref();

function sendToAll() {
  stompClient.send("/app/sendToAll", {}, topicMessage.value);
  messages.value.push({
    sender: userStore.user.username,
    content: topicMessage.value,
  });
}

function sendToUser() {
  stompClient.send("/app/sendToUser/" + receiver.value, {}, queneMessage.value);
  messages.value.push({
    sender: userStore.user.username,
    content: queneMessage.value,
  });
}

let stompClient: Stomp.Client;

function connectWebSocket() {
  let socket = new SockJS(socketEndpoint.value);

  stompClient = Stomp.over(socket);

  stompClient.connect(
    { Authorization: userStore.token },
    () => {
      isConnected.value = true;
      messages.value.push({
        sender: "Server",
        content: "Websocket 已连接",
        type: "tip",
      });

      stompClient.subscribe("/topic/notice", (res: any) => {
        messages.value.push({
          sender: "Server",
          content: res.body,
        });
      });

      stompClient.subscribe("/user/queue/greeting", (res) => {
        const messageData = JSON.parse(res.body) as MessageType;
        messages.value.push({
          sender: messageData.sender,
          content: messageData.content,
        });
      });
    },
    (error) => {
      console.log("连接失败: " + error);
      isConnected.value = false; // 更新连接状态
      messages.value.push({
        sender: "Server",
        content: "Websocket 已断开",
        type: "tip",
      });
    }
  );
}

function disconnectWebSocket() {
  if (stompClient && stompClient.connected) {
    stompClient.disconnect(() => {
      isConnected.value = false; // 更新连接状态
      messages.value.push({
        sender: "Server",
        content: "Websocket 已断开",
        type: "tip",
      });
    });
  }
}

onMounted(() => {
  connectWebSocket();
});
</script>

<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <el-row>
            <el-col :span="16">
              <el-input v-model="socketEndpoint" class="w-220px" />
              <el-button
                :disabled="isConnected"
                class="ml-5"
                type="primary"
                @click="connectWebSocket"
                >连接
              </el-button>
              <el-button
                :disabled="!isConnected"
                type="danger"
                @click="disconnectWebSocket"
                >断开
              </el-button>
            </el-col>

            <el-col :span="8" class="text-right">
              连接状态：
              <el-tag v-if="isConnected" class="ml-2" type="success"
                >已连接
              </el-tag>
              <el-tag v-else class="ml-2" type="info">已断开</el-tag>
            </el-col>
          </el-row>
        </el-card>

        <el-card class="mt-5">
          <el-form label-width="90px">
            <el-form-item label="消息内容">
              <el-input v-model="topicMessage" type="textarea" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="sendToAll">发送广播</el-button>
            </el-form-item>
          </el-form>
        </el-card>

        <el-card class="mt-5">
          <el-form label-width="90px">
            <el-form-item label="消息内容">
              <el-input v-model="queneMessage" type="textarea" />
            </el-form-item>
            <el-form-item label="消息接收人">
              <el-input v-model="receiver" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="sendToUser"
                >发送点对点消息
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card>
          <div class="message-container">
            <div
              v-for="(message, index) in messages"
              :key="index"
              :class="{
                'tip-message': message.type === 'tip',
                message: message.type !== 'tip',
                'message--sent': message.sender === userStore.user.username,
                'message--received': message.sender !== userStore.user.username,
              }"
            >
              <div v-if="message.type != 'tip'" class="message-content">
                <div
                  :class="{
                    'message-sender':
                      message.sender === userStore.user.username,
                    'message-receiver':
                      message.sender !== userStore.user.username,
                  }"
                >
                  {{ message.sender }}
                </div>
                <div class="color-#333">{{ message.content }}</div>
              </div>
              <div v-else>{{ message.content }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
}

.message {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.message--sent {
  align-self: flex-end;
  background-color: #dcf8c6;
}

.message--received {
  align-self: flex-start;
  background-color: #e8e8e8;
}

.message-content {
  display: flex;
  flex-direction: column;
}

.message-sender {
  margin-bottom: 5px;
  font-weight: bold;
  text-align: right;
}

.message-receiver {
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
}

.tip-message {
  align-self: center;
  padding: 5px 10px;
  margin-bottom: 5px;
  font-style: italic;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 5px;
}
</style>
