import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getRelicBySlug, getAdjacentRelics, RELICS } from '../../../lib/relics';

export async function generateStaticParams() {
  return RELICS.map((relic) => ({
    slug: relic.id,
  }));
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = getRelicBySlug(params.slug);
  
  if (!relic) {
    notFound();
  }

  const { prev, next } = getAdjacentRelics(params.slug);

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth:'800px', margin:'0 auto' }}>
        
        <Link href="/music" style={{
          color:'#d4af37',
          textDecoration:'none',
          fontSize:'14px',
          display:'inline-block',
          marginBottom:'40px'
        }}>
          ← Back to Hall of Relics
        </Link>

        <div style={{
          width:'100%',
          aspectRatio:'16/9',
          backgroundImage:`url(${relic.cover})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundColor:'#111',
          marginBottom:'32px',
          borderRadius:'4px'
        }}></div>

        <div style={{
          fontSize:'11px',
          letterSpacing:'4px',
          color:'#d4af37',
          marginBottom:'8px'
        }}>
          {relic.subtitle}
        </div>
        
        <h1 style={{
          fontSize:'48px',
          fontFamily:'Georgia, serif',
          color:'#fff',
          margin:'0 0 24px 0'
        }}>
          {relic.title}
        </h1>

        <div style={{
          background:'#0a0a0a',
          border:'1px solid #1a1a1a',
          borderRadius:'4px',
          padding:'24px',
          marginBottom:'32px'
        }}>
          <div style={{
            fontSize:'11px',
            letterSpacing:'2px',
            color:'#666',
            marginBottom:'12px'
          }}>
            SCRIPTURE: {relic.scripture}
          </div>
          <p style={{
            fontSize:'18px',
            fontStyle:'italic',
            color:'#d4af37',
            lineHeight:'1.6',
            margin:0
          }}>
            "{relic.prophecy}"
          </p>
        </div>

        <div style={{
          aspectRatio:'16/9',
          background:'#000',
          border:'1px solid #1a1a1a',
          borderRadius:'4px',
          overflow:'hidden',
          marginBottom:'32px'
        }}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${relic.youtubeId}`}
            title={relic.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display:'block' }}
          ></iframe>
        </div>

        <div style={{
          display:'flex',
          justifyContent:'space-between',
          gap:'16px'
        }}>
          {prev ? (
            <Link href={`/music/${prev.id}`} style={{
              color:'#d4af37',
              textDecoration:'none',
              fontSize:'14px'
            }}>
              ← {prev.title}
            </Link>
          ) : <div></div>}
          
          {next ? (
            <Link href={`/music/${next.id}`} style={{
              color:'#d4af37',
              textDecoration:'none',
              fontSize:'14px'
            }}>
              {next.title} →
            </Link>
          ) : <div></div>}
        </div>

      </div>
    </div>
  );
}
