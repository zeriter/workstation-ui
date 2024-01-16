<script lang="ts" setup>
defineOptions({
  name: "Dashboard",
  inheritAttrs: false,
});

import {useUserStore} from "@/store/modules/user";
import {useTransition, TransitionPresets} from "@vueuse/core";

const userStore = useUserStore();
const date: Date = new Date();

const duration = 5000;

// 销售额
const amount = ref(0);
const amountOutput = useTransition(amount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
amount.value = 2000;

// 访客数
const visitCount = ref(0);
const visitCountOutput = useTransition(visitCount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
visitCount.value = 2000;

// IP数
const dauCount = ref(0);
const dauCountOutput = useTransition(dauCount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
dauCount.value = 2000;

// 订单量
const orderCount = ref(0);
const orderCountOutput = useTransition(orderCount, {
  duration: duration,
  transition: TransitionPresets.easeOutExpo,
});
orderCount.value = 2000;
</script>

<template>
  <div class="app-container">
    <!-- 数据卡片 -->
    <el-row :gutter="10">
      <el-col :lg="6" :sm="12" :xs="24">
        <el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span class="text-[var(--el-text-color-secondary)]">ZBLOG</span>
            </div>
          </template>

          <div class="flex items-center justify-between mt-5">
            <div class="text-lg text-right">
              {{ Math.round(visitCountOutput) }}
            </div>
            <svg-icon icon-class="run" size="2em"/>
          </div>

          <div
            class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
          >
            <span> 总访客数 </span>
            <span> {{ Math.round(visitCountOutput * 15) }} </span>
          </div>
        </el-card>
      </el-col>

      <!--消息数-->
      <el-col :lg="6" :sm="12" :xs="24">
        <el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span class="text-[var(--el-text-color-secondary)]">ZNODE</span>
            </div>
          </template>

          <div class="flex items-center justify-between mt-5">
            <div class="text-lg text-right">
              {{ Math.round(dauCountOutput) }}
            </div>
            <svg-icon icon-class="stop" size="2em"/>
          </div>

          <div
            class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
          >
            <span> 总IP数 </span>
            <span> {{ Math.round(dauCountOutput) }} </span>
          </div>
        </el-card>
      </el-col>

      <!--销售额-->
      <el-col :lg="6" :sm="12" :xs="24">
        <el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span class="text-[var(--el-text-color-secondary)]">ZVIDEO</span>
            </div>
          </template>

          <div class="flex items-center justify-between mt-5">
            <div class="text-lg text-right">
              {{ Math.round(amountOutput) }}
            </div>
            <svg-icon icon-class="run" size="2em"/>
          </div>

          <div
            class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
          >
            <span> 总销售额 </span>
            <span> {{ Math.round(amountOutput * 15) }} </span>
          </div>
        </el-card>
      </el-col>

      <!--订单量-->
      <el-col :lg="6" :sm="12" :xs="24">
        <el-card shadow="never">
          <template #header>
            <div class="flex items-center justify-between">
              <span class="text-[var(--el-text-color-secondary)]"
              >ZACCOUNT</span
              >
            </div>
          </template>

          <div class="flex items-center justify-between mt-5">
            <div class="text-lg text-right">
              {{ Math.round(orderCountOutput) }}
            </div>
            <svg-icon icon-class="run" size="2em"/>
          </div>

          <div
            class="flex items-center justify-between mt-5 text-sm text-[var(--el-text-color-secondary)]"
          >
            <span> 总订单量 </span>
            <span> {{ Math.round(orderCountOutput * 15) }} </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
