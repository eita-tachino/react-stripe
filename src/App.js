import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Checkout, CheckoutSuccess, CheckoutFail } from './Checkout'
import Payments from './Payments'
import Customers from './Customers'
import Subscriptions from './Subscriptions'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className='navbar-nav'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/checkout'>
                <span aria-label='emoji' role='img'>
                  🛒
                </span>{' '}
                Checkout
              </Link>
            </li>
            <li>
              <Link to='/payments'>
                <span aria-label='emoji' role='img'>
                  💸
                </span>{' '}
                Payments
              </Link>
            </li>
            <li>
              <Link to='/customers'>
                <span aria-label='emoji' role='img'>
                  🧑🏿‍🤝‍🧑🏻
                </span>{' '}
                Customers
              </Link>
            </li>
            <li>
              <Link to='/subscriptions'>
                <span aria-label='emoji' role='img'>
                  🔄
                </span>{' '}
                Subscriptions
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/payments'>
              <Payments />
            </Route>
            <Route path='/customers'>
              <Customers />
            </Route>
            <Route path='/subscriptions'>
              <Subscriptions />
            </Route>
            <Route path='/success'>
              <CheckoutSuccess />
            </Route>
            <Route path='/failed'>
              <CheckoutFail />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <>
      <div className='well'>
        <h2>Stripe React + Node.js Live Demo</h2>
      </div>

      <div className='embed-responsive embed-responsive-16by9 vid'>
        <iframe
          title='English-Reading-01'
          src='https://www.loom.com/embed/601c89da3b5a42e08d38e9aec3c7dcf7'
          // width="640"
          // height="360"
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        ></iframe>
      </div>
      <div className='embed-responsive embed-responsive-16by9 vid'>
        <iframe
          title='English-Reading-02'
          src='https://www.loom.com/embed/e048b6b3805d4f3da38ccb09c7f35614'
          // width="640"
          // height="360"
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        ></iframe>
      </div>
      <div className='well'>
        <h2>Running in Test Mode</h2>
        <p>
          This demo is running in Stripe test mode, so feel free to submit
          payments with testing cards.
        </p>
      </div>
    </>
  )
}

export default App
