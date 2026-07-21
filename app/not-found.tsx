// @ts-nocheck
import Link from 'next/link'
export default function NotFound() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,textAlign:'center',fontFamily:'serif'}}>
      <div style={{maxWidth:540,width:'100%'}}>
        <h1 style={{fontSize:26,letterSpacing:5,fontWeight:700}}>THE RELIC HAS NOT BEEN REVEALED</h1>
        <p style={{marginTop:18,opacity:0.65,lineHeight:1.8}}>This path is still being forged.<br/>The song is not written. The chapter is not opened.<br/>The walk is waiting.</p>
        <Link href="/armory" style={{display:'block',marginTop:32,padding:'18px 20px',background:'#f5f5dc',color:'#0a0a0a',textDecoration:'none',fontWeight:900,letterSpacing:2,fontSize:13}}>⚔️ HEAR — ARMORY</Link>
        <div style={{marginTop:10,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          <Link href="/chronicles" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📖 Understand — Chronicles</Link>
          <Link href="/word" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>✝️ Root — The Word</Link>
          <Link href="/books" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📚 Live — Books</Link>
          <Link href="/" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>🏰 Return to the Journey</Link>
        </div>
        <p style={{marginTop:28,opacity:0.3,fontSize:10,letterSpacing:2}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
      </div>
    </main>
  )
}
