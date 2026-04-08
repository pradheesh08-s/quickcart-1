import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext';
import '../styles/CategoryPage.css';

function CategoryPage({ products, searchTerm }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  const normalizedCategory = category?.toLowerCase() ?? '';
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === normalizedCategory
  );

  const visibleProducts = searchTerm
    ? filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredProducts;

  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>

      {visibleProducts.length === 0 ? (
        <div className="empty-category">
          <p>No products found in this category.</p>
          <Link to="/" className="back-home-link">
            Back to all products
          </Link>
        </div>
      ) : (
        <ProductList
          products={visibleProducts}
          onAddToCart={addToCart}
          title={`${category} Products`}
        />
      )}
    </div>
  );
}

export default CategoryPage;
