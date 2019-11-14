import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Form from './components/Form.vue'
import History from './components/History.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/form', component: Form },
  { path: '/history', component: History }
]

const router = new VueRouter({
  routes
})

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
   state: {
    id: 0,
    form: {
      cardNumber: 0,
      firstName: "",
      lastName: ""
    },
    history: [],
  },
  mutations: {
    updateCardNumber (state, cardNumber) {
      state.form.cardNumber = cardNumber
    },
    updateFirstName (state, firstName) {
      state.form.firstName = firstName
    },
    updateLastName (state, lastName) {
      state.form.lastName = lastName
    },
    submitTransaction (state) {
      state.history.push({
        'id': state.id,
        'number': state.form.cardNumber,
        'firstName': state.form.firstName,
        'lastName': state.form.lastName,
      })
      state.id++
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
