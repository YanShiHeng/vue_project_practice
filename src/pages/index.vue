
<template>

  <!-- <blank-layout>
        <router-view></router-view>
    </blank-layout> -->
  <!-- <main-layout>
    <router-view></router-view>
  </main-layout> -->
  <!-- 动态组件实现组件的切换 -->
  <component :is='layoutName'>
    <router-view></router-view>
  </component>
</template>
<script>
export default {
  computed: {
    layoutName() {
      return this.$route.meta.layout
    }
  }
}
</script>
