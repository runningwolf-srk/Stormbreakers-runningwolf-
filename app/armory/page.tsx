import Link from 'next/link'
import { ALL_RELICS } from '@/data/armory'

export default function Armory() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',padding:60,fontFamily:'serif'}}>
      <h1 style={{letterSpacing:6}}>⚔️ ARMORY — SIXTEEN RELICS — LOCKED CANON</h1>
      <p style={{opacity:0.5,marginTop:8}}>I → XVI — One story — Hear → Understand → Root → Live</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:14,marginTop:40}}>
        {ALL_RELICS.map((r:any) => (
          <Link key={r.slug} href={`/armory/${r.slug}`} style={{border: r.status==='forged'? '1px solid #f5f5dc' : '1px solid #222', padding:18, background: r.status==='forged'? '#151515' : '#0f0f0f', textDecoration:'none', color:'#f5f5dc', display:'block'}}>
            <div style={{fontSize:10,opacity:0.4,letterSpacing:2}}>{r.num} • {r.status.toUpperCase()} • {r.category}</div>
            <div style={{fontSize:17,marginTop:8,fontWeight:700}}>{r.title.toUpperCase()}</div>
            <div style={{fontSize:11,opacity:0.5,marginTop:6}}>{r.scripture}</div>
            <div style={{fontSize:11,opacity:0.4,marginTop:6}}>{r.hook}</div>
          </Link>
        ))}
      </div>
      <div style={{marginTop:60,opacity:0.3,fontSize:11,letterSpacing:3}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING — VII Wolf Fang: Revealed • X Wolf Blade: Revealed • XI Thunder Drums: Seed</div>
    </main>
  )
}
