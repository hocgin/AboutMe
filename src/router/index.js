import Vue from 'vue'
import Router from 'vue-router'
import iButtonPanel from '@/components/iButtonPanel'
import iProjectPanel from '@/components/iProjectPanel'

Vue.use(Router)

export default new Router({
  model: 'history',
  routes: [
    {
      path: '/',
      redirect: '/0/-1'
    }, {
      path: '/0/-1',
      components: {
        panel: iButtonPanel
      }
    },
    {
      path: '/0/:index',
      components: {
        panel: iProjectPanel
      }
    }
  ]
})
