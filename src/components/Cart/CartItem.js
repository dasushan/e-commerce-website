import './CartItem.css'
const CartItem = (props) => {
    return(
        <tr>
        <td>
            <picture className='img'>
                <img src={props.img_url} className='img'/>
            </picture>
            {props.title}
        </td>
        <td>{props.price}</td>
        <td>{props.quantity}
            <button class='btn-secondary'>REMOVE</button>
        </td>
        
    </tr>
    )
    
};

export default CartItem;
