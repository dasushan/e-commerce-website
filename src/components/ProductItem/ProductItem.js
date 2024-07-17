import './ProductItem.css'
const ProductItem = (props) => {
    return(
        <div className='col-6 '>
            <div className='product__card'>
                <div>{props.title}</div>
                <picture>
                    <img src={props.img_url}/>
                </picture>
                <div>
                    <div>{props.price}</div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;