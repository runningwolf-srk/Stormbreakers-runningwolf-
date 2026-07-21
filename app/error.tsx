// @ts-nocheck
'use client'
export default function Error({ error, reset }: any) {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',padding:40}}>
      <h2>Forge interrupted — the relic slipped</h2>
      <p style={{opacity:0.6,marginTop:10}}>Digest: {error?.digest || 'unknown'}</p>
      <button onClick={()=>reset()} style={{marginTop:20,padding:'10px 20px',background:'#a78bfa',border:0,cursor:'pointer'}}>Reforge</button>
      <div style={{marginTop:20}}><a href="/" style={{color:'#a78bfa'}}>Return to the journey</a></div>
    </main>
  )
}
