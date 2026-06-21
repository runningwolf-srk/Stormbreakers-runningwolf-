// app/music/page.tsx
const tracks = [
  { id: "HNYdZTp1qNc", title: "May 28, 2026" },
  { id: "UT1c5Q81kVk", title: "horn stab silence" },
  { id: "NQTRyHDDlK0", title: "May 23, 2026" },
]

export default function Music() {
  return (
    <main style={{maxWidth: 480, margin: "0 auto", padding: "48px 16px", fontFamily: "system-ui", background: "#0b0b0f", color: "#e8e0d0", minHeight: "100vh"}}>
      <h1>RunningWolf SRK — Music</h1>
      <p style={{opacity: 0.7}}>Viking / Norse selections only</p>
      <div style={{display: "grid", gap: "32px", marginTop: "32px"}}>
        {tracks.map(t => (
          <div key={t.id}>
            <div style={{position: "relative", width: "100%", aspectRatio: "9 / 16", borderRadius: 12, overflow: "hidden", background: "#000"}}>
              <iframe
                src={`https://www.youtube.com/embed/${t.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0}}
              />
            </div>
            <p style={{marginTop: 8, opacity: 0.8}}>{t.title}</p>
          </div>
        ))}
      </div>
      <p style={{marginTop: 48}}><a href="/" style={{color: "#e8e0d0"}}>← Home</a></p>
    </main>
  )
}
