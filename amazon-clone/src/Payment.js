import React, { useState, useEffect } from 'react'
import './Payment.css' 
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link, useHistory} from 'react-router-dom'
import {useStripe, useElements, CardElement, Elements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer'
import axios from 'axios'
import instance from './axios'



function Payment() {
    const [{basket, user}, dispatch] = useStateValue()

    const history = useHistory()

    const stripe= useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
       //generate the special stripe secret which allows 
       //us to change a content

        const getClientSecret = async () => {
             const response = await axios ({
                 method: 'post',
                 //stripe expects the total in a currencies subunits
                 url: `/payments/create?total=${getBasketTotal(basket) * 100}`
             })
              
              setClientSecret(response.data.clientSecret)
             
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET is >>>', clientSecret)


    const handleSubmit = async (event) => {
        //paymentIntent = paymentConfirmation
        //fancy stripe code
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('./orders')
        })

    }

    const handleChange = event => {
        //listen for changes in CardElement
        //
       setDisabled(event.empty)
       setError(event.error ? event.error.message : '')
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
        <form onSubmit={handleSubmit}>
        <CardElement onChange={handleChange}/>

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
        <button disabled={processing || disabled || succeeded}>
            <span>{processing ? <p>Processing</p> :
            'Buy Now'}</span>
        </button>
        </div>

           {/* Error */}
           {error && <div>{error}</div>}
        </form>
         {/* stripe magic will go here */}
       </div>

      </div>
      </div>
    </div>
  )
}

export default Payment
