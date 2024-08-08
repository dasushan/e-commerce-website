import './ProductItem.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../store/cart-context';
const ProductItem = (props) => {

  const cartCtx = useContext(CartContext);

  const buyItemHandler = () => {
    console.log(props)
    
    cartCtx.addItem({...props, quantity: 1} );
  };

  return (
    <div className="col-lg-6 p-1 align-items-center mr-4">
      <div className="card border-0">
        <div className="card-body text-center py-4">
          <div className="card-title text-dark fw-semibold fs-5">
            <Link className='text-dark text-decoration-none' to={`/productdetail/${props.id}`}>{props.title}</Link>
          </div>
          <picture>
            <img src={props.img_url} alt="" style={{}} />
          </picture>
          <div className="d-flex mt-2 p-2 justify-content-around align-items-center">
            <div className="fs-5 fw-semibold text-bg-warning">
              ${props.price}
            </div>
            <div className="btn bg-primary text-white" onClick={buyItemHandler}>
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
