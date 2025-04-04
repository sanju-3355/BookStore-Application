import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home';
import BookList from './components/BookList'
import BookDetails from './components/BookDetails';
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import NotFound from './components/NotFound'
import { CartProvider } from "./context/CartContext";
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/books' element={<BookList />} />
          <Route exact path='/books/:id' element={<BookDetails />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/not-found' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>  
  ) 
}

export default App;
