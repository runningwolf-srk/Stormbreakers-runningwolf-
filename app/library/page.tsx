"use client";
export default function LibraryPage(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', padding:'24px 20px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div style={{maxWidth:380, width:'100%'}}>
        <a href="/" style={{fontSize:11, color:'#6a5a42', textDecoration:'none', letterSpacing:2}}>← BACK TO COVER</a>
        <h1 style={{fontSize:22, letterSpacing:4, marginTop:24, fontWeight:900}}>📚 THE LIBRARY</h1>
        <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a', marginTop:8, fontWeight:700}}>HOW DO I GO DEEPER?</p>
        <div style={{marginTop:18, borderLeft:'2px solid #2a2318', paddingLeft:14}}>
          <p style={{fontSize:13, lineHeight:1.6, color:'#c8b896'}}>Go deeper through studies, devotionals, artwork, and future volumes. The deeper archive behind the Chronicle.</p>
        </div>
        <div style={{marginTop:28, display:'grid', gap:12}}>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'16px'}}>
            <div style={{fontSize:12, fontWeight:800}}>Chronicle Volumes</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>Coming as the story unfolds. The living book.</div>
          </div>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'16px'}}>
            <div style={{fontSize:12, fontWeight:800}}>Devotionals</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>Spiritual lessons from the artifacts.</div>
          </div>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'16px'}}>
            <div style={{fontSize:12, fontWeight:800}}>Study Guides</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>Deeper Scripture exploration for each relic.</div>
          </div>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'16px'}}>
            <div style={{fontSize:12, fontWeight:800}}>Artwork Archive</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>The visual language behind Stormbreakers.</div>
          </div>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'16px'}}>
            <div style={{fontSize:12, fontWeight:800}}>Canon Timeline</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:6}}>The history of the Chronicle as it develops.</div>
          </div>
        </div>
        <p style={{fontSize:10, color:'#5a4a32', marginTop:28, textAlign:'center'}}>EXPANDING — Deeper material coming as the Chronicle unfolds.</p>
      </div>
    </div>
  )
}
