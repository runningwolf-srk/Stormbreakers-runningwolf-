// @ts-nocheck
import { ALL_RELICS } from '@/data/armory'
import Link from 'next/link'

export default function RelicPage({ params }: any) {
  const key = params.slug || params.id
  const relic = ALL_RELICS.find((r:any) => r.slug === key || r.id === key)

  if (!relic) {
    return (
      <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,textAlign:'center',fontFamily:'serif'}}>
        <div>
          <h1 style={{fontSize:26,letterSpacing:5}}>THE RELIC HAS NOT BEEN REVEALED</h1>
          <p style={{marginTop:18,opacity:0.65}}>This path is still being forged.<br/>The song is not written. The chapter is not opened.<br/>The walk is waiting.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:32}}>
            <Link href="/armory" style={{padding:'16px',background:'#f5f5dc',color:'#0a0a0a',textDecoration:'none',fontWeight:800}}>⚔️ HEAR — ARMORY</Link>
            <Link href="/chronicles" style={{padding:'16px',border:'1px solid #333',color:'#f5f5dc',textDecoration:'none'}}>📖 Understand — Chronicles</Link>
            <Link href="/word" style={{padding:'16px',border:'1px solid #333',color:'#f5f5dc',textDecoration:'none'}}>✝️ Root — The Word</Link>
            <Link href="/books" style={{padding:'16px',border:'1px solid #333',color:'#f5f5dc',textDecoration:'none'}}>📚 Live — Books</Link>
          </div>
          <p style={{marginTop:24,opacity:0.3,fontSize:11}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
        </div>
      </main>
    )
  }

  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',padding:60,fontFamily:'serif'}}>
      <Link href="/armory" style={{color:'#888',textDecoration:'none'}}>← Armory</Link>
      <div style={{marginTop:30}}>
        <div style={{fontSize:12,opacity:0.5}}>{relic.num} • {relic.status?.toUpperCase()} • {relic.scripture}</div>
        <h1 style={{fontSize:42,marginTop:10,letterSpacing:6}}>{relic.title.toUpperCase()}</h1>
        <p style={{opacity:0.6,marginTop:12}}>{relic.sound} — {relic.hook}</p>
      </div>

      {relic.status === 'unrevealed' ? (
        <div style={{marginTop:70,border:'1px solid #222',padding:50,textAlign:'center',background:'#111'}}>
          <h2 style={{letterSpacing:5}}>THE RELIC HAS NOT BEEN REVEALED</h2>
          <p style={{opacity:0.6,marginTop:20,lineHeight:1.8}}>This path is still being forged.<br/>The song is not written.<br/>The chapter is not opened.<br/>The walk is waiting.</p>
          <p style={{marginTop:30,fontSize:13,opacity:0.5}}>Practice seed: {relic.practice}</p>
        </div>
      ) : (
        <div style={{marginTop:60,display:'grid',gap:16}}>
          <div style={{border:'1px solid #333',padding:24,background:'#111'}}><h3>⚔️ SONG</h3><p style={{opacity:0.6,marginTop:8}}>{relic.title} — {relic.sound} — {relic.scripture}</p></div>
          <div style={{border:'1px solid #333',padding:24,background:'#111'}}><h3>📖 CHRONICLE</h3><p style={{opacity:0.6,marginTop:8}}>{relic.hook}</p></div>
          <div style={{border:'1px solid #333',padding:24,background:'#111'}}><h3>✝️ WORD — {relic.scripture}</h3></div>
          <div style={{border:'1px solid #333',padding:24,background:'#111'}}><h3>📚 WALK</h3><p style={{opacity:0.6,
