import { useModpackStore } from "../store/modpackStore";

export default function Modpack() {
  const mods = useModpackStore((s) => s.mods);
  const removeMod = useModpackStore((s) => s.removeMod);
  const clearMods = useModpackStore((s) => s.clearMods);

  return (
    <div className="space-y-3">

      <div className="bg-[#18181B] p-4 rounded-xl">
        <h2 className="font-bold">My Modpack</h2>
        <p className="text-gray-400 text-sm">
          {mods.length} mods added
        </p>
      </div>

      {mods.length === 0 && (
        <p className="text-gray-500 text-center mt-10">
          No mods added yet
        </p>
      )}

      {mods.map((mod) => (
        <div
          key={mod.id}
          className="bg-[#18181B] p-3 rounded-lg flex justify-between"
        >
          <span>{mod.name}</span>

          <button
            onClick={() => removeMod(mod.id)}
            className="text-red-400"
          >
            Remove
          </button>
        </div>
      ))}

      {mods.length > 0 && (
        <button
          onClick={clearMods}
          className="w-full p-3 bg-red-500 rounded-lg mt-4"
        >
          Clear All
        </button>
      )}
    </div>
  );
}