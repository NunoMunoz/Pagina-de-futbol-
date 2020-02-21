import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: "NO"
  },
  getters: {
    getLog(state) {
      return state.logged;
    },
    getLoged(state) {
      return state.logged;
    }
  },
  mutations: {
    setLog(state, value) {
      state.logged = value;
    },
    setLoged(state, value) {
      state.logged = value;
    }
  },
  actions: {}
});
// Esta parte es para que se haga el cambio cuando el usuario se haga login en su cuenta
// o se cierre.
