import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AvailableProduct from './components/Products/AvailableProducts/AvailableProduct';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import CartProvider from './store/CartProvider';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/ContactUs';
import ProductDetail from './pages/ProductDetail';
import AuthPage from './pages/AuthPage';
import Product from './pages/Product';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  return (
    <BrowserRouter>
    
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/store' element={<Product/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact-us' element={<Contact/>}/>
          <Route path='productdetail/:productid' element={<ProductDetail/>}/>
         
        </Routes>
        

        {cartIsShown && <Cart onClose={hideCartHandler} />}
        
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
