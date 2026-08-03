import Link from "next/link";
export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-zinc-100 px-6 md:px-12 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[11px] text-zinc-600">← COVER</Link>
        <p className="mt-8 text-[11px] tracking-[0.5em] text-amber-700/60">📚 THE LIBRARY</p>
        <h1 className="text-3xl font-black mt-2">Books give depth</h1>
        <div className="mt-10 grid gap-4 opacity-50">
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="text-sm font-bold">Books</p><p className="text-[11px] text-zinc-600 mt-1">Devotionals and expanded lore</p></div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="text-sm font-bold">Study Guides</p><p className="text-[11px] text-zinc-600 mt-1">Artifact → Scripture → Story → Song → Video → Reflection</p></div>
          <div className="bg-[#0a0a0a] border border-zinc-800 p-6"><p className="text-sm font-bold">Artwork & Maps</p><p className="text-[11px] text-zinc-600 mt-1">Relic artwork, timelines, canon maps — future expansion</p></div>
        </div>
      </div>
    </main>
  );
}
