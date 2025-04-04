import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './index.css'

const CartSummary = () => {
    const {cart} = useCart()
    const items = cart.length
    
    const getTotalPrice = () => {
      return cart.reduce((total, book) => total + parseFloat(book.price.replace("$", "")), 0).toFixed(2);
    }

    return (
      <div className="cart-summary-container">
        <div className="cart-summary-card">
          <h1 className="cart-items-total-price">
            Order Total: <span>$ {getTotalPrice()}</span>
          </h1>
          <p className="cart-items-count">{items} Items in cart</p>
          <Link to="/checkout" className='link-item'>
            <button className="checkout-btn" type="button">
              Checkout
            </button>     
          </Link>       
        </div>
      </div>
    )
  }

export default CartSummary