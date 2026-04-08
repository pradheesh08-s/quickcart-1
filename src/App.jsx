import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import CartSidebar from './components/CartSidebar';
import { useCart } from './context/CartContext';
import { products } from './data/products';
import './styles/App.css';

function App() {
  const { addToCart, lastAddedItem, clearLastAddedItem } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!lastAddedItem) {
      return undefined;
    }

    const timeout = window.setTimeout(() => clearLastAddedItem(), 2000);

    return () => window.clearTimeout(timeout);
  }, [clearLastAddedItem, lastAddedItem]);

  return (
    <BrowserRouter>
      <div className="app">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  products={products}
                  onAddToCart={addToCart}
                  searchTerm={searchTerm}
                />
              }
            />
            <Route
              path="/category/:category"
              element={<CategoryPage products={products} searchTerm={searchTerm} />}
            />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        <CartSidebar />

        {lastAddedItem && <div className="cart-toast">Added to cart</div>}
      </div>
    </BrowserRouter>
  );
}

export default App;
