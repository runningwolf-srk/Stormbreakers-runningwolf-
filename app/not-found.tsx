// @ts-nocheck
export default function NotFound() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40}}>
      <div style={{textAlign:'center',maxWidth:600}}>
        <h1>THE RELIC HAS NOT BEEN REVEALED</h1>
        <p style={{opacity:0.7,marginTop:20}}>This path is still being forged.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:30}}>
          <a href="/armory" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>⚔️ Return to Armory</a>
          <a href="/chronicles" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>📖 Open Chronicles</a>
          <a href="/word" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>✝️ Study the Word</a>
          <a href="/books" style={{border:'1px solid #333',padding:12,color:'#f5f5dc',textDecoration:'none',background:'#111'}}>📚 Continue the Walk</a>
        </div>
      </div>
    </main>
  )
}
