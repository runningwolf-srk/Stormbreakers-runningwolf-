// @ts-nocheck
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',padding:60,fontFamily:'serif'}}>
      <h1 style={{letterSpacing:6,fontSize:28}}>RUNNING WOLF STORMBREAKERS</h1>
      
      <div style={{display:'flex',gap:20,marginTop:30,opacity:0.8}}>
        <Link href="/armory" style={{color:'#f5f5dc',textDecoration:'none'}}>⚔️ Armory</Link>
        <Link href="/chronicles" style={{color:'#f5f5dc',textDecoration:'none'}}>📖 Chronicles</Link>
        <Link href="/word" style={{color:'#f5f5dc',textDecoration:'none'}}>✝️ Word</Link>
        <Link href="/books" style={{color:'#f5f5dc',textDecoration:'none'}}>📚 Books</Link>
      </div>

      <p style={{marginTop:80,fontSize:22,letterSpacing:3}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>

      <p style={{marginTop:30,lineHeight:1.8,opacity:0.7,maxWidth:600}}>
        ⚔️ The Songs are Relics.<br/>
        📖 The Chronicles are Testimony.<br/>
        ✝️ The Word is Authority.<br/>
        📚 The Books are Transformation.
      </p>

      <p style={{marginTop:30,letterSpacing:2,opacity:0.9}}>Hear → Understand → Root → Live = Worship → Story → Foundation → Application</p>

      <div style={{marginTop:50,display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,maxWidth:500}}>
        <Link href="/armory" style={{border:'1px solid #222',padding:16,background:'#111',color:'#f5f5dc',textDecoration:'none'}}>⚔️ Hear — Armory</Link>
        <Link href="/chronicles" style={{border:'1px solid #222',padding:16,background:'#111',color:'#f5f5dc',textDecoration:'none'}}>📖 Understand — Chronicles</Link>
        <Link href="/word" style={{border:'1px solid #222',padding:16,background:'#111',color:'#f5f5dc',textDecoration:'none'}}>✝️ Root — The Word</Link>
        <Link href="/books" style={{border:'1px solid #222',padding:16,background:'#111',color:'#f5f5dc',textDecoration:'none'}}>📚 Live — Books</Link>
      </div>
    </main>
  )
}
