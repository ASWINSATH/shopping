// Favorites.js
import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites Page</h1>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFavorite(item.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;