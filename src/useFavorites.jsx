import { useEffect, useState } from "react";

const FAVORITE_KEY = "favoriteGames";

export function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];
  } catch {
    return [];
  }
}

export function isFavoriteGame(gameId) {
  return getFavorites().includes(gameId);
}

export function toggleFavoriteGame(gameId) {
  const favorites = getFavorites();

  const updatedFavorites = favorites.includes(gameId)
    ? favorites.filter((id) => id !== gameId)
    : [...favorites, gameId];

  localStorage.setItem(
    FAVORITE_KEY,
    JSON.stringify(updatedFavorites)
  );

  window.dispatchEvent(new Event("favoritesUpdated"));

  return updatedFavorites;
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(getFavorites);

  useEffect(() => {
    const updateFavorites = () => {
      setFavorites(getFavorites());
    };

    window.addEventListener("favoritesUpdated", updateFavorites);

    window.addEventListener("storage", updateFavorites);

    return () => {
      window.removeEventListener(
        "favoritesUpdated",
        updateFavorites
      );

      window.removeEventListener(
        "storage",
        updateFavorites
      );
    };
  }, []);

  const toggleFavorite = (gameId) => {
    const updatedFavorites = toggleFavoriteGame(gameId);
    setFavorites(updatedFavorites);
  };

  const checkFavorite = (gameId) => {
    return favorites.includes(gameId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite: checkFavorite,
  };
}