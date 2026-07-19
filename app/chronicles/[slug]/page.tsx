import Link from 'next/link'
import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/relics/RelicIcon'

export default function ChroniclePage({ params }: { params: { slug: string } }) {
  const id = Number(params.slug)
  const r = CANON.find((x) => x.id === id) || CANON[0]

  return (
    <main className="px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/chronicles" className="text-amber-400/40 text-xs mb-8 inline-block">
          ← BACK TO CHRONICLES
        </Link>

        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4">
            <RelicIcon symbol={r.symbol} className="w-10 h-10" />
          </div>
          <p className="text-amber-400/40 text-xs font-black tracking-[0.3em]">{r.act}</p>
          <p className="text-amber-400/60 text-xs font-black mt-1 tracking-[0.3em]">{r.relicLabel}</p>
          <h1 className="text-4xl font-black text-amber-100 mt-3">{r.chapterLabel}</h1>
          <p className="text-amber-100 font-bold mt-2">{r.title} • {r.song}</p>
          <p className="text-amber-200/30 text-xs mt-3 tracking-[0.2em]">SCRIPTURE → TESTIMONY → RELIC → SONG</p>
        </div>

        <div className="p-6 bg-amber-500/5 border border-amber-400/20 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs font-black">SCRIPTURE — {r.ref}</p>
          <p className="text-amber-100 italic mt-3">"{r.verse}"</p>
          {r.verse2 && <p className="text-amber-200/60 italic mt-3 text-sm">"{r.verse2}"</p>}
          {r.verse3 && <p className="text-amber-100 italic mt-3">"{r.verse3}"</p>}
          {r.verse4 && <p className="text-amber-300 font-bold mt-3">"{r.verse4}"</p>}
        </div>

        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs font-black">CHAPTER STORY</p>
          <p className="text-stone-200 text-sm leading-relaxed mt-3 whitespace-pre-line">{r.story}</p>
        </div>

        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs font-black">TESTIMONY</p>
          <p className="text-amber-100/80 italic mt-3">"{r.reflection}"</p>
        </div>

        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6">
          <p className="text-amber-400/50 text-xs font-black">BEHIND THE SONG</p>
          <p className="text-stone-300 text-sm mt-3">{r.behind}</p>
        </div>

        <div className="p-6 bg-stone-900 border border-amber-400/20 rounded-xl mb-8">
          <p className="text-amber-400 text-xs font-black">SONG — {r.song}</p>
          <p className="text-amber-100 text-sm mt-4 whitespace-pre-line font-bold">{r.lyrics}</p>
          <div className="mt-6 flex gap-2">
            <Link href={`/armory/${r.id}`} className="px-4 py-2 bg-amber-400 text-stone-950 rounded-full text-xs font-black">VIEW RELIC →</Link>
            <Link href={`/word`} className="px-4 py-2 bg-stone-800 border border-amber-400/20 text-amber-300 rounded-full text-xs font-black">STUDY WORD</Link>
          </div>
        </div>

        <div className="flex justify-between text-xs font-black">
          {r.id > 1? <Link href={`/chronicles/${r.id - 1}`} className="text-amber-400/60">← PREV</Link> : <span className="text-amber-400/20">START</span>}
          {r.id < 16? <Link href={`/chronicles/${r.id + 1}`} className="text-amber-400">NEXT →</Link> : <Link href="/journey" className="text-amber-400">JOURNEY MAP →</Link>}
        </div>
      </div>
    </main>
  )
            }
