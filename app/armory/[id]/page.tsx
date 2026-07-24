import { ALL_RELICS } from "@/data/armory"
export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = ALL_RELICS.find((r) => r.slug === params.id)
  if (!relic) return <div className="p-12 text-center text-zinc-500">Relic Unrevealed 🔒</div>
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 space-y-20">
      <div className="text-center space-y-6">
        <p className="text-xs tracking-[0.3em] text-zinc-500">{relic.num} • {relic.category.toUpperCase()} • {relic.status.toUpperCase()}</p>
        <h1 className="text-5xl font-black tracking-[0.15em] leading-none">{relic.title.toUpperCase()}</h1>
        <p className="text-sm text-zinc-400 italic">{relic.scripture}</p>
        <p className="text-zinc-300 max-w-xl mx-auto leading-7 pt-4">{relic.hook}</p>
      </div>
      {relic.artwork && <img src={relic.artwork} alt={relic.title} className="w-full rounded-xl" />}
      {relic.youtube && <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800"><iframe src={relic.youtube.replace("youtu.be","www.youtube.com/embed")} className="w-full h-full" allowFullScreen /></div>}
      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">⚔️ SONG</h2><pre className="whitespace-pre-wrap font-sans text-zinc-300 leading-8">{relic.lyrics}</pre></section>
      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">📖 CHRONICLE</h2><p className="whitespace-pre-wrap text-zinc-300 leading-8">{relic.chronicle}</p></section>
      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">✝️ WORD — {relic.scripture}</h2><p className="whitespace-pre-wrap text-zinc-300 leading-8">{relic.wordStudy}</p></section>
      <section className="space-y-6"><h2 className="text-xl font-bold tracking-[0.2em]">📚 WALK</h2><p className="whitespace-pre-wrap text-zinc-300 leading-8">{relic.walk}</p></section>
      <section className="border border-zinc-800 rounded-xl p-8 space-y-4"><h2 className="text-xl font-bold tracking-[0.2em]">🎧 SOUND</h2><p className="text-sm text-zinc-400 leading-6">{relic.sound}</p>{relic.soundNotes && <p className="text-xs text-zinc-500 leading-6">{relic.soundNotes}</p>}</section>
    </article>
  )
}
