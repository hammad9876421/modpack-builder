export default function Settings() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-zinc-900 rounded-xl p-4 space-y-4">
        <div>
          <h2 className="font-semibold">
            Default Loader
          </h2>
          <p className="text-zinc-400">
            Fabric
          </p>
        </div>

        <div>
          <h2 className="font-semibold">
            Default Version
          </h2>
          <p className="text-zinc-400">
            1.21.8
          </p>
        </div>

        <div>
          <h2 className="font-semibold">
            Theme
          </h2>
          <p className="text-zinc-400">
            Dark AMOLED
          </p>
        </div>
      </div>
    </div>
  );
}
