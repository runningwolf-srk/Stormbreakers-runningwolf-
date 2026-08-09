export default function Hall() {
  return (
    <div style={{background:'#080808', color:'#e5e5e5', minHeight:'100vh', padding:20}}>
      <div style={{maxWidth:600, margin:'0 auto'}}>
        <div style={{background:'#121212', border:'1px solid #222', borderRadius:16, padding:28, textAlign:'center'}}>
          <h1>HALL OF RELICS</h1>
          <p style={{color:'#888', letterSpacing:2, fontSize:12}}>19 Relics · 3 Revealed · 16 Sealed</p>
          <div style={{textAlign:'left', marginTop:24, display:'grid', gap:12}}>
            <div style={{padding:16, background:'#1a1a1a', borderRadius:12, border:'1px solid #2a2a2a'}}>
              <p>RELIC I — RunningWolf Blade</p>
              <p style={{color:'#9a7a4a', fontSize:12}}>Hebrews 4:12</p>
            </div>
            <div style={{padding:16, background:'#1a1a1a', borderRadius:12, border:'1px solid #2a2a2a'}}>
              <p>RELIC II — Lord of Lords</p>
              <p style={{color:'#9a7a4a', fontSize:12}}>Revelation 19:16</p>
            </div>
            <div style={{padding:16, background:'#1a1a1a', borderRadius:12, border:'1px solid #2a2a2a'}}>
              <p>RELIC III — Blood of Cross</p>
              <p style={{color:'#9a7a4a', fontSize:12}}>Colossians 1:20</p>
            </div>
          </div>
          <p style={{marginTop:24, color:'#777'}}>16 relics remain sealed.</p>
          <p style={{color:'#777'}}>The Chronicle continues.</p>
          <div style={{marginTop:24}}><a href="/" style={{color:'#aaa'}}>← RETURN TO COVER</a></div>
        </div>
      </div>
    </div>
  )
}
