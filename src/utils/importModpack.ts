import type { Mod } from "../types/mod";

export async function importModpack(
  file: File
): Promise<Mod[]> {
  const text = await file.text();

  const json = JSON.parse(text);

  if (!json.mods || !Array.isArray(json.mods)) {
    throw new Error("Invalid modpack file.");
  }

  return json.mods as Mod[];
}
