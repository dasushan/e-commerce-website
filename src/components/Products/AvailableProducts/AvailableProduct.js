import ProductItem from '../ProductItem/ProductItem';
import './AvailableProduct.css';
import { v4 as uuidv4 } from 'uuid';
const AvailableProduct = () => {
  const productsArr = [
    {
      title: 'Colors',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

      id: uuidv4(),
    },

    {
      title: 'Black and white Colors',

      price: 50,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

      id: uuidv4(),
    },

    {
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

      id: uuidv4(),
    },

    {
      title: 'Blue Color',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

      id: uuidv4(),
    },
  ];
  const productsList = productsArr.map((product) => {
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
      <div className="container-lg  mt-4 bg-light">
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
