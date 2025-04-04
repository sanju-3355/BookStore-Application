import React, {useState} from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import Header from '../Header'
import './index.css'

const Checkout = () => {
    const { cart, userDetails, setUserDetails, clearCart } = useCart();
    const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    const handleChange = (event) => {
        setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsFormSubmitted(true)
        clearCart();
        alert("Order placed successfully!");
        navigate("/");
    };

    return (
       <>
        <Header />
        <div className="checkout-container">
          <div className="user-details-container">
            <h2>Checkout</h2>
            
            {isFormSubmitted ? (
                <p>Thank you for your order!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <input type="tel" name="mobile" placeholder="Mobile No." required onChange={handleChange} />
                <button type="submit" className="order-btn">Place Order</button>
              </form>
            )}
          </div>
          <div className="order-summary-container">
            <h3>Order Summary</h3>
            <ul className="checkout-list">
                {cart.map((book) => (
                    <li key={book.id}>{book.title} <br /><span>{book.price}</span></li>
                ))}
            </ul>
            <Link to="/cart">
              <button className="back-btn">Back</button>
            </Link>
          </div>
        </div>
      </>
    );
};

export default Checkout;
