export default function Cover() {
  return (
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{width:'100%', maxWidth:640, margin:'0 auto', background:'#000', borderRadius:'0 0 14px 14px', overflow:'hidden'}}>
        <div style={{width:'100%', height:160, overflow:'hidden', position:'relative'}}>
          <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block'}} />
          <div style={{position:'absolute', bottom:0, left:0, right:0, height:60, background:'linear-gradient(to top, #050507, rgba(0,0,0,0))'}}></div>
        </div>
      <div style={{maxWidth:640, margin:'0 auto', padding:'10px 18px 20px', textAlign:'center'}}>
        <p style={{letterSpacing:4, fontSize:7, color:'#9a8a6e'}}>RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <h1 style={{fontSize:26, fontWeight:900, marginTop:8, letterSpacing:2}}>STORMBREAKERS</h1>
        <p style={{letterSpacing:4, fontSize:8, color:'#b88a3a', marginTop:4}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:10, textAlign:'left', borderLeft:'2px solid #2a2318', paddingLeft:10}}>
          <p style={{fontSize:11}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
          <p style={{color:'#b88a3a', fontSize:9, marginTop:3}}>The Word guides the blade.</p>
        </div>
        <div style={{marginTop:14, display:'grid', gap:7}}>
          <a href="/music" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:11}}>⚔️ HALL OF RELICS</a>
          <a href="/word" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:11}}>✝️ THE WORD — LIVE NOW</a>
          <a href="/chronicle" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:11}}>📖 THE CHRONICLE</a>
          <a href="/library" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', fontSize:11}}>📚 THE LIBRARY</a>
        </div>
      </div>
    </div>
  )
      }
