import firebase from 'firebase'

const SigeInGoogle = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
}

const SigeInFacebook = () => {
  return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

const SignOut = () => {
  firebase.auth().signOut()
}

const isAuth = () => {
  let validate = false
  firebase.auth().onAuthStateChanged(user => validate = (user === '' || user === null))

  return validate
}

export default {
  SigeInGoogle,
  SigeInFacebook,
  SignOut,
  OnAuth
}