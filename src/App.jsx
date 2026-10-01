import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Bring the beauty of nature into your home with our curated collection of houseplants.</p>
      <button className="get-started-btn" onClick={() => navigate('/products')}>
        Get Started
      </button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
