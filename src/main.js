import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
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
  mode: 'history'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
   state: {
    form: {
      cardNumber: '000000000000',
    },
    history: [],
  },
  mutations: {
    updateCardNumber (state, cardNumber) {
      state.form.cardNumber = cardNumber
    },
    submitTransaction (state) {
      state.history.push({'number': state.form.cardNumber})
    }
  }
  /* strict: true,
    state: {
        message: 'Hello Vuex',
    },
    mutations: {
        updateMessage (state, message) {
            state.message = message
        }
    } */
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
