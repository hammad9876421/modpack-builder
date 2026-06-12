import { useModpackStore } from "../store/modpackStore";

export default function Favorites() {
  const favorites = useModpackStore((state) => state.favorites);
  const removeFavorite = useModpackStore(
    (state) => state.removeFavorite
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">
        Favorites
      </h1>

      {favorites.length === 0 ? (
        <div className="bg-zinc-900 rounded-xl p-6 text-center">
          <p className="text-zinc-400">
            No favorite mods yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map((mod) => (
            <div
              key={mod.id}
              className="bg-zinc-900 rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">
                  {mod.title}
                </h2>

                <p className="text-sm text-zinc-400">
                  {mod.author}
                </p>
              </div>

              <button
                onClick={() => removeFavorite(mod.id)}
                className="bg-red-600 px-3 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
