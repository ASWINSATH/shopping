// FavoritesContext.js
import React, { createContext, useReducer } from 'react';



const initialState = {
  favorites: [],
};

const FavoritesContext = createContext();

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FROM_FAVORITES':
      return { ...state, favorites: state.favorites.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addToFavorites = (item) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
  };

  const removeFromFavorites = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: itemId });
  };

  return (
    <FavoritesContext.Provider value={{ favorites: state.favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };