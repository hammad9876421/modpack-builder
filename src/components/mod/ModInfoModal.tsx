import { Mod } from "../../types/mod";
import { useModpackStore } from "../../store/modpackStore";
import { showToast } from "../ToastManager";

interface Props {
  mod: Mod | null;
  onClose: () => void;
}

export default function ModInfoModal({ mod, onClose }: Props) {
  const { mods, addMod, removeMod, favorites, addFavorite, removeFavorite } =
    useModpackStore();

  if (!mod) return null;

  const inModpack = mods.some((m) => m.id === mod.id);
  const inFavorites = favorites.some((m) => m.id === mod.id);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-end z-50">
      <div className="bg-zinc-900 w-full rounded-t-2xl p-5 max-h-[85vh] overflow-y-auto">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="text-zinc-400 mb-3"
        >
          ✕ Close
        </button>

        {/* HEADER */}
        <div className="flex gap-4 items-center mb-4">

          <img
            src={mod.icon_url}
            className="w-16 h-16 rounded-xl"
          />

          <div>
            <h2 className="text-xl font-bold">{mod.title}</h2>
            <p className="text-zinc-400 text-sm">{mod.author}</p>
          </div>

        </div>

        {/* STATS */}
        <div className="flex gap-3 text-sm mb-4">

          <span className="bg-zinc-800 px-2 py-1 rounded">
            {mod.downloads} downloads
          </span>

          <span className="bg-zinc-800 px-2 py-1 rounded">
            {mod.project_type}
          </span>

        </div>

        {/* DESCRIPTION */}
        <p className="text-zinc-300 text-sm mb-4">
          {mod.description}
        </p>

        {/* CATEGORIES */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(mod.categories || []).map((c) => (
            <span
              key={c}
              className="bg-zinc-800 text-xs px-2 py-1 rounded"
            >
              {c}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2">

          <button
            onClick={() => {
              if (inModpack) {
                removeMod(mod.id);
                showToast("Removed");
              } else {
                addMod(mod);
                showToast("Added");
              }
            }}
            className={`flex-1 py-2 rounded ${
              inModpack ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {inModpack ? "Remove" : "Add"}
          </button>

          <button
            onClick={() => {
              if (inFavorites) {
                removeFavorite(mod.id);
              } else {
                addFavorite(mod);
              }
            }}
            className="px-4 bg-pink-600 rounded"
          >
            ❤️
          </button>

        </div>

      </div>
    </div>
  );
}
