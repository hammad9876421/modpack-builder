import { create } from "zustand";

interface ConfigState {
  minecraftVersion: string;
  loader: string;

  setMinecraftVersion: (version: string) => void;
  setLoader: (loader: string) => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
  minecraftVersion: "1.21.1",
  loader: "neoforge",

  setMinecraftVersion: (minecraftVersion) =>
    set({ minecraftVersion }),

  setLoader: (loader) =>
    set({ loader }),
}));
