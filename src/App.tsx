import { useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Modpack from "./pages/Modpack";
import Settings from "./pages/Settings";

export default function App() {
  const [page, setPage] = useState("Home");

  const renderPage = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "Search":
        return <Search />;
      case "Modpack":
        return <Modpack />;
      case "Settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#09090B] text-white">

      <div className="p-4 text-xl font-bold border-b border-zinc-800">
        ModPack Builder
      </div>

      <div className="flex-1 p-4">{renderPage()}</div>

      <div className="flex justify-around p-3 border-t border-zinc-800 bg-black">
        {["Home", "Search", "Modpack", "Settings"].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={page === p ? "text-green-400" : "text-gray-400"}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}