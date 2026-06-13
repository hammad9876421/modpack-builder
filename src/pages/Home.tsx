import { useModpackStore } from "../store/modpackStore";

export default function Home() {
  const { mods, favorites } = useModpackStore();

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-24">

      <h1 className="text-4xl font-bold">
        Modpack Builder
      </h1>

      <p className="text-zinc-400 mt-2">
        Build your perfect Minecraft experience.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-8">

        <div className="bg-zinc-900 rounded-2xl p-5">
          <div className="text-3xl">
            📦
          </div>

          <h2 className="text-2xl font-bold mt-3">
            {mods.length}
          </h2>

          <p className="text-zinc-400">
            Mods
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-5">
          <div className="text-3xl">
            ❤️
          </div>

          <h2 className="text-2xl font-bold mt-3">
            {favorites.length}
          </h2>

          <p className="text-zinc-400">
            Favorites
          </p>
        </div>

      </div>

      <div className="bg-zinc-900 rounded-2xl p-6 mt-8">

        <h2 className="text-xl font-bold">
          Welcome
        </h2>

        <p className="text-zinc-400 mt-2">
          Search mods, save favorites, and create your own Minecraft modpack.
        </p>

      </div>

    </div>
  );
}
