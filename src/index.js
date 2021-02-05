import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { FirebaseAppProvider } from 'reactfire'

export const firebaseConfig = {
  apiKey: 'AIzaSyAco061vkkcrDH5bnqgBHmhx5Msy0jtjaI',
  authDomain: 'react-stripe-30564.firebaseapp.com',
  projectId: 'react-stripe-30564',
  storageBucket: 'react-stripe-30564.appspot.com',
  messagingSenderId: '693072452103',
  appId: '1:693072452103:web:13a9c496ef00a1a3fd68a2',
  measurementId: 'G-460ZTH1PPY',
}

export const stripePromise = loadStripe(
  'pk_test_51Hy5wjBtWDnvAXit41UOPdfLL3VcimvixisvVoX07ynyZjMZZfcvGrqk3NiiXeIJSoWu8LPuJ6OjFA1L1lbdFyXK00MU8MEruQ'
)

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
