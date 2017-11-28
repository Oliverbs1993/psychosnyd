import Vue from 'vue'

import Vuetify from 'vuetify'
import '../node_modules/vuetify/src/stylus/main.styl'

import App from './App'
import firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA3MACIXJRGn49sLy8B5z0jem7XbSnDPqU',
      authDomain: 'psychosnyd.firebaseapp.com',
      databaseURL: 'https://psychosnyd.firebaseio.com',
      projectId: 'psychosnyd',
      storageBucket: 'psychosnyd.appspot.com',
    }),
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        const userData = {
          id: user.uid,
          registeredRules: []
        }
        store.dispatch('setUser', userData)
      } else {
        console.log('No user is signed in.')
      }
    })
  }
})
