export default function Library(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{maxWidth:640, margin:'0 auto', padding:'20px 18px'}}>
        <a href="/" style={{color:'#9a8a6e', fontSize:11, textDecoration:'none', letterSpacing:2}}>← STORMBREAKERS</a>
        <h1 style={{fontSize:22, fontWeight:900, marginTop:16}}>THE LIBRARY</h1>
        <p style={{fontSize:10, color:'#b88a3a', letterSpacing:3, marginTop:4}}>EXPANDING</p>
        <div style={{marginTop:20, display:'grid', gap:10}}>
          <div style={{padding:14, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>Volumes — Coming</div>
          <div style={{padding:14, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>Devotionals — Coming</div>
          <div style={{padding:14, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>Study Guides — Coming</div>
          <div style={{padding:14, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>Artwork — Coming</div>
          <div style={{padding:14, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>Timeline — Coming</div>
        </div>
        <a href="/" style={{display:'block', marginTop:24, textAlign:'center', padding:12, background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#b88a3a', textDecoration:'none', fontSize:12}}>← Back to Cover</a>
      </div>
    </div>
  )
}
