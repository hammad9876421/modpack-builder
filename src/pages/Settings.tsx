import { useConfigStore } from "../store/configStore";

export default function Settings() {
  const {
    minecraftVersion,
    loader,
    setMinecraftVersion,
    setLoader,
  } = useConfigStore();

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-24">

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      {/* MINECRAFT VERSION */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4">

        <h2 className="font-semibold mb-2">
          Minecraft Version
        </h2>

        <select
          value={minecraftVersion}
          onChange={(e) => setMinecraftVersion(e.target.value)}
          className="w-full bg-zinc-800 p-3 rounded-lg text-white"
        >
          <option value="1.21.1">1.21.1</option>
          <option value="1.21.0">1.21.0</option>
          <option value="1.20.1">1.20.1</option>
          <option value="1.19.4">1.19.4</option>
        </select>

      </div>

      {/* LOADER */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4">

        <h2 className="font-semibold mb-2">
          Mod Loader
        </h2>

        <select
          value={loader}
          onChange={(e) => setLoader(e.target.value)}
          className="w-full bg-zinc-800 p-3 rounded-lg text-white"
        >
          <option value="neoforge">NeoForge</option>
          <option value="forge">Forge</option>
          <option value="fabric">Fabric</option>
          <option value="quilt">Quilt</option>
        </select>

      </div>

      <div className="text-sm text-zinc-500 mt-6">
        These settings will control search and compatibility checks.
      </div>

    </div>
  );
}
