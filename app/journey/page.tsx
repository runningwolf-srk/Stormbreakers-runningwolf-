import Link from 'next/link'
import { CANON } from '@/lib/constants'
import { RelicIcon } from '@/components/relics/RelicIcon'

const ACTS = [
  { act: "ACT I — THE AWAKENING", desc: "The person encounters God in the storm.", ids: [1,2,3,4] },
  { act: "ACT II — THE TRANSFORMATION", desc: "From surviving to understanding who they are in Christ.", ids: [5,6,7,8] },
  { act: "ACT III — THE WARFARE", desc: "Stops only fighting battles and starts walking in purpose.", ids: [9,10,11,12] },
  { act: "ACT IV — THE CALLING", desc: "Restored, called, and sent. Passing faith forward.", ids: [13,14,15,16] },
]

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100">THE JOURNEY</h1>
          <p className="text-amber-400/60 tracking-[0.4em] text-xs font-black mt-3">16 CHAPTERS • 4 ACTS • 1 STORY</p>
          <p className="text-amber-400/30 text-xs tracking-[0.3em] mt-3">SCRIPTURE → TESTIMONY → RELIC → SONG</p>
          <p className="text-amber-200/40 text-sm italic mt-6 max-w-xl mx-auto">The story doesn't end with "I survived." It ends with "I was restored, called, and sent."</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400/20 via-amber-400/10 to-amber-400/5"></div>
          {ACTS.map((act) => (
            <div key={act.act} className="mb-16">
              <div className="ml-16 mb-6"><p className="text-amber-400 font-black tracking-[0.3em] text-sm">{act.act}</p><p className="text-amber-200/40 text-xs italic mt-1">{act.desc}</p></div>
              <div className="space-y-6">
                {act.ids.map(id => {
                  const r = CANON.find(x => x.id === id)!
                  return (
                    <Link key={id} href={`/armory/${id}`} className="ml-16 block group">
                      <div className="relative">
                        <div className="absolute -left-12 top-6 w-3 h-3 rounded-full bg-stone-800 border-2 border-amber-400/30 group-hover:bg-amber-400 transition"></div>
                        <div className="p-5 bg-stone-900/40 border border-amber-400/10 rounded-xl group-hover:border-amber-400/30 transition">
                          <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-400/10 flex items-center justify-center text-amber-400"><RelicIcon symbol={r.symbol} className="w-5 h-5" /></div><div><p className="text-amber-400/50 text-xs font-black tracking-widest">{r.relicLabel}</p><p className="text-amber-100 font-black">{r.chapterLabel}: {r.title}</p></div></div>
                          <p className="text-stone-400 text-xs mt-3 italic">"{r.reflection}"</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
          <div className="ml-16 mt-10 p-6 bg-amber-500/5 border border-amber-400/20 rounded-xl text-center"><p className="text-amber-400 font-black tracking-[0.3em] text-xs">THE LEGACY</p><p className="text-amber-100 italic mt-2">"The fire that never goes out must be passed on."</p><p className="text-amber-200/30 text-xs mt-3">Psalm 145:4 (ESV)</p></div>
        </div>
        <div className="flex gap-3 justify-center mt-16"><Link href="/armory" className="px-8 py-3 bg-amber-400 text-stone-950 font-black text-xs rounded-full">ENTER THE ARMORY</Link></div>
      </div>
    </main>
  )
}
