import { ALL_RELICS } from "@/data/armory"
import Link from "next/link"

export default function Page({ params }: any) {
  const relic: any = ALL_RELICS.find((r: any) => r.slug === params.id)
  if (!relic) {
    return (
      <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#f5f5dc",display:"flex",alignItems:"center",justifyContent:"center",padding:40,textAlign:"center",fontFamily:"serif"}}>
        <div><h1 style={{letterSpacing:5}}>THE RELIC HAS NOT BEEN REVEALED</h1><Link href="/armory" style={{display:"block",marginTop:30,padding:16,background:"#f5f5dc",color:"#000",textDecoration:"none"}}>ARMORY</Link></div>
      </main>
    )
  }
  const getYtId = (url: string) => {
    if (!url) return null
    const m = url.match(/(?:youtu\.be\/|v=)([^?&]+)/)
    return m? m[1] : null
  }
  const ytId = relic.youtube? getYtId(relic.youtube) : null

  return (
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#f5f5dc",padding:40,fontFamily:"serif"}}>
      <Link href="/armory" style={{color:"#888",textDecoration:"none"}}>← Armory</Link>
      <div style={{maxWidth:800,marginTop:30}}>
        <div style={{fontSize:11,opacity:0.5}}>{relic.num} • {relic.category} • {relic.status} • {relic.scripture}</div>
        <h1 style={{fontSize:42,marginTop:10,letterSpacing:8}}>{relic.title.toUpperCase()}</h1>
        <p style={{marginTop:10,opacity:0.6}}>{relic.sound}</p>
        <p style={{marginTop:6,opacity:0.5,fontStyle:"italic"}}>{relic.hook}</p>
        {relic.image && (
          <div style={{marginTop:24,border:"1px solid #222",background:"#050505"}}>
            <img src={relic.image} alt={relic.title} style={{width:"100%",maxHeight:600,objectFit:"cover",display:"block"}} />
          </div>
        )}
        {ytId && (
          <div style={{marginTop:16,border:"1px solid #222",background:"#111",padding:8}}>
            <div style={{position:"relative",paddingBottom:"56.25%",height:0}}>
              <iframe src={`https://www.youtube.com/embed/${ytId}`} title={relic.title} style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        )}
      </div>
      {relic.status === "forged"? (
        <div style={{marginTop:36,maxWidth:800,display:"grid",gap:18}}>
          <div style={{border:"1px solid #222",padding:24,background:"#111"}}><h3>⚔️ SONG — The Relic</h3><pre style={{whiteSpace:"pre-wrap",marginTop:14,opacity:0.8,lineHeight:1.7}}>{relic.lyrics}</pre></div>
          <div style={{border:"1px solid #222",padding:24,background:"#111"}}><h3>📖 CHRONICLE — Testimony</h3><p style={{marginTop:14,opacity:0.75,lineHeight:1.8}}>{relic.story}</p></div>
          <div style={{border:"1px solid #222",padding:24,background:"#111"}}><h3>✝️ WORD — {relic.scripture}</h3><p style={{marginTop:14,opacity:0.75,lineHeight:1.8}}>{relic.scriptureText}</p></div>
          <div style={{border:"1px solid #333",padding:24,background:"#1a1a0a"}}><h3>📚 WALK — Practice</h3><p style={{marginTop:14,opacity:0.9,lineHeight:1.8,fontWeight:600}}>{relic.walk || relic.practice}</p></div>
        </div>
      ) : (
        <div style={{marginTop:48,maxWidth:600,border:"1px solid #222
