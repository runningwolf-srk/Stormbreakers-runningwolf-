// @ts-nocheck
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',padding:40,fontFamily:'serif'}}>
      <h1 style={{fontSize:42}}>ONE CANON • FOUR EXPERIENCES</h1>
      <p style={{opacity:0.7,marginTop:10}}>Hear → Understand → Root → Live</p>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:40,maxWidth:600}}>
        <a href="/armory" style={{border:'1px solid #333',padding:20,textDecoration:'none',color:'inherit'}}>⚔️ Armory<br/><small>The Songs become Relics</small></a>
        <a href="/chronicles" style={{border:'1px solid #333',padding:20,textDecoration:'none',color:'inherit'}}>📖 Chronicles<br/><small>The Relics become Testimony</small></a>
        <a href="/word" style={{border:'1px solid #333',padding:20,textDecoration:'none',color:'inherit'}}>✝️ Word<br/><small>Testimony returns to Scripture</small></a>
        <a href="/books" style={{border:'1px solid #333',padding:20,textDecoration:'none',color:'inherit'}}>📚 Books<br/><small>Scripture becomes Practice</small></a>
      </div>

      <div style={{marginTop:60,borderLeft:'2px solid #a78bfa',paddingLeft:20}}>
        <p>Wolf Blade Example:</p>
        <p style={{opacity:0.6}}>Song → Story → Scripture → Practice</p>
      </div>
    </main>
  )
}
