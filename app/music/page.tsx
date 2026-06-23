export default function MusicPage() {
  return (
    <div style={{ padding: "24px", maxWidth: "980px", margin: "0 auto", color: "#e8e2da", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", color: "#d4a84b", marginBottom: "4px" }}>Music Catalog</h1>
      <p style={{ color: "#9a8a7a", marginBottom: "24px", letterSpacing: "2px", textTransform: "uppercase", fontSize: "14px" }}>
        Jessy Marquez<br />
        <span style={{ fontSize: "12px" }}>RUNNINGWOLF</span>
      </p>

      <div style={{ display: "grid", gap: "20px", textAlign: "left" }}>
        <div style={{ background: "#141011", border: "1px solid #2a1818", borderRadius: "14px", overflow: "hidden" }}>
          <img src="/music/heaven-calling.jpg" alt="Heaven Calling" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "14px 16px", color: "#d4a84b", fontWeight: 600 }}>Heaven Calling</div>
        </div>

        <div style={{ background: "#141011", border: "1px solid #2a1818", borderRadius: "14px", overflow: "hidden" }}>
          <img src="/music/iron-collide.jpg" alt="Iron Collide" style={{ width: "100%", display: "block" }} />
          <div style={{ padding: "14px 16px", color: "#d4a84b", fontWeight: 600 }}>Iron Collide</div>
        </div>
      </div>
    </div>
  )
}
