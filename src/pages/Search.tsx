import { useModpackStore } from "../store/modpackStore";

const mods = [
  { id: "sodium", name: "Sodium" },
  { id: "iris", name: "Iris" },
  { id: "lithium", name: "Lithium" },
];

export default function Search() {
  const addMod = useModpackStore((s) => s.addMod);

  return (
    <div className="space-y-3">

      <input
        placeholder="Search mods..."
        className="w-full p-3 rounded-lg bg-[#18181B] outline-none"
      />

      {mods.map((mod) => (
        <div
          key={mod.id}
          className="bg-[#18181B] p-3 rounded-lg flex justify-between items-center"
        >
          <span>{mod.name}</span>

          <button
            onClick={() => addMod(mod)}
            className="text-green-400"
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
}