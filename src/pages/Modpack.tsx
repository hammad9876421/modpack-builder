import { useModpackStore } from "../store/modpackStore";
import ExportButton from "../components/ExportButton";
import ImportButton from "../components/ImportButton";

export default function Modpack() {
  const { mods, removeMod, clearModpack } = useModpackStore();

  const totalDownloads = mods.reduce(
    (sum, mod) => sum + (mod.downloads || 0),
    0
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-24">

      <h1 className="text-4xl font-bold mb-2">
        My Modpack
      </h1>

      <p className="text-zinc-400 mb-6">
        Manage and export your Minecraft mod collection.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-zinc-900 rounded-2xl p-5">
          <p className="text-zinc-500 text-sm">
            Total Mods
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {mods.length}
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <p className="text-zinc-500 text-sm">
            Downloads
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {totalDownloads.toLocaleString()}
          </h2>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
  <ExportButton />
  <ImportButton />
</div>

      {mods.length > 0 && (

        <button
          onClick={clearModpack}
          className="w-full mt-4 mb-6 bg-red-600 rounded-xl py-3 font-semibold active:scale-95 transition-all"
        >
          Clear Modpack
        </button>

      )}

      {mods.length === 0 ? (

        <div className="bg-zinc-900 rounded-2xl p-10 text-center">

          <div className="text-6xl mb-4">
            📦
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Your Modpack is Empty
          </h2>

          <p className="text-zinc-400">
            Go to Search and add mods to start building your pack.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {mods.map((mod) => (

            <div
              key={mod.id}
              className="bg-zinc-900 rounded-2xl p-4 flex gap-4 items-center"
            >

              <img
                src={mod.icon_url}
                alt={mod.title}
                className="w-16 h-16 rounded-xl bg-zinc-800"
              />

              <div className="flex-1">

                <h2 className="font-bold text-lg">
                  {mod.title}
                </h2>

                <p className="text-zinc-400 text-sm">
                  {mod.author}
                </p>

                <p className="text-zinc-500 text-xs mt-1">
                  {mod.downloads.toLocaleString()} downloads
                </p>

              </div>

              <button
                onClick={() => removeMod(mod.id)}
                className="bg-red-600 px-4 py-2 rounded-xl active:scale-95 transition-all"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

      <div className="mt-10 text-center text-zinc-600 text-sm">

        <p>
          Modpack Builder v0.8.9
        </p>

        <p className="mt-1">
          Ready for v0.9
        </p>

      </div>

    </div>
  );
}
