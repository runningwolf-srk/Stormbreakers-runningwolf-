export default function Hall(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{maxWidth:640, margin:'0 auto', padding:'20px 18px'}}>
        <a href="/" style={{color:'#9a8a6e', fontSize:11, textDecoration:'none', letterSpacing:2}}>STORMBREAKERS</a>
        <h1 style={{fontSize:22, fontWeight:900, marginTop:16}}>HALL OF RELICS</h1>
        <p style={{fontSize:10, color:'#9a8a6e', letterSpacing:3}}>3 REVEALED / 16 SEALED</p>
        <div style={{marginTop:20, display:'grid', gap:12}}>
          <div style={{padding:16, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>
            <p style={{fontSize:13, fontWeight:800}}>RunningWolf Blade</p>
            <p style={{fontSize:10, color:'#b88a3a', marginTop:4}}>Hebrews 4:12 — The Word guides the blade</p>
            <div style={{marginTop:12, width:'100%', aspectRatio:'16 / 9', borderRadius:8, overflow:'hidden', background:'#000'}}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CZ6tylWuerQ" title="RunningWolf Blade" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border:0}}></iframe>
            </div>
          <div style={{padding:16, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>
            <p style={{fontSize:13, fontWeight:800}}>Lord of Lords</p>
            <p style={{fontSize:10, color:'#b88a3a', marginTop:4}}>Revelation 19:16 — When the Keeper kneels, the King stands</p>
            <div style={{marginTop:12, width:'100%', aspectRatio:'16 / 9', borderRadius:8, overflow:'hidden', background:'#000'}}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9vP0NPrEv9s" title="Lord of Lords" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border:0}}></iframe>
            </div>
          </div>
          <div style={{padding:16, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>
            <p style={{fontSize:13, fontWeight:800}}>Blood of Cross</p>
            <p style={{fontSize:10, color:'#b88a3a', marginTop:4}}>Colossians 1:20 — Peace was bought by blood</p>
            <div style={{marginTop:12, width:'100%', aspectRatio:'16 / 9', borderRadius:8, overflow:'hidden', background:'#000'}}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4lcbjsNLlzo" title="Blood of Cross" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{border:0}}></iframe>
            </div>
          <div style={{padding:16, background:'#141210', border:'1px dashed #2a2318', borderRadius:12, opacity:0.6}}>
            <p style={{fontSize:11}}>16 Sealed Relics — Awaiting Unveiling</p>
          </div>
        </div>
        <a href="/" style={{display:'block', marginTop:24, textAlign:'center', padding:12, background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#b88a3a', textDecoration:'none', fontSize:12}}>Back to Cover</a>
      </div>
    </div>
  )
        }
