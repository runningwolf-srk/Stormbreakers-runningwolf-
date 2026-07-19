import Link from 'next/link'
import { CANON, STYLE } from '@/lib/constants'
import { RelicIcon } from '@/components/relics/RelicIcon'

export default function ChroniclesPage() {
  return (
    <main className="px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-amber-100">THE CHRONICLES</h1>
          <p className="text-amber-400/60 text-xs tracking-[0.4em] font-black mt-3">EXPERIENCE THE TESTIMONY</p>
          <p className="text-amber-400/30 text-xs tracking-[0.3em] mt-2">{STYLE.FLOW} • UNDERSTAND</p>
          <p className="text-amber-200/40 text-sm italic mt-4 max-w-2xl mx-auto">Every relic carries a story. Here is why each one exists.</p>
        </div>

        <div className="space-y-4">
          {CANON.map((r) => (
            <Link key={r.id} href={`/chronicles/${r.id}`} className="block p-6 bg-stone-900/40 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition group">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/10 flex items-center justify-center text-amber-400 shrink-0">
                  <RelicIcon symbol={r.symbol} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-amber-400/40 text-xs font-black tracking-widest">{r.act}</p>
                    <p className="text-amber-400/30 text-xs font-black">{String(r.id).padStart(2,'0')}/16</p>
                  </div>
                  <p className="text-amber-400/60 text-xs font-black mt-1 tracking-widest">{r.relicLabel}</p>
                  <h3 className="text-amber-100 font-black text-lg mt-1 group-hover:text-amber-200">{r.chapterLabel}: {r.title}</h3>
                  <p className="text-stone-400 text-sm italic mt-2">"{r.reflection}"</p>
                  <p className="text-amber-200/20 text-xs mt-2">{r.ref} • {r.song}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
