import type { Mod } from "../types/mod";
import { useModpackStore } from "../store/modpackStore";

interface ModCardProps {
  mod: Mod;
}

export default function ModCard({ mod }: ModCardProps) {
  const addMod = useModpackStore((state) => state.addMod);
  const addFavorite = useModpackStore((state) => state.addFavorite);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4 shadow-lg">
      <div className="flex gap-4">
        <img
          src={mod.icon_url}
          alt={mod.title}
          className="w-16 h-16 rounded-lg bg-zinc-800"
        />

        <div className="flex-1">
          <h2 className="text-lg font-bold text-white">
            {mod.title}
          </h2>

          <p className="text-sm text-zinc-400 mt-1">
            {mod.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {mod.categories.map((category) => (
              <span
                key={category}
                className="bg-zinc-800 text-xs px-2 py-1 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-zinc-500">
              ⬇ {mod.downloads.toLocaleString()}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => addFavorite(mod)}
                className="px-3 py-2 rounded-lg bg-pink-600 hover:bg-pink-500"
              >
                ❤️
              </button>

              <button
                onClick={() => addMod(mod)}
                className="px-3 py-2 rounded-lg bg-green-600 hover:bg-green-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
