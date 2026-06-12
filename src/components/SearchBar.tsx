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

  return (
    <div className="w-full p-4">
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        className="
          w-full
          rounded-xl
          bg-zinc-900
          border
          border-zinc-700
          px-4
          py-3
          text-white
          outline-none
          focus:border-green-500
        "
      />
    </div>
  );
}
