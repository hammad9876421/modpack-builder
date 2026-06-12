import type { SearchResponse } from "../types/mod";

const API_BASE = "https://api.modrinth.com/v2";

export interface SearchOptions {
  query: string;
  limit?: number;
  offset?: number;
}

export async function searchMods({
  query,
  limit = 20,
  offset = 0,
}: SearchOptions): Promise<SearchResponse> {
  if (!query.trim()) {
    return {
      hits: [],
      offset: 0,
      limit,
      total_hits: 0,
    };
  }

  const url =
    `${API_BASE}/search?query=${encodeURIComponent(query)}` +
    `&limit=${limit}&offset=${offset}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Modrinth API Error: ${response.status}`);
  }

  return response.json();
}
