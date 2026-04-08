import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

function ProductList({ products, onAddToCart, title = 'Our Products' }) {
  return (
    <div className="product-list">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;