import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ModCard from "../components/ModCard";
import { searchMods } from "../services/modrinth";
import type { Mod } from "../types/mod";

export default function Search() {
  const [mods, setMods] = useState<Mod[]>([]);
  const [loader, setLoader] = useState("");
  const [version, setVersion] = useState("");

  async function handleSearch(query: string) {
    if (!query.trim()) {
      setMods([]);
      return;
    }

    try {
      const result = await searchMods({
        query,
        limit: 20,
      });

      setMods(result.hits);
    } catch (error) {
      console.error(error);
    }
  }

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
        {mods.map((mod) => (
          <ModCard key={mod.id} mod={mod} />
        ))}
      </div>
    </div>
  );
}
