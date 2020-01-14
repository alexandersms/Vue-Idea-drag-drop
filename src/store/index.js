import Vue from "vue";
import Vuex from "vuex";
import { Object } from "core-js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {}
  },
  // commit mutations
  mutations: {
    CREATE_IDEAS(state, payload) {
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = { ...state.ideas };
    }
  },
  // dispatch actions
  actions: {
    createIdea({ commit }, payload) {
      console.log("actions / createIdea");
      commit("CREATE_IDEAS", payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => state.ideas[key]);
      return allIdeas;
    }
  }
});
