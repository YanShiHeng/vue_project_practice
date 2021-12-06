

<template>
  <div class="application-container">
    <Side />
    <div class="right">
      <Header />
      <article>
        <slot />
      </article>

    </div>
  </div>
</template>
<script>
import Side from './Side.vue'
import Header from './Header.vue'
export default {
  components: {
    Side,
    Header
  }
}
</script>
<style lang="less" scoped>
.application-container {
  display: flex;
  > aside {
    flex: 0 0 260px;
    background-color: #f09711;
  }
  .right {
    flex: 1;
    width: 0;
    > header {
      display: block;
      height: 48px;
      background-color: #fff;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
    }
    > article {
      display: block;
      height: calc(100% - 48px - 24px);
      margin: 12px;
      background-color: #fff;
    }
  }
}
</style>