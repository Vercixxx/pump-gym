import { createStore } from 'vuex'

export default createStore({
  state: {
    showLoginDialog: false,

    loggedUser: null,

    alertData: {
      show: false,
      message: '',
      type: '',
    },
  },
  mutations: {
    setShowLoginDialog(state, value) {
      state.showLoginDialog = value;
    },

    setAlertData(state, data) {
      state.alertData = data;
    },

    setLoggedUser(state, user) {
      state.loggedUser = user;
    },

    clearLoggedUser(state) {
      state.loggedUser = null;
    }
  },
  actions: {
    openLoginDialog({ commit }) {
      commit('setShowLoginDialog', true);
    },

    closeLoginDialog({ commit }) {
      commit('setShowLoginDialog', false);
    },

    triggerAlert({ commit }, payload) {
      commit('setAlertData', {
        show: true,
        message: payload.message,
        type: payload.type,
      });
    },

    setLoggedUser({ commit }, user) {
      commit('setLoggedUser', user);
    },

    clearLoggedUser({ commit }) {
      commit('clearLoggedUser');
    }

  },
  getters: {
    showLoginDialog: state => state.showLoginDialog,

    alertData: state => state.alertData,

    loggedUser: state => state.loggedUser,

  }
})