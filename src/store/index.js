import Vuex from "vuex"
import Vue from "vue"
import goods from "../modules/goods"
import carts from "../modules/carts"
import ratings from "../modules/ratings"
import animations from "../modules/animations"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { goods, carts, ratings, animations }
})

export default store
