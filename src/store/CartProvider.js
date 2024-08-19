import CartContext from './cart-context';
import { useState, useContext } from 'react';
import AuthContext from './auth-context';

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.emailId;
  const username = email ? email.replace(/[@ .]/g, '') : '';
  console.log(username);

  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex(
      (itemz) => itemz.id === item.id
    );
    console.log(item.id);
    const existingCartItem = items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + item.quantity,
      };

      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
      updateItems(updatedItems);

      fetch(
        `https://crudcrud.com/api/ebfc2a1587ab4ffc8c34d27985b2ae34/cart${username}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then(async (response) => {
        const result = await response.json();
        console.log(result);
        const existingItemArr = result.filter((itemz) => {
          return itemz.id === item.id;
        });

        const existingItem = existingItemArr[0];

        console.log(existingItem);

        const updatedItem = {
          price: existingItem.price,
          title: existingItem.title,
          img_url: existingItem.img_url,
          id: existingItem.id,
          quantity: existingItem.quantity + item.quantity
        };
        fetch(
          `https://crudcrud.com/api/ebfc2a1587ab4ffc8c34d27985b2ae34/cart${username}/${existingItem._id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
          }
        ).then();
      });
    } else {
      updateItems((prevState) => {
        return [...prevState, item];
      });

      fetch(
        `https://crudcrud.com/api/ebfc2a1587ab4ffc8c34d27985b2ae34/cart${username}`,
        {
          method: 'POST',
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then(async (response) => {
        const result = await response.json();
        console.log(result);
      });
    }

    // fetch(
    //   `https://crudcrud.com/api/f86bfd9a5d014a12b956a3b81377f1f7/cart${username}`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({ items }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // ).then((res) => {
    //   if (res.ok) {
    //     // fetch(`https://crudcrud.com/api/f86bfd9a5d014a12b956a3b81377f1f7/cart${username}`,{
    //     // })
    //   } else {
    //     return res.json().then((data) => {
    //       console.log(data);
    //     });
    //   }
    // });

    // fetch(
    //   `https://crudcrud.com/api/f86bfd9a5d014a12b956a3b81377f1f7/cart${username}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // ).then(async (res) => {
    //   if (res.ok) {
    //     const result = await res.json();
    //     const id = result._id;
    //     console.log(id);
    //     console.log(result);
    //     fetch(
    //       `https://crudcrud.com/api/f86bfd9a5d014a12b956a3b81377f1f7/cart${username}/${id}`,
    //       {
    //         method: 'DELETE',
    //       }
    //     ).then(async () => {
    //       const res = await fetch(
    //         `https://crudcrud.com/api/f86bfd9a5d014a12b956a3b81377f1f7/cart${username}`,
    //         {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({ items }),
    //         }
    //       );
    //     });
    //   } else {
    //     fetch(
    //       `https://crudcrud.com/api/f86bfd9a5d014a12b956a3b81377f1f7/cart${username}`,
    //       {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ items }),
    //       }
    //     ).then(async (res) => {
    //       const result = await res.json();
    //       console.log(result);
    //     });
    //   }
    // });
  };

  const removeItemFromCart = () => {};
  const cartContext = {
    items: items,
    loadItems: updateItems,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
