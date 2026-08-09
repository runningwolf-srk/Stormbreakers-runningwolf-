export default function Home(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:24}}>
      <p style={{fontSize:10, letterSpacing:6, color:'#9a8a6e'}}>STORMBREAKERS</p>
      <h1 style={{fontSize:42, fontWeight:900, marginTop:12, letterSpacing:2}}>THE OPEN CHRONICLE</h1>
      <p style={{fontSize:12, color:'#9a8a6e', marginTop:8, maxWidth:480}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
      <p style={{fontSize:11, fontStyle:'italic', color:'#b88a3a', marginTop:16}}>Not the King. Not the Savior. The witness inside it.</p>
      <div style={{marginTop:28, display:'grid', gap:10, width:'100%', maxWidth:320}}>
        <a href="/hall" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>Hall of Relics — 3 Revealed</a>
        <a href="/word" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>The Word — Scripture Live</a>
        <a href="/chronicle" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>Chapter I — The Keeper's Oath</a>
        <a href="/library" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>The Library — Expanding</a>
      </div>
      <p style={{fontSize:9, marginTop:24, color:'#6a5a42', letterSpacing:3}}>THE KING → THE WORD → THE CHRONICLE → THE KEEPER → THE RELICS</p>
    </div>
  )
}
