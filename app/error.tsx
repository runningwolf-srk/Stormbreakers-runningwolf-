// @ts-nocheck
'use client'
export default function Error({ error, reset }: any) {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,textAlign:'center'}}>
      <div>
        <h1>FORGE INTERRUPTED — THE RELIC SLIPPED</h1>
        <button onClick={()=>reset()} style={{marginTop:20,padding:'14px 28px',background:'#f5f5dc',color:'#0a0a0a',border:0,fontWeight:700}}>⚒️ REFORGE</button>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:20}}>
          <a href="/armory" style={{border:'1px solid #333',padding:12,color:'#fff',textDecoration:'none',background:'#111'}}>⚔️ Armory</a>
          <a href="/books" style={{border:'1px solid #333',padding:12,color:'#fff',textDecoration:'none',background:'#111'}}>📚 Books</a>
        </div>
      </div>
    </main>
  )
}
