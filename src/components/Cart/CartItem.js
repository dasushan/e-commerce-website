import './CartItem.css';
const CartItem = (props) => {
    
  return (
    <tr>
      <td className="title">
        <picture>
          <img src={props.img_url} className="img" />
        </picture>
        {props.title}
      </td>
      <td>{props.price}</td>
      <td>
        <span className='p-2 m-1 border border-primary'>{props.quantity}</span>
        
        <button className="btn bg-danger text-white btn-sm">REMOVE</button>
      </td>
    </tr>
  );
};

export default CartItem;
