import type { Mod } from "../types/mod";

export interface ModVersion {
  id: string;
  name: string;
  version_number: string;
  game_versions: string[];
  loaders: string[];
  published: string;
}

export async function getModVersions(
  projectId: string
): Promise<ModVersion[]> {
  const response = await fetch(
    `https://api.modrinth.com/v2/project/${projectId}/version`
  );

  if (!response.ok) {
    throw new Error("Failed to load versions");
  }

  const data = await response.json();

  return data.map((version: any) => ({
    id: version.id,
    name: version.name,
    version_number: version.version_number,
    game_versions: version.game_versions,
    loaders: version.loaders,
    published: version.date_published,
  }));
}
