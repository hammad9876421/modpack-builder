import { useModpackStore } from "../store/modpackStore";

export default function CompatibilityBanner() {
  const mods = useModpackStore((state) => state.mods);

  const loaders = new Set<string>();

  mods.forEach((mod) => {
    (mod.loaders || []).forEach((loader) => loaders.add(loader));
  });

  const mixed =
    loaders.has("fabric") &&
    (loaders.has("forge") || loaders.has("neoforge"));

  if (!mixed) {
    return (
      <div className="bg-green-900 border border-green-700 rounded-xl p-3 mb-4">
        <p className="text-green-300 text-sm">
          ✅ No loader conflicts detected
        </p>
      </div>
    );
  }

  return (
    <div className="bg-red-900 border border-red-700 rounded-xl p-3 mb-4">
      <p className="text-red-300 font-semibold">
        ⚠ Mixed loaders detected
      </p>

      <p className="text-red-200 text-sm mt-1">
        Your modpack contains Fabric and Forge/NeoForge mods together.
        This may not work correctly.
      </p>
    </div>
  );
}
