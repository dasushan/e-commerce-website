import CartContext from "./cart-context";
import {useState} from 'react'

const CartProvider = (props) => {
    const [items, updateItems] = useState([]);

    const addItemToCartHandler = (item) => {
        const existingCartItemIndex = items.findIndex((itemz) => itemz.id === item.id);
        console.log(item.id)
        const existingCartItem = items[existingCartItemIndex];

        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + item.quantity
            };
            console.log(existingCartItem.quantity);
            console.log(item.quantity);
            console.log(updatedItem.quantity)
            updatedItems = [...items];
            updatedItems[existingCartItemIndex] = updatedItem;
            updateItems(updatedItems);
        } else{
            updateItems((prevState) => {
                return [...prevState, item];
            })
        }


    }

    const removeItemFromCart = () => {

    }
    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider