// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './contexts/CartContext';

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => removeItem(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;