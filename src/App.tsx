import { useState } from "react";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Modpack from "./pages/Modpack";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";

import BottomNav from "./components/layout/BottomNav";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="bg-zinc-950 min-h-screen pb-20">
      {page === "home" && <Home />}
      {page === "search" && <Search />}
      {page === "modpack" && <Modpack />}
      {page === "favorites" && <Favorites />}
      {page === "settings" && <Settings />}

      <BottomNav page={page} setPage={setPage} />
    </div>
  );
}
