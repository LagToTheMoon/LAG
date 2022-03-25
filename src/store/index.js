import { createStore } from "vuex";
// import { app } from "../main"; //匯入我們的Vue Instance

export default createStore({
  state: {
    lang: "en",
    dialogData: [],
    caseData: {
      name: "",
      img: "",
      discribe: "",
      ig: "",
      tw: "",
      oncyber: "",
      PieChart: {},
      BarChart: {},
    },
  },
  mutations: {
    set_case_data(state, caseData) {
      state.caseData = caseData;
    },
    set_lang(state, value) {
      state.lang = value;
    },
    set_dialog_data(state, dialogData) {
      state.dialogData = dialogData;
    },
  },
  actions: {},
  modules: {},
});
