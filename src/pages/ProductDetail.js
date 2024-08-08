import { useState } from 'react';
import data from '../data';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
  const param = useParams();
  const { productid } = param;
    
    console.log(productid)
  const product = data.productsArr.filter((product) => {
    return product.id == productid;
  });
  
  console.log(product);
  return (
    <div className='container-lg mh-100'>
      <div>{product[0].title}</div>
      <img src={product[0].imageUrl}></img>
    </div>
  );
};

export default ProductDetail;
