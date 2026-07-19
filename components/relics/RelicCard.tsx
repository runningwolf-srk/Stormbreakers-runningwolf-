// components/relics/RelicCard.tsx - FIXED EXPORT
import Link from 'next/link'

export type Relic = {
  id: number
  label: string
  chapterLabel: string
  title: string
  song: string
  theme: string
  scripture: string
  declaration: string
  reflection: string
  story: string
  artwork?: string
  audioPreview?: string
}

export function RelicCard({ relic }: { relic: Relic }) {
  const paddedId = String(relic.id).padStart(2, '0')

  return (
    <div className="group relative p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center">
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

      <p className="text-amber-400/60 text-xs tracking-[0.3em] font-black">{relic.label}</p>
      <h3 className="text-amber-100 font-black text-xl mt-1">{relic.title}</h3>

      <div className="mt-4 w-full h-48 bg-stone-800 rounded-xl border border-amber-400/10 overflow-hidden flex items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900">
        <p className="text-amber-200/10 text-xs tracking-widest">ARTWORK: {relic.title.toUpperCase()}</p>
      </div>

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

        <Link href={`/chronicles/${relic.id}`} className="block w-full py-3 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-black tracking-[0.2em] text-center">
          LISTEN TO "{relic.song.toUpperCase()}"
        </Link>
      </div>

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
        <div className="p-3 bg-amber-500/5 border-l-2 border-amber-400/30 rounded-r-lg">
          <p className="text-amber-400/50 text-xs tracking-[0.2em] font-black">DECLARATION</p>
          <p className="text-amber-100/80 text-xs italic mt-1">{relic.story}</p>
        </div>
      </div>
    </div>
  )
}
