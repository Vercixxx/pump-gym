import { createStore } from 'vuex'

export default createStore({
  state: {
    showLoginDialog: false
  },
  mutations: {
    setShowLoginDialog(state, value) {
      state.showLoginDialog = value;
    },
  },
  actions: {
    openLoginDialog({ commit }) {
      commit('setShowLoginDialog', true);
    },
    closeLoginDialog({ commit }) {
      commit('setShowLoginDialog', false);
    },
  },
  getters: {
    showLoginDialog: state => state.showLoginDialog
  }
})