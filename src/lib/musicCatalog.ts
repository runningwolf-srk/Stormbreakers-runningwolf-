import Link from "next/link"
import { musicCatalog } from "@/lib/musicCatalog"

export default function MusicPage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", background: "#0b0b0f", minHeight: "100vh", color: "#e8e0d0", fontFamily: "system-ui" }}>
      <h1>RunningWolf — Music</h1>
      <p style={{ opacity: 0.7, marginBottom: 32 }}>Album Wall / SRK Projection Layer</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 20 }}>
        {musicCatalog.map(track => (
          <Link key={track.id} href={`/music/${track.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ background: "#1a1a22", borderRadius: 12, overflow: "hidden", border: "1px solid #2a2a35" }}>
              <div style={{ aspectRatio: "1 / 1", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", color: "#5b7a99", fontSize: 12 }}>
                COVER
              </div>
              <div style={{ padding: 12 }}>
                <div style={{ fontWeight: 600 }}>{track.tag}</div>
                <div style={{ fontSize: 12, opacity: 0.6 }}>{track.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: 48 }}>
        <Link href="/" style={{ color: "#5b7a99" }}>← Home</Link>
      </div>
    </main>
  )
  }
