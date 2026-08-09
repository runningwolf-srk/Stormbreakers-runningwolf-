export default function Home(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', padding:'0 0 24px 0'}}>
      <div style={{width:'100%', maxWidth:480, margin:'0 auto', padding:'12px 12px 0 12px'}}>
        <div style={{width:'100%', borderRadius:16, overflow:'hidden', border:'1px solid #2a2318', boxShadow:'0 0 40px rgba(184,138,58,0.25)', background:'#0a0806'}}>
          <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" alt="RunningWolf Keeper" style={{width:'100%', height:'auto', display:'block', objectFit:'cover'}} />
        </div>
        <p style={{fontSize:11, letterSpacing:4, color:'#7a6a4e', marginTop:16}}>RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <p style={{fontSize:10, letterSpacing:1, color:'#5a4a32', marginTop:4, fontStyle:'italic'}}>Guide • Witness • Storyteller • Keeper of Pages</p>
        <p style={{fontSize:10, color:'#6a5a42', marginTop:10, maxWidth:320, marginLeft:'auto', marginRight:'auto', lineHeight:1.4}}>Not the hero above the story. The power comes from the King, not the warrior.</p>
      </div>
      <div style={{width:'100%', maxWidth:360, padding:'0 24px', marginTop:28, display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1 style={{fontSize:40, fontWeight:900, letterSpacing:2, lineHeight:1}}>STORMBREAKERS</h1>
        <p style={{fontSize:13, letterSpacing:6, color:'#b88a3a', marginTop:8, fontWeight:700}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:20, borderLeft:'2px solid #2a2318', paddingLeft:12, textAlign:'left', width:'100%'}}>
          <p style={{fontSize:13, lineHeight:1.5}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
          <p style={{fontSize:11, color:'#b88a3a', marginTop:8, fontStyle:'italic'}}>The Word guides the blade.</p>
        </div>
        <div style={{marginTop:22, display:'grid', gap:10, width:'100%'}}>
          <a href="/hall" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>Hall of Relics — 3 Revealed</a>
          <a href="/word" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>The Word — Scripture Live</a>
          <a href="/chronicle" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>Chapter I — The Keeper's Oath</a>
          <a href="/library" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>The Library — Expanding</a>
        </div>
        <p style={{fontSize:9, marginTop:22, color:'#6a5a42', letterSpacing:3}}>THE KING → THE WORD → THE CHRONICLE → THE KEEPER → THE RELICS</p>
      </div>
    </div>
  )
}
