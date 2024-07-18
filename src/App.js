import './App.css';
import React from 'react'
import { useState} from 'react'
import Header from './components/Header/Header';
import AvailableProduct from './components/AvailableProducts/AvailableProduct';
import Cart from './components/Cart/Cart';
import CartItem from './components/Cart/CartItem';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  return <React.Fragment>
    <Header  onShowCart = {showCartHandler}/>
    <AvailableProduct />
    
    {cartIsShown && <Cart onClose={hideCartHandler}/>}

  </React.Fragment>
}

export default App;
