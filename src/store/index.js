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

const proxyurl = "https://cors-anywhere.herokuapp.com/"
const token = 'QH233JH43HHJ34JHJ3H42OI8F8WE8WEUWE8R'
const config = { headers: { Authorization: 'Bearer '+token}};
const BASE_URL = 'http://157.230.190.251/'
// const BASE_URL = 'https://classicmodels-5ce54.firebaseio.com/'

export default new Vuex.Store({
  state: {
    currentUser: getFromStorage('user') || undefined,
    dashboard: dashboard
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user
      setInStorage('user', user)
    },
    SET_DASHBOARD(state, data){
      state.dashboard = data
    }
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
      axios.get(`${proxyurl}${BASE_URL}api/v1/cmodels/secure/dashboard`, config)
        .then((response) => {
          commit('SET_DASHBOARD', response.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})

// DATOS

const dashboard = {
  "kpis": [
    {
      "nombre": "cumplimiento diario de ordenes",
      "entregadas": "1500",
      "pendientes": "500"
    },
    {
      "nombre": "Ordenes atrasadas jornada",
      "totales": "700",
      "atrasadas": "14"
    }
  ],
  "utimas_ordenes": [
    {
      "num_orden": "123446",
      "cliente": "Multitiendas Sigma SA",
      "fecha_entrega": "2020-07-20",
      "estado": "Ingresado"
    },
    {
      "num_orden": "123445",
      "cliente": "Jugueteria Asimov SpA",
      "fecha_entrega": "2020-07-20",
      "estado": "Preparacion"
    },
    {
      "num_orden": "123444",
      "cliente": "Bazar Don Lalo LTDA",
      "fecha_entrega": "2020-07-18",
      "estado": "Preparacion"
    },
    {
      "num_orden": "123443",
      "cliente": "Claudia Ingrid Romero",
      "fecha_entrega": "2020-07-18",
      "estado": "Entregado"
    }
  ],
  "ultimas_devoluciones:": [
    {
      "num_orden": "122289",
      "cliente": "Multi Game SpA",
      "fecha_entrega": "2020-07-20"
    },
    {
      "num_orden": "122283",
      "cliente": "Jugueteria Play LTDA",
      "fecha_entrega": "2020-07-20"
    },
    {
      "num_orden": "122271",
      "cliente": "Tiendas La Reina SA",
      "fecha_entrega": "2020-07-18"
    },
    {
      "num_orden": "122232",
      "cliente": "Ofertas Unicas LTDA",
      "fecha_entrega": "2020-07-14"
    }
  ]
}