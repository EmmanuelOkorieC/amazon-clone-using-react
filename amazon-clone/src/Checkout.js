import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'

function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img 
        className='checkout__ad'
        src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif'
         />
         <div>
             <h2 className='checkout__title'>Your shopping Basket</h2>
             
             {/* <FlipMove> */}
             {basket.map(item => (
               <CheckoutProduct 
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
               />
             ))}
             {/* </FlipMove> */}

             {/* CheckoutProduct */}
             {/* CheckoutProduct */}
             {/*CheckoutProduct*/}
             {/*CheckoutProduct */}
         </div>
      </div>
      <div className='checkout__right'>
          <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
