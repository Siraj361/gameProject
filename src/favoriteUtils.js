const FAVORITE_KEY = "favoriteGames";

export function getFavorites() {
  try {
    return JSON.parse(
      localStorage.getItem(FAVORITE_KEY)
    ) || [];
  } catch {
    return [];
  }
}

export function isFavorite(gameId) {
  return getFavorites().includes(gameId);
}

export function toggleFavorite(gameId) {
  const favorites = getFavorites();

  let updatedFavorites;

  if (favorites.includes(gameId)) {
    updatedFavorites = favorites.filter(
      (id) => id !== gameId
    );
  } else {
    updatedFavorites = [
      ...favorites,
      gameId,
    ];
  }

  localStorage.setItem(
    FAVORITE_KEY,
    JSON.stringify(updatedFavorites)
  );

  // Other components ko update batane ke liye
  window.dispatchEvent(
    new Event("favoritesUpdated")
  );

  return updatedFavorites;
}