import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search Minecraft mods...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  function clearSearch() {
    setQuery("");
  }

  return (
    <div className="p-4">

      <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3">

        <span className="text-xl">
          🔍
        </span>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-white placeholder:text-zinc-500"
        />

        {query.length > 0 && (

          <button
            onClick={clearSearch}
            className="text-zinc-400 text-lg active:scale-95"
          >
            ✕
          </button>

        )}

      </div>

    </div>
  );
}
