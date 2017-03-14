/**
 * Created by hocgin on 12/03/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import icon from './modules/icon'
import project from './modules/project'
import vueTap from 'v-tap'

Vue.use(Vuex)
Vue.use(vueTap)

export default new Vuex.Store({
  state: {
    name: 'stateName'
  },
  modules: {
    user,
    icon,
    project
  }
})
