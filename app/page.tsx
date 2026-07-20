// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'

export default function HomePage() {
  const featured = CANON.filter((r:any)=> ['stormbreak','lions-roar','wolf-fang','wolf-blade'].includes(r.slug))

  return (
    <main className="px-4 py-16 max-w-6xl mx-auto">
      {/* HERO */}
      <div className="text-center">
        <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">Running Wolf Stormbreakers</p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4">STORM<br/>BREAKERS</h1>
        <p className="mt-4 text-zinc-400 tracking-widest">16 SONGS • 16 BATTLES • ONE TESTIMONY • ONE KING</p>
        <p className="mt-2 text-amber-400 font-mono text-sm">The voice of the LORD thunders over the waters. — Psalm 29:3</p>
        
        <div className="flex gap-3 justify-center mt-8">
          <Link href="/journey" className="px-6 py-3 bg-white text-black rounded-full font-bold">Enter Journey</Link>
          <Link href="/armory" className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full font-bold">Enter Armory</Link>
        </div>
      </div>

      {/* HEAR • UNDERSTAND • ROOT — Interactive */}
      <div className="grid md:grid-cols-3 gap-4 mt-20">
        <Link href="/armory" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/30">
          <p className="text-2xl">⚔️</p><h3 className="font-black mt-3">HEAR</h3><p className="text-xs text-zinc-500 uppercase">Enter The Armory</p><p className="text-xs text-zinc-400 mt-1">Stormbreak • Wolf Fang • Wolf Blade • Thunder Drums</p>
        </Link>
        <Link href="/chronicles" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30">
          <p className="text-2xl">📖</p><h3 className="font-black mt-3">UNDERSTAND</h3><p className="text-xs text-zinc-500 uppercase">Read The Chronicles</p><p className="text-xs text-zinc-400 mt-1">Stories • Battles • Testimonies • Cinematic Scenes</p>
        </Link>
        <Link href="/word" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/30">
          <p className="text-2xl">✝️</p><h3 className="font-black mt-3">ROOT</h3><p className="text-xs text-zinc-500 uppercase">Study The Word</p><p className="text-xs text-zinc-400 mt-1">Genesis 1:2 • 1 Peter 1:7 • Hebrews 4:12 • Psalm 127:4</p>
        </Link>
      </div>

      {/* FEATURED RELICS — NEW CANON ONLY */}
      <div className="mt-20">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500">Featured Relics — New Canon</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {CANON.slice(0,4).map((r:any)=>(
            <Link key={r.slug} href={`/chronicles/${r.slug}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex gap-4 hover:border-white/20">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-black shrink-0" style={{background: r.color+'15', border:`1px solid ${r.color}30`, color:r.color}}>{r.symbol}</div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{color:r.color}}>{r.title} • {r.scriptureRef}</p>
                  <p className="text-sm text-zinc-400 italic mt-1">"{r.scriptureText}"</p>
                  <p className="text-sm text-zinc-200 mt-2">"{r.hook}"</p>
                  <p className="text-xs text-zinc-500 mt-1">{r.purpose}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 4 ACTS */}
      <div className="mt-20 grid md:grid-cols-4 gap-4">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5"><p className="text-xs uppercase text-sky-400">ACT I — Awakening</p><p className="text-sm mt-2 text-zinc-300">First Song • Stormbreak • Awakening • Ashes to Altar</p><p className="text-xs text-zinc-500 mt-2">The encounter. God in the storm.</p></div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5"><p className="text-xs uppercase text-emerald-400">ACT II — Transformation</p><p className="text-sm mt-2 text-zinc-300">Fire Forged • Healing Tide • Wolf Fang • Identity Restored</p><p className="text-xs text-zinc-500 mt-2">Rebuilding identity.</p></div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5"><p className="text-xs uppercase text-red-400">ACT III — Warfare</p><p className="text-sm mt-2 text-zinc-300">Lion's Roar • Wolf Blade • Thunder Drums • War Cry</p><p className="text-xs text-zinc-500 mt-2">Walking in authority.</p></div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5"><p className="text-xs uppercase text-amber-400">ACT IV — Calling</p><p className="text-sm mt-2 text-zinc-300">Spirit Mantle • Tower of One • Running Wolf • Legacy</p><p className="text-xs text-zinc-500 mt-2">Carrying Kingdom forward.</p></div>
      </div>

      {/* FINAL MEDIA STRUCTURE PREVIEW */}
      <div className="mt-20 p-6 bg-amber-950/10 border border-amber-900/20 rounded-2xl">
        <p className="text-xs uppercase tracking-widest text-amber-400">Final Media Stage — Ready</p>
        <p className="text-sm text-zinc-400 mt-2">Each relic now has: Title • Relic Number • Act • Scripture • ScriptureText • Testimony Moment • Purpose • Hook • Cinematic Scene • Sound Identity • Artwork • Audio • YouTube • Lyrics</p>
        <p className="text-xs text-zinc-500 mt-2">Add files to /public/artwork/ and /public/audio/ — site becomes automatic. No more rebuilds.</p>
      </div>
    </main>
  )
}
