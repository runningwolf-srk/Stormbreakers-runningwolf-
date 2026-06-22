"use client"

const btnStyle: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: 9999,
  background: "#1a1a24",
  color: "#e8e0d0",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.02em",
  border: "1px solid #2a2a3a",
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        color: "#e8e0d0",
        background:
          "radial-gradient(circle at center, rgba(212,168,75,0.12), transparent 45%), radial-gradient(circle at top, rgba(255,255,255,0.03), transparent 60%), #050507",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(212,168,75,0.14)",
          filter: "blur(90px)",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          animation: "pulse 6s ease-in-out infinite",
          zIndex: 0,
        }}
      />
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            padding: 5,
            borderRadius: 20,
            background: "linear-gradient(135deg, rgba(212,168,75,0.55), rgba(0,0,0,0))",
            marginBottom: 28,
            boxShadow: "0 0 48px rgba(212,168,75,0.07)",
          }}
        >
          <img
            src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
            alt="Jessy Marquez - RunningWolf"
            style={{
              width: "100%",
              borderRadius: 16,
              display: "block",
              filter: "contrast(1.05) saturate(1.1)",
            }}
          />
        </div>
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 38, fontWeight: 700, color: "#d4a84b", margin: "0 0 6px", letterSpacing: "-0.01em" }}>
            Jessy Marquez
          </h1>
          <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.65, margin: 0 }}>
            RunningWolf
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          <a href="https://youtube.com/@jessymarquez-e5t" target="_blank" rel="noopener noreferrer" style={btnStyle}>YouTube</a>
          <a href="https://instagram.com/jesgel87" target="_blank" rel="noopener noreferrer" style={btnStyle}>Instagram</a>
          <a href="mailto:runningwolf2027@gmail.com" style={btnStyle}>Email</a>
        </div>
      </div>
      <style>{`@keyframes pulse { 0% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.08); } 100% { opacity: 0.35; transform: translate(-50%, -50%) scale(1); } }`}</style>
    </main>
  )
}
