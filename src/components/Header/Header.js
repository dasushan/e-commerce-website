import './Header.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import AuthContext from '../../store/auth-context';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      <div className="container text-center">
        <div className="row gx-5 header">
          <div className="col">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Home
            </NavLink>
          </div>
          {isLoggedIn && <div className="col ">
            <NavLink
              to="/store"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Store
            </NavLink>
          </div>}
          <div className="col">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              About
            </NavLink>
          </div>
          {!isLoggedIn && <div className="col">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Login
            </NavLink>
          </div>}
          <div className="col">
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
        {isLoggedIn && <div className="row">
          <div className="col">
            <button onClick={props.onShowCart}>
              cart
              <span>{quantity}</span>
            </button>
          </div>
        </div>}
      </div>
      <div className="container headline"> The Generics</div>
    </>
  );
};

export default Header;
