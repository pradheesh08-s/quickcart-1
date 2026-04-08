import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';
import '../styles/Header.css';

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart();
  const categories = ['Electronics', 'Accessories', 'Home', 'Sports'];
  const cartItemCount = getTotalItems();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <Link to="/" className="header-logo">
            <h1 className="header-title">🛒 QuickCart</h1>
          </Link>

          <button className="cart-icon-btn" onClick={toggleCart} aria-label="Open cart">
            🛒
            {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
          </button>
        </div>

        <nav className="header-nav" aria-label="Primary">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {categories.map((category) => (
            <Link key={category} to={`/category/${category}`} className="nav-link">
              {category}
            </Link>
          ))}
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </nav>

        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>
    </header>
  );
}

export default Header;
