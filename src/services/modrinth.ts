const API_BASE = "https://api.modrinth.com/v2";

export async function searchMods(
  query: string,
  loader?: string,
  version?: string
) {
  if (!query.trim()) {
    return { hits: [] };
  }

  const facets: string[][] = [];

  if (loader) {
    facets.push([`categories:${loader}`]);
  }

  if (version) {
    facets.push([`versions:${version}`]);
  }

  let url =
    `${API_BASE}/search?query=${encodeURIComponent(query)}&limit=20`;

  if (facets.length > 0) {
    url += `&facets=${encodeURIComponent(JSON.stringify(facets))}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch mods from Modrinth");
  }

  const data = await res.json();

  return {
    hits: (data.hits || []).map((mod: any) => ({
      id: mod.project_id,
      slug: mod.slug,
      title: mod.title,
      description: mod.description,
      icon_url: mod.icon_url || "",
      downloads: mod.downloads || 0,
      categories: mod.categories || [],
      author: mod.author || "Unknown",
    })),
  };
}
