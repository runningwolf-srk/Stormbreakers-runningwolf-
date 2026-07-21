// @ts-nocheck
export default function NotFound() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,fontFamily:'serif'}}>
      <div style={{maxWidth:600,textAlign:'center'}}>
        <h1 style={{fontSize:32,letterSpacing:4}}>THE RELIC HAS NOT BEEN REVEALED</h1>
        <p style={{marginTop:20,opacity:0.7,lineHeight:1.6}}>
          This path is still being forged.<br/>
          The song is not written. The chapter is not opened. The King is still building.
        </p>
        <div style={{marginTop:40,display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
          <a href="/" style={{border:'1px solid #333',padding:'10px 20px',color:'#a78bfa',textDecoration:'none'}}>Return to the journey</a>
        </div>
        <div style={{marginTop:30,display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,textAlign:'left',opacity:0.8}}>
          <a href="/armory" style={{color:'#f5f5dc',textDecoration:'none',border:'1px solid #222',padding:12}}>⚔️ Armory — Songs become Relics</a>
          <a href="/chronicles" style={{color:'#f5f5dc',textDecoration:'none',border:'1px solid #222',padding:12}}>📖 Chronicles — Relics become Testimony</a>
          <a href="/word" style={{color:'#f5f5dc',textDecoration:'none',border:'1px solid #222',padding:12}}>✝️ The Word — Testimony returns to Scripture</a>
          <a href="/books" style={{color:'#f5f5dc',textDecoration:'none',border:'1px solid #222',padding:12}}>📚 Books — Scripture becomes Practice</a>
        </div>
      </div>
    </main>
  )
}
