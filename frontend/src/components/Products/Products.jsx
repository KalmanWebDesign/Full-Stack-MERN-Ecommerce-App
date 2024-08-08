import React from 'react';
import './Products.css';

const Products = ({products, addToCart}) => {
  return (
    <div>
      <h2 className="shop-header">Shop</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product">
            <div className="img-container">
              <img src={product.imageUrl} alt={product.alt} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
