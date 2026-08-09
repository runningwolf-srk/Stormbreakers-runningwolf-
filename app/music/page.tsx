export default function Music(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{maxWidth:640, margin:'0 auto', padding:'20px 18px'}}>
        <a href="/" style={{color:'#9a8a6e', fontSize:11, textDecoration:'none', letterSpacing:2}}>← STORMBREAKERS</a>
        <h1 style={{fontSize:24, fontWeight:900, marginTop:16, letterSpacing:2}}>HALL OF RELICS</h1>
        <p style={{color:'#b88a3a', fontSize:8, letterSpacing:4, marginTop:6}}>THE OPEN CHRONICLE • SOUNDTRACK</p>

        <div style={{marginTop:20, display:'grid', gap:18}}>
          <div>
            <div style={{borderRadius:14, overflow:'hidden', border:'1px solid #2a2318', boxShadow:'0 0 30px rgba(184,138,58,0.2)'}}>
              <div style={{position:'relative', paddingBottom:'56.25%', height:0}}>
                <iframe src="https://www.youtube.com/embed/9vP0NPrEv9s" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}} allowFullScreen title="Lord of Lords"></iframe>
              </div>
            </div>
            <p style={{fontSize:12, fontWeight:700, marginTop:8}}>Lord of Lords</p>
          </div>

          <div>
            <div style={{borderRadius:14, overflow:'hidden', border:'1px solid #2a2318'}}>
              <div style={{position:'relative', paddingBottom:'56.25%', height:0}}>
                <iframe src="https://www.youtube.com/embed/4lcbjsNLlzo" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}} allowFullScreen title="Blood of Cross"></iframe>
              </div>
            </div>
            <p style={{fontSize:12, fontWeight:700, marginTop:8}}>Blood of Cross</p>
          </div>

          <div>
            <div style={{borderRadius:14, overflow:'hidden', border:'1px solid #2a2318'}}>
              <div style={{position:'relative', paddingBottom:'56.25%', height:0}}>
                <iframe src="https://www.youtube.com/embed/CZ6tylWuerQ" style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}} allowFullScreen title="Runningwolf Blade"></iframe>
              </div>
            </div>
            <p style={{fontSize:12, fontWeight:700, marginTop:8}}>Runningwolf Blade</p>
          </div>
        </div>

        <a href="/" style={{display:'block', marginTop:24, textAlign:'center', padding:12, background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#b88a3a', textDecoration:'none', fontSize:12}}>← Back to Cover</a>
      </div>
    </div>
  )
}
