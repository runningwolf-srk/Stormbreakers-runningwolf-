export default function Cover() {
  return (
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{position:'relative', width:'100%', background:'#000'}}>
        <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" style={{width:'100%', height:'auto', maxHeight:'78vh', objectFit:'cover', objectPosition:'top center', display:'block'}} />
        <div style={{position:'absolute', bottom:0, left:0, right:0, height:'40%', background:'linear-gradient(to top, #050507 10%, rgba(5,5,7,0) 100%)'}}></div>
      </div>
      <div style={{maxWidth:640, margin:'0 auto', padding:'24px 20px 40px', textAlign:'center'}}>
        <p style={{letterSpacing:8, fontSize:10, color:'#9a8a6e', marginTop:8}}>RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <p style={{letterSpacing:2, fontSize:11, color:'#6a6252', marginTop:6, fontStyle:'italic'}}>Guide • Witness • Storyteller • Keeper of Pages</p>
        <p style={{fontSize:11, color:'#4a4436', marginTop:10, lineHeight:1.5}}>Not the hero above the story. The power comes from the King, not the warrior.</p>
        <h1 style={{fontSize:56, fontWeight:900, marginTop:36, letterSpacing:1, lineHeight:0.9}}>STORMBREAKERS</h1>
        <p style={{letterSpacing:6, fontSize:13, color:'#b88a3a', marginTop:12, fontWeight:700}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:28, textAlign:'left', borderLeft:'2px solid #2a2318', paddingLeft:16}}>
          <p style={{fontSize:18, lineHeight:1.4}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
          <p style={{color:'#b88a3a', fontSize:13, marginTop:10}}>The Word guides the blade.</p>
        </div>
        <div style={{marginTop:32, display:'grid', gap:12}}>
          <a href="/music" style={{display:'block', padding:18, background:'#141210', border:'1px solid #2a2318', borderRadius:14, color:'#e8e0c8', textDecoration:'none', textAlign:'center', letterSpacing:2}}>⚔️ HALL OF RELICS</a>
          <a href="/word" style={{display:'block', padding:18, background:'#141210', border:'1px solid #2a2318', borderRadius:14, color:'#e8e0c8', textDecoration:'none', textAlign:'center', letterSpacing:2}}>✝️ THE WORD — LIVE NOW</a>
          <a href="/chronicle" style={{display:'block', padding:18, background:'#141210', border:'1px solid #2a2318', borderRadius:14, color:'#e8e0c8', textDecoration:'none', textAlign:'center', letterSpacing:2}}>📖 THE CHRONICLE</a>
          <a href="/library" style={{display:'block', padding:18, background:'#141210', border:'1px solid #2a2318', borderRadius:14, color:'#e8e0c8', textDecoration:'none', textAlign:'center', letterSpacing:2}}>📚 THE LIBRARY</a>
        </div>
        <p style={{marginTop:28, fontSize:10, color:'#5a4e3a', letterSpacing:4}}>19 RELICS · 3 REVEALED · 16 SEALED</p>
      </div>
    </div>
  )
}
