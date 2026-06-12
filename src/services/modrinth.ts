const API_BASE = "https://api.modrinth.com/v2";

export async function searchMods(query: string) {
  if (!query.trim()) {
    return { hits: [] };
  }

  const url = `${API_BASE}/search?query=${encodeURIComponent(query)}&limit=20`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch mods from Modrinth");
  }

  const data = await res.json();

  // Normalize data so UI never breaks
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
