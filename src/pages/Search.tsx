import { useState } from "react";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ModCard from "../components/ModCard";

import { searchMods } from "../services/modrinth";
import type { Mod } from "../types/mod";

export default function Search() {
  const [mods, setMods] = useState<Mod[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loader, setLoader] = useState("");
  const [version, setVersion] = useState("");

  async function handleSearch(query: string) {
    if (!query.trim()) {
      setMods([]);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await searchMods(query);

      setMods(result.hits || []);
    } catch (err) {
      setError("Failed to load mods. Try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* SEARCH */}
      <SearchBar onSearch={handleSearch} />

      {/* FILTERS (UI only for now) */}
      <FilterBar
        loader={loader}
        version={version}
        onLoaderChange={setLoader}
        onVersionChange={setVersion}
      />

      {/* CONTENT */}
      <div className="p-4">
        {loading && (
          <p className="text-zinc-400">Loading mods...</p>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        {!loading && !error && mods.length === 0 && (
          <p className="text-zinc-500">
            Search for Minecraft mods...
          </p>
        )}

        {mods.map((mod) => (
          <ModCard key={mod.id} mod={mod} />
        ))}
      </div>
    </div>
  );
}
