import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:JSON.parse(localStorage.getItem("cache"))
  },
  mutations: {
    setUser(state, userinfo) {
      state.userinfo = userinfo
      localStorage.setItem("cache",JSON.stringify(userinfo))
    }
  },
  actions: {
  },
  modules: {
  }
})
