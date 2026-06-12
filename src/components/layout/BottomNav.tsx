import { useModpackStore } from "../../store/modpackStore";

interface BottomNavProps {
  page: string;
  setPage: (page: string) => void;
}

export default function BottomNav({
  page,
  setPage,
}: BottomNavProps) {
  const mods = useModpackStore((state) => state.mods);
  const favorites = useModpackStore((state) => state.favorites);

  const items = [
    { id: "home", label: "🏠 Home" },
    {
      id: "search",
      label: `🔍 Search`,
    },
    {
      id: "modpack",
      label: `📦 Modpack (${mods.length})`,
    },
    {
      id: "favorites",
      label: `❤️ Fav (${favorites.length})`,
    },
    { id: "settings", label: "⚙️ Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 flex justify-around py-3">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setPage(item.id)}
          className={`text-xs ${
            page === item.id
              ? "text-green-400"
              : "text-zinc-400"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
