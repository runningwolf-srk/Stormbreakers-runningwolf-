import { notFound } from 'next/navigation';
import Link from 'next/link';

const CHAPTERS = {
  darkness: {
    number: 'I',
    title: 'The Darkness',
    subtitle: 'Where it began',
    content: `
      // WRITE YOUR TESTIMONY HERE
      // Replace this with your Chapter I story
      // Use <p> tags for paragraphs
      
      <p>I was born into brokenness...</p>
      
      <p>The addiction started when...</p>
      
      <p>At my lowest point...</p>
    `
  },
  crossroads: {
    number: 'II',
    title: 'The Crossroads',
    subtitle: 'The moment of choice',
    content: `
      <p>Then God showed up...</p>
    `
  },
  calling: {
    number: 'III',
    title: 'The Calling',
    subtitle: 'RunningWolf is born',
    content: `
      <p>He called me RunningWolf because...</p>
    `
  },
  stormbreakers: {
    number: 'IV',
    title: 'The Stormbreakers',
    subtitle: 'Forging the weapons',
    content: `
      <p>Each song is a weapon forged in fire...</p>
    `
  },
  journey: {
    number: 'V',
    title: 'The Journey Continues',
    subtitle: 'Where we go from here',
    content: `
      <p>This is just the beginning...</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(CHAPTERS).map((id) => ({ slug: id }));
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = CHAPTERS[params.slug as keyof typeof CHAPTERS];
  
  if (!chapter) {
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
          fontSize:'11px',
          letterSpacing:'4px',
          color:'#d4af37',
          marginBottom:'16px'
        }}>
          CHAPTER {chapter.number}
        </div>
        
        <h1 style={{
          fontSize:'56px',
          fontFamily:'Georgia, serif',
          color:'#fff',
          margin:'0 0 12px 0',
          lineHeight:'1.1'
        }}>
          {chapter.title}
        </h1>

        <div style={{
          fontSize:'18px',
          color:'#999',
          fontStyle:'italic',
          marginBottom:'60px',
          paddingBottom:'60px',
          borderBottom:'1px solid #1a1a1a'
        }}>
          {chapter.subtitle}
        </div>

        <div 
          style={{
            fontSize:'18px',
            lineHeight:'1.8',
            color:'#ccc'
          }}
          dangerouslySetInnerHTML={{ __html: chapter.content }}
        />

        <div style={{
          marginTop:'80px',
          paddingTop:'40px',
          borderTop:'1px solid #1a1a1a',
          textAlign:'center'
        }}>
          <Link href="/saga" style={{
            color:'#d4af37',
            textDecoration:'none',
            fontSize:'14px'
          }}>
            ← Return to all chapters
          </Link>
        </div>

      </div>
    </div>
  );
}
