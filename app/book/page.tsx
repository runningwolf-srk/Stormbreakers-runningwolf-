// @ts-nocheck
export const dynamic = 'force-dynamic'
import Link from 'next/link'
export default function BookLibrary() {
  return (
    <main className="px-4 py-16 max-w-5xl mx-auto">
      <h1 className="text-6xl font-black">THE BOOKS</h1>
      <p className="text-zinc-500 uppercase tracking-widest text-sm mt-2">Live — Apply through Prayer & Reflection • 10/10 Experience</p>
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <Link href="/book/chronicles" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-white/20"><h2 className="text-2xl font-black">BOOK 1: CHRONICLES</h2><p className="text-zinc-400 mt-2">16 Chapters • 1,000-3,000 words each • Novel mode</p><p className="text-xs text-zinc-600 mt-4">Hear → Understand — Full testimony. Ends with prayer + transition.</p></Link>
        <Link href="/book/word" className="bg-amber-950/20 border border-amber-900/30 rounded-2xl p-8 hover:border-amber-500/30"><h2 className="text-2xl font-black">BOOK 2: THE WORD</h2><p className="text-zinc-400 mt-2">16 Studies • Context • Reflection Questions • Prayer</p><p className="text-xs text-zinc-600 mt-4">Root → Live — Points back to Jesus, not just story.</p></Link>
      </div>
    </main>
  )
}
