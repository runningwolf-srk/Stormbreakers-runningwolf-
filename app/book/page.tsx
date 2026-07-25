import {ALL_RELICS} from "@/data/armory";import Link from "next/link";
export default function BooksPage(){
return(<div className="px-6 py-24 max-w-3xl mx-auto space-y-16">
<h1 className="text-3xl font-black tracking-widest text-center">📚 BOOKS</h1>
<p className="text-center text-xs tracking-[0.3em] text-zinc-500">Live the Practice — Transformation Library</p>

<div className="grid gap-6">
<div className="border border-amber-500/20 bg-amber-500/5 rounded-xl p-8 space-y-4">
<h2 className="font-bold tracking-widest">VII Wolf Fang — Devotional: Truth Over Lies</h2>
<p className="text-xs text-zinc-500">5-Day Challenge • Hebrews 4:12</p>
<p className="text-sm text-zinc-300 leading-7">Day 1: Identify the lie. Day 2: Find truth. Day 3: Speak truth aloud. Day 4: Declare. Day 5: Walk in truth. Prayer guide + journal prompts.</p>
<Link href="/armory/wolf-fang" className="text-xs text-amber-300">→ Open Relic</Link>
</div>

<div className="border border-blue-500/20 bg-blue-500/5 rounded-xl p-8 space-y-4">
<h2 className="font-bold tracking-widest">X Wolf Blade — Devotional: Surrender</h2>
<p className="text-xs text-zinc-500">3-Day Surrender Challenge • Psalm 29</p>
<p className="text-sm text-zinc-300 leading-7">Day 1: What I hold. Day 2: Break it, Lord. Day 3: His voice over mine. Includes prayer: Your voice does what my hands cannot.</p>
<Link href="/armory/wolf-blade" className="text-xs text-blue-300">→ Open Relic</Link>
</div>

<div className="border border-orange-500/20 bg-orange-500/5 rounded-xl p-8 space-y-4">
<h2 className="font-bold tracking-widest">XI Thunder Drums — Devotional: Endurance</h2>
<p className="text-xs text-zinc-500">7-Day Forge • James 1:2-4 • Industrial War Factory</p>
<p className="text-sm text-zinc-300 leading-7">Day 1-7: Stay 10 minutes longer each day. Finish next step. Declaration: This is not breaking me, this is building me. Complete, lacking nothing.</p>
<Link href="/armory/thunder-drums" className="text-xs text-orange-300">→ Open Relic</Link>
</div>

<div className="border border-zinc-800 rounded-xl p-8 text-center">
<p className="text-xs tracking-widest text-zinc-500">13 Unrevealed Relics — Devotionals, Challenges, Prayer Guides, Studies Coming as Canon Forges</p>
</div>
</div>

<div className="space-y-8 pt-8">
<h2 className="text-xl font-bold tracking-[0.25em]">📚 TODAY'S WALK — ALL RELICS</h2>
{ALL_RELICS.map(r=><div key={r.slug} className={`border ${r.color} p-6 rounded-xl space-y-3`}><p className="text-xs text-zinc-500">{r.num} {r.title.toUpperCase()} • {r.scripture} • {r.readTime}</p><p className="text-sm text-zinc-300 leading-7">{r.walk}</p><p className="text-xs font-bold text-white">DECLARATION: {r.declaration}</p></div>)}
</div>
</div>)}
