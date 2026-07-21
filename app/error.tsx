// @ts-nocheck
'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: any) {
  useEffect(()=>{ console.error('FORGE_ERROR', error?.digest) },[error])

  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,fontFamily:'serif',textAlign:'center'}}>
      <div style={{maxWidth:520,width:'100%'}}>
        <h1 style={{fontSize:28,letterSpacing:4,fontWeight:700}}>FORGE INTERRUPTED</h1>
        <p style={{marginTop:8,fontSize:14,letterSpacing:3,opacity:0.6}}>THE RELIC SLIPPED</p>
        <p style={{marginTop:18,opacity:0.65,lineHeight:1.6}}>The fire cooled. The hammer missed.<br/>We are reforging now.</p>

        {/* Primary action — distinct */}
        <button onClick={()=>reset()} style={{marginTop:32,width:'100%',padding:'18px 20px',background:'#f5f5dc',color:'#0a0a0a',border:0,cursor:'pointer',fontWeight:900,letterSpacing:2,fontSize:13}}>
          ⚒️ REFORGE THE BLADE
        </button>

        {/* Secondary nav — muted */}
        <div style={{marginTop:12,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          <a href="/armory" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>⚔️ Armory</a>
          <a href="/chronicles" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📖 Chronicles</a>
          <a href="/word" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>✝️ The Word</a>
          <a href="/books" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📚 Books</a>
        </div>

        <p style={{marginTop:28,opacity:0.3,fontSize:10,letterSpacing:2}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
      </div>
    </main>
  )
}
