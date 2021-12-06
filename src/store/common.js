import { getToken } from "../mock";
const state = {
  token: "",
};
const getters = {
  token: (state) => state.token,
};
const actions = {
//   acyions中实现异步请求
  async tokenAct({ commit }, _) {
    let token = await getToken();
    commit("mutationToken", token);
  },
};
const mutations = {
  mutationToken(state, token) {
    state.token = token;
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
