// @ts-nocheck
import Link from 'next/link'
import { ALL_RELICS } from '@/data/armory'

export default function Armory() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',padding:60,fontFamily:'serif'}}>
      <h1 style={{letterSpacing:5}}>⚔️ ARMORY — SIXTEEN RELICS</h1>
      <p style={{opacity:0.6,marginTop:10}}>The Songs are Relics. Hear → Understand → Root → Live</p>
      
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:16,marginTop:40}}>
        {ALL_RELICS.map((r:any) => (
          <Link key={r.slug} href={`/armory/${r.slug}`} style={{border:'1px solid #222',padding:20,background:'#111',textDecoration:'none',color:'#f5f5dc',display:'block'}}>
            <div style={{fontSize:11,opacity:0.4}}>{r.num} • {r.status}</div>
            <div style={{fontSize:18,marginTop:6,fontWeight:700}}>{r.title}</div>
            <div style={{fontSize:12,opacity:0.6,marginTop:6}}>{r.sound}</div>
            <div style={{fontSize:12,opacity:0.5,marginTop:6}}>{r.scripture}</div>
          </Link>
        ))}
      </div>
    </main>
  )
}
