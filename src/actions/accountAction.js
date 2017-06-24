import firebase from 'firebase'
import { browserHistory } from 'react-router'
import { defaultStore } from '../stores'

const getCurrentUser = () => firebase.auth().currentUser

const SigeInGoogle = () => {
  firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
    registerAccount()
  })
}

const SigeInFacebook = () => {
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
    registerAccount()
  })
}

const SignOut = () => {
  firebase.auth().signOut()
}

const getAccount = data => {
  firebase.database().ref('users').once('value')
}

const setTokenNoti = () => {
  firebase.auth().onAuthStateChanged(user => {
    firebase.database().ref(`users/${user.uid}`).update({
      noti: localStorage.noti
    })
  })
}

// const getUser = () => {
//   return new Promise((resolve, reject) => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         firebase.database().ref(`users/${user.uid}`).once('value', (snapshot) => {
//           defaultStore.setProfile(snapshot.val())
//         })
//         return
//       }
//     })
//   })
// }

const getUser = () => {
  return new Promise((resolve, reject) => {
    const cancle = firebase.auth().onAuthStateChanged((user) => {
      cancle()
      if (user) {
        firebase.database().ref(`users/${user.uid}`).once('value', (snapshot) => {
          resolve(snapshot.val())
        })
        return
      } else reject()
    })
  })
}

const updateProfile = (profile) => {
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`users/${user.uid}`).update({
          name: profile.name,
          email: profile.email,
          photo: profile.photo
        })
        return
      }
    })
  
}

const registerAccount = () => {
  const user = getCurrentUser()
  firebase.database().ref('users').child(user.uid).set({
    name: user.displayName,
    email: user.email,
    photo: user.photoURL,
    noti: localStorage.noti,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  })
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
  registerOauthEvent,
  setTokenNoti,
  getUser,
  updateProfile
}


