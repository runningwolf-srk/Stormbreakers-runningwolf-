export default function Library() {
  return (
    <div style={{background:'#080808', color:'#e5e5e5', minHeight:'100vh', padding:20, display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{maxWidth:520, width:'100%', background:'#121212', border:'1px solid #222', borderRadius:16, padding:32, textAlign:'center'}}>
        <h1>THE LIBRARY</h1>
        <div style={{marginTop:20, display:'grid', gap:10, textAlign:'left'}}>
          <div style={{padding:12, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a'}}><p>Chronicle Volumes</p><p style={{fontSize:12, color:'#666'}}>Coming Soon</p></div>
          <div style={{padding:12, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a'}}><p>Devotionals</p><p style={{fontSize:12, color:'#666'}}>Coming Soon</p></div>
          <div style={{padding:12, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a'}}><p>Study Guides</p><p style={{fontSize:12, color:'#666'}}>Coming Soon</p></div>
          <div style={{padding:12, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a'}}><p>Artwork Archive</p><p style={{fontSize:12, color:'#666'}}>Coming Soon</p></div>
          <div style={{padding:12, background:'#1a1a1a', borderRadius:10, border:'1px solid #2a2a2a'}}><p>Canon Timeline</p><p style={{fontSize:12, color:'#666'}}>Coming Soon</p></div>
        </div>
        <div style={{marginTop:24}}><a href="/" style={{color:'#aaa'}}>← RETURN TO COVER</a></div>
      </div>
    </div>
  )
}
