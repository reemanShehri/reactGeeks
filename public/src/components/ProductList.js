import React from 'react';
import './ProductList.css';

function ProductList({ products }) {
  return (
    <div className="product-display">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <span>${product.price}</span>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
