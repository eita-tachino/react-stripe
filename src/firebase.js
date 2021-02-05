import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const firebaseConfig = {
  apiKey: 'AIzaSyAco061vkkcrDH5bnqgBHmhx5Msy0jtjaI',
  authDomain: 'react-stripe-30564.firebaseapp.com',
  projectId: 'react-stripe-30564',
  storageBucket: 'react-stripe-30564.appspot.com',
  messagingSenderId: '693072452103',
  appId: '1:693072452103:web:13a9c496ef00a1a3fd68a2',
  measurementId: 'G-460ZTH1PPY',
}
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
