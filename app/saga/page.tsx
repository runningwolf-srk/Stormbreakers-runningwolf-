import { notFound } from 'next/navigation';
import Link from 'next/link';
import { RELICS } from '../../../lib/relics';

// ADD STORY + EXTRA IMAGES FOR EACH RELIC HERE
const SAGA_STORIES = {
  'horn-of-war': {
    images: [
      '/covers/horn-of-war.webp', // Main cover
      '/saga/horn-of-war-1.webp', // Add more images here
      '/saga/horn-of-war-2.webp',
    ],
    content: `
      <p>I was born into brokenness. The darkness had a name...</p>
      
      <img src="/saga/horn-of-war-1.webp" alt="The valley" style="width:100%; margin:32px 0; border-radius:4px;" />
      
      <p>The addiction started when I was 15. It wasn't just drugs...</p>
      
      <p>At my lowest point, I heard a sound. Not with my ears...</p>
      
      <img src="/saga/horn-of-war-2.webp" alt="The trumpet" style="width:100%; margin:32px 0; border-radius:4px;" />
      
      <p>Joel 2:1 became my war cry. The trumpet wasn't metal. It was my voice.</p>
    `
  },
  'iron-collide': {
    images: [
      '/covers/iron-collide.webp',
      '/saga/iron-collide-1.webp',
    ],
    content: `
      <p>Iron sharpens iron. But I had no iron in my life...</p>
      
      <img src="/saga/iron-collide-1.webp" alt="The collision" style="width:100%; margin:32px 0; border-radius:4px;" />
      
      <p>Then He sent a brother who wouldn't let me die in my sin...</p>
    `
  },
  'iron-collide-worship': {
    images: ['/covers/iron-collide-worship.webp'],
    content: `
      <p>The worship version came in a moment of surrender...</p>
    `
  },
  'blood-of-cross': {
    images: ['/covers/blood-of-cross.webp'],
    content: `
      <p>The blood wasn't just a doctrine. It was the moment I felt clean...</p>
    `
  },
  'heaven-calling': {
    images: ['/covers/heaven-calling.webp'],
    content: `
      <p>I heard heaven calling when I was in a pit...</p>
    `
  },
  'im-on-fire': {
    images: ['/covers/im-on-fire.webp'],
    content: `
      <p>The fire fell in my car. No one laid hands on me...</p>
    `
  },
  'spiritual-journey': {
    images: ['/covers/spiritual-journey.webp'],
    content: `
      <p>We walk by faith, not by sight. But I had to learn that...</p>
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
      fontFamily:'Georgia, serif'
    }}>
      <div style={{ maxWidth:'700px', margin:'0 auto' }}>
        
        <Link href="/saga" style={{
          color:'#d4af37',
          textDecoration:'none',
          fontSize:'14px',
          fontFamily:'system-ui, sans-serif',
          display:'inline-block',
          marginBottom:'60px'
        }}>
          ← Back to The Saga
        </Link>

        {/* HERO COVER IMAGE */}
        <div style={{
          width:'100%',
          aspectRatio:'16/9',
          backgroundImage:`url(${relic.cover})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
          backgroundColor:'#111',
          marginBottom:'40px',
          borderRadius:'4px',
          border:'1px solid #1a1a1a',
          boxShadow:'0 20px 60px rgba(212, 175, 55, 0.1)'
        }}></div>

        <div style={{
          fontSize:'11px',
          letterSpacing:'4px',
          color:'#d4af37',
          marginBottom:'16px',
          fontFamily:'system-ui, sans-serif'
        }}>
          {relic.subtitle} | {relic.scripture}
        </div>
        
        <h1 style={{
          fontSize:'56px',
          color:'#fff',
          margin:'0 0 40px 0',
          lineHeight:'1.1'
        }}>
          {relic.title}
        </h1>

        {/* PROPHECY CALLOUT */}
        <div style={{
          background:'linear-gradient(135deg, #0a0a0a 0%, #1a1a0a 100%)',
          border:'1px solid #2a2a1a',
          borderLeft:'4px solid #d4af37',
          padding:'32px',
          marginBottom:'60px',
          borderRadius:'4px'
        }}>
          <div style={{
            fontSize:'12px',
            letterSpacing:'2px',
            color:'#666',
            marginBottom:'12px',
            fontFamily:'system-ui, sans-serif'
          }}>
            THE PROPHECY
          </div>
          <p style={{
            fontSize:'20px',
            fontStyle:'italic',
            color:'#d4af37',
            lineHeight:'1.7',
            margin:0
          }}>
            "{relic.prophecy}"
          </p>
        </div>

        {/* ILLUSTRATED STORY CONTENT */}
        <div 
          style={{
            fontSize:'20px',
            lineHeight:'1.9',
            color:'#ddd'
          }}
          dangerouslySetInnerHTML={{ __html: story.content }}
        />

        {/* NAVIGATION */}
        <div style={{
          marginTop:'80px',
          paddingTop:'40px',
          borderTop:'1px solid #1a1a1a',
          display:'flex',
          justifyContent:'space-between',
          gap:'16px',
          fontFamily:'system-ui, sans-serif'
        }}>
          <Link href="/music" style={{
            color:'#d4af37',
            textDecoration:'none',
            fontSize:'14px'
          }}>
            🎵 Listen to this relic
          </Link>
          <Link href="/gallery" style={{
            color:'#666',
            textDecoration:'none',
            fontSize:'14px'
          }}>
            🖼️ View artwork
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
