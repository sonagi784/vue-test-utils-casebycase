export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    getCount: (state: any) => state.count,
  },
  mutations: {
    addCount(state: any, count = 1) {
      state.count += count;
    },
  },
  actions: {
    plusCount({ commit }: any, count?: number) {
      commit('addCount', count);
    },
  },
};
