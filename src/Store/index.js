import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
    loadedRules: [
      {
        id: '1',
        date: new Date(),
        title: 'Rule1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: '2',
        date: new Date(),
        title: 'Rule2',
        description: 'Expedita tempore provident rerum reiciendis pariatur'
      },
      {
        id: '3',
        date: new Date(),
        title: 'Rule3',
        description: 'natus consequatur laudantium dolore unde'
      },
      {
        id: '4',
        date: new Date(),
        title: 'Rule4',
        description: 'vitae harum facilis id sapiente!'
      },
      {
        id: '5',
        date: new Date(),
        title: 'Rule5',
        description: 'vdasdasd ilis id sapiente!'
      },
    ],
    user: null
  },
	mutations: {
    createRule (state, payload) {
      state.loadedRules.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  //Make this as mutations see video at 15min mark
	actions: {
    createRule ({commit}, payload) {
      const rule = {
        title: payload.title,
        description: payload.description,
        date: payload.date,
        id: 'adasdsds'
      }
      //Reach for firebase
      commit('createRule', rule)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredRules: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredRules: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    setUser ({commit}, payload) {
      commit('setUser', payload)
    },
  },
	getters: {
    loadedRules (state) {
      return state.loadedRules.sort((ruleA, ruleB) => {
        return ruleA.date > ruleB.date
      })
    },
    latestRules (state, getters) {
      return getters.loadedRules.slice(0, 4)
    },
    loadedRule (state) {
      return (ruleId) => {
        return state.loadedRules.find((rule) => {
          return rule.id == ruleId
        })
      }
    },
    user (state) {
      return state.user
    }
  }
})
