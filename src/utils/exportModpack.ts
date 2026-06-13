import type { Mod } from "../types/mod";

export function exportModpack(mods: Mod[]) {
  const modpack = {
    name: "My Modpack",
    version: "1.0.0",
    exportedAt: new Date().toISOString(),
    modCount: mods.length,
    mods,
  };

  const json = JSON.stringify(modpack, null, 2);

  const blob = new Blob([json], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "my-modpack.json";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
