<!-- 接口文档 -->
<template>
  <div class="app-container">
    <iframe
      frameborder="0"
      height="100%"
      src="http://localhost:8080/doc.html"
      width="100%"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
/** 关闭tag标签  */
.app-container {
  /* 50px = navbar = 50px */
  height: calc(100vh - 50px);
}

/** 开启tag标签  */
.hasTagsView {
  .app-container {
    /* 84px = navbar + tags-view = 50px + 34px */
    height: calc(100vh - 84px);
  }
}
</style>
