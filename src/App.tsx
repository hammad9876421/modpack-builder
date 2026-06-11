import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="flex justify-between items-center p-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold">ModPack Builder</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setPage("home")}
            className="px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700"
          >
            Home
          </button>

          <button
            onClick={() => setPage("search")}
            className="px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700"
          >
            Search
          </button>

          <button
            onClick={() => setPage("modpack")}
            className="px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700"
          >
            Modpack
          </button>
        </div>
      </nav>

      <main className="p-4">
        {page === "home" && <Home />}

        {page === "search" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">Search</h2>
            <p>Search page coming soon...</p>
          </div>
        )}

        {page === "modpack" && (
          <div>
            <h2 className="text-2xl font-bold mb-2">My Modpack</h2>
            <p>No mods added yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
