import ProductItem from '../ProductItem/ProductItem';
import './AvailableProduct.css';
const AvailableProduct = () => {
  const productsArr = [
    {
      title: 'Colors',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
      title: 'Black and white Colors',

      price: 50,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
      title: 'Yellow and Black Colors',

      price: 70,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',

      price: 100,

      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];
  const productsList = productsArr.map((product) => {
    return <ProductItem price={product.price} title={product.title} img_url={product.imageUrl}/>
  })
  return (
    <>
      <div className="music">MUSIC</div>
      <div className='container product__list'>
      <div className="row main__list">
        {productsList}
      </div>
      </div>
      
    </>
  );
};

export default AvailableProduct;
