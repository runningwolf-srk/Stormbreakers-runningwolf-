// components/RelicCard.tsx - Living Artifact - 10/10 Presentation
import Link from 'next/link'

type RelicProps = {
  id: number
  label: string // RELIC 01 — THE FIRST SONG
  chapterLabel: string // CHAPTER 01 — WORSHIP BEGINS
  title: string // The Map
  song: string // A New Song
  theme: string // Worship
  scripture: string // Psalm 40:3
  declaration: string // He put a new song in my mouth.
  reflection: string // Psalm 23 wasn't poetry anymore. It was a map.
  story: string // Longer story for hover/modal
  artwork?: string // /images/relics/01-the-map.jpg
  audioPreview?: string // /audio/01-preview.mp3
  emblem?: string // Optional custom SVG component path
}

export default function RelicCard({ relic }: { relic: RelicProps }) {
  const paddedId = String(relic.id).padStart(2, '0')

  return (
    <div className="group relative p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:bg-stone-900/80 transition-all duration-300">
      
      {/* HEADER: Emblem + Numbering */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center group-hover:bg-amber-500/20 transition">
          {/* Replace with custom SVG per relic later */}
          <span className="text-amber-400 text-lg">
            {relic.id === 1 && "🎵"}
            {relic.id === 2 && "⚔️"}
            {relic.id === 3 && "🔥"}
            {relic.id === 4 && "✚"}
            {relic.id === 5 && "🩸"}
            {relic.id === 6 && "🔥"}
          </span>
        </div>
        <div className="text-right">
          <p className="text-amber-400/30 text-xs tracking-[0.3em] font-black">{paddedId} / 16</p>
          <p className="text-amber-400/50 text-xs tracking-widest font-black mt-1">{relic.chapterLabel}</p>
        </div>
      </div>

      {/* TITLE */}
      <p className="text-amber-400/60 text-xs tracking-[0.3em] font-black">{relic.label}</p>
      <h3 className="text-amber-100 font-black text-xl mt-1 tracking-tight">{relic.title}</h3>

      {/* ARTWORK - Cinematic */}
      <div className="mt-4 w-full h-48 bg-stone-800 rounded-xl border border-amber-400/10 overflow-hidden relative group-hover:border-amber-400/20 transition">
        {relic.artwork ? (
          <img src={relic.artwork} alt={relic.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
            <p className="text-amber-200/10 text-xs tracking-widest">ARTWORK: {relic.title.toUpperCase()}</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
      </div>

      {/* SONG + AUDIO PREVIEW */}
      <div className="mt-5 space-y-3">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p className="text-amber-400/40 tracking-[0.2em] font-black">SONG TITLE</p>
            <p className="text-amber-100 font-bold mt-1">{relic.song}</p>
          </div>
          <div>
            <p className="text-amber-400/40 tracking-[0.2em] font-black">THEME</p>
            <p className="text-amber-300 mt-1">{relic.theme}</p>
          </div>
        </div>

        {relic.audioPreview && (
          <audio controls className="w-full h-8 mt-2 rounded">
            <source src={relic.audioPreview} type="audio/mpeg" />
          </audio>
        )}

        <Link 
          href={`/chronicles/${relic.id}`}
          className="block w-full py-3 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-black tracking-[0.2em] text-center hover:bg-amber-500/20 transition"
        >
          LISTEN TO "{relic.song.toUpperCase()}"
        </Link>
      </div>

      {/* SCRIPTURE + DECLARATION + REFLECTION */}
      <div className="mt-5 pt-5 border-t border-amber-400/10 space-y-3">
        <div>
          <p className="text-amber-400/40 text-xs tracking-[0.2em] font-black">SCRIPTURE</p>
          <p className="text-amber-300 text-sm font-bold mt-1">{relic.scripture}</p>
          <p className="text-amber-100/70 italic text-sm mt-1">"{relic.declaration}"</p>
        </div>

        <div>
          <p className="text-amber-400/40 text-xs tracking-[0.2em] font-black">REFLECTION</p>
          <p className="text-stone-300 text-sm italic mt-1">"{relic.reflection}"</p>
        </div>

        {/* PRAYER / DECLARATION - NEW 10/10 LAYER */}
        <div className="p-3 bg-amber-500/5 border-l-2 border-amber-400/30 rounded-r-lg">
          <p className="text-amber-400/50 text-xs tracking-[0.2em] font-black">DECLARATION / PRAYER</p>
          <p className="text-amber-100/80 text-xs italic mt-1 leading-relaxed">{relic.story}</p>
        </div>
      </div>

      {/* CONNECTED CHRONICLE */}
      <div className="mt-5 flex justify-between items-center text-xs">
        <span className="text-amber-200/30">Connected: {relic.chapterLabel}</span>
        <Link href={`/chronicles/${relic.id}`} className="text-amber-400/60 hover:text-amber-400 tracking-widest font-black">
          READ CHAPTER →
        </Link>
      </div>

    </div>
  )
                                   }
