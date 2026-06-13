import { useModpackStore } from "../store/modpackStore";

export default function Favorites() {
  const { favorites, removeFavorite, addMod } = useModpackStore();

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-24">

      <h1 className="text-3xl font-bold mb-6">
        Favorites
      </h1>

      {favorites.length === 0 ? (
        <div className="bg-zinc-900 rounded-2xl p-10 text-center">
          <div className="text-5xl mb-4">❤️</div>

          <h2 className="text-xl font-bold">
            No Favorites Yet
          </h2>

          <p className="text-zinc-400 mt-2">
            Save mods here for later.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {favorites.map((mod) => (
            <div
              key={mod.id}
              className="bg-zinc-900 rounded-xl p-4 flex gap-4 items-center"
            >
              <img
                src={mod.icon_url}
                className="w-14 h-14 rounded-lg"
              />

              <div className="flex-1">
                <h2 className="font-bold">
                  {mod.title}
                </h2>

                <p className="text-zinc-400 text-sm">
                  {mod.author}
                </p>
              </div>

              <button
                onClick={() => addMod(mod)}
                className="bg-green-600 px-3 py-2 rounded-lg"
              >
                Add
              </button>

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
