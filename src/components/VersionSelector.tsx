import { useConfigStore } from "../store/configStore";

export default function VersionSelector() {
  const { minecraftVersion, setMinecraftVersion } = useConfigStore();

  const versions = [
    "1.21.1",
    "1.21.0",
    "1.20.1",
    "1.19.4",
    "1.18.2",
  ];

  return (
    <div className="flex gap-2 overflow-x-auto p-4">

      {versions.map((v) => (
        <button
          key={v}
          onClick={() => setMinecraftVersion(v)}
          className={`px-3 py-2 rounded-lg text-sm whitespace-nowrap transition ${
            minecraftVersion === v
              ? "bg-green-600 text-white"
              : "bg-zinc-800 text-zinc-300"
          }`}
        >
          {v}
        </button>
      ))}

    </div>
  );
}
