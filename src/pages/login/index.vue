<template>
  <div>
    login page.
    <button @click="loginEvt">登录</button>
  </div>
</template>
<script>
export default {
  methods: {
    loginEvt() {
      //   sessionStorage.setItem('token','loginToken')
      //   this.$store.dispatch('common/tokenAct')
      this.$store.commit('common/mutationToken', 'loginToken');
      this.$router.push('/home');
    }
  },
}
</script>