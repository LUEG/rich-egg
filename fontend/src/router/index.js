import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const _import = (file) => require('@/components' + file + '.vue').default

const router = new Router({
  routes: [
    {
      path: '/mobile',
      name: 'mobile',
      component: _import('/mobile/index'),
      meta: {
        title: '移动端'
      },
      children: [
        {
          path: 'what-to-eat',
          name: 'what-to-eat',
          component: _import('/mobile/what-to-eat'),
          meta: {
            title: '今天吃什么'
          }
        }]
    },
    {
      path: 'pc',
      name: 'pc',
      component: _import('/pc/index'),
      meta: {
        title: 'PC端'
      }
    }]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
