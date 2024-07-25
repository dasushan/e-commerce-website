import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import AvailableProduct from './components/Products/AvailableProducts/AvailableProduct';
import Cart from './components/Cart/Cart';

import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <AvailableProduct />

      {cartIsShown && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
