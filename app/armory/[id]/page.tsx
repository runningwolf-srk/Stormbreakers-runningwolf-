import Link from "next/link"
import { ALL_RELICS, CANON_ORDER } from "@/data/armory"

export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = ALL_RELICS.find((r) => r.slug === params.id)
  if (!relic) return <div className="p-12 text-center text-zinc-500">Relic Unrevealed 🔒</div>
  const idx = CANON_ORDER.indexOf(relic.slug)
  const prev = idx > 0 ? ALL_RELICS.find(r=>r.slug===CANON_ORDER[idx-1]) : null
  const next = idx < CANON_ORDER.length-1 ? ALL_RELICS.find(r=>r.slug===CANON_ORDER[idx+1]) : null

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 space-y-20">
      <div className="text-center space-y-6">
        <p className="text-xs tracking-[0.3em] text-zinc-500">{relic.num} • {relic.category.toUpperCase()} • {relic.status.toUpperCase()}</p>
        <h1 className="text-5xl font-black tracking-[0.15em] leading-none">{relic.title.toUpperCase()}</h1>
        <p className="text-sm text-zinc-400 italic mt-2">{relic.scripture}</p>
        <p className="text-zinc-300 max-w-xl mx-auto leading-7 pt-4">{relic.hook}</p>
      </div>

      {relic.artwork && <section className="space-y-3"><h2 className="text-xs tracking-[0.3em] text-zinc-500">🖼️ ARTWORK</h2><img src={relic.artwork} alt={relic.title} className="w-full rounded-xl" /></section>}
      {relic.youtube && <section className="space-y-3"><h2 className="text-xs tracking-[0.3em] text-zinc-500">▶️ WATCH • ▶️ LISTEN</h2><div className="aspect-video rounded-xl overflow-hidden border border-zinc-800"><iframe src={relic.youtube.replace("youtu.be","www.youtube.com/embed")} className="w-full h-full" allowFullScreen /></div></section>}

      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">⚔️ SONG</h2><pre className="whitespace-pre-wrap font-sans text-zinc-300 leading-8">{relic.lyrics}</pre></section>
      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">📖 CHRONICLE</h2><p className="whitespace-pre-wrap text-zinc-300 leading-8">{relic.chronicle}</p></section>
      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">✝️ WORD — {relic.scripture}</h2><p className="whitespace-pre-wrap text-zinc-300 leading-8">{relic.wordStudy}</p></section>
      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">📚 WALK</h2><p className="whitespace-pre-wrap text-zinc-300 leading-8">{relic.walk}</p></section>

      <section className="border border-amber-900/50 bg-zinc-900/50 rounded-xl p-8 space-y-4">
        <h2 className="text-sm font-bold tracking-[0.2em] text-amber-200">TODAY'S WALK — DAILY PRACTICE CARD</h2>
        <p className="text-xs tracking-widest text-zinc-500">CHALLENGE: {relic.practice}</p>
        <p className="text-xs tracking-widest text-zinc-500">SCRIPTURE: {relic.scripture}</p>
        <p className="text-sm font-bold text-white mt-4">DECLARATION: {relic.declaration}</p>
      </section>

      <section className="border border-zinc-800 rounded-xl p-8 space-y-4"><h2 className="text-xl font-bold tracking-[0.2em]">🎧 SOUND</h2><p className="text-sm text-zinc-400 leading-6">{relic.sound}</p><p className="text-xs text-zinc-500 leading-6">{relic.soundNotes}</p></section>

      <div className="flex justify-between border-t border-zinc-900 pt-8 text-xs tracking-widest">
        {prev ? <Link href={`/armory/${prev.slug}`} className="text-zinc-400 hover:text-white">← PREVIOUS • {prev.num} {prev.title.toUpperCase()}</Link> : <span/>}
        {next ? <Link href={`/armory/${next.slug}`} className="text-zinc-400 hover:text-white">{next.num} {next.title.toUpperCase()} • NEXT →</Link> : <span/>}
      </div>
    </article>
  )
}
