import { useModpackStore } from "../store/modpackStore";
import { showToast } from "./ToastManager";

type Props = {
  mod: any;
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
      : mod.downloads;

  return (
    <div className="bg-zinc-900 rounded-2xl p-4 mb-4 border border-zinc-800 transition-all active:scale-95">

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

            <span className="text-xs bg-zinc-800 px-2 py-1 rounded-full">
              {downloads} downloads
            </span>

          </div>

          <p className="text-zinc-500 text-sm mt-2 line-clamp-2">
            {mod.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {(mod.categories || []).slice(0, 3).map((cat: string) => (
              <span
                key={cat}
                className="bg-zinc-800 text-xs px-2 py-1 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-4">

            {!inModpack ? (
              <button
                onClick={() => {
                  addMod(mod);
                  showToast("Added to Modpack");
                }}
                className="flex-1 bg-green-600 rounded-xl py-2 transition-all active:scale-95"
              >
                Add
              </button>
            ) : (
              <button
                onClick={() => {
                  removeMod(mod.id);
                  showToast("Removed");
                }}
                className="flex-1 bg-red-600 rounded-xl py-2 transition-all active:scale-95"
              >
                Remove
              </button>
            )}

            {!inFavorites ? (
              <button
                onClick={() => {
                  addFavorite(mod);
                  showToast("Added to Favorites");
                }}
                className="bg-pink-600 rounded-xl px-4 transition-all active:scale-95"
              >
                ❤
              </button>
            ) : (
              <button
                onClick={() => {
                  removeFavorite(mod.id);
                  showToast("Removed Favorite");
                }}
                className="bg-zinc-700 rounded-xl px-4 transition-all active:scale-95"
              >
                ❤
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
