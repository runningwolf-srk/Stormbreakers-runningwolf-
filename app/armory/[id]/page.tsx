import { ALL_RELICS } from '@/data/armory'
import Link from 'next/link'

export default function Page({ params }: any) {
  const relic: any = ALL_RELICS.find((r: any) => r.slug === params.id)

  if (!relic) {
    return (
      <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5dc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', fontFamily: 'serif' }}>
        <div><h1 style={{ letterSpacing: 5 }}>THE RELIC HAS NOT BEEN REVEALED</h1><Link href="/armory" style={{ display: 'block', marginTop: 30, padding: 16, background: '#f5f5dc', color: '#000', textDecoration: 'none' }}>ARMORY</Link></div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5dc', padding: 40, fontFamily: 'serif' }}>
      <Link href="/armory" style={{ color: '#888', textDecoration: 'none' }}>← Armory</Link>
      
      <div style={{ marginTop: 30, maxWidth: 800 }}>
        <div style={{ fontSize: 11, opacity: 0.5 }}>{relic.num} • {relic.category} • {relic.status} • {relic.scripture}</div>
        <h1 style={{ fontSize: 44, marginTop: 10, letterSpacing: 8 }}>{relic.title.toUpperCase()}</h1>
        <p style={{ marginTop: 10, opacity: 0.6 }}>{relic.sound}</p>
        <p style={{ marginTop: 6, opacity: 0.5, fontStyle: 'italic' }}>{relic.hook}</p>
      </div>

      {relic.status === 'forged' ? (
        <div style={{ marginTop: 50, maxWidth: 800, display: 'grid', gap: 24 }}>
          <div style={{ border: '1px solid #222', padding: 28, background: '#111' }}>
            <h3 style={{ letterSpacing: 3 }}>⚔️ SONG — The Relic</h3>
            <pre style={{ whiteSpace: 'pre-wrap', marginTop: 16, opacity: 0.8, lineHeight: 1.7 }}>{relic.lyrics || 'Lyrics being forged...'}</pre>
          </div>
          <div style={{ border: '1px solid #222', padding: 28, background: '#111' }}>
            <h3 style={{ letterSpacing: 3 }}>📖 CHRONICLE — Testimony</h3>
            <p style={{ marginTop: 16, opacity: 0.75, lineHeight: 1.8 }}>{relic.story || relic.hook}</p>
          </div>
          <div style={{ border: '1px solid #222', padding: 28, background: '#111' }}>
            <h3>✝️ WORD — {relic.scripture}</h3>
            <p style={{ marginTop: 16, opacity: 0.75, lineHeight: 1.8 }}>{relic.scriptureText || 'Word study being forged...'}</p>
          </div>
          <div style={{ border: '1px solid #333', padding: 28, background: '#1a1a0a' }}>
            <h3>📚 WALK — Practice</h3>
            <p style={{ marginTop: 16, opacity: 0.9, lineHeight: 1.8, fontWeight: 600 }}>{relic.walk || relic.practice}</p>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: 60, maxWidth: 600, border: '1px solid #222', padding: 50, textAlign: 'center', background: '#111' }}>
          <h2 style={{ letterSpacing: 5 }}>THE RELIC HAS NOT BEEN REVEALED</h2>
          <p style={{ marginTop: 20, opacity: 0.6, lineHeight: 1.7 }}>The song is not written.<br/>The chapter is not opened.<br/>The walk is waiting.</p>
          <p style={{ marginTop: 24, fontSize: 13, opacity: 0.5 }}>Seed: {relic.practice}</p>
        </div>
      )}

      <div style={{ marginTop: 60, paddingTop: 30, borderTop: '1px solid #222', opacity: 0.3, fontSize: 11, letterSpacing: 3 }}>
        ONE CANON • FOUR EXPERIENCES • SIXTEEN RELICS • ONE KING<br/>Hear → Understand → Root → Live
      </div>
    </main>
  )
        }
