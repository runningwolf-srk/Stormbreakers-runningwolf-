export default function RelicReveal({ relic }: { relic: any }){
  return (
    <div className="border border-orange-500/30 bg-gradient-to-b from-orange-500/10 to-transparent rounded-[2rem] p-8 text-center">
      <div className="text-[10px] font-mono tracking-[0.3em] text-orange-300">⚔️ RELIC {relic.num} HAS ENTERED THE FORGE</div>
      <div className="text-4xl mt-4">{relic.symbol}</div>
      <h2 className="text-3xl font-black mt-3 tracking-tighter">{relic.title}</h2>
      <div className="text-xs font-mono text-white/40 mt-2">{relic.verse} • {relic.purpose}</div>
      <div className="mt-6 text-[10px] font-mono text-white/20">Symbol • Artwork • Scripture • Story • Song — Revealing soon</div>
    </div>
  )
}
