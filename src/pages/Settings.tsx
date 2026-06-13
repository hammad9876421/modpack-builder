export default function Settings() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 pb-24">

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="space-y-4">

        <div className="bg-zinc-900 rounded-xl p-4">
          <h2 className="font-bold">
            Version
          </h2>

          <p className="text-zinc-400">
            Modpack Builder v0.1
          </p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <h2 className="font-bold">
            Storage
          </h2>

          <p className="text-zinc-400">
            Local browser storage enabled.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4">
          <h2 className="font-bold">
            Theme
          </h2>

          <p className="text-zinc-400">
            Dark Mode
          </p>
        </div>

      </div>

    </div>
  );
}
