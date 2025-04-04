import {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  const addToCartItem = (book) => {
    if (!book || !book.id) return; 
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeCartItem = (id) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== id));
  }

  const clearCart = () => {
    setCart([]);
};

return (
    <CartContext.Provider value={{ cart, addToCartItem, removeCartItem, clearCart, userDetails, setUserDetails }}>
        {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
      throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
