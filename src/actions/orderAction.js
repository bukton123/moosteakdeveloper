import firebase from 'firebase'
import account from './accountAction'

const setOrder = (orders) => {
  firebase.auth().onAuthStateChanged(u => {
    firebase.database().ref('orders').push({
      owner: u.uid,
      orders
    })
  })
}

export default {
  setOrder
}