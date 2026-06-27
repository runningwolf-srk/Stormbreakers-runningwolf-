import Link from 'next/link';
import { RELICS } from '../../lib/relics';

export default function Scrolls() {
  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth:'800px', margin:'0 auto' }}>
        
        <div style={{ textAlign:'center', marginBottom:'60px' }}>
          <div style={{
            fontSize:'11px',
            letterSpacing:'4px',
            color:'#444',
            marginBottom:'16px'
          }}>
            THE SCROLLS
          </div>
          <h1 style={{
            fontSize:'40px',
            fontFamily:'Georgia, serif',
            color:'#d4af37',
            margin:'0 0 16px 0'
          }}>
            Lyrics & Prophecy Notes
          </h1>
          <p style={{ fontSize:'16px', color:'#666' }}>
            The words behind the weapons. Read the revelation.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          {RELICS.map((relic) => (
            <Link 
              key={relic.id} 
              href={`/scrolls/${relic.id}`}
              style={{ textDecoration:'none' }}
            >
              <div style={{
                background:'#0a0a0a',
                border:'1px solid #1a1a1a',
                borderLeft:'3px solid #d4af37',
                padding:'24px',
                borderRadius:'4px'
              }}>
                <div style={{
                  fontSize:'11px',
                  letterSpacing:'2px',
                  color:'#d4af37',
                  marginBottom:'8px'
                }}>
                  {relic.subtitle}
                </div>
                <h3 style={{
                  fontSize:'24px',
                  fontFamily:'Georgia, serif',
                  color:'#fff',
                  margin:'0 0 8px 0'
                }}>
                  {relic.title}
                </h3>
                <div style={{
                  fontSize:'14px',
                  color:'#666',
                  fontStyle:'italic'
                }}>
                  {relic.scripture} → Read the scroll
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
