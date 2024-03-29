<!-- 部门树 -->
<template>
  <el-card shadow="never">
    <el-input v-model="deptName" clearable placeholder="部门名称">
      <template #prefix>
        <i-ep-search/>
      </template>
    </el-input>

    <el-tree
      ref="deptTreeRef"
      :data="deptList"
      :expand-on-click-node="false"
      :filter-node-method="handleFilter"
      :props="{ children: 'children', label: 'label', disabled: '' }"
      class="mt-2"
      default-expand-all
      @node-click="handleNodeClick"
    />
  </el-card>
</template>

<script lang="ts" setup>
import {getDeptOptions} from "@/api/dept";

const props = defineProps({
  modelValue: {
    type: [Number],
    default: undefined,
  },
});

const deptList = ref<OptionType[]>(); // 部门列表
const deptTreeRef = ref(ElTree); // 部门树
const deptName = ref(); // 部门名称

const emits = defineEmits(["node-click"]);

const deptId = useVModel(props, "modelValue", emits);

watchEffect(
  () => {
    deptTreeRef.value.filter(deptName.value);
  },
  {
    flush: "post", // watchEffect会在DOM挂载或者更新之前就会触发，此属性控制在DOM元素更新后运行
  }
);

/** 部门筛选 */
function handleFilter(value: string, data: any) {
  if (!value) {
    return true;
  }
  return data.label.indexOf(value) !== -1;
}

/** 部门树节点 Click */
function handleNodeClick(data: { [key: string]: any }) {
  deptId.value = data.value;
  emits("node-click");
}

onBeforeMount(() => {
  getDeptOptions().then((response) => {
    deptList.value = response.data;
  });
});
</script>
