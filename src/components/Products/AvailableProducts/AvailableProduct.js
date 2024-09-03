import data from '../../../data';
import ProductItem from '../ProductItem/ProductItem';
import './AvailableProduct.css';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../store/auth-context';
import CartContext from '../../../store/cart-context';

const AvailableProduct = () => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.emailId;
  const username = email.replace(/[@ .]/g, '');
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    fetch(
      `https://react-backend-app-f330f-default-rtdb.asia-southeast1.firebasedatabase.app/cart${username}.json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(async (response) => {
      try{
        const result = await response.json();
        console.log(result);
        const resArr = [];
        Object.keys(result).forEach((key) => {
          const value = result[key];
          resArr.push(value);
        });
        console.log(resArr);
        if (response.ok && resArr.length>0) {
          //cartCtx.addItem()
          cartCtx.loadItems(resArr);
        }
      }
      catch(err){
        console.log(err)
      }
      
      
    });
  }, []);
console.log('availabe product')
  const productsList = data.productsArr.map((product) => {
    return (
      <ProductItem
        price={product.price}
        title={product.title}
        img_url={product.imageUrl}
        id={product.id}
        key={product.id}
      />
    );
  });
  return (
    <>
      <div className="music">MUSIC</div>
      <div className="container-lg  mt-4 bg-light min-vh-100">
        <div className=" row-cols-2 row g-6   align-items-center justify-content-center">
          {productsList}
        </div>
      </div>

      {/* pricing plans */}
      {/* <section id="pricing" className="bg-light mt-5">
        <div className="container-lg">
          <div className="text-center">
            <h2>Pricing Plans</h2>
            <p className="lead text-muted">Choose a pricing plan to suit you</p>
          </div>
          <div className="row my-5 align-items-center justify-content-center g-0">
            <div className="col-8 col-lg-4 col-xl-3">
              <div className="card border-0">
                <div className="card-body text-center py-4">
                  <h4 className="card-title">Starter Edition</h4>
                  <p className="lead card-subtitle">eBook download only</p>
                  <p className="display-5 my-4 text-primary fw-bold">$12.59</p>
                  <p className="card-text mx-5 text-muted d-none d-lg-block">
                    Lorem ipsum dolor, sit amet consecutor adipisicing elit
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-9 col-lg-4">
              <div className="card border-primary border-2">
                <div className="card-header text-center text-primary">
                  Most Popular
                </div>
                <div className="card-body text-center py-5">
                  <h4 className="card-title">Complete Edition</h4>
                  <p className="lead card-subtitle">
                    eBook download & all updates
                  </p>
                  <p className="display-4 my-4 text-primary fw-bold">$18.99</p>
                  <p className="card-text mx-5 text-muted d-none d-lg-block">
                    Lorem ipsum dolor, sit amet consecutor adipisicing elit
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AvailableProduct;
