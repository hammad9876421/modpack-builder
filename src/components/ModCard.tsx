import { useModpackStore } from "../store/modpackStore";
import { showToast } from "./ToastManager";

type Props = {
  mod: any;
};

export default function ModCard({ mod }: Props) {
  const addMod = useModpackStore((state) => state.addMod);
  const removeMod = useModpackStore((state) => state.removeMod);

  const addFavorite = useModpackStore((state) => state.addFavorite);
  const removeFavorite = useModpackStore((state) => state.removeFavorite);

  const mods = useModpackStore((state) => state.mods);
  const favorites = useModpackStore((state) => state.favorites);

  const inModpack = mods.some((m) => m.id === mod.id);
  const inFavorites = favorites.some((m) => m.id === mod.id);

  return (
    <div className="bg-zinc-900 rounded-xl p-4 mb-3 flex gap-4">
      {/* ICON */}
      <img
        src={mod.icon_url}
        alt={mod.title}
        className="w-12 h-12 rounded-lg"
      />

      {/* INFO */}
      <div className="flex-1">
        <h2 className="font-bold">{mod.title}</h2>

        <p className="text-xs text-zinc-400">
          {mod.author} • {mod.downloads} downloads
        </p>

        <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
          {mod.description}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-2 mt-3 flex-wrap">

          {/* MODPACK BUTTON */}
          {!inModpack ? (
            <button
              onClick={() => {
                addMod(mod);
                showToast("✅ Added to Modpack");
              }}
              className="bg-green-600 px-3 py-1 rounded-lg text-sm"
            >
              + Add
            </button>
          ) : (
            <button
              onClick={() => {
                removeMod(mod.id);
                showToast("❌ Removed from Modpack");
              }}
              className="bg-red-600 px-3 py-1 rounded-lg text-sm"
            >
              Remove
            </button>
          )}

          {/* FAVORITE BUTTON */}
          {!inFavorites ? (
            <button
              onClick={() => {
                addFavorite(mod);
                showToast("❤️ Added to Favorites");
              }}
              className="bg-pink-600 px-3 py-1 rounded-lg text-sm"
            >
              ♥ Fav
            </button>
          ) : (
            <button
              onClick={() => {
                removeFavorite(mod.id);
                showToast("💔 Removed from Favorites");
              }}
              className="bg-gray-600 px-3 py-1 rounded-lg text-sm"
            >
              Unfav
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
