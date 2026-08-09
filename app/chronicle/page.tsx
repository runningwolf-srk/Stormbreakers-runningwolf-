"use client";
export default function ChroniclePage(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', padding:'24px 20px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div style={{maxWidth:380, width:'100%'}}>
        <a href="/" style={{fontSize:11, color:'#6a5a42', textDecoration:'none', letterSpacing:2}}>← BACK TO COVER</a>
        <h1 style={{fontSize:22, letterSpacing:4, marginTop:24, fontWeight:900}}>📖 THE CHRONICLE</h1>
        <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a', marginTop:8, fontWeight:700}}>WHY WAS THIS CREATED?</p>
        
        <div style={{marginTop:28, background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'24px 22px'}}>
          <p style={{fontSize:13, fontWeight:800, letterSpacing:3, textAlign:'center'}}>THE KEEPER'S OATH</p>
          
          <div style={{marginTop:20, borderLeft:'2px solid #2a2318', paddingLeft:14, display:'grid', gap:8}}>
            <p style={{fontSize:13, lineHeight:1.6, color:'#c8b896'}}>The Keeper does not write what he does not know.</p>
            <p style={{fontSize:13, lineHeight:1.6, color:'#c8b896'}}>He does not turn memory into legend.</p>
            <p style={{fontSize:13, lineHeight:1.6, color:'#c8b896'}}>He does not place a crown where only the King belongs.</p>
          </div>

          <div style={{marginTop:22, display:'grid', gap:4, textAlign:'center'}}>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>Some pages have been written.</p>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>Some pages are still being carried.</p>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>Some pages have not yet been opened.</p>
          </div>

          <div style={{marginTop:22, paddingTop:18, borderTop:'1px solid #1a1610'}}>
            <p style={{fontSize:13, lineHeight:1.7, color:'#c8b896', fontStyle:'italic', textAlign:'center'}}>The Chronicle will not fill its empty pages with invention.<br/>It will wait for what is true.</p>
          </div>

          <div style={{marginTop:22, display:'grid', gap:6}}>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>The Keeper listens to the songs.</p>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>He opens the Word.</p>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>He carries what has been entrusted to him.</p>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>He keeps the sealed relics sealed.</p>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#c8b896', marginTop:6, fontWeight:600}}>And when the time comes, the first true page will open.</p>
            <p style={{fontSize:13, fontWeight:800, letterSpacing:3, color:'#b88a3a', marginTop:10}}>I. THE BREAKING</p>
            <p style={{fontSize:12, lineHeight:1.6, color:'#8a7a62', fontStyle:'italic'}}>Not because the Chronicle needs another chapter.<br/>Because the truth has one.</p>
          </div>

          <div style={{marginTop:22, paddingTop:18, borderTop:'1px solid #1a1610', textAlign:'center'}}>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>Until then, the book remains open.</p>
            <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82'}}>And the Keeper keeps watch.</p>
            <div style={{marginTop:18, display:'grid', gap:3}}>
              <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a'}}>The King is the center.</p>
              <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a'}}>The Word is the foundation.</p>
              <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a'}}>The Keeper carries the Chronicle.</p>
            </div>
          </div>
        </div>

        <div style={{marginTop:20, opacity:0.35, border:'1px dashed #2a2318', borderRadius:12, padding:'18px', textAlign:'center'}}>
          <p style={{fontSize:10, letterSpacing:3, color:'#5a4a32'}}>I. THE BREAKING — WAITING FOR TRUE WORDS</p>
          <p style={{fontSize:10, color:'#4a3a22', marginTop:6, lineHeight:1.5}}>When real testimony is reviewed and ready, it will appear here as the first true page after this oath.</p>
        </div>

        <a href="/" style={{marginTop:28, display:'inline-block', fontSize:11, color:'#6a5a42', textDecoration:'none', border:'1px solid #1e1a14', borderRadius:20, padding:'8px 16px'}}>← RETURN TO COVER</a>
      </div>
    </div>
  )
}
