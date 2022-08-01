import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(email, password)
        .then (auth => {
            history.push('/')
        })
        .catch (error => alert(error.message))

        //some fancy firebase login stuff
    }

    const register = e => {
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);

            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

        //some fancy firebase register stuff

    }

  return (
    <div className='login'>
      <Link to='/'>
      <img 
      className='login__logo'
      src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'
      />
      </Link>

      <div className='login__container'>
          <h1>Sign-in</h1>
          <form>
              <h5>E-mail</h5>
              <input type='text' value={email} 
              onChange={e => setEmail(e.target.value)}
              />

              <h5>Password</h5>
              <input type='password' value={password}
              onChange={e => setPassword(e.target.value)}
              />

              <button onClick={signIn} type='submit'
              className='login__signInButton'>Sign in</button>

              <p>By signing-in you agree to amazon's clone 
                  Conditions of Use & Sale. Please see 
                  our Privacy Notice, our Cookies Notice
                  and our Interest-Based Ads
              </p>

              <button onClick={register}
              className='login__registerButton'>Create your Amazon Account</button>
          </form>
      </div>
    </div>
  )
}

export default Login
