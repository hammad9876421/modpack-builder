export async function searchMods(
  query: string,
  loader: string,
  version: string
) {
  const url = new URL("https://api.modrinth.com/v2/search");

  const facets: any[] = [];

  if (loader) {
    facets.push([`categories:${loader}`]);
  }

  if (version) {
    facets.push([`versions:${version}`]);
  }

  const params: any = {
    query,
  };

  if (facets.length > 0) {
    params.facets = JSON.stringify(facets);
  }

  url.search = new URLSearchParams(params).toString();

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error("Search failed");
  }

  return await res.json();
}
