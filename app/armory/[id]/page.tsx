// @ts-nocheck
export default function ArmoryDetail({ params }: { params: { id: string } }) {
  const id = params?.id || 'wolf'
  return (
    <main style={{ padding: 40, color: 'white', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ fontSize: 32 }}>Armory: {id}</h1>
      <div style={{ fontSize: 64, marginTop: 20 }}>⚔️</div>
      <p style={{ marginTop: 20, opacity: 0.7 }}>ONE CANON • FOUR EXPERIENCES</p>
      <a href="/armory" style={{ color: '#a78bfa', marginTop: 20, display: 'block' }}>← Back to Armory</a>
    </main>
  )
}
