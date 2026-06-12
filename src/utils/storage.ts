const MODPACK_KEY = "modpack-builder-mods";
const FAVORITES_KEY = "modpack-builder-favorites";

export function saveMods(mods: any[]) {
  localStorage.setItem(MODPACK_KEY, JSON.stringify(mods));
}

export function loadMods() {
  const data = localStorage.getItem(MODPACK_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveFavorites(favorites: any[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function loadFavorites() {
  const data = localStorage.getItem(FAVORITES_KEY);

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}
