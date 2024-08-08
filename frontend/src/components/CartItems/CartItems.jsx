import React from 'react';
import './CartItems.css';

const CartItems = ({cart, removeFromCart, handleQuantityChange}) => {
  const handleChange = (e, item) => {
    handleQuantityChange(item._id, parseInt(e.target.value))
  }

  return (
    <div className="cart-items">
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cart.map((item, index) => (
          <div className="product-in-cart" key={index}>
            <div className="product-in-cart-left">
              <img src={item.imageUrl} alt={item.alt} />
              <div className="product-info">
                <p>Item: {item.name}</p>
                <p>SKU: {item.sku}</p>
              </div>
            </div>
            <div className="product-in-cart-right">
              <div>
                <p>Each</p>
                <div className="price">${item.price.toFixed(2)}</div>
              </div>
              <div className="quantity">
                <label htmlFor={`quantity-${item._id}`}>Qty</label>
                <select name="quantity" id={`quantity-${item._id}`}
                value={item.qty}
                onChange={e => handleChange(e, item)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <i className="fa-solid fa-x" onClick={() => removeFromCart(item._id)}></i>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItems;
