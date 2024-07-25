import './CartItem';
import CartItem from './CartItem';
import './Cart.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  // const cartElements = [
  //   {
  //     title: 'Colors',

  //     price: 100,

  //     imageUrl:
  //       'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

  //     quantity: 2,
  //   },

  //   {
  //     title: 'Black and white Colors',

  //     price: 50,

  //     imageUrl:
  //       'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

  //     quantity: 3,
  //   },

  //   {
  //     title: 'Yellow and Black Colors',

  //     price: 70,

  //     imageUrl:
  //       'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

  //     quantity: 1,
  //   },
  // ];
  const cartElements = cartCtx.items;
  const cartItems = cartElements.map((item) => {
    return (
      <CartItem
        img_url={item.imageUrl}
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        key={item.id}
      />
    );
  });
  return (
    <Modal onClose={props.onClose}>
      <div className="container cont">
        <table class="table">
          <thead>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      </div>
    </Modal>
  );
};

export default Cart;
