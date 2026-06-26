import { notFound } from 'next/navigation';
import Link from 'next/link';

const relics = [
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    tagline: 'The call to stand before the battle begins.',
    byLine: 'By His Call We Rise',
    bgImage: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Composed when complacency felt like surrender. A trumpet for sleeping warriors.',
    story: [
      'Before the first sword was drawn, the horn sounded.',
      'Not to signal fear, but to awaken courage.',
      'When you hear that sound, you choose.',
      'Cower, or charge.'
    ],
    meaning: 'Complacent faith dies in silence. Awakened faith answers the horn.'
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    tagline: 'Faith sharpened in the fire of resistance.',
    byLine: 'By His Strength We Endure',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Born in the conflict between comfort and calling. Where worship meets warfare.',
    story: [
      'Two blades. One forge. No mercy.',
      'Iron only strengthens when it strikes iron.',
      'Every trial was a hammer. Every enemy, an anvil.',
      'Stop praying for easy battles. Start praying for stronger steel.'
    ],
    meaning: 'Spiritual warfare is not fought in palaces. It is won in caves.'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    tagline: 'Where the battlefield becomes an altar.',
    byLine: 'By His Presence We Surrender',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'The same war, fought on knees instead of feet. When the war room becomes the throne room.',
    story: [
      'The same battlefield. The same scars. A different sound.',
      'Where defiance once screamed, surrender now kneels.',
      'Not weakness. Weaponized worship.',
      'The enemy expected a sword. He got a song.'
    ],
    meaning: 'Some battles you win standing. Others you win bowing.'
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    tagline: 'Mercy written in sacrifice. Hope carried through suffering.',
    byLine: 'By His Blood We Are Redeemed',
    bgImage: '/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Written at the foot of Golgotha. Where defeat became invasion.',
    story: [
      'Golgotha was not a defeat. It was an invasion.',
      'Hell celebrated for three days. Then the stone moved.',
      'The blood that fell did not just cover sin—it conquered death.',
      'Every drop was a declaration: "You are mine."'
    ],
    meaning: 'The cross was not the end of the story. It was the turning point of eternity.'
  },
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    tagline: 'When every other voice falls silent, heaven still speaks.',
    byLine: 'By His Voice We Are Known',
    bgImage: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Forged in a season where worship became the only weapon against silence. A moment of divine pursuit.',
    story: [
      '"Heaven is calling out my name."',
      'Even in stillness, we are not forgotten.',
      'What once felt distant became the sound that draws near.',
      'Divine calling is not earned—it is answered.'
    ],
    meaning: 'God speaks most clearly when words fail.'
  },
  { 
    slug: 'im-on-fire', 
    title: 'I\'m On Fire', 
    tagline: 'The flame of faith was never meant to stay hidden.',
    byLine: 'By His Fire We Are Ignited',
    bgImage: '/file_0000000065a071f5832301f52d11fb80.png',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Pentecost was not a suggestion. It was an explosion. This is for the ones tired of lukewarm.',
    story: [
      'Tongues of fire. Hurricane wind. Dead religion catching flame.',
      'The same Spirit that raised Christ now burns in ordinary men.',
      'You cannot fake this fire. You can only carry it.',
      'The difference between a spark and a wildfire is surrender.'
    ],
    meaning: 'Holy fire cannot be contained. It must be released.'
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    tagline: 'Survival was never the goal. Purpose was.',
    byLine: 'By His Purpose We Are Led',
    bgImage: '/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    written: '2024',
    origin: 'Written in the middle. Not at the start, not at the finish. The messy, mundane middle where faith becomes real.',
    story: [
      'The road was longer than promised. The night, darker than expected.',
      'But every detour had a purpose. Every delay, a lesson.',
      'He was not lost. He was being led.',
      'The destination was never the point. The transformation was.'
    ],
    meaning: 'You are not behind. You are being built.'
  },
];

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = relics.find(r => r.slug === params.slug);
  
  if (!relic) {
    notFound();
  }

  const currentIndex = relics.findIndex(r => r.slug === params.slug);
  const nextRelic = relics[currentIndex + 1] || relics[0];

  return (
    <div style={{
      background:'black',
      color:'white',
      minHeight:'100vh',
      fontFamily:'system-ui, sans-serif'
    }}>
      {/* Hero */}
      <div style={{
        height:'70vh',
        backgroundImage:`url(${relic.bgImage})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        position:'relative',
        display:'flex',
        alignItems:'flex-end'
      }}>
        <div style={{
          position:'absolute',
          top:0,left:0,right:0,bottom:0,
          background:'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.8) 100%)'
        }}></div>
        <div style={{
          position:'relative',
          padding:'60px 20px',
          maxWidth:'900px',
          margin:'0 auto',
          width:'100%'
        }}>
          <Link href="/music" style={{
            color:'#999',
            textDecoration:'none',
            fontSize:'16px',
            display:'inline-block',
            marginBottom:'20px'
          }}>
            ← Hall of Relics
          </Link>
          <h1 style={{
            fontSize:'64px',
            margin:'0 0 15px 0',
            fontFamily:'Georgia, serif',
            fontWeight:'bold',
            textShadow:'3px 3px 6px rgba(0,0,0,0.9)',
            lineHeight:'1.1'
          }}>
            {relic.title}
          </h1>
          <p style={{
            fontSize:'20px',
            fontStyle:'italic',
            color:'#ddd',
            margin:'0 0 10px 0',
            textShadow:'2px 2px 4px rgba(0,0,0,0.9)'
          }}>
            {relic.tagline}
          </p>
          <p style={{
            fontSize:'16px',
            color:'#999',
            margin:0,
            fontFamily:'Georgia, serif'
          }}>
            {relic.byLine}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth:'700px',
        margin:'0 auto',
        padding:'80px 20px'
      }}>
        
        {/* YouTube */}
        <div style={{marginBottom:'80px'}}>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${relic.youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{borderRadius:'4px'}}
          ></iframe>
        </div>

        {/* The Story */}
        <div style={{marginBottom:'60px'}}>
          <h2 style={{
            fontSize:'28px',
            marginBottom:'10px',
            fontFamily:'Georgia, serif',
            color:'white'
          }}>
            The Story
          </h2>
          <div style={{
            fontSize:'14px',
            color:'#666',
            marginBottom:'30px',
            fontFamily:'monospace'
          }}>
            Written: {relic.written}<br/>
            Origin: {relic.origin}
          </div>
          {relic.story.map((line, i) => (
            <p key={i} style={{
              fontSize:'18px',
              lineHeight:'1.9',
              marginBottom:'24px',
              color:'#ccc'
            }}>
              {line}
            </p>
          ))}
        </div>

        {/* Meaning */}
        <div style={{
          marginBottom:'80px',
          padding:'40px',
          background:'#0a0a0a',
          borderLeft:'3px solid #333',
        }}>
          <h3 style={{
            fontSize:'20px',
            marginBottom:'20px',
            fontFamily:'Georgia, serif',
            color:'#999',
            textTransform:'uppercase',
            letterSpacing:'2px'
          }}>
            Meaning
          </h3>
          <p style={{
            fontSize:'22px',
            lineHeight:'1.6',
            color:'white',
            margin:0,
            fontFamily:'Georgia, serif'
          }}>
            {relic.meaning}
          </p>
        </div>

        {/* Navigation */}
        <div style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          paddingTop:'40px',
          borderTop:'1px solid #222'
        }}>
          <Link href="/music" style={{
            color:'#666',
            textDecoration:'none',
            fontSize:'16px'
          }}>
            ← RETURN TO THE HALL
          </Link>
          <Link href={`/music/${nextRelic.slug}`} style={{
            padding:'12px 24px',
            background:'#111',
            color:'white',
            textDecoration:'none',
            borderRadius:'2px',
            border:'1px solid #333',
            fontSize:'16px',
            fontFamily:'Georgia, serif'
          }}>
            Next Relic: {nextRelic.title} →
          </Link>
        </div>

      </div>
    </div>
  );
      }
