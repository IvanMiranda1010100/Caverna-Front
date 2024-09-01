import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();
const FAVORITES_KEY = 'favorites';

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    // Guardar los favoritos en el almacenamiento local cuando cambian
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (comic) => {
    setFavorites(prevFavorites => {
      // Verifica si el cómic ya está en favoritos
      const index = prevFavorites.findIndex(fav => fav._id === comic._id);

      if (index > -1) {
        // El cómic está en favoritos, lo eliminamos
        return prevFavorites.filter(fav => fav._id !== comic._id);
      } else {
        // El cómic no está en favoritos, lo añadimos
        return [...prevFavorites, comic];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
