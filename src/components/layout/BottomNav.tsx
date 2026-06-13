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
    { id: "home", icon: "🏠", badge: "" },
    { id: "search", icon: "🔍", badge: "" },
    {
      id: "modpack",
      icon: "📦",
      badge: mods.length > 0 ? String(mods.length) : "",
    },
    {
      id: "favorites",
      icon: "❤️",
      badge: favorites.length > 0 ? String(favorites.length) : "",
    },
    { id: "settings", icon: "⚙️", badge: "" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur border-t border-zinc-800 flex justify-around py-3">

      {items.map((item) => (

        <button
          key={item.id}
          onClick={() => setPage(item.id)}
          className="flex flex-col items-center gap-1 relative"
        >

          <span
            className={`text-2xl transition-all ${
              page === item.id
                ? "scale-110"
                : "opacity-70"
            }`}
          >
            {item.icon}
          </span>

          {item.badge && (
            <span className="absolute -top-1 right-0 bg-green-500 text-black text-[10px] rounded-full px-1.5 font-bold">
              {item.badge}
            </span>
          )}

          {page === item.id && (
            <div className="w-6 h-1 rounded-full bg-green-500" />
          )}

        </button>

      ))}

    </nav>
  );
}
