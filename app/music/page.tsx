"use client"

import { musicCatalog } from "@/src/lib/musicCatalog"

function getYoutubeEmbed(id?: string) {
  return id ? `https://www.youtube.com/embed/${id}` : null
}

export default function MusicPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto", background: "#0a0a0a", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>RunningWolf Music</h1>
      
      <div style={{ display: "grid", gap: "2rem" }}>
        {musicCatalog.map((track) => {
          const embed = getYoutubeEmbed(track.youtubeId)
          return (
            <div key={track.id} style={{ border: "1px solid #333", borderRadius: "12px", padding: "1.5rem" }}>
              <h2 style={{ margin: "0 0 0.5rem" }}>{track.title}</h2>
              <p style={{ color: "#aaa", margin: "0 0 1rem" }}>{track.artist}</p>
              
              {embed ? (
                <iframe
                  width="100%"
                  height="315"
                  src={embed}
                  title={track.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "8px" }}
                />
              ) : (
                <div style={{ background: "#1a1a1a", padding: "1rem", borderRadius: "8px", color: "#666" }}>
                  No YouTube ID yet for this track
                </div>
              )}
            </div>
          )
        })}
      </div>
    </main>
  )
}
