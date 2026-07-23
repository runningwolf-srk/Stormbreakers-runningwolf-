import { ALL_RELICS } from "@/data/armory"
import Link from "next/link"

export default function ArmoryPage() {
  return (
    <main style={{minHeight:"100vh",background:"#0a0a0a",color:"#f5f5dc",padding:40,fontFamily:"serif"}}>
      {/* TOP IDENTITY - ONCE */}
      <div style={{textAlign:"center",opacity:0.4,fontSize:11,letterSpacing:4}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</div>

      <h1 style={{textAlign:"center",fontSize:48,letterSpacing:10,marginTop:20}}>ARMORY</h1>
      <p style={{textAlign:"center",opacity:0.5,marginTop:8,letterSpacing:2}}>The Songs are Relics. The Chronicles are Testimony. The Word is Authority. The Books are Transformation.</p>

      <div style={{maxWidth:1000,margin:"40px auto",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:16}}>
        {ALL_RELICS.map((r:any)=>(
          <Link key={r.slug} href={`/armory/${r.slug}`} style={{textDecoration:"none",border: r.status==="forged"? "1px solid #c9a227" : r.status==="in_progress"? "1px solid #3a2a00" : "1px solid #222",padding:20,background: r.status==="forged"? "#171400" : "#111",display:"block"}}>
            <div style={{fontSize:10,opacity:0.5}}>{r.num} • {r.status?.toUpperCase()}</div>
            <div style={{marginTop:8,fontSize:16,letterSpacing:2,color: r.status==="forged"? "#f5f5dc" : "#888"}}>{r.title.toUpperCase()}</div>
            <div style={{marginTop:6,fontSize:10,opacity:0.4}}>{r.scripture}</div>
            <div style={{marginTop:10,fontSize:11}}>{r.status==="forged"? "⚔️ FORGED" : r.status==="in_progress"? "🔥 SEED" : "🔒 UNREVEALED"}</div>
          </Link>
        ))}
      </div>

      {/* BOTTOM SEAL - ONCE - NOTHING IN MIDDLE */}
      <div style={{marginTop:80,paddingTop:24,borderTop:"1px solid #1a1a1a",opacity:0.3,fontSize:11,letterSpacing:3,textAlign:"center"}}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</div>
    </main>
  )
}
