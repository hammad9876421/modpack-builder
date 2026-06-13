import { useModpackStore } from "../store/modpackStore";
import { exportModpack } from "../utils/exportModpack";

export default function ExportButton() {
  const { mods } = useModpackStore();

  function handleExport() {
    if (mods.length === 0) {
      alert("Your modpack is empty.");
      return;
    }

    exportModpack(mods);
  }

  return (
    <button
      onClick={handleExport}
      className="
        w-full
        bg-green-600
        hover:bg-green-500
        active:scale-95
        transition-all
        rounded-xl
        py-3
        font-semibold
        text-white
      "
    >
      📦 Export Modpack
    </button>
  );
}
