interface FilterBarProps {
  loader: string;
  version: string;
  onLoaderChange: (value: string) => void;
  onVersionChange: (value: string) => void;
}

export default function FilterBar({
  loader,
  version,
  onLoaderChange,
  onVersionChange,
}: FilterBarProps) {
  return (
    <div className="flex gap-3 p-4 overflow-x-auto">
      <select
        value={loader}
        onChange={(e) => onLoaderChange(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-white"
      >
        <option value="">All Loaders</option>
        <option value="fabric">Fabric</option>
        <option value="forge">Forge</option>
        <option value="neoforge">NeoForge</option>
        <option value="quilt">Quilt</option>
      </select>

      <select
        value={version}
        onChange={(e) => onVersionChange(e.target.value)}
        className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-white"
      >
        <option value="">All Versions</option>
        <option value="1.21.8">1.21.8</option>
        <option value="1.21.7">1.21.7</option>
        <option value="1.21.6">1.21.6</option>
        <option value="1.21.5">1.21.5</option>
        <option value="1.21.4">1.21.4</option>
        <option value="1.20.1">1.20.1</option>
      </select>
    </div>
  );
}
