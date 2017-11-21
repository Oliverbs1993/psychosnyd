import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
    loadedRules: [
      {
        id: '1',
        date: '01-09-2017',
        title: 'Rule1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        id: '2',
        date: '10-09-2017',
        title: 'Rule2',
        description: 'Expedita tempore provident rerum reiciendis pariatur'
      },
      {
        id: '3',
        date: '11-09-2017',
        title: 'Rule3',
        description: 'natus consequatur laudantium dolore unde'
      },
      {
        id: '4',
        date: '12-09-2017',
        title: 'Rule4',
        description: 'vitae harum facilis id sapiente!'
      },
      {
        id: '5',
        date: '12-09-2017',
        title: 'Rule5',
        description: 'vdasdasd ilis id sapiente!'
      },
    ],
    user: {
      id: 'eawewe',
      registeredRules: ['1']
    }
  },
	mutations: {},
	actions: {},
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
    }
  }
})
