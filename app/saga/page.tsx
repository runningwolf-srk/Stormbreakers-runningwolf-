import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RELICS } from '../../../lib/relics';

// ADD YOUR STORY FOR EACH RELIC HERE
const SAGA_STORIES = {
  'horn-of-war': {
    story: `
      <p>This is where you write the story behind HORN OF WAR...</p>
      <p>What darkness were you in when this weapon was forged?</p>
      <p>What did God show you about blowing the trumpet?</p>
    `
  },
  'iron-collide': {
    story: `
      <p>The story of IRON COLLIDE...</p>
      <p>Who was the iron that sharpened you?</p>
    `
  },
  'iron-collide-worship': {
    story: `
      <p>The worship version came when...</p>
    `
  },
  'blood-of-cross': {
    story: `
      <p>The revelation of the blood...</p>
    `
  },
  'heaven-calling': {
    story: `
      <p>I heard heaven calling when...</p>
    `
  },
  'im-on-fire': {
    story: `
      <p>The fire fell when...</p>
    `
  },
  'spiritual-journey': {
    story: `
      <p>The journey began with one step...</p>
    `
  }
};

export async function generateStaticParams() {
  return RELICS.map((relic) => ({ slug: relic.id }));
}

export default function SagaChapter({ params }: { params: { slug: string } }) {
  const relic = RELICS.find(r => r.id === params.slug);
  const story = SAGA_STORIES[params.slug as keyof typeof SAGA_STORIES];
  
  if (!relic || !story) {
    notFound();
  }

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      padding:'60px 24px',
      fontFamily:'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth:'700px', margin:'0 auto' }}>
        
        <Link href="/saga" style={{
          color:'#d4af37',
          textDecoration:'none',
          fontSize:'14px',
          display:'inline-block',
          marginBottom:'60px'
        }}>
          ← Back to The Saga
        </Link>

        <div style={{
          width:'100%',
          aspectRatio:'16/9',
          backgroundImage:`url(${relic.cover})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundColor:'#111',
          marginBottom:'40px',
          borderRadius:'4px',
          border:'1px solid #1a1a1a'
        }}></div>

        <div style={{
          fontSize:'11px',
          letterSpacing:'4px',
          color:'#d4af37',
          marginBottom:'16px'
        }}>
          {relic.subtitle} | {relic.scripture}
        </div>
        
        <h1 style={{
          fontSize:'56px',
          fontFamily:'Georgia, serif',
          color:'#fff',
          margin:'0 0 40px 0',
          lineHeight:'1.1'
        }}>
          {relic.title}
        </h1>

        <div style={{
          background:'#0a0a0a',
          border:'1px solid #1a1a1a',
          borderLeft:'3px solid #d4af37',
          padding:'24px',
          marginBottom:'40px',
          borderRadius:'4px'
        }}>
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

        <div 
          style={{
            fontSize:'18px',
            lineHeight:'1.8',
            color:'#ccc'
          }}
          dangerouslySetInnerHTML={{ __html: story.story }}
        />

        <div style={{
          marginTop:'80px',
          paddingTop:'40px',
          borderTop:'1px solid #1a1a1a',
          display:'flex',
          justifyContent:'space-between',
          gap:'16px'
        }}>
          <Link href="/music" style={{
            color:'#d4af37',
            textDecoration:'none',
            fontSize:'14px'
          }}>
            🎵 Listen to this relic
          </Link>
          <Link href="/saga" style={{
            color:'#666',
            textDecoration:'none',
            fontSize:'14px'
          }}>
            ← All chapters
          </Link>
        </div>

      </div>
    </div>
  );
}
