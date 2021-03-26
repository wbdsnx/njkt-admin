<template>
  <div class="app-error-404">
    <img src="~@/assets/img/error-404-bg.png">
    <div class="tip">您所访问的页面不存在或无权访问，请检查输入的地址是否正确。</div>
    <a-button
      type="primary"
      icon="vertical-right"
      size="large"
      @click="backHome"
    >返回上一页</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // promissonList: undefined
    }
  },
  mounted() {
    // this.promissonList = this.$store.state.promissonList
  },
  methods: {
    backHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less" scoped>
.app-error-404 {
  overflow: hidden;
  .tip{
    margin-bottom: 20px;
  }
  img {
    display: block;
    margin: 0 auto;
    margin-top: 10vh;
    height: 70vh;
  }
  text-align: center;
}
</style>
