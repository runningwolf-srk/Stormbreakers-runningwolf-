export default function Home() {
  return (
    <main>
      <h1 style={{ fontSize: 48, marginBottom: 8 }}>RunningWolf SRK</h1>
      <p style={{ opacity: 0.8 }}>Stormbreaker — Guymon, OK</p>
      <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
        <a href="/music" style={{ color: "#e8e0d0" }}>Music</a>
        <a href="/lab" style={{ color: "#e8e0d0" }}>Lab</a>
      </div>
    </main>
  )
}
