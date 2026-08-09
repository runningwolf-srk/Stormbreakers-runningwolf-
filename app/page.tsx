export default function Cover() {
  return (
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{width:'100%', maxWidth:640, margin:'0 auto', background:'#000', borderRadius:'0 0 14px 14px', overflow:'hidden'}}>
        <div style={{width:'100%', height:82, overflow:'hidden', position:'relative'}}>
          <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 42%', display:'block'}} alt="Stormbreakers" />
          <div style={{position:'absolute', bottom:0, left:0, right:0, height:40, background:'linear-gradient(to top, #050507, rgba(0,0,0,0))'}}></div>
        </div>
      <div style={{maxWidth:640, margin:'0 auto', padding:'14px 18px 24px', textAlign:'center'}}>
        <p style={{letterSpacing:4, fontSize:7, color:'#9a8a6e'}}>RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <h1 style={{fontSize:26, fontWeight:900, marginTop:10, letterSpacing:2}}>STORMBREAKERS</h1>
        <p style={{letterSpacing:4, fontSize:8, color:'#b88a3a', marginTop:6}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:12, textAlign:'left', borderLeft:'2px solid #2a2318', paddingLeft:10}}>
          <p style={{fontSize:11}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
          <p style={{color:'#b88a3a', fontSize:9, marginTop:4}}>The Word guides the blade.</p>
        </div>
        <div style={{marginTop:28, display:'grid', gap:9}}>
          <a href="/music" style={{display:'block', padding:13, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:12, fontWeight:700}}>🎵 HALL OF RELICS</a>
          <a href="/word" style={{display:'block', padding:13, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:12}}>THE WORD — LIVE NOW</a>
          <a href="/chronicle" style={{display:'block', padding:13, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:12}}>THE CHRONICLE</a>
          <a href="/library" style={{display:'block', padding:13, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:12}}>THE LIBRARY</a>
        </div>
      </div>
    </div>
  )
      }
