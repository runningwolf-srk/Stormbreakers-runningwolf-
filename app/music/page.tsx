"use client"
import Link from "next/link"

const catalog = [
  { id: "heaven-calling", title: "Heaven Calling", cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "iron-collide", title: "Iron Collide", cover: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "blood-of-cross", title: "Blood of Cross", cover: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "lord-of-lords", title: "Lord of Lords", cover: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "horn-of-war", title: "Horn of War", cover: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
  { id: "spiritual-journey", title: "Spiritual Journey", cover: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp", youtube: "#" },
]

export default function MusicPage() {
  return (
    <main style={{ minHeight: "100vh", fontFamily: "system-ui" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "24px" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#d4a84b" }}>← Home</Link>
          <h1 style={{ fontSize: 36, fontWeight: 700 }}>Music Catalog</h1>
          <p style={{ fontSize: 13, letterSpacing: "0.1em" }}>Jessy Marquez</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
          {catalog.map((t) => (
            <a key={t.id} href={t.youtube} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", border: "1px solid #333", borderRadius: 12, overflow: "hidden", display: "block" }}>
              <div style={{ aspectRatio: "1 / 1", background: "#111" }}>
                <img src={t.cover} alt={t.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "14px 16px" }}>
                <div style={{ fontWeight: 600 }}>{t.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
