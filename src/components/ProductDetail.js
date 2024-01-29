// ProductDetail.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FavoritesContext } from '../contexts/FavoritesContext';
import useProductApi from '../hooks/CustomHook';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading } = useProductApi('https://fakestoreapi.com/products/');
  const { addToCart } = useContext(CartContext);
  const { addToFavorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Product Detail Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{product.title}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => addToFavorites(product)}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;