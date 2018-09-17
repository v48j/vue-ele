const state = {
  playCar: false
}

const mutations = {
  goPlay(state) {
    //state.playCar = !state.playCar
    state.playCar = false
    state.playCar = true
  }
}

const getters = {
  getPlay(state) {
    return state.playCar
  }
}

const animations = { state, mutations, getters }

export default animations
