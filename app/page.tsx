"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "#e8e0d0",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          width: "min(1000px, 100%)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          background: "#11121a",
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid #2a2a3a",
        }}
      >
        <div style={{ padding: 40, display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
          <img
            src="/jessy-marquez.jpg"
            alt="Jessy Marquez"
            style={{ width: "100%", borderRadius: 12, border: "1px solid #2a2a3a", objectFit: "cover" }}
          />
          <div>
            <h1 style={{ margin: "16px 0 8px", color: "#d4a84b" }}>Jessy Marquez</h1>
            <p style={{ margin: 0, opacity: 0.7 }}>RunningWolf SRK • Cinematic Worship • Viking Sound</p>
          </div>
        </div>

        <div
          style={{
            padding: 40,
            background: "radial-gradient(circle at top, #1a1a2a 0%, #0b0b0f 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85 }}>
            <p style={{ marginTop: 0 }}>Sound forged in storm, memory, and faith.</p>
            <p>A cinematic journey built from worship, Viking energy, and story-driven music.</p>
          </div>
          <Link
            href="/music"
            style={{
              marginTop: 32,
              display: "inline-block",
              padding: "12px 20px",
              background: "#d4a84b",
              color: "#0b0b0f",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
              width: "fit-content",
            }}
          >
            Enter Music →
          </Link>
        </div>
      </div>
    </main>
  )
}
