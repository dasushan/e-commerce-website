import './App.css';
import React from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header/Header';

import Cart from './components/Cart/Cart';

import CartProvider from './store/CartProvider';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';
import AuthPage from './pages/AuthPage';
import Product from './pages/Product';
import { AuthContextProvider } from './store/auth-context';
import AuthContext from './store/auth-context';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);

  

  return (
    <BrowserRouter>
      <CartProvider>
        
          <Header onShowCart={showCartHandler} />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/store" element={ authCtx.isLoggedIn ? <Product /> : <Navigate to='/login' replace={true}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route
              path="productdetail/:productid"
              element={<ProductDetail />}
            />
            <Route path="/login" element={!authCtx.isLoggedIn && <AuthPage />} />
            {/* <Route path='*' element={<Navigate to='/home' replace={true}/>}/> */}
          </Routes>

          {cartIsShown && <Cart onClose={hideCartHandler} />}
        
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
