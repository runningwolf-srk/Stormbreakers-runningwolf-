// @ts-nocheck
'use client'
import { useEffect } from 'react'
export default function Error({ error, reset }: any) {
  useEffect(()=>{ console.error('FORGE_ERROR', error?.digest) },[error])
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,textAlign:'center'}}>
      <div>
        <h1>FORGE INTERRUPTED — THE RELIC SLIPPED</h1>
        <button onClick={()=>reset()} style={{marginTop:20,padding:'14px 28px',background:'#f5f5dc',color:'#0a0a0a',border:0,fontWeight:700}}>⚒️ REFORGE THE BLADE</button>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:20,maxWidth:500}}>
          <a href="/armory" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>⚔️ Return to Armory</a>
          <a href="/chronicles" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>📖 Open Chronicles</a>
          <a href="/word" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>✝️ Study the Word</a>
          <a href="/books" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>📚 Continue the Walk</a>
        </div>
      </div>
    </main>
  )
}
