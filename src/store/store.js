import { createStore } from 'vuex'

export default createStore({
  state: {
    showLoginDialog: false,

    showContactUsDialog: false,

    loggedUser: null,

    alertData: {
      show: false,
      message: '',
      type: '',
    },

    facilities:null,
  },
  mutations: {
    setShowLoginDialog(state, value) {
      state.showLoginDialog = value;
    },

    setShowContactUsDialog(state, value) {
      state.showContactUsDialog = value;
    },

    setAlertData(state, data) {
      state.alertData = data;
    },

    setLoggedUser(state, user) {
      state.loggedUser = user;
    },

    clearLoggedUser(state) {
      state.loggedUser = null;
    },

    // Facilities
    setFacilities(state, facilities) {
      state.facilities = facilities;
    },
    // Facilities


  },
  actions: {
    openLoginDialog({ commit }) {
      commit('setShowLoginDialog', true);
    },

    openContactUsDialog({ commit }) {
      commit('setShowContactUsDialog', true);
    },

    closeContactUsDialog({ commit }) {
      commit('setShowContactUsDialog', false);
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
    },

    // Facilities
    setFacilities({ commit }, facilities) {
      commit('setFacilities', facilities);
    },
    // Facilities

  },
  getters: {
    showLoginDialog: state => state.showLoginDialog,

    showContactUsDialog: state => state.showContactUsDialog,

    alertData: state => state.alertData,

    loggedUser: state => state.loggedUser,

    // Facilities
    getFacilities: state => state.facilities,

  }
})