import axios from "axios"

const state = {
  goods: []
}

const mutations = {
  getGoods(state, newGoods) {
    state.goods.push(...newGoods)
  }
}

const actions = {
  getGoods({ commit }) {
    const uri =
      "https://raw.githubusercontent.com/v48j/vue-ele/master/api/db.json"
    axios.get(uri).then(res => {
      commit("getGoods", res.data.goods)
    })
  }
}

const getters = {
  goodsNameList(state) {
    return state.goods.map(ele => ele.name)
  }
}

const goods = {
  state,
  mutations,
  actions,
  getters
}

export default goods
