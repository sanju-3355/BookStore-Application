import React from 'react'
import CartItem from '../CartItem'
import {useCart} from '../../context/CartContext'

import './index.css'
import EmptyCartView from '../EmptyCartView'

const CartListView = () => {
  const {cart} = useCart();
  
  if (!cart || cart.length === 0) {
    return <EmptyCartView />
  }

  return (
    <ul className="cart-list">
      {cart.map((book) => (
        book && book.id ? (
         <CartItem key={book.id} book={book} />
        ) : null
      ))}
    </ul>
  )

}

export default CartListView