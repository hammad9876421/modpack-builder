import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ModCard from "../components/ModCard";
import ModCardSkeleton from "../components/ModCardSkeleton";

import { searchMods } from "../services/modrinth";
import type { Mod } from "../types/mod";

export default function Search() {
  const [mods, setMods] = useState<Mod[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState("");
  const [version, setVersion] = useState("");

  async function runSearch(q: string, l: string, v: string) {
    if (!q.trim()) {
      setMods([]);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const result = await searchMods(q, l, v);
      setMods(result.hits || []);
    } catch (err) {
      setError("Failed to load mods");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(q: string) {
    setQuery(q);
  }

  useEffect(() => {
    if (!query.trim()) return;
    runSearch(query, loader, version);
  }, [query, loader, version]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SearchBar onSearch={handleSearch} />

      <FilterBar
        loader={loader}
        version={version}
        onLoaderChange={setLoader}
        onVersionChange={setVersion}
      />

      <div className="p-4">
        {loading && (
          <>
            <ModCardSkeleton />
            <ModCardSkeleton />
            <ModCardSkeleton />
          </>
        )}

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        {!loading && !error && mods.length === 0 && (
          <p className="text-zinc-500">
            Search Minecraft mods above 👆
          </p>
        )}

        {!loading &&
          !error &&
          mods.map((mod) => (
            <ModCard key={mod.id} mod={mod} />
          ))}
      </div>
    </div>
  );
}
