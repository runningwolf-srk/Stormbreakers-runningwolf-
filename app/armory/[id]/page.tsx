import { ALL_RELICS } from '@/data/armory'
import Link from 'next/link'

export default function Page({ params }: any) {
  const relic: any = ALL_RELICS.find((r: any) => r.slug === params.id)

  if (!relic) {
    return (
      <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5dc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', fontFamily: 'serif' }}>
        <div>
          <h1 style={{ fontSize: 26, letterSpacing: 5 }}>THE RELIC HAS NOT BEEN REVEALED</h1>
          <p style={{ marginTop: 18, opacity: 0.6 }}>This path is still being forged.<br />The song is not written. The chapter is not opened.<br />The walk is waiting.</p>
          <Link href="/armory" style={{ display: 'block', marginTop: 30, padding: 18, background: '#f5f5dc', color: '#0a0a0a', textDecoration: 'none', fontWeight: 800 }}>⚔️ HEAR — ARMORY</Link>
          <p style={{ marginTop: 20, opacity: 0.3, fontSize: 11 }}>ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING</p>
        </div>
      </main>
    )
  }

  const isForged = relic.status === 'forged'

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5dc', padding: 60, fontFamily: 'serif' }}>
      <Link href="/armory" style={{ color: '#888', textDecoration: 'none' }}>← Armory</Link>
      <div style={{ marginTop: 30 }}>
        <div style={{ fontSize: 12, opacity: 0.5 }}>{relic.num} • {relic.category} • {relic.status} • {relic.scripture}</div>
        <h1 style={{ fontSize: 40, marginTop: 12, letterSpacing: 6 }}>{relic.title.toUpperCase()}</h1>
        <p style={{ marginTop: 12, opacity: 0.7 }}>{relic.sound}</p>
        <p style={{ marginTop: 8, opacity: 0.6 }}>{relic.hook}</p>
      </div>

      {isForged ? (
        <div style={{ marginTop: 50, display: 'grid', gap: 16 }}>
          <div style={{ border: '1px solid #222', padding: 24, background: '#111' }}>
            <h3>⚔️ SONG — The Relic</h3>
            <p style={{ marginTop: 10, opacity: 0.6 }}>Sound: {relic.sound} / Scripture: {relic.scripture} / Lyrics being forged for {relic.title}</p>
          </div>
          <div style={{ border: '1px solid #222', padding: 24, background: '#111' }}>
            <h3>📖 CHRONICLE — Testimony</h3>
            <p style={{ marginTop: 10, opacity: 0.6 }}>{relic.hook} — Full testimony next forge.</p>
          </div>
          <div style={{ border: '1px solid #222', padding: 24, background: '#111' }}>
            <h3>✝️ WORD — {relic.scripture}</h3>
            <p style={{ marginTop: 10, opacity: 0.6 }}>Scripture study — What God reveals — How it points to Christ — Application today</p>
          </div>
          <div style={{ border: '1px solid #222', padding: 24, background: '#111' }}>
            <h3>📚 WALK — Practice</h3>
            <p style={{ marginTop: 10, opacity: 0.6 }}>{relic.practice}</p>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 50, border: '1px solid #222', padding: 40, background: '#111', textAlign: 'center' }}>
          <h2 style={{ letterSpacing: 4 }}>THE RELIC HAS NOT BEEN REVEALED</h2>
          <p style={{ marginTop: 16, opacity: 0.6 }}>The song is not written.<br />The chapter is not opened.<br />The walk is waiting.</p>
          <p style={{ marginTop: 20, fontSize: 13, opacity: 0.5 }}>Seed: {relic.practice}</p>
        </div>
      )}
    </main>
  )
}
