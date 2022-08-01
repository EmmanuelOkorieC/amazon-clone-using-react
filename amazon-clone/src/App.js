import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import PaymentTwo from './PaymentTwo'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51L0YC0Eas7U1SnBHUXHWDiwvNLZdXnu4Zo7984jOLbxbdE3UlwtiNFkG3ILWvtWDv1rczYlMjsc94A2rlrDUxD3f00dvmf0Std')


function App() {
  
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
  //will only run once, when app component loads
     auth.onAuthStateChanged( authUser => {
       console.log('THE USER IS >>>>', authUser);
     
       if (authUser) {
        //the user just logged in/ was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
       } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
       }
     })
  }, [])

  return (
    <Router>
    <div className="app">  
      
      <Switch>
      <Route exact path='/orders'>\
        <Header />
        <Orders />
      </Route>

      <Route exact path='/login'>
        <Login />
      </Route>

      <Route exact path='/checkout'>
        <Header />
        <Checkout />
        </Route>

        
      <Route exact path='/payment'>
        <Header />
        {/* <Elements stripe={promise}> */}
       <PaymentTwo />
       {/* </Elements> */}
        </Route>
    

      <Route exact path='/'>
        <Header />
        <Home />
      </Route>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
