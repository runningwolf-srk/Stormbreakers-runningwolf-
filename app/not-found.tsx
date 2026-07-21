// @ts-nocheck
export default function NotFound() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,fontFamily:'serif',textAlign:'center'}}>
      <div style={{maxWidth:540,width:'100%'}}>
        <h1 style={{fontSize:26,letterSpacing:5,fontWeight:700}}>THE RELIC HAS NOT BEEN REVEALED</h1>
        <p style={{marginTop:18,opacity:0.65,lineHeight:1.6}}>This path is still being forged.<br/>The song is not written. The chapter is not opened.</p>

        {/* Primary */}
        <a href="/armory" style={{display:'block',marginTop:32,padding:'18px 20px',background:'#f5f5dc',color:'#0a0a0a',textDecoration:'none',fontWeight:900,letterSpacing:2,fontSize:13}}>⚔️ RETURN TO ARMORY</a>

        {/* Secondary */}
        <div style={{marginTop:10,display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
          <a href="/chronicles" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📖 Chronicles</a>
          <a href="/word" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>✝️ The Word</a>
          <a href="/books" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>📚 Books</a>
          <a href="/" style={{border:'1px solid #222',padding:'12px 10px',color:'#888',textDecoration:'none',background:'#111',fontSize:13}}>🏰 Journey</a>
        </div>

        <p style={{marginTop:28,opacity:0.35,fontSize:11,lineHeight:1.5}}>Songs become Relics → Relics become Testimony →<br/>Testimony returns to Scripture → Scripture becomes Practice</p>
      </div>
    </main>
  )
}
