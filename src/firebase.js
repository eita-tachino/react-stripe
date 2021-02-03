import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const firebaseConfig = {
  apiKey: 'AIzaSyBMgiWxkcyLu5tVr08OoS8I1SAbX8uMzo4',
  authDomain: 'stripe-fireship.firebaseapp.com',
  projectId: 'stripe-fireship',
  storageBucket: 'stripe-fireship.appspot.com',
  messagingSenderId: '496166415402',
  appId: '1:496166415402:web:761214144e90f4cec2e753',
  measurementId: 'G-82TPXVDJPP',
}
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
