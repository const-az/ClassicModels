import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function setInStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

// const proxyurl = "https://cors-anywhere.herokuapp.com/"
// const token = 'QH233JH43HHJ34JHJ3H42OI8F8WE8WEUWE8R'
// const config = { headers: { Authorization: 'Bearer '+token}};
// const BASE_URL = 'http://157.230.190.251/'

export default new Vuex.Store({
  state: {
    currentUser: getFromStorage('user') || undefined,
    dashboard: {},
    orders: {},
    offices: [],
    status: [],
    details: {},
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user
      setInStorage('user', user)
    },
    SET_DASHBOARD(state, data){ state.dashboard = data},
    SET_ORDERS(state, data){ state.orders = data},
    SET_OFFICES(state, data){ state.offices = data.oficinas},
    SET_STATUS(state, data){ state.status = data.estados},
    SET_DETAILS(state, data){ state.details = data}
  },
  actions: {
    updateUser({commit}, user){ 
      return new Promise((resolve, reject) => {
        try{ 
          commit('UPDATE_USER', user)
          resolve(user)
        } catch(e) { reject(e) }
      })
    },
    getHomeInfo({commit}){
      axios.get('/api/dashboard.json')
        .then((response) => {
          commit('SET_DASHBOARD', response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    getOrdersInfo({commit}){
      axios.get('/api/ordenes.json')
        .then((response) => {
          commit('SET_ORDERS', response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    getOffices({commit}){
      axios.get('/api/oficinas.json')
        .then((response) => {
          commit('SET_OFFICES', response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    getStatus({commit}){
      axios.get('/api/estados.json')
        .then((response) => {
          commit('SET_STATUS', response.data)
      }).catch((error) => {
        console.log(error)
      })
    },
    getOrderDetails({commit}){
      axios.get('/api/detalle_orden.json')
        .then((response) => {
          commit('SET_DETAILS', response.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
})