import Link from 'next/link'
import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/relics/RelicIcon'
import { BibleFooter } from '@/components/BibleFooter'

export default function RelicPage({ params }: { params: { id: string } }) {
  const r = CANON.find(x => x.id === Number(params.id)) || CANON[0]
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/armory" className="text-amber-400/40 text-xs mb-8 inline-block">← BACK TO ARMORY</Link>
        <div className="text-center mb-8"><div className="w-20 h-20 mx-auto rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-4"><RelicIcon symbol={r.symbol} className="w-10 h-10" /></div><p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">{r.relicLabel}</p><p className="text-amber-400/30 text-xs mt-1">{String(r.id).padStart(2,'0')} / 16 • {r.chapterCaps}</p><h1 className="text-4xl font-black text-amber-100 mt-3">{r.title}</h1></div>
        <div className="w-full h-80 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 rounded-2xl border border-amber-400/10 flex flex-col items-center justify-center gap-4 mb-6"><RelicIcon symbol={r.symbol} className="w-20 h-20 text-amber-400/20" /><p className="text-amber-400/20 text-xs tracking-[0.4em] font-black">{r.title.toUpperCase()}</p></div>
        <div className="p-5 bg-stone-900/60 border border-amber-400/10 rounded-xl mb-6"><p className="text-amber-400/40 text-xs tracking-[0.3em] font-black">SONG</p><p className="text-amber-100 font-black text-lg mt-1">{r.song}</p><audio controls className="w-full mt-3 h-10 rounded"><source src={`/audio/${String(r.id).padStart(2,'0')}-preview.mp3`} /></audio></div>
        <div className="p-6 bg-amber-500/5 border border-amber-400/20 rounded-xl mb-6"><p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">SCRIPTURE</p><p className="text-amber-300 font-bold mt-2">{r.ref}</p><p className="text-amber-100 italic mt-3 text-lg leading-relaxed">"{r.verse}"</p></div>
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6"><p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">TESTIMONY</p><p className="text-amber-100/80 italic mt-3">"{r.reflection}"</p><p className="text-stone-300 text-sm leading-relaxed mt-4">{r.story}</p></div>
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6"><p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">BEHIND THE SONG</p><p className="text-stone-300 text-sm mt-3">{r.behind}</p></div>
        <div className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl mb-6"><p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">LYRICS</p><p className="text-stone-300 text-sm italic mt-3 whitespace-pre-line">{r.lyrics}</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"><div className="p-5 bg-stone-900 border border-amber-400/20 rounded-xl"><p className="text-amber-400 text-xs tracking-[0.3em] font-black">DECLARATION</p><p className="text-amber-100 font-bold mt-3">"{r.declaration}"</p></div><div className="p-5 bg-amber-500/5 border border-amber-400/20 rounded-xl"><p className="text-amber-400 text-xs tracking-[0.3em] font-black">PRAYER</p><p className="text-amber-100/80 italic text-sm mt-3">"{r.prayer}"</p></div></div>
        <p className="text-center text-amber-100/50 text-xs italic">This is my story — anchored in Scripture.<br/>These are my songs — rooted in the Word.</p>
        <BibleFooter />
      </div>
    </main>
  )
}
