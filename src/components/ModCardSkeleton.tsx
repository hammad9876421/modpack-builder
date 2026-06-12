export default function ModCardSkeleton() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 mb-3 flex gap-4 animate-pulse">
      {/* ICON */}
      <div className="w-12 h-12 bg-zinc-800 rounded-lg" />

      {/* CONTENT */}
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-zinc-800 rounded w-1/2" />
        <div className="h-3 bg-zinc-800 rounded w-1/3" />
        <div className="h-3 bg-zinc-800 rounded w-3/4" />

        {/* BUTTONS */}
        <div className="flex gap-2 mt-3">
          <div className="h-6 w-16 bg-zinc-800 rounded" />
          <div className="h-6 w-16 bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  );
}
