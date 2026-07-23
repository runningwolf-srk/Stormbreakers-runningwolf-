import { ALL_RELICS } from "@/data/armory"

export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = ALL_RELICS.find((r) => r.slug === params.id)
  if (!relic) return <div className="p-12 text-center text-zinc-500">Relic Unrevealed 🔒</div>

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 space-y-16">
      <div className="text-center">
        <p className="text-xs tracking-[0.3em] text-zinc-500 mb-3">{relic.num} • {relic.category.toUpperCase()} • {relic.status.toUpperCase()}</p>
        <h1 className="text-5xl font-black tracking-[0.15em]">{relic.title.toUpperCase()}</h1>
        <p className="text-sm text-zinc-400 italic mt-3">{relic.scripture}</p>
        <p className="text-zinc-300 mt-6 max-w-xl mx-auto">{relic.hook}</p>
      </div>

      {relic.artwork && <img src={relic.artwork} alt={relic.title} className="w-full rounded-xl" />}

      {relic.youtube && (
        <div className="aspect-video rounded-xl overflow-hidden border border-zinc-800">
          <iframe src={relic.youtube.replace("youtu.be", "www.youtube.com/embed")} className="w-full h-full" allowFullScreen />
        </div>
      )}

      <section>
        <h2 className="text-xl font-bold tracking-widest mb-4">⚔️ SONG</h2>
        <pre className="whitespace-pre-wrap font-sans text-zinc-300 leading-7">{relic.lyrics}</pre>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-widest mb-4">📖 CHRONICLE</h2>
        <p className="whitespace-pre-wrap text-zinc-300 leading-7">{relic.chronicle}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-widest mb-4">✝️ WORD — {relic.scripture}</h2>
        <p className="whitespace-pre-wrap text-zinc-300 leading-7">{relic.wordStudy}</p>
        <p className="mt-8 font-bold text-white">The blade is for separating truth from lies.</p>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-widest mb-4">📚 WALK</h2>
        <p className="whitespace-pre-wrap text-zinc-300 leading-7">{relic.walk}</p>
      </section>

      <section className="border border-zinc-800 rounded-xl p-6">
        <h2 className="text-xl font-bold tracking-widest mb-2">🎧 SOUND</h2>
        <p className="text-sm text-zinc-400">{relic.sound}</p>
        {relic.soundNotes && <p className="text-xs text-zinc-500 mt-3 leading-6">{relic.soundNotes}</p>}
      </section>
    </article>
  )
}
