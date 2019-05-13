<template>
  <div class="what-to-eat">
    <p class="title">{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'what-to-eat',
  data () {
    return {
      msg: '今天吃什么呢 ？'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.what-to-eat {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: hidden;
  overflow: hidden;
  background: url(./assets/imgs/bg.jpg) center center;
  .title{
    font-weight: 600;
    margin-top: 55%;
    text-align: center;
  }
}
</style>
