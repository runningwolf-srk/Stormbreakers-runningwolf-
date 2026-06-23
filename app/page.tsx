import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container" style={{ textAlign: "center", paddingTop: "72px", paddingBottom: "72px" }}>
      <h1 style={{ fontSize: "48px", color: "#d4a84b", marginBottom: "12px" }}>JESSY MARQUEZ</h1>
      <p style={{ color: "#9a9590", letterSpacing: "0.2em", marginBottom: "32px" }}>RUNNINGWOLF</p>
      <p style={{ maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.6, color: "#e8e6e3" }}>
        Epic hard rock and worship anthems forged in fire and faith.
      </p>
      <Link href="/music" className="btn-gold">Listen Now →</Link>

      <div style={{ marginTop: "56px" }}>
        <h3 style={{ color: "#9a9590", fontSize: "13px", letterSpacing: "0.15em", marginBottom: "16px" }}>FEATURED RELEASE</h3>
        <Link href="/music" style={{ display: "inline-block" }}>
          <img 
            src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp" 
            alt="Heaven Calling"
            style={{ width: "280px", borderRadius: "12px", border: "1px solid #2a2a32" }}
          />
          <div style={{ marginTop: "10px", color: "#e8e6e3" }}>Heaven Calling</div>
        </Link>
      </div>
    </div>
  )
}
