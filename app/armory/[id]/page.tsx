import { ALL_RELICS } from '@/data/armory'
import Link from 'next/link'

export default function Page({ params }: any) {
  const relic: any = ALL_RELICS.find((r: any) => r.slug === params.id)

  if (!relic) {
    return (
      <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',display:'flex',alignItems:'center',justifyContent:'center',padding:40,textAlign:'center',fontFamily:'serif'}}>
        <div><h1 style={{letterSpacing:5}}>THE RELIC HAS NOT BEEN REVEALED</h1><Link href="/armory" style={{display:'block',marginTop:30,padding:16,background:'#f5f5dc',color:'#000',textDecoration:'none'}}>ARMORY</Link></div>
      </main>
    )
  }

  const ytId = relic.youtube? relic.youtube.split('/').pop()?.split('?')[0]?.split('&')[0].replace('si=','') : null
  const cleanId = relic.youtube? relic.youtube.match(/(?:youtu\.be\/|v=)([^?&]+)/)?.[1] || 'dHz0D3QblpQ' : null

  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'#f5f5dc',padding:40,fontFamily:'serif'}}>
      <Link href="/armory" style={{color:'#888',textDecoration:'none'}}>← Armory</Link>
      <div style={{maxWidth:800,marginTop:30}}>
        <div style={{fontSize:11,opacity:0.5}}>{relic.num} • {relic.category} • {relic.status} • {relic.scripture}</div>
        <h1 style={{fontSize:42,marginTop:10,letterSpacing:8}}>{relic.title.toUpperCase()}</h1>
        <p style={{marginTop:10,opacity:0.6}}>{relic.sound}</p>
        <p style={{marginTop:6,opacity:0.5,fontStyle:'italic'}}>{relic.hook}</p>

        {relic.youtube && cleanId && (
          <div style={{marginTop:28,border:'1px solid #222',background:'#111',padding:8}}>
            <div style={{position:'relative',paddingBottom:'56.25%',height:0}}>
              <iframe src={`https://www.youtube.com/embed/${cleanId}`} title={relic.title} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        )}
      </div>

      {relic.status === 'forged'? (
        <div style={{marginTop:40,maxWidth:800,display:'grid',gap:20}}>
          <div style={{border:'1px solid #222',padding:24,background:'#111'}}><h3>⚔️ SONG — The Relic</h3><pre style={{whiteSpace:'pre-wrap',marginTop:14,opacity:0.8,lineHeight:1.7}}>{relic.lyrics}</pre></div>
          <div style={{border:'1px solid #222',padding:24,background:'#111'}}><h3>📖 CHRONICLE — Testimony</h3><p style={{marginTop:14,opacity:0.75,lineHeight:1.8}}>{relic.story}</p></div>
          <div style={{border:'1px solid #222',padding:24,background:'#111'}}><h3>✝️ WORD — {relic.scripture}</h3><p style={{marginTop:14,opacity:0.75,lineHeight:1.8}}>{relic.scriptureText}</p></div>
          <div style={{border:'1px solid #333',padding:24,background:'#1a1a0a'}}><h3>📚 WALK — Practice</h3><p style={{marginTop:14,opacity:0.9,lineHeight:1.8,fontWeight:600}}>{relic.walk || relic.practice}</p></div>
        </div>
      ) : (
        <div style={{marginTop:50,maxWidth:600,border:'1px solid #222',padding:50,textAlign:'center',background:'#111'}}>
          <h2 style={{letterSpacing:5}}>THE RELIC HAS NOT BEEN REVEALED</h2><p style={{marginTop:18,opacity:0.6}}>The song is not written.<br/>The chapter is not opened.<br/>The walk is waiting.</p><p style={{marginTop:20,fontSize:13,opacity:0.5}}>Seed: {relic.practice}</p>
        </div>
      )}
      <div style={{marginTop:60,opacity:0.3,fontSize:11,letterSpacing:3}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</div>
    </main>
  )
}
