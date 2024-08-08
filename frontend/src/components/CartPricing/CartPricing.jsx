import React from 'react';
import './CartPricing.css';

const CartPricing = ({ calculateTotalPrice }) => {
  const subtotal = calculateTotalPrice();
  const tax = subtotal * 0.09;
  const total = subtotal + tax;

  return (
    <div className="pricing-container">
      <h3>Order Summary</h3>
      <div className="subtotal">
        <h3>Subtotal:</h3>
        <div>${subtotal.toFixed(2)}</div>
      </div>
      <div className="shipping">
        <h3>Estimated Shipping:</h3>
        <div>FREE</div>
      </div>
      <div className="tax">
        <h3>Estimated Tax:</h3>
        <div>${tax.toFixed(2)}</div>
      </div>
      <div className="total">
        <h3>Estimated Total:</h3>
        <div>${total.toFixed(2)}</div>
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default CartPricing;
