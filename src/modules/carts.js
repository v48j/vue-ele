const state = {
  carts: []
}

const mutations = {
  addToCart(state, newCart) {
    const isInCart =
      state.carts.findIndex(ele => ele.id === newCart.id) === -1 ? false : true
    if (isInCart) {
      state.carts.find(ele => ele.id === newCart.id).count++
    } else {
      state.carts.push({ ...newCart, count: 1 })
    }
  },
  clearcarts(state) {
    state.carts = []
  },

  subCount(state, id) {
    state.carts.find(ele => ele.id === id).count--
    if (state.carts.find(ele => ele.id === id).count === 0) {
      state.carts.splice(state.carts.findIndex(ele => ele.id === id), 1)
    }
  }
}

const getters = {
  getCountNum(state) {
    return function(id) {
      return state.carts.find(ele => ele.id === id)
        ? state.carts.find(ele => ele.id === id).count
        : 0
    }
  },
  getAllPrice(state) {
    let AllPrice = 0
    state.carts.map(ele => {
      AllPrice += ele.price * ele.count
    })
    return AllPrice
  }
}

const carts = {
  state,
  mutations,
  getters
}

export default carts
