import shortId from "shortid"

const state = {
  playCar: false,
  ball: []
}

const mutations = {
  goPlay(state) {
    state.playCar = true
    setTimeout(() => {
      state.playCar = false
    }, 400)
  },
  addBall(state, { x, y }) {
    const newBall = {
      position: { x: x, y: y },
      id: shortId()
    }
    state.ball.push(newBall)
    //console.log(state.ball)

    setTimeout(() => {
      state.ball.splice(0, 1)
    }, 800)
  }
}

const getters = {
  getPlay(state) {
    return state.playCar
  }
}

const animations = { state, mutations, getters }

export default animations
