import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentContent: 'about'
  },
  getters: {
    currentContent (state) {
      return state.currentContent
    }
  },
  mutations: {
    SET_CONTENT (state, data) {
      state.currentContent = data
    }
  },
  actions: {
    setContent: ({ commit }, data) => {
      commit('SET_CONTENT', data)
    }
  },
  modules: {
  }
})
