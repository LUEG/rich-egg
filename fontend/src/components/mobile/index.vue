<template>
  <div id="mobile">
    <router-view></router-view>
  </div>
</template>

<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'

Vue.use(ElementUI)

export default {
  name: 'mobile-app'
}
</script>
<style lang="scss" scoped>
#mobile {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: hidden;
  overflow: hidden;
}
</style>
