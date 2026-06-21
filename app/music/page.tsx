// app/music/[id]/page.tsx
"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { musicCatalog } from "@/lib/musicCatalog"

export default function MusicDetail() {
  const params = useParams()
  const id = params?.id as string
  const track = musicCatalog.find(t => t.id === id)

  if (!track) {
    return (
      <main style={{ padding: 40, color: "#e8e0d0", background: "#0b0b0f", minHeight: "100vh" }}>
        <p>Track not found.</p>
        <Link href="/music" style={{ color: "#5b7a99" }}>← Back</Link>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: 480, margin: "0 auto", padding: "48px 16px", background: "#0b0b0f", minHeight: "100vh", color: "#e8e0d0", fontFamily: "system-ui" }}>
      <Link href="/music" style={{ color: "#5b7a99" }}>← Back to Album Wall</Link>
      <h1 style={{ marginTop: 24 }}>{track.tag}</h1>
      <p style={{ opacity: 0.6 }}>{track.title}</p>
      <div style={{ marginTop: 24, position: "relative", width: "100%", aspectRatio: "9 / 16", borderRadius: 12, overflow: "hidden", background: "#000" }}>
        <iframe
          src={`https://www.youtube.com/embed/${track.id}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
        />
      </div>
    </main>
  )
}
