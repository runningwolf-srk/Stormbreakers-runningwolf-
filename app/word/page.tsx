// @ts-nocheck
import { WORD_CATEGORIES } from '@/lib/constants'
export default function WordPage() {
  return (
    <main className="px-4 py-12 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black">THE WORD</h1>
      <p className="text-zinc-400 mt-2">Every testimony points back to Christ's work, not personal transformation.</p>
      <div className="mt-10 space-y-6">{(WORD_CATEGORIES || []).map((c: any) => (
        <div key={c.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-black tracking-widest text-amber-400">{c.title}</h2>
          <p className="font-mono text-sm mt-1 text-white">{c.scripture} — {c.anchor}</p>
          <p className="text-zinc-300 mt-3">{c.explanation}</p>
          <p className="text-zinc-500 text-sm mt-3 italic">Moment: {c.moment}</p>
        </div>
      ))}</div>
    </main>
  )
}
