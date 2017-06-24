import firebase from 'firebase'
import { browserHistory } from 'react-router'

const SigeInGoogle = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

const SigeInFacebook = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

const SignOut = () => {
  localStorage.removeItem('auth')
  firebase.auth().signOut()
  browserHistory.push('/')
}

const isAuth = () => {
  return (localStorage.auth) ? true : false
}

export default {
  SigeInGoogle,
  SigeInFacebook,
  SignOut,
  isAuth
}