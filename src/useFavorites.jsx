import { useCallback, useEffect, useState } from "react";

const FAVORITE_KEY = "favoriteGames";

/* =========================================================
   GET FAVORITES
========================================================= */

export function getFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITE_KEY);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/* =========================================================
   CHECK FAVORITE
========================================================= */

export function isFavoriteGame(gameId) {
  return getFavorites().includes(gameId);
}

/* =========================================================
   TOGGLE FAVORITE
========================================================= */

export function toggleFavoriteGame(gameId) {
  const favorites = getFavorites();

  const updatedFavorites = favorites.includes(gameId)
    ? favorites.filter((id) => id !== gameId)
    : [...favorites, gameId];

  localStorage.setItem(
    FAVORITE_KEY,
    JSON.stringify(updatedFavorites)
  );

  window.dispatchEvent(
    new Event("favoritesUpdated")
  );

  return updatedFavorites;
}

/* =========================================================
   USE FAVORITES
========================================================= */

export function useFavorites() {
  const [favorites, setFavorites] = useState(() =>
    getFavorites()
  );

  /* =======================================================
     UPDATE FAVORITES
  ======================================================= */

  const updateFavorites = useCallback(() => {
    const latestFavorites = getFavorites();

    setFavorites((currentFavorites) => {
      // Prevent unnecessary state updates
      if (
        currentFavorites.length ===
          latestFavorites.length &&
        currentFavorites.every(
          (id, index) =>
            id === latestFavorites[index]
        )
      ) {
        return currentFavorites;
      }

      return latestFavorites;
    });
  }, []);

  /* =======================================================
     EVENTS
  ======================================================= */

  useEffect(() => {
    window.addEventListener(
      "favoritesUpdated",
      updateFavorites
    );

    window.addEventListener(
      "storage",
      updateFavorites
    );

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
  }, [updateFavorites]);

  /* =======================================================
     TOGGLE
  ======================================================= */

  const toggleFavorite = useCallback((gameId) => {
    const updatedFavorites =
      toggleFavoriteGame(gameId);

    setFavorites(updatedFavorites);
  }, []);

  /* =======================================================
     CHECK
  ======================================================= */

  const checkFavorite = useCallback(
    (gameId) => {
      return favorites.includes(gameId);
    },
    [favorites]
  );

  return {
    favorites,
    toggleFavorite,
    isFavorite: checkFavorite,
  };
}