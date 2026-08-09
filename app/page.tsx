export default function Cover() {
  return (
    <div style={{background:'#080808', color:'#e5e5e5', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
      <div style={{maxWidth:520, width:'100%', background:'#121212', border:'1px solid #222', borderRadius:16, padding:32, textAlign:'center'}}>
        <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" style={{width:140, height:140, borderRadius:100, border:'2px solid #333', objectFit:'cover'}} />
        <p style={{marginTop:16, letterSpacing:6, fontSize:12, color:'#888'}}>RUNNINGWOLF</p>
        <p style={{letterSpacing:4, fontSize:10, color:'#8a6a3a', marginTop:6}}>KEEPER OF THE CHRONICLE</p>
        <h1 style={{fontSize:36, fontWeight:900, marginTop:20, letterSpacing:2}}>STORMBREAKERS</h1>
        <p style={{letterSpacing:5, fontSize:11, color:'#9a7a4a', marginTop:6}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:28, display:'grid', gap:10}}>
          <a href="/music" style={{display:'block', padding:14, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a', color:'white', textDecoration:'none'}}>HALL OF RELICS</a>
          <a href="/word" style={{display:'block', padding:14, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a', color:'white', textDecoration:'none'}}>THE WORD — LIVE NOW</a>
          <a href="/chronicle" style={{display:'block', padding:14, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a', color:'white', textDecoration:'none'}}>THE CHRONICLE</a>
          <a href="/library" style={{display:'block', padding:14, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a', color:'white', textDecoration:'none'}}>THE LIBRARY</a>
        </div>
      </div>
    </div>
  )
}
