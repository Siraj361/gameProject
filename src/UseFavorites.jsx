import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("favoriteGames")
      ) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "favoriteGames",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (gameId) => {
    setFavorites((prev) =>
      prev.includes(gameId)
        ? prev.filter((id) => id !== gameId)
        : [...prev, gameId]
    );
  };

  const isFavorite = (gameId) => {
    return favorites.includes(gameId);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}