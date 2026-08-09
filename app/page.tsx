export default function Cover() {
  return (
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{position:'relative', width:'100%', maxWidth:640, margin:'0 auto', background:'#000', borderRadius:'0 0 16px 16px', overflow:'hidden'}}>
        <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" style={{width:'100%', height:'auto', maxHeight:'24vh', objectFit:'cover', objectPosition:'top center', display:'block'}} />
        <div style={{position:'absolute', bottom:0, left:0, right:0, height:'50%', background:'linear-gradient(to top, #050507 20%, rgba(5,5,7,0) 100%)'}}></div>
      </div>
      <div style={{maxWidth:640, margin:'0 auto', padding:'10px 18px 20px', textAlign:'center'}}>
        <p style={{letterSpacing:4, fontSize:7, color:'#9a8a6e'}}>RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <p style={{letterSpacing:1, fontSize:8, color:'#6a6252', marginTop:2, fontStyle:'italic'}}>Guide • Witness • Storyteller • Keeper of Pages</p>
        <h1 style={{fontSize:28, fontWeight:900, marginTop:10, letterSpacing:2, lineHeight:1}}>STORMBREAKERS</h1>
        <p style={{letterSpacing:4, fontSize:8, color:'#b88a3a', marginTop:4, fontWeight:700}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:10, textAlign:'left', borderLeft:'2px solid #2a2318', paddingLeft:10}}>
          <p style={{fontSize:11, lineHeight:1.4}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
          <p style={{color:'#b88a3a', fontSize:9, marginTop:3}}>The Word guides the blade.</p>
        </div>
        <div style={{marginTop:14, display:'grid', gap:7}}>
          <a href="/music" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', textAlign:'center', fontSize:11, letterSpacing:2}}>⚔️ HALL OF RELICS</a>
          <a href="/word" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', textAlign:'center', fontSize:11, letterSpacing:2}}>✝️ THE WORD — LIVE NOW</a>
          <a href="/chronicle" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', textAlign:'center', fontSize:11, letterSpacing:2}}>📖 THE CHRONICLE</a>
          <a href="/library" style={{display:'block', padding:11, background:'#141210', border:'1px solid #2a2318', borderRadius:11, color:'#e8e0c8', textDecoration:'none', textAlign:'center', fontSize:11, letterSpacing:2}}>📚 THE LIBRARY</a>
        </div>
        <p style={{marginTop:12, fontSize:7, color:'#5a4e3a', letterSpacing:3}}>19 RELICS · 3 REVEALED · 16 SEALED</p>
      </div>
    </div>
  )
      }
