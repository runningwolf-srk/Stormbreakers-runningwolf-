export const metadata = {
  title: "RunningWolf SRK",
  description: "Stormbreaker RunningWolf"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        background: "#0b0f14",
        color: "#e8e0d0",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
      }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "32px 20px" }}>
          {children}
        </div>
      </body>
    </html>
  )
}
