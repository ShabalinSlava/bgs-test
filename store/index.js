export const state = () => ({
  token: null,
  /* user: {} */
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
  // updateUser(state, user) {
  //   state.user = user
  // }
}

export const actions = {
  login({commit}) {
    commit('setToken', 'truetoken')
  },
  logout({commit}) {
    commit('clearToken')
  },
  // getUser({commit}) {
  //   commit('updateName')
  // }
}

export const getters = {
  hasToken: s => !!s.token,
  /* hasUser: s => s.user */
}
