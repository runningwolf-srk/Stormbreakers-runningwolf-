import Link from 'next/link'
import { CANON, STYLE } from '@/lib/constants'

export default function WordPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-amber-100">THE WORD</h1>
          <p className="text-amber-400/60 text-xs tracking-[0.4em] font-black mt-3">THE FOUNDATION</p>
          <p className="text-amber-400/30 text-xs tracking-[0.3em] mt-3">{STYLE.FLOW}</p>
          <div className="max-w-2xl mx-auto mt-8 p-6 rounded-xl bg-stone-900/60 border border-amber-400/10">
            <p className="text-amber-100 text-sm leading-relaxed">Every theme in Stormbreakers begins with Scripture. The songs and testimonies point back to God's Word, not replace it.</p>
          </div>
        </div>
        <div className="space-y-4">
          {CANON.map((w) => (
            <div key={w.id} className="rounded-2xl bg-stone-900/40 border border-amber-400/10 overflow-hidden">
              <div className="p-6">
                <p className="text-amber-400 text-xs font-black">{w.act} • {w.theme}</p>
                <h3 className="text-lg font-black text-amber-100 mt-1">{w.ref} — {w.chapterLabel}</h3>
                <div className="mt-3 p-4 bg-stone-950/60 border border-amber-400/10 rounded-xl">
                  <p className="text-amber-100 text-sm italic">"{w.verse}"</p>
                </div>
                <p className="text-stone-400 text-xs italic mt-3">"{w.reflection}"</p>
                <Link href={`/armory/${w.id}`} className="inline-block mt-3 px-3 py-1 bg-amber-500/10 border border-amber-400/20 rounded-full text-xs text-amber-300">{w.relicLabel}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
