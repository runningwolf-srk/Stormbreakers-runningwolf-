"use client";
export default function HallPage(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', padding:'24px 20px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div style={{maxWidth:380, width:'100%'}}>
        <a href="/" style={{fontSize:11, color:'#6a5a42', textDecoration:'none', letterSpacing:2}}>← BACK TO COVER</a>
        <h1 style={{fontSize:22, letterSpacing:4, marginTop:24, fontWeight:900}}>⚔️ THE HALL OF RELICS</h1>
        <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a', marginTop:8, fontWeight:700}}>WHAT WAS CREATED?</p>
        <div style={{marginTop:18, borderLeft:'2px solid #2a2318', paddingLeft:14}}>
          <p style={{fontSize:13, lineHeight:1.6, color:'#c8b896'}}>The songs of Stormbreakers become artifacts. Each relic is a piece of the journey—music created from Scripture, story, and reflection.</p>
        </div>
        <div style={{marginTop:32}}>
          <p style={{fontSize:11, letterSpacing:4, color:'#7a6a4e'}}>3 REVEALED</p>
          <div style={{marginTop:14, display:'grid', gap:12}}>
            <div style={{background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12, padding:'16px'}}>
              <div style={{fontSize:13, fontWeight:800}}>⚔️ RunningWolf Blade</div>
              <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>Hebrews 4:12 — The Word guides the blade.</div>
            </div>
            <div style={{background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12, padding:'16px'}}>
              <div style={{fontSize:13, fontWeight:800}}>👑 Lord of Lords</div>
              <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>Revelation 19:16 — When the Keeper kneels, the King stands.</div>
            </div>
            <div style={{background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12, padding:'16px'}}>
              <div style={{fontSize:13, fontWeight:800}}>✝️ Blood of Cross</div>
              <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>Colossians 1:20 — Peace was bought by blood.</div>
            </div>
          </div>
        </div>
        <div style={{marginTop:36, borderTop:'1px solid #1a1610', paddingTop:16}}>
          <p style={{fontSize:11, letterSpacing:4, color:'#5a4a32'}}>16 SEALED</p>
          <p style={{fontSize:11, color:'#6a5a42', marginTop:10, lineHeight:1.6}}>The remaining relics remain completely unnamed and sealed. They will be revealed only as their songs and stories are completed. No future names are revealed here.</p>
          <div style={{marginTop:14, display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, opacity:0.35}}>
            {Array.from({length:16}).map((_,i)=>(<div key={i} style={{border:'1px solid #1e1a14', borderRadius:8, padding:'10px', textAlign:'center', fontSize:10, color:'#5a4a32'}}>SEALED {String(i+4).padStart(2,'0')}</div>))}
          </div>
        </div>
      </div>
    </div>
  )
}
