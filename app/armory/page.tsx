export default function Armory(){
return(
<div className="min-h-screen bg-black text-white p-6 max-w-6xl mx-auto">
<h1 className="text-4xl font-black">⚔️ ARMORY — 19 RELICS</h1>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<a href="/armory/runningwolf-blade" className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30">⚔️ RELIC I — BLADE — FORGED</a>
<a href="/armory/lord-of-lords" className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30">👑 RELIC II — LORD OF LORDS — FORGED</a>
<a href="/armory/blood-of-cross" className="border border-white/10 rounded-2xl p-6 bg-zinc-900/30">✝️ RELIC III — BLOOD OF CROSS — FORGING</a>
</div>
<div className="mt-8"><a href="/" className="border border-white/10 rounded-full px-6 py-3 inline-block text-xs">← BACK</a></div>
</div>
)
}
