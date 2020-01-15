import Vue from "vue";
import Vuex from "vuex";
import { Object } from "core-js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ideas: {},
    courses: [],
    paperwork: []
  },
  // commit mutations
  mutations: {
    CREATE_IDEAS(state, payload) {
      const id = Date.now();
      state.ideas[id] = payload;
      state.ideas = { ...state.ideas };
    },
    SAVE_IDEAS_ORDERING(state, payload) {
      state.ideas = { ...payload };
    },
    SAVE_COURSES_ORDERING(state, payload) {
      state.courses = [...payload];
    },
    SAVE_PAPERWORK_ORDERING(state, payload) {
      state.paperwork = [...payload];
    }
  },
  // dispatch actions
  actions: {
    createIdea({ commit }, payload) {
      commit("CREATE_IDEAS", payload);
    },
    saveIdeasOrdering({ commit }, payload) {
      const ideas = {};
      //debugger;
      payload.map(idea => {
        return (ideas[idea.id] = idea);
      });
      commit("SAVE_IDEAS_ORDERING", ideas);
    },
    saveCoursesOrdering({ commit }, payload) {
      commit("SAVE_COURSES_ORDERING", payload);
    },
    savePaperWorkOrdering({ commit }, payload) {
      commit("SAVE_PAPERWORK_ORDERING", payload);
    }
  },
  getters: {
    allIdeas(state) {
      const allIdeas = Object.keys(state.ideas).map(key => {
        const idea = state.ideas[key];
        idea.id = key;
        return idea;
      });
      return allIdeas;
    },
    courses(state) {
      return state.courses;
    },
    paperwork(state) {
      return state.paperwork;
    }
  }
});
