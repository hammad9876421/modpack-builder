import { ChangeEvent } from "react";
import { useModpackStore } from "../store/modpackStore";
import { importModpack } from "../utils/importModpack";

export default function ImportButton() {
  const { addMod } = useModpackStore();

  async function handleImport(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const mods = await importModpack(file);

      mods.forEach((mod) => addMod(mod));

      alert("Modpack imported successfully!");
    } catch {
      alert("Invalid modpack file.");
    }

    event.target.value = "";
  }

  return (
    <label className="block w-full cursor-pointer">

      <input
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
      />

      <div className="w-full bg-blue-600 rounded-xl py-3 text-center font-semibold active:scale-95 transition-all">
        📥 Import Modpack
      </div>

    </label>
  );
}
