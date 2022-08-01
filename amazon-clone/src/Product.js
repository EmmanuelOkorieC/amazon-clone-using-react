import React, {useState, useEffect} from 'react'
import './Product.css';
import  {useStateValue} from './StateProvider';



function Product({id,title,image, price, rating, props}) {
  const [{basket}, dispatch] = useStateValue();
  // const [isOpen, setIsOpen] = useState(false)

  const addToBasket = () => {
      //dispatch item into data Layer
       dispatch ({
           type: 'ADD_TO_BASKET',
           item: {
               id: id,
               title: title,
               image: image,
               price: price,
               rating: rating,
           }
       })
       props.changeState(true)
  }
  
  return (
    <div className='product'>
      <div className='product__info'>
          <p>{title}</p>
          <p className='product__price'>
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className='product__rating'>
              {Array(rating).fill().map((_, i) => (
                     <p>⭐</p>
              ))} 
          </div>
      </div>
      <img src={image}/>
      <button onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Product
