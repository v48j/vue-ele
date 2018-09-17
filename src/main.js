import Vue from "vue"
import App from "./App.vue"
import "./assets/global.css"
import "./assets/icon/iconfont.css"
import store from "./store/index"
import router from "./router/index"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app")
