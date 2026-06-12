import { create } from "zustand";
import type { Mod } from "../types/mod";

interface ModpackState {
  mods: Mod[];
  favorites: Mod[];

  addMod: (mod: Mod) => void;
  removeMod: (id: string) => void;

  addFavorite: (mod: Mod) => void;
  removeFavorite: (id: string) => void;

  clearModpack: () => void;
}

export const useModpackStore = create<ModpackState>((set) => ({
  mods: [],
  favorites: [],

  addMod: (mod) =>
    set((state) => {
      if (state.mods.some((m) => m.id === mod.id)) {
        return state;
      }

      return {
        mods: [...state.mods, mod],
      };
    }),

  removeMod: (id) =>
    set((state) => ({
      mods: state.mods.filter((mod) => mod.id !== id),
    })),

  addFavorite: (mod) =>
    set((state) => {
      if (state.favorites.some((m) => m.id === mod.id)) {
        return state;
      }

      return {
        favorites: [...state.favorites, mod],
      };
    }),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((mod) => mod.id !== id),
    })),

  clearModpack: () =>
    set(() => ({
      mods: [],
    })),
}));
