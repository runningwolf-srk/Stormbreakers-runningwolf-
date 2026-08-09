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
          <p style={{fontSize:11, letterSpacing:4, color:'#7a6a4e'}}>3 REVEALED — PRESS PLAY, SOUND IS ON</p>
          <div style={{marginTop:14, display:'grid', gap:20}}>
            <div style={{background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12, padding:'16px'}}>
              <div style={{fontSize:13, fontWeight:800}}>⚔️ RunningWolf Blade — Hebrews 4:12</div>
              <div style={{position:'relative', paddingTop:'56.25%', borderRadius:8, overflow:'hidden', marginTop:12, background:'#000'}}>
                <iframe style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}} src="https://www.youtube-nocookie.com/embed/CZ6tylWuerQ?rel=0&modestbranding=1" title="RunningWolf Blade" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div style={{fontSize:11, color:'#8a7a62', marginTop:8}}>The Word guides the blade.</div>
            </div>
            <div style={{background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12, padding:'16px'}}>
              <div style={{fontSize:13, fontWeight:800}}>👑 Lord of Lords — Revelation 19:16</div>
              <div style={{position:'relative', paddingTop:'56.25%', borderRadius:8, overflow:'hidden', marginTop:12, background:'#000'}}>
                <iframe style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}} src="https://www.youtube-nocookie.com/embed/9vP0NPrEv9s?rel=0&modestbranding=1" title="Lord of Lords" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div style={{fontSize:11, color:'#8a7a62', marginTop:8}}>When the Keeper kneels, the King stands.</div>
            </div>
            <div style={{background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12, padding:'16px'}}>
              <div style={{fontSize:13, fontWeight:800}}>✝️ Blood of Cross — Colossians 1:20</div>
              <div style={{position:'relative', paddingTop:'56.25%', borderRadius:8, overflow:'hidden', marginTop:12, background:'#000'}}>
                <iframe style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}} src="https://www.youtube-nocookie.com/embed/4lcbjsNLlzo?rel=0&modestbranding=1" title="Blood of Cross" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div style={{fontSize:11, color:'#8a7a62', marginTop:8}}>Peace was bought by blood.</div>
            </div>
          </div>
        </div>
        <div style={{marginTop:36, borderTop:'1px solid #1a1610', paddingTop:20, textAlign:'center'}}>
          <p style={{fontSize:11, letterSpacing:4, color:'#5a4a32'}}>16 SEALED</p>
          <p style={{fontSize:11, color:'#6a5a42', marginTop:10, lineHeight:1.6, maxWidth:300, marginLeft:'auto', marginRight:'auto'}}>The remaining relics remain completely unnamed and sealed.</p>
          <div style={{marginTop:20, border:'1px solid #1e1a14', borderRadius:12, padding:'28px 20px', background:'radial-gradient(ellipse at center, rgba(30,26,20,0.6) 0%, transparent 70%)'}}>
            <div style={{fontSize:20, color:'#3a3020'}}>◍</div>
            <div style={{fontSize:10, letterSpacing:4, color:'#4a3a22', marginTop:12}}>SEALED PAGES</div>
            <div style={{fontSize:10, color:'#3a3020', marginTop:8, lineHeight:1.5}}>To be revealed only as their songs and stories are completed.</div>
          </div>
        </div>
        <a href="/" style={{marginTop:32, display:'inline-block', fontSize:11, color:'#6a5a42', textDecoration:'none', border:'1px solid #1e1a14', borderRadius:20, padding:'8px 16px'}}>← RETURN TO COVER</a>
      </div>
    </div>
  )
}
