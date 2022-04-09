export default {
  plusNumber({ commit }: any, number?: number) {
    commit('addNumber', number);
  },
};
