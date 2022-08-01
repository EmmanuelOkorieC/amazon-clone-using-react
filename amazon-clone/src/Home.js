import React, {useState} from 'react'
import './Home.css';
import Product from './Product';
import  {useStateValue} from './StateProvider';
import CloseIcon from '@material-ui/icons/Close';


function Home() {
  const [isOpen, setIsOpen] = useState(true)

  const [{basket}, dispatch] = useStateValue();


  return (
    <div className='home'>
      <div className='home__container'>
          <img 
          className='home__image'
          src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg' 
          alt=''/>
      

      <div className='home__row'>
          <Product id='1234567'
          title='The lean startup' 
          price={29.99}
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
          rating={3}
          changeState={isOpen => setIsOpen(isOpen)}
          />
        <Product id='2134567'
        title='Seagate Portable 2TB 
        External Hard Drive Portable HDD –
        USB 3.0 for PC, Mac, PlayStation, 
         Xbox - 1-Year Rescue Service 
         (STGX2000400)' 
          price={61.99}
          image='https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg'
          rating={4}
          changeState={isOpen => setIsOpen(isOpen)}
        />
          
      </div>

      <div className='home__row'>
      <Product id='431567'
      title='Xbox Series S' 
          price={289.88}
          image='https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL320_.jpg'
          rating={5} 
          changeState={isOpen => setIsOpen(isOpen)}/>
       <Product id='5876432'
       title='Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB' 
          price={299.00}
          image='https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_UL320_.jpg'
          rating={5} 
          changeState={isOpen => setIsOpen(isOpen)}/>
       <Product id='3456781'
       title='Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked (Renewed Premium) ' 
          price={979.00}
          image='https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SY195_.jpg'
          rating={5} 
          changeState={isOpen => setIsOpen(isOpen)}/>
      </div>

      <div className='home__row'>
      <Product id='2378651'
      title='Z-Edge UG27 27-inch Curved Gaming Monitor 16:9 1920x1080 200/144Hz 1ms Frameless LED Gaming Monitor, AMD Freesync Premium Display Port HDMI Build-in Speakers ' 
          price={229.99}
          image='https://m.media-amazon.com/images/I/518bS3kMYiL._AC_SR160,160_.jpg'
          rating={4} 
          changeState={isOpen => setIsOpen(isOpen)}/>
      </div> 
      
        </div>
      </div>
     
  )
}

export default Home
