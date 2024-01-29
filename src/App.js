import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/CartPage'; // Adjust the import paths based on your file structure
import Favorites from './pages/FavoritesPage'; // Adjust the import paths based on your file structure
import ProductDetail from './pages/ProductDetailPage'; // Adjust the import paths based on your file structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/product/:id" component={ProductDetail} />
      </Routes>
    </Router>
  );
}

export default App;