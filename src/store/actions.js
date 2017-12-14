export default {
  changeView({commit}, path) {
    commit('changeView', path)
  },

  changeFPIndex({commit}, index) {
    commit('changeFPIndex', index)
  },

  changeHoverNav({commit}, status) {
    commit('changeHoverNav', status)
  },
}
