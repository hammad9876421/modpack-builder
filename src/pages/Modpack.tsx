import { useModpackStore } from "../store/modpackStore";
import ExportButton from "../components/ExportButton";

export default function Modpack() {
  const { mods, removeMod, clearModpack } = useModpackStore();

  const totalDownloads = mods.reduce(
    (sum, mod) => sum + (mod.downloads || 0),
    0
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-24">

      <h1 className="text-3xl font-bold mb-6">
        My Modpack
      </h1>

      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-zinc-400 text-sm">
            Mods
          </p>

          <h2 className="text-3xl font-bold">
            {mods.length}
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-zinc-400 text-sm">
            Downloads
          </p>

          <h2 className="text-3xl font-bold">
            {totalDownloads.toLocaleString()}
          </h2>
        </div>

      </div>

      <div className="mb-4">
        <ExportButton />
      </div>

      {mods.length > 0 && (

        <button
          onClick={clearModpack}
          className="w-full bg-red-600 rounded-xl py-3 mb-6 font-semibold active:scale-95 transition-all"
        >
          Clear Modpack
        </button>

      )}

      {mods.length === 0 ? (

        <div className="bg-zinc-900 rounded-xl p-10 text-center">

          <div className="text-5xl mb-4">
            📦
          </div>

          <h2 className="text-xl font-bold">
            No Mods Added
          </h2>

          <p className="text-zinc-400 mt-2">
            Search for mods and build your own Minecraft modpack.
          </p>

        </div>

      ) : (

        <div className="space-y-3">

          {mods.map((mod) => (

            <div
              key={mod.id}
              className="bg-zinc-900 rounded-xl p-4 flex gap-4 items-center"
            >

              <img
                src={mod.icon_url}
                alt={mod.title}
                className="w-14 h-14 rounded-lg bg-zinc-800"
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
                onClick={() => removeMod(mod.id)}
                className="bg-red-600 px-3 py-2 rounded-lg active:scale-95 transition-all"
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
