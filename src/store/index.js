import Vue from "vue";
import Vuex from "vuex";
import common from "./common";
import persistedstate from "vuex-persistedstate";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    common,
  },
  plugins: [persistedstate({ storage: window.sessionStorage })],
});
export default store;
