import Link from "next/link"
import { musicCatalog } from "@/lib/musicCatalog"

export default function MusicPage() {
  return (
    <main style={{maxWidth:900,margin:"0 auto",padding:"40px 20px",background:"#0b0b0f",color:"#e8e0d0",minHeight:"100vh"}}>
      <h1>RunningWolf — Music</h1>
      <p style={{opacity:.7}}>Album Wall</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:16,marginTop:24}}>
        {musicCatalog.map(t=>(
          <Link key={t.id} href={`/music/${t.id}`} style={{textDecoration:"none",color:"inherit"}}>
            <div style={{background:"#1a1a22",borderRadius:10,padding:16,textAlign:"center"}}>
              <div style={{aspectRatio:"1/1",background:"#111",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:8}}>COVER</div>
              <b>{t.tag}</b>
              <div style={{fontSize:12,opacity:.6}}>{t.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <p style={{marginTop:40}}><Link href="/" style={{color:"#5b7a99"}}>← Home</Link></p>
    </main>
  )
}
