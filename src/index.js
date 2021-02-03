import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { FirebaseAppProvider } from 'reactfire'

export const firebaseConfig = {
  apiKey: 'AIzaSyBMgiWxkcyLu5tVr08OoS8I1SAbX8uMzo4',
  authDomain: 'stripe-fireship.firebaseapp.com',
  projectId: 'stripe-fireship',
  storageBucket: 'stripe-fireship.appspot.com',
  messagingSenderId: '496166415402',
  appId: '1:496166415402:web:761214144e90f4cec2e753',
  measurementId: 'G-82TPXVDJPP',
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
