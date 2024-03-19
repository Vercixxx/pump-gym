import { createStore } from 'vuex'

export default createStore({
  state: {
    showLoginDialog: false,

    showSignUpDialog: false,

    showContactUsDialog: false,

    loggedUser: null,

    alertData: {
      show: false,
      message: '',
      type: '',
    },

    facilities: null,

    subscriptions: {
      regular: {},
      special: {},
    },
  },
  mutations: {
    setShowLoginDialog(state, value) {
      state.showLoginDialog = value;
    },

    setShowSignUpDialog(state, value) {
      state.showSignUpDialog = value;
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


    // Subscriptions
    setSubscriptions(state, regularSubscriptions, specialSubscriptions) {
      state.subscriptions.regular = regularSubscriptions;
      state.subscriptions.special = specialSubscriptions;
    },
    // Subscriptions


  },
  actions: {
    openLoginDialog({ commit }) {
      commit('setShowLoginDialog', true);
    },

    closeLoginDialog({ commit }) {
      commit('setShowLoginDialog', false);
    },

    openSignUpDialog({ commit }) {
      commit('setShowSignUpDialog', true);
    },

    closeSignUpDialog({ commit }) {
      commit('setShowSignUpDialog', false);
    },

    openContactUsDialog({ commit }) {
      commit('setShowContactUsDialog', true);
    },

    closeContactUsDialog({ commit }) {
      commit('setShowContactUsDialog', false);
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


    // Subscriptions
    setSubscriptions({ commit }, regularSubscriptions, specialSubscriptions) {
      commit('setSubscriptions', regularSubscriptions, specialSubscriptions);
    },
    // Subscriptions

  },
  getters: {
    showLoginDialog: state => state.showLoginDialog,

    showSignUpDialog: state => state.showSignUpDialog,

    showContactUsDialog: state => state.showContactUsDialog,

    alertData: state => state.alertData,

    loggedUser: state => state.loggedUser,

    // Facilities
    getFacilities: state => state.facilities,

    // Subscriptions
    getRegularSubscriptions: state => state.subscriptions.regular,
    getSpecialSubscriptions: state => state.subscriptions.special,

  }
})