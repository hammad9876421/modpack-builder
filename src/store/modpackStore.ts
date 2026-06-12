import { create } from "zustand";

export type Mod = {
  id: string;
  name: string;
};

type ModpackState = {
  mods: Mod[];
  addMod: (mod: Mod) => void;
  removeMod: (id: string) => void;
  clearMods: () => void;
};

const saved = localStorage.getItem("modpack");

export const useModpackStore = create<ModpackState>((set) => ({
  mods: saved ? JSON.parse(saved) : [],

  addMod: (mod) =>
    set((state) => {
      const exists = state.mods.find((m) => m.id === mod.id);
      if (exists) return state;

      const updated = [...state.mods, mod];
      localStorage.setItem("modpack", JSON.stringify(updated));
      return { mods: updated };
    }),

  removeMod: (id) =>
    set((state) => {
      const updated = state.mods.filter((m) => m.id !== id);
      localStorage.setItem("modpack", JSON.stringify(updated));
      return { mods: updated };
    }),

  clearMods: () => {
    localStorage.removeItem("modpack");
    return { mods: [] };
  },
}));