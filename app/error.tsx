// @ts-nocheck
'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error('FORGE_ERROR', error?.digest, error)
  }, [error])

  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,fontFamily:'serif',textAlign:'center'}}>
      <div style={{maxWidth:560,width:'100%'}}>
        <h1 style={{fontSize:30,letterSpacing:3}}>FORGE INTERRUPTED — THE RELIC SLIPPED</h1>
        <p style={{marginTop:14,opacity:0.7}}>The fire cooled. The hammer missed. We are reforging now.</p>

        <button onClick={()=>reset()} style={{marginTop:28,width:'100%',padding:'16px 20px',background:'#f5f5dc',color:'#0a0a0a',border:0,cursor:'pointer',fontWeight:800,letterSpacing:1}}>⚒️ REFORGE THE BLADE</button>

        <div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          <a href="/armory" style={{border:'1px solid #2a2a2a',padding:'14px 10px',color:'#f5f5dc',textDecoration:'none',background:'#121212'}}>⚔️ Return to Armory</a>
          <a href="/chronicles" style={{border:'1px solid #2a2a2a',padding:'14px 10px',color:'#f5f5dc',textDecoration:'none',background:'#121212'}}>📖 Open Chronicles</a>
          <a href="/word" style={{border:'1px solid #2a2a2a',padding:'14px 10px',color:'#f5f5dc',textDecoration:'none',background:'#121212'}}>✝️ Study the Word</a>
          <a href="/books" style={{border:'1px solid #2a2a2a',padding:'14px 10px',color:'#f5f5dc',textDecoration:'none',background:'#121212'}}>📚 Continue the Walk</a>
        </div>

        <p style={{marginTop:28,opacity:0.4,fontSize:11,letterSpacing:2}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
        <p style={{marginTop:8,opacity:0.35,fontSize:11}}>Songs become Relics → Relics become Testimony → Testimony returns to Scripture → Scripture becomes Practice</p>
      </div>
    </main>
  )
}
