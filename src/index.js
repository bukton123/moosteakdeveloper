import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import accountAction from './actions/accountAction'

import firebase from 'firebase'
import firebaseConfig  from '../config/firebase'
firebase.initializeApp(firebaseConfig)


let messaging = firebase.messaging()
navigator.serviceWorker.ready.then(function(registration) {
  console.log('Service Worker Ready')
  messaging.useServiceWorker(registration)
})
messaging.requestPermission()
messaging.getToken().then((token) => {
  console.log(token)
  localStorage.setItem('noti',token)
})

accountAction.registerOauthEvent()
accountAction.setTokenNoti()

import App from './App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}