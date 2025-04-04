import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'
import Header from '../Header'
import CartListView from '../CartListView'
import { useCart } from '../../context/CartContext'
import './index.css'

const Cart = () => {
    const {cart, clearCart} = useCart();
    const showEmptyView = cart.length === 0

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="cart-header">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={clearCart}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
  }
export default Cart