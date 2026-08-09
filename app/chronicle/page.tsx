"use client";
export default function ChroniclePage(){
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', padding:'24px 20px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div style={{maxWidth:380, width:'100%'}}>
        <a href="/" style={{fontSize:11, color:'#6a5a42', textDecoration:'none', letterSpacing:2}}>← BACK TO COVER</a>
        <h1 style={{fontSize:22, letterSpacing:4, marginTop:24, fontWeight:900}}>📖 THE CHRONICLE</h1>
        <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a', marginTop:8, fontWeight:700}}>WHY WAS THIS CREATED?</p>
        <div style={{marginTop:18, borderLeft:'2px solid #2a2318', paddingLeft:14}}>
          <p style={{fontSize:13, lineHeight:1.6, color:'#c8b896'}}>The stories behind the artifacts will be preserved here—not as mythology, but as testimony.</p>
        </div>
        <div style={{marginTop:28, background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'20px'}}>
          <p style={{fontSize:13, fontWeight:800, letterSpacing:2}}>CHAPTER I — THE KEEPER'S OATH</p>
          <p style={{fontSize:11, color:'#b88a3a', marginTop:8, letterSpacing:2}}>The Chronicle is being written.</p>
          <p style={{fontSize:12.5, lineHeight:1.7, color:'#a89a82', marginTop:16}}>Chapter I is being written from the Keeper's real story. When the pages are ready, they will open here.</p>
          <p style={{fontSize:12.5, lineHeight:1.7, color:'#a89a82', marginTop:12}}>No testimony is fabricated to fill empty space. The next pages will turn because there is a real page to turn.</p>
          <div style={{marginTop:20, paddingTop:16, borderTop:'1px solid #1a1610'}}>
            <p style={{fontSize:10, color:'#5a4a32', fontStyle:'italic'}}>The King is the center. The Word is the foundation. The Keeper carries the story.</p>
          </div>
        </div>
        <div style={{marginTop:24, opacity:0.4, border:'1px dashed #2a2318', borderRadius:12, padding:'24px', textAlign:'center'}}>
          <p style={{fontSize:11, letterSpacing:3, color:'#5a4a32'}}>FUTURE PAGES SEALED</p>
          <p style={{fontSize:10, color:'#4a3a22', marginTop:8}}>Pages will appear here like an open book when written.</p>
        </div>
      </div>
    </div>
  )
}
