export default function Hall(){
  const relics = [
    {id:'blade', name:'RunningWolf Blade', ref:'Hebrews 4:12', line:'The Word guides the blade.'},
    {id:'lord', name:'Lord of Lords', ref:'Revelation 19:16', line:'When the Keeper kneels, the King stands.'},
    {id:'blood', name:'Blood of Cross', ref:'Colossians 1:20', line:'Peace was not won by the blade. It was bought by blood.'},
  ]
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh'}}>
      <div style={{maxWidth:640, margin:'0 auto', padding:'20px 18px'}}>
        <a href="/" style={{color:'#9a8a6e', fontSize:11, textDecoration:'none', letterSpacing:2}}>← STORMBREAKERS</a>
        <h1 style={{fontSize:22, fontWeight:900, marginTop:16}}>HALL OF RELICS</h1>
        <p style={{fontSize:10, color:'#9a8a6e', letterSpacing:3}}>3 REVEALED / 16 SEALED</p>
        <div style={{marginTop:20, display:'grid', gap:12}}>
          {relics.map(r=>(
            <div key={r.id} style={{padding:16, background:'#0e0c0a', border:'1px solid #2a2318', borderRadius:12}}>
              <p style={{fontSize:13, fontWeight:800}}>{r.name}</p>
              <p style={{fontSize:10, color:'#b88a3a', marginTop:4}}>{r.ref}</p>
              <p style={{fontSize:11, color:'#9a8a6e', marginTop:8, fontStyle:'italic'}}>{r.line}</p>
              <audio controls style={{width:'100%', marginTop:10}} src={`/${r.id}.mp3`} />
            </div>
          ))}
          <div style={{padding:16, background:'#141210', border:'1px dashed #2a2318', borderRadius:12, opacity:0.6}}>
            <p style={{fontSize:11}}>16 Sealed Relics — Awaiting Unveiling</p>
          </div>
        </div>
        <a href="/" style={{display:'block', marginTop:24, textAlign:'center', padding:12, background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#b88a3a', textDecoration:'none', fontSize:12}}>← Back to Cover</a>
      </div>
    </div>
  )
}
