import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      token: null
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {},
  getters: {
    getToken (state) {
      return state.token
    }
  }
})

export default store
