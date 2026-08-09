export default function Cover() {
  return (
    <div style={{background:'#0a0a0a', backgroundImage:'radial-gradient(circle at center, #1c1a16 0%, #080707 70%)', color:'#e5dcc8', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:16}}>
      <div style={{maxWidth:520, width:'100%', background:'linear-gradient(#151310, #0e0c0a)', border:'1px solid #2a2318', borderRadius:20, padding:32, textAlign:'center', boxShadow:'inset 0 0 0 1px #1a1712, 0 20px 60px rgba(0,0,0,0.8)'}}>
        <div style={{width:152, height:152, margin:'0 auto', borderRadius:100, padding:4, background:'linear-gradient(#3a3020, #1a1814)', border:'1px solid #4a3e28'}}>
          <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" style={{width:'100%', height:'100%', borderRadius:100, objectFit:'cover', display:'block'}} />
        </div>
        <p style={{marginTop:18, letterSpacing:8, fontSize:11, color:'#9a8a6e'}}>RUNNINGWOLF</p>
        <p style={{letterSpacing:5, fontSize:9, color:'#c9a85a', marginTop:8}}>ᛟ KEEPER OF THE CHRONICLE ᛟ</p>
        <h1 style={{fontSize:38, fontWeight:900, marginTop:22, letterSpacing:3, color:'#f0e6d2', textShadow:'0 2px 10px rgba(0,0,0,0.8)'}}>STORMBREAKERS</h1>
        <p style={{letterSpacing:6, fontSize:10, color:'#b8975a', marginTop:8, borderTop:'1px solid #2a2318', borderBottom:'1px solid #2a2318', padding:'8px 0', display:'inline-block'}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:28, display:'grid', gap:12}}>
          <a href="/music" style={{display:'block', padding:'16px 14px', background:'linear-gradient(#1d1a16, #13110e)', borderRadius:12, border:'1px solid #2e281c', color:'#e5dcc8', textDecoration:'none', letterSpacing:2}}>⚔️ HALL OF RELICS</a>
          <a href="/word" style={{display:'block', padding:'16px 14px', background:'linear-gradient(#1d1a16, #13110e)', borderRadius:12, border:'1px solid #2e281c', color:'#e5dcc8', textDecoration:'none', letterSpacing:2}}>✝️ THE WORD — LIVE NOW</a>
          <a href="/chronicle" style={{display:'block', padding:'16px 14px', background:'linear-gradient(#1d1a16, #13110e)', borderRadius:12, border:'1px solid #2e281c', color:'#e5dcc8', textDecoration:'none', letterSpacing:2}}>📖 THE CHRONICLE</a>
          <a href="/library" style={{display:'block', padding:'16px 14px', background:'linear-gradient(#1d1a16, #13110e)', borderRadius:12, border:'1px solid #2e281c', color:'#e5dcc8', textDecoration:'none', letterSpacing:2}}>📚 THE LIBRARY</a>
        </div>
        <p style={{marginTop:20, fontSize:10, color:'#5a4e3a', letterSpacing:3}}>19 RELICS · 3 REVEALED · 16 SEALED</p>
      </div>
    </div>
  )
}
