import { useEffect, useState, useRef } from 'react';
import data from '../data';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
const ProductDetail = () => {
  
  const productRef = useRef(null);
  const param = useParams();
  const { productid } = param;
  const product = data.productsArr.filter((product) => {
    return product.id === productid;
  });

  localStorage.setItem('product', JSON.stringify(product))
  useEffect(() => {
    console.log('effect ran')
  }, [])
  const res = JSON.parse(localStorage.getItem('product'))
  console.log(res)
  
  if(product){
    productRef.current = product
  }else{
    productRef.current = localStorage.getItem('product')
    
  }
  
  return (
    <div className="container-lg min-vh-100 text-center">
      <div className="row-cols-2 row">
        <div className="col-6">
          <div className=" p-2 text-black fw-bolder fs-3">{productRef.current[0].title}</div>
          <div className="bg-light">
            <img src={productRef.current[0].imageUrl} className="mb-2 p-5 shadow-sm"></img>
            <img src={productRef.current[0].imageUrl} className="mb-3 p-3 "></img>
          </div>
        </div>
        <div className="col-3">
          <div className="position-relative top-50 start-50 translate-middle">
            <div
              className="bg-warning
             p-3 fs-4 fw-bold"
            >
              Rating
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
