import React from "react";
import { Link,} from "react-router-dom";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoBagOutline } from "react-icons/io5";
import { useCart } from "../../context/CartContext";
import './index.css'

const Header = () => {
    const {cart} = useCart()
    const cartItemsCount = cart.length
    const renderCartItemsCount = () => (
      <>
        {cartItemsCount > 0 ? (
         <span className="cart-count-badge">{cart.length}</span>
        ) : null}
      </>
    )
  
    
        return (
            <nav className="nav-container">
                <div className="navbar">
                    <div>
                        <Link to='/'>
                            <img src="https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_library-logo-da3ff319832ce9f54aa7df503624427e.jpg?ts%20=%201742491606" alt="logo" className="nav-logo" />
                        </Link>
                    </div>
                    <div>
                        <Link to='/books' className="nav-link">
                            <HiOutlineBookOpen className="sm-book" />
                            <span className="text">BookList</span>
                        </Link>
                        <Link to='/cart' className="nav-link">
                            <IoBagOutline className="sm-book" />
                            <span className="text">Cart</span>
                            {renderCartItemsCount()}
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }

export default Header