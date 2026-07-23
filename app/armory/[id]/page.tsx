import { ALL_RELICS } from "@/data/armory"
import CanonFooter from "@/app/components/CanonFooter"

export default function RelicPage({params}:{params:{id:string}}){
  const relic = ALL_RELICS.find(r => r.slug === params.id)
  if(!relic) return <div>Relic Unrevealed</div>

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      
      {/* RELIC HERO */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] text-zinc-500 mb-2">
          {relic.num} • {relic.category.toUpperCase()} • {relic.status.toUpperCase()}
        </p>
        <h1 className="text-5xl font-black tracking-widest mb-4">{relic.title.toUpperCase()}</h1>
        <p className="text-sm text-zinc-400 italic">{relic.scripture}</p>
        <p className="mt-4 text-zinc-300">{relic.hook}</p>
      </div>

      {/* ARTWORK */}
      {relic.artwork && (
        <img src={relic.artwork} alt={relic.title} className="w-full rounded-xl mb-8" />
      )}

      {/* YOUTUBE */}
      {relic.youtube && (
        <div className="aspect-video mb-12 rounded-xl overflow-hidden">
          <iframe src={relic.youtube.replace("youtu.be","www.youtube.com/embed")} className="w-full h-full" allowFullScreen />
        </div>
      )}

      {/* ⚔️ SONG */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">⚔️ SONG</h2>
        <pre className="whitespace-pre-wrap text-zinc-300 leading-relaxed font-sans">
          {relic.lyrics}
        </pre>
      </section>

      {/* 📖 CHRONICLE */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">📖 CHRONICLE</h2>
        <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{relic.chronicle}</p>
      </section>

      {/* ✝️ WORD */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">✝️ WORD — {relic.scripture}</h2>
        <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{relic.wordStudy}</p>
        <p className="mt-6 font-bold">The blade is for separating truth from lies.</p>
      </section>

      {/* 📚 WALK */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">📚 WALK</h2>
        <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{relic.walk}</p>
      </section>

      {/* 🎧 SOUND */}
      <section className="mb-12 p-6 border border-zinc-800 rounded-xl">
        <h2 className="text-xl font-bold mb-2">🎧 SOUND</h2>
        <p className="text-sm text-zinc-400">{relic.sound}</p>
        {relic.soundNotes && <p className="text-xs text-zinc-500 mt-2">{relic.soundNotes}</p>}
      </section>

      <CanonFooter />
      <p className="text-center text-xs text-zinc-600 mt-4 tracking-widest">
        Hear → Understand → Root → Live
      </p>
    </article>
  )
}
