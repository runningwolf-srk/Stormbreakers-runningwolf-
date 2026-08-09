"use client";
export default function WordPage(){
  return(
    <div style={{background:'#080603', color:'#e8e0c8', minHeight:'100vh', padding:'24px 20px', display:'flex', flexDirection:'column', alignItems:'center'}}>
      <div style={{maxWidth:400, width:'100%'}}>
        <a href="/" style={{fontSize:11, color:'#6a5a42', textDecoration:'none', letterSpacing:2}}>← BACK TO COVER</a>
        <h1 style={{fontSize:22, letterSpacing:4, marginTop:24, fontWeight:900}}>✝️ THE WORD</h1>
        <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a', marginTop:8, fontWeight:700}}>WHAT IS ITS FOUNDATION?</p>
        <div style={{marginTop:18, borderLeft:'2px solid #2a2318', paddingLeft:14}}>
          <p style={{fontSize:13, lineHeight:1.6, color:'#c8b896'}}>Scripture gives every artifact its foundation. The music may be cinematic. The imagery may be Viking. But the foundation is the Word.</p>
        </div>

        <div style={{marginTop:32, display:'grid', gap:28}}>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'18px'}}>
            <p style={{fontSize:11, letterSpacing:3, color:'#b88a3a'}}>📖 RUNNINGWOLF BLADE</p>
            <p style={{fontSize:12, fontWeight:800, marginTop:8}}>Hebrews 4:12</p>
            <p style={{fontSize:13, lineHeight:1.7, marginTop:12, color:'#e8dcc0', fontStyle:'italic'}}>For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.</p>
            <p style={{fontSize:11, color:'#b88a3a', marginTop:12, fontStyle:'italic'}}>The Word guides the blade.</p>
          </div>
          <div style={{textAlign:'center', color:'#3a3020', fontSize:10, letterSpacing:4}}>— TURN THE PAGE —</div>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'18px'}}>
            <p style={{fontSize:11, letterSpacing:3, color:'#b88a3a'}}>👑 LORD OF LORDS</p>
            <p style={{fontSize:12, fontWeight:800, marginTop:8}}>Revelation 19:16</p>
            <p style={{fontSize:13, lineHeight:1.7, marginTop:12, color:'#e8dcc0', fontStyle:'italic'}}>On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.</p>
            <p style={{fontSize:11, color:'#b88a3a', marginTop:12, fontStyle:'italic'}}>When the Keeper kneels, the King stands.</p>
          </div>
          <div style={{textAlign:'center', color:'#3a3020', fontSize:10, letterSpacing:4}}>— TURN THE PAGE —</div>
          <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:12, padding:'18px'}}>
            <p style={{fontSize:11, letterSpacing:3, color:'#b88a3a'}}>✝️ BLOOD OF CROSS</p>
            <p style={{fontSize:12, fontWeight:800, marginTop:8}}>Colossians 1:20</p>
            <p style={{fontSize:13, lineHeight:1.7, marginTop:12, color:'#e8dcc0', fontStyle:'italic'}}>And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.</p>
            <p style={{fontSize:11, color:'#b88a3a', marginTop:12, fontStyle:'italic'}}>Peace was bought by blood.</p>
          </div>
        </div>
        <p style={{fontSize:10, color:'#5a4a32', marginTop:32, textAlign:'center', lineHeight:1.5}}>This is an open-Bible experience, designed to be read easily on a phone, especially at church.</p>
      </div>
    </div>
  )
}
