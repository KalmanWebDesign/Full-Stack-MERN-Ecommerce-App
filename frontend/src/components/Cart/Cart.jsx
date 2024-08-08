import React from 'react';
import CartItems from '../CartItems/CartItems'
import CartPricing from '../CartPricing/CartPricing'
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({cart, removeFromCart, calculateTotalPrice, handleQuantityChange}) => {
  return (
    <div className='cart-section'>
      <h1>Cart</h1>
      <Link to='/'>Continue Shopping</Link>
      <div className="row">
        <CartItems 
        cart={cart}
        removeFromCart={removeFromCart}
        handleQuantityChange={handleQuantityChange}
        />
        <CartPricing calculateTotalPrice={calculateTotalPrice}/>
      </div>
    </div>
  );
};

export default Cart;
