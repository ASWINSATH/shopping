
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {CartProvider} from "./components/contexts/CartContext";
import {FavoritesProvider} from './components/contexts/FavoritesContext'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <CartProvider>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </CartProvider>
</React.StrictMode>
);