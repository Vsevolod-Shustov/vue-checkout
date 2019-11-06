import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Form from './components/Form.vue'
import History from './components/History.vue'

Vue.config.productionTip = false


Vue.use(VueRouter)
const routes = [
  { path: '/', component: Form },
  { path: '/history', component: History }
]

const router = new VueRouter({
  routes,
  mode: 'history'  // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
