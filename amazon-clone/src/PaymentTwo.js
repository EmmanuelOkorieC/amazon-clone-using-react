import React, { useState, useEffect } from 'react'
import './Payment.css' 
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link, useHistory} from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer'
import axios from 'axios'
import PaystackPop from '@paystack/inline-js'
import { db } from './firebase'




function PaymentTwo() {
    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory()
    const date = new Date()

    const paywithpaystack = (e) => {
      e.preventDefault()
      const paystack = new PaystackPop()
      paystack.newTransaction({
        key: 'pk_test_447881bc3e9259374010172ef9632c04ef3e3979',
        amount:  getBasketTotal(basket) * 597 * 100,
        email: user?.email,
        onCancel: (e) => {
          alert('you have canceled the transaction')
        },
        onSuccess: (transaction) => {
          
          db
          .collection('users')
          .doc(user.uid)
          .collection('orders')
          .doc(transaction.reference)
          .set({
            basket: basket,
            amount: getBasketTotal(basket) * 597 * 100,
            created: date
          })

         

          let message = `Payment Complete! Reference ${transaction.reference}`
          alert(message)
          
          dispatch({
            type: 'EMPTY_BASKET'
          })

          history.replace('/orders')
        }

      })
      
    }

  return (
    <div className='payment'>
        <div className='payment__container'>

            <h1>
                Checkout {<Link to='/checkout'>{basket.length} Items </Link>}
            </h1>
      {/* Payment section - delivery address */}
      <div className='payment__section'>
          <div className='payment__title'>
              <h3>Delivery Address</h3>
         </div>
          <div className='payment__address'>
              <p>{user?.email}</p>
              <p>6, Afric Road</p>
              <p>Iporin, Lagos</p>
          </div>
        </div>
          
      {/* Payment section - review product */}
      <div className='payment__section'>
      <div className='payment__title'>
         <h3>Review Items and Delivery</h3>
       </div>
        <div className='payment__address'>
        {basket.map(item => (
               <CheckoutProduct 
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               />
             ))}
        </div>
      </div>
      {/* Payment section - Payment method */}
      <div className='payment__section'>
      <div className='payment__title'>
         <h3>Payment Method</h3>
       </div>
       <div className='payment__details'>

        
        <form>
        <div className='payment__priceContainer'>
        <CurrencyFormat
          renderText= {value => (
              <h3>
                  Order Total: {value}
              </h3>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
      /> 
        <button onClick={paywithpaystack}> Buy Now </button>
        </div>

        </form>
       
       </div>

      </div>
      </div>
    </div>
  )
}

export default PaymentTwo
