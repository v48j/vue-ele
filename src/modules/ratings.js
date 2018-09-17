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
    const uri =
      "https://raw.githubusercontent.com/v48j/vue-ele/master/api/dbrating.json"
    axios.get(uri).then(res => {
      commit("getRatings", res.data.ratings)
    })
  }
}

const ratings = { state, mutations, getters, actions }

export default ratings
