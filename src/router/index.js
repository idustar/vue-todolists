import Vue from 'vue'
import Router from 'vue-router'
import dialog from '@/components/dialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: dialog
    }
  ]
})
