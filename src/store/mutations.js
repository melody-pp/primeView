export default {
  changeView(state, path) {
    state.path = path
  },

  changeFPIndex(state, index) {
    state.fpIndex = index
  },

  changeHoverNav(state, status) {
    state.hoverNav = status
  },

  setAllCase(state, allCase) {
    state.allCase = allCase
  },

  setSecase(state, seCase) {
    state.seCase = seCase
  },
}
