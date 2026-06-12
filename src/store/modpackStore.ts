import { create } from "zustand";

export type Mod = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon_url: string;
  downloads: number;
  categories: string[];
  author: string;
};

type ModpackState = {
  mods: Mod[];
  favorites: Mod[];

  addMod: (mod: Mod) => void;
  removeMod: (id: string) => void;

  addFavorite: (mod: Mod) => void;
  removeFavorite: (id: string) => void;

  clearModpack: () => void;
};

const STORAGE_KEY = "modpack-data";

function saveToStorage(state: ModpackState) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      mods: state.mods,
      favorites: state.favorites,
    })
  );
}

function loadFromStorage() {
  if (typeof window === "undefined") return { mods: [], favorites: [] };

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return { mods: [], favorites: [] };

    return JSON.parse(data);
  } catch {
    return { mods: [], favorites: [] };
  }
}

export const useModpackStore = create<ModpackState>((set, get) => {
  const initial = loadFromStorage();

  return {
    mods: initial.mods || [],
    favorites: initial.favorites || [],

    addMod: (mod) => {
      const exists = get().mods.find((m) => m.id === mod.id);
      if (exists) return;

      const newState = {
        ...get(),
        mods: [...get().mods, mod],
      };

      set(newState);
      saveToStorage(newState);
    },

    removeMod: (id) => {
      const newState = {
        ...get(),
        mods: get().mods.filter((m) => m.id !== id),
      };

      set(newState);
      saveToStorage(newState);
    },

    addFavorite: (mod) => {
      const exists = get().favorites.find((m) => m.id === mod.id);
      if (exists) return;

      const newState = {
        ...get(),
        favorites: [...get().favorites, mod],
      };

      set(newState);
      saveToStorage(newState);
    },

    removeFavorite: (id) => {
      const newState = {
        ...get(),
        favorites: get().favorites.filter((m) => m.id !== id),
      };

      set(newState);
      saveToStorage(newState);
    },

    clearModpack: () => {
      const newState = {
        ...get(),
        mods: [],
      };

      set(newState);
      saveToStorage(newState);
    },
  };
});
