import { useState } from 'react';
import data from '../data';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  const param = useParams();
  const { productid } = param;

  console.log(productid);
  const product = data.productsArr.filter((product) => {
    return product.id == productid;
  });

  console.log(product);
  return (
    <div className="container-lg min-vh-100 text-center">
      <div className="row-cols-2 row">
        <div className="col-6">
          <div className=" p-2 text-black fw-bolder fs-3">
            {product[0].title}
          </div>
          <div className="bg-light">
            <img src={product[0].imageUrl} className="mb-2 p-5 shadow-sm"></img>
            <img src={product[0].imageUrl} className="mb-3 p-3 "></img>
          </div>
        </div>
        <div className="col-3">
          <div className="position-relative top-50 start-50 translate-middle">
            <div className='bg-warning
             p-3 fs-4 fw-bold'>Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
