import { useModpackStore } from "../store/modpackStore";

export default function Home() {
  const mods = useModpackStore((state) => state.mods);
  const favorites = useModpackStore((state) => state.favorites);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">
        ModPack Builder
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-zinc-400">Mods</p>
          <h2 className="text-3xl font-bold">
            {mods.length}
          </h2>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <p className="text-zinc-400">Favorites</p>
          <h2 className="text-3xl font-bold">
            {favorites.length}
          </h2>
        </div>
      </div>

      <div className="mt-8 bg-zinc-900 rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-2">
          Welcome
        </h2>

        <p className="text-zinc-400">
          Search Minecraft mods, save favorites,
          build your personal modpack, and export it
          for Android launchers.
        </p>
      </div>
    </div>
  );
}
