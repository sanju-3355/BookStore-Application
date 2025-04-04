import {AiFillCloseCircle} from 'react-icons/ai'
import React from 'react'
import {useCart} from '../../context/CartContext'

import './index.css'

const CartItem = ({book}) => {
  const { removeCartItem } = useCart();
  const {id, title, price, image} = book;
           
  return (
      <li className='cart-item'>
        <img className="cart-book-image" src={image} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-book-title-container">
              <p className="cart-book-title">{title}</p>
            </div>
            <p className="cart-total-price">{price}</p>  
          </div>
        <button
          className="delete-button"
          type="button"
          aria-label="Mute volume"
          onClick={() => removeCartItem(id)}
          data-testid="remove"
        >
          <AiFillCloseCircle color="#616E7C" size={20} />
        </button>
      </li>
  )
}

export default CartItem