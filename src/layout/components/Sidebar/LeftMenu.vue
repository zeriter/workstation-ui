<script lang="ts" setup>
import {useRoute} from "vue-router";
import SidebarItem from "./SidebarItem.vue";
import {useSettingsStore} from "@/store/modules/settings";
import {useAppStore} from "@/store/modules/app";
import variables from "@/styles/variables.module.scss";

import path from "path-browserify";
import {isExternal} from "@/utils/index";

const settingsStore = useSettingsStore();
const appStore = useAppStore();
const currRoute = useRoute();
const layout = computed(() => settingsStore.layout);
const props = defineProps({
  menuList: {
    required: true,
    default: () => {
      return [];
    },
    type: Array<any>,
  },
  basePath: {
    type: String,
    required: true,
  },
});

/**
 * 解析路径
 *
 * @param routePath 路由路径
 */
function resolvePath(routePath: string) {
  if (isExternal(routePath)) {
    return routePath;
  }
  if (isExternal(props.basePath)) {
    return props.basePath;
  }

  // 完整路径 = 父级路径(/level/level_3) + 路由路径
  const fullPath = path.resolve(props.basePath, routePath); // 相对路径 → 绝对路径
  return fullPath;
}
</script>
<template>
  <el-menu
    :active-text-color="variables.menuActiveText"
    :background-color="variables.menuBg"
    :collapse="!appStore.sidebar.opened"
    :collapse-transition="false"
    :default-active="layout === 'top' ? '-' : currRoute.path"
    :mode="layout === 'top' ? 'horizontal' : 'vertical'"
    :text-color="variables.menuText"
    :unique-opened="false"
  >
    <sidebar-item
      v-for="route in menuList"
      :key="route.path"
      :base-path="resolvePath(route.path)"
      :is-collapse="!appStore.sidebar.opened"
      :item="route"
    />
  </el-menu>
</template>
