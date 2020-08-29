import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function setInStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

export default new Vuex.Store({
  state: {
    currentUser: getFromStorage('user') || undefined,
  },
  mutations: {
    UPDATE_USER(state, user){
      state.currentUser = user
      setInStorage('user', user)
    },
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
  },
  modules: {
  }
})
