import React from 'react'

// CartContext is a global store/ global object
const CartContext = React.createContext({
    items: [],
    loadItems: () => {},
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;