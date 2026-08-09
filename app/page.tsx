export default function Cover() {
  return (
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', position:'relative', overflow:'hidden'}}>
      <style>{`
        @keyframes flicker {
          0%,100% { opacity:0.8; filter:brightness(1) }
          10% { opacity:0.9; filter:brightness(1.2) }
          20% { opacity:0.7; filter:brightness(0.9) }
          50% { opacity:1; filter:brightness(1.3) }
        }
        @keyframes glow {
          0%,100% { opacity:0.4 }
          50% { opacity:0.8 }
        }
        @keyframes sweep {
          0% { transform:translateX(-100%) }
          100% { transform:translateX(200%) }
        }
      `}</style>

      {/* Background storm light */}
      <div style={{position:'absolute', top:0, left:'0', right:0, height:400, background:'radial-gradient(ellipse at center top, rgba(184,138,58,0.18), transparent 70%)', pointerEvents:'none', animation:'glow 4s ease-in-out infinite'}}></div>

      {/* Main image with full view */}
      <div style={{width:'100%', maxWidth:640, margin:'0 auto', background:'#000', borderRadius:'0 0 14px 14px', overflow:'hidden', position:'relative', boxShadow:'0 0 40px rgba(184,138,58,0.15)'}}>
        <div style={{width:'100%', position:'relative'}}>
          <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" style={{width:'100%', height:'auto', display:'block', filter:'contrast(1.1) brightness(0.95)'}} alt="Stormbreakers" />
          {/* Candle flicker overlays left/right */}
          <div style={{position:'absolute', left:10, top:'60%', width:20, height:60, background:'radial-gradient(ellipse, rgba(255,180,60,0.4), transparent)', filter:'blur(8px)', animation:'flicker 1.5s infinite'}}></div>
          <div style={{position:'absolute', right:18, top:'55%', width:18, height:50, background:'radial-gradient(ellipse, rgba(255,160,40,0.35), transparent)', filter:'blur(10px)', animation:'flicker 1.8s infinite 0.3s'}}></div>
          {/* Bottom fade to black */}
          <div style={{position:'absolute', bottom:0, left:0, right:0, height:120, background:'linear-gradient(to top, #050507 10%, rgba(5,5,7,0.8) 40%, rgba(0,0,0,0) 100%)'}}></div>
          {/* Vignette */}
          <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.6) 100%)', pointerEvents:'none'}}></div>
        </div>
      </div>

      {/* Content */}
      <div style={{maxWidth:640, margin:'0 auto', padding:'18px 18px 24px', textAlign:'center', position:'relative'}}>
        <p style={{letterSpacing:4, fontSize:7, color:'#9a8a6e'}}>RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        
        {/* Title with light sweep */}
        <div style={{position:'relative', overflow:'hidden', display:'inline-block', marginTop:10}}>
          <h1 style={{fontSize:30, fontWeight:900, letterSpacing:3, position:'relative', zIndex:2, textShadow:'0 0 20px rgba(184,138,58,0.5)'}}>STORMBREAKERS</h1>
          <div style={{position:'absolute', top:0, left:0, width:'40%', height:'100%', background:'linear-gradient(90deg, transparent, rgba(255,230,150,0.25), transparent)', animation:'sweep 3.5s ease-in-out infinite', zIndex:3}}></div>
        </div>

        <p style={{letterSpacing:4, fontSize:8, color:'#b88a3a', marginTop:6, textShadow:'0 0 10px rgba(184,138,58,0.4)'}}>THE OPEN CHRONICLE</p>
        
        <div style={{marginTop:14, textAlign:'left', borderLeft:'2px solid #2a2318', paddingLeft:12, position:'relative'}}>
          <div style={{position:'absolute', left:-2, top:0, bottom:0, width:2, background:'linear-gradient(to bottom, #b88a3a, transparent)', opacity:0.6}}></div>
          <p style={{fontSize:11}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
          <p style={{color:'#b88a3a', fontSize:9, marginTop:4}}>The Word guides the blade.</p>
        </div>

        <div style={{marginTop:32, display:'grid', gap:10}}>
          <a href="/music" style={{display:'block', padding:14, background:'linear-gradient(180deg, #1a1814, #141210)', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', fontSize:12, fontWeight:700, boxShadow:'0 2px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(232,224,200,0.05)'}}>HALL OF RELICS</a>
          <a href="/word" style={{display:'block', padding:14, background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', fontSize:12}}>THE WORD — LIVE NOW</a>
          <a href="/chronicle" style={{display:'block', padding:14, background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', fontSize:12}}>THE CHRONICLE</a>
          <a href="/library" style={{display:'block', padding:14, background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', fontSize:12}}>THE LIBRARY</a>
        </div>
      </div>
    </div>
  )
}
