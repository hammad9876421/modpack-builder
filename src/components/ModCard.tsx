import { useModpackStore } from "../store/modpackStore";
import { showToast } from "./ToastManager";
import type { Mod } from "../types/mod";

type Props = {
  mod: Mod;
};

export default function ModCard({ mod }: Props) {
  const {
    mods,
    favorites,
    addMod,
    removeMod,
    addFavorite,
    removeFavorite,
  } = useModpackStore();

  const inModpack = mods.some((m) => m.id === mod.id);
  const inFavorites = favorites.some((m) => m.id === mod.id);

  const downloads =
    mod.downloads >= 1000000
      ? `${(mod.downloads / 1000000).toFixed(1)}M`
      : mod.downloads >= 1000
      ? `${(mod.downloads / 1000).toFixed(1)}K`
      : mod.downloads.toString();

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-sm">

      <div className="flex gap-4">

        <img
          src={mod.icon_url || "https://placehold.co/64x64?text=Mod"}
          alt={mod.title}
          className="w-16 h-16 rounded-xl bg-zinc-800"
        />

        <div className="flex-1">

          <div className="flex justify-between items-start">

            <div>
              <h2 className="font-bold text-lg">
                {mod.title}
              </h2>

              <p className="text-zinc-400 text-sm">
                {mod.author}
              </p>
            </div>

            <span className="bg-green-600 text-xs px-2 py-1 rounded-full">
              {downloads}
            </span>

          </div>

          <p className="text-zinc-500 text-sm mt-3 line-clamp-2">
            {mod.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">

            {(mod.categories || []).slice(0, 3).map((category) => (

              <span
                key={category}
                className="bg-zinc-800 text-xs px-2 py-1 rounded-full"
              >
                {category}
              </span>

            ))}

          </div>

          <div className="flex gap-2 mt-4">

            <button
              onClick={() => {
                if (inModpack) {
                  removeMod(mod.id);
                  showToast("Removed from modpack");
                } else {
                  addMod(mod);
                  showToast("Added to modpack");
                }
              }}
              className={`flex-1 rounded-xl py-2 font-semibold transition ${
                inModpack
                  ? "bg-red-600"
                  : "bg-green-600"
              }`}
            >
              {inModpack ? "Remove" : "Add"}
            </button>

            <button
              onClick={() => {
                if (inFavorites) {
                  removeFavorite(mod.id);
                  showToast("Removed favorite");
                } else {
                  addFavorite(mod);
                  showToast("Added favorite");
                }
              }}
              className={`px-4 rounded-xl transition ${
                inFavorites
                  ? "bg-pink-700"
                  : "bg-zinc-700"
              }`}
            >
              ❤️
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
