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
    const uri = "http://localhost:3008/goods"
    axios.get(uri).then(res => {
      commit("getGoods", res.data)
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
