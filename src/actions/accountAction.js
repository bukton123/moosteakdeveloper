import firebase from 'firebase'
import { browserHistory } from 'react-router'
import { defaultStore } from '../stores'

const SigeInGoogle = () => {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

const SigeInFacebook = () => {
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

const SignOut = () => {
  firebase.auth().signOut()
}

const registerOauthEvent = () => {
  firebase.auth().onAuthStateChanged(user => {
    const isAuth = !!user
    defaultStore.setAuth(isAuth)
    browserHistory.push(isAuth ? '/dashboard' : '/signin')
  })
}

export default {
  SigeInGoogle,
  SigeInFacebook,
  SignOut,
  registerOauthEvent
}


