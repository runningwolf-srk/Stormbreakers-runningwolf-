export default function Word() {
  return (
    <div style={{background:'#080808', color:'#e5e5e5', minHeight:'100vh', padding:20}}>
      <div style={{maxWidth:600, margin:'0 auto'}}>
        <div style={{background:'#121212', border:'1px solid #222', borderRadius:16, padding:28, textAlign:'center'}}>
          <h1>THE WORD — LIVE NOW</h1>
          <div style={{textAlign:'left', marginTop:24, display:'grid', gap:20}}>
            <div>
              <h2>Hebrews 4:12</h2>
              <p style={{fontStyle:'italic', color:'#ccc'}}>For the word of God is alive and active. Sharper than any double-edged sword.</p>
              <p style={{color:'#9a7a4a', marginTop:8}}>The Word guides the blade.</p>
            </div>
            <div>
              <h2>Revelation 19:16</h2>
              <p>KING OF KINGS AND LORD OF LORDS.</p>
              <p style={{color:'#9a7a4a', marginTop:8}}>When the Keeper kneels, the King stands.</p>
            </div>
            <div>
              <h2>Colossians 1:20</h2>
              <p>By making peace through his blood, shed on the cross.</p>
              <p style={{color:'#9a7a4a', marginTop:8}}>Peace was not won by the blade. It was bought by blood.</p>
            </div>
          </div>
          <div style={{marginTop:28}}><a href="/" style={{color:'#aaa'}}>← RETURN TO COVER</a></div>
        </div>
      </div>
    </div>
  )
}
