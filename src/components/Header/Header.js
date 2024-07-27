import './Header.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });
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
          <div className="col ">
            <NavLink
              to="/store"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Store
            </NavLink>
          </div>
          <div className="col">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              About
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={props.onShowCart}>
              cart
              <span>{quantity}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container headline"> The Generics</div>
    </>
  );
};

export default Header;
