// @ts-nocheck
'use client'
import Link from 'next/link'

export default function Error({ error, reset }: any) {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,textAlign:'center',fontFamily:'serif'}}>
      <div style={{maxWidth:520,width:'100%'}}>
        <h1 style={{fontSize:28,letterSpacing:4,fontWeight:700}}>FORGE INTERRUPTED</h1>
        <p style={{marginTop:8,fontSize:13,letterSpacing:3,opacity:0.6}}>THE RELIC SLIPPED</p>
        <button onClick={()=>reset()} style={{marginTop:28,width:'100%',padding:'18px 20px',background:'#f5f5dc',color:'#0a0a0a',border:0,cursor:'pointer',fontWeight:900,letterSpacing:2,fontSize:13}}>⚒️ REFORGE THE BLADE</button>
        <div style={{marginTop:12,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          <Link href="/armory" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>⚔️ Hear — Armory</Link>
          <Link href="/chronicles" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📖 Understand — Chronicles</Link>
          <Link href="/word" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>✝️ Root — The Word</Link>
          <Link href="/books" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📚 Live — Books</Link>
        </div>
      </div>
    </main>
  )
}
