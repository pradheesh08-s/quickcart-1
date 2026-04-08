import React from 'react';
import ProductList from './ProductList';

function HomePage({ products, onAddToCart, searchTerm }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <p className="search-results">Found {filteredProducts.length} products</p>
      )}

      {filteredProducts.length === 0 ? (
        <p className="no-results">No products found</p>
      ) : (
        <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
      )}
    </div>
  );
}

export default HomePage;
