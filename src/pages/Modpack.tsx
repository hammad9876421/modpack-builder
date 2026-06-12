import { useModpackStore } from "../store/modpackStore";

export default function Modpack() {
  const mods = useModpackStore((state) => state.mods);
  const removeMod = useModpackStore((state) => state.removeMod);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">
        My Modpack
      </h1>

      {mods.length === 0 ? (
        <div className="bg-zinc-900 rounded-xl p-6 text-center">
          <p className="text-zinc-400">
            No mods added yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mods.map((mod) => (
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
                onClick={() => removeMod(mod.id)}
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
