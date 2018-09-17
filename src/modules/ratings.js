import axios from "axios"

const state = {
  ratings: []
}

const mutations = {
  getRatings(state, newdata) {
    state.ratings.push(...newdata)
  }
}

const getters = {}

const actions = {
  getRatings({ commit }) {
    const uri = "http://localhost:3008/ratings"
    axios.get(uri).then(res => {
      commit("getRatings", res.data)
    })
  }
}

const ratings = { state, mutations, getters, actions }

export default ratings
