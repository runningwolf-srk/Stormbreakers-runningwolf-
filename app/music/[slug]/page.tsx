import { notFound } from 'next/navigation';

const relics = [
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    tagline: 'When every other voice falls silent, heaven still speaks.',
    bgImage: '/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ', // ← REPLACE WITH YOUR YOUTUBE ID
    story: [
      'In the wasteland of broken promises, a warrior stood alone.',
      'The battle had taken everything—brothers, purpose, hope itself.',
      'Then, through the smoke and silence, a whisper cut deeper than any blade.',
      'Not the voice of kings or commanders. The voice that formed galaxies.',
      'Heaven was calling him home.'
    ],
    meaning: 'This song was born in the valley. When depression said "stay down," heaven said "rise up." It\'s not about escaping earth—it\'s about bringing heaven\'s authority into the battlefield you\'re already standing in.'
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    tagline: 'Faith sharpened in the fire of resistance.',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    story: [
      'Two blades. One forge. No mercy.',
      'The Spartan knew: iron only strengthens when it strikes iron.',
      'Every trial was a hammer. Every enemy, an anvil.',
      'He stopped praying for easy battles. He started praying for stronger steel.'
    ],
    meaning: 'Iron Collide is the sound of spiritual warfare. It\'s not pretty worship—it\'s battle worship. The kind David wrote when he was hiding in caves, not palaces.'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    tagline: 'Where the battlefield becomes an altar.',
    bgImage: '/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    story: [
      'The same battlefield. The same scars. But a different sound.',
      'Where Iron Collide screamed defiance, this version kneels in surrender.',
      'Not weakness. Weaponized worship.',
      'The enemy expected a sword. He got a song.'
    ],
    meaning: 'Some battles you fight standing. Others you win on your knees. This is the worship version for when the war room becomes the throne room.'
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    tagline: 'Mercy written in sacrifice. Hope carried through suffering.',
    bgImage: '/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    story: [
      'Golgotha was not a defeat. It was an invasion.',
      'Hell celebrated for three days. Then the stone moved.',
      'The blood that fell didn\'t just cover sin—it conquered death.',
      'Every drop was a declaration: "You are mine."'
    ],
    meaning: 'This isn\'t a funeral song. It\'s a victory march. The cross wasn\'t the end of the story—it was the turning point of eternity.'
  },
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    tagline: 'The call to stand before the battle begins.',
    bgImage: '/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    story: [
      'Before the first sword was drawn, the horn sounded.',
      'Not to signal fear, but to awaken courage.',
      'Every warrior knew: when you hear that sound, you choose.',
      'Cower, or charge.'
    ],
    meaning: 'Horn of War is the alarm clock for complacent Christianity. It\'s Gideon\'s trumpet. Joshua\'s shout. The sound that makes giants nervous.'
  },
  { 
    slug: 'im-on-fire', 
    title: 'I\'m On Fire', 
    tagline: 'Holy fire cannot be contained. It must be released.',
    bgImage: '/file_0000000065a071f5832301f52d11fb80.png',
    youtubeId: 'dQw4w9WgXcQ',
    story: [
      'Pentecost wasn\'t a suggestion. It was an explosion.',
      'Tongues of fire. Hurricane wind. Dead religion catching flame.',
      'The same Spirit that raised Christ now burns in ordinary men.',
      'You can\'t fake this fire. You can only carry it.'
    ],
    meaning: 'This song is for the ones who got tired of lukewarm. It\'s not hype—it\'s holy. The difference between a spark and a wildfire is surrender.'
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    tagline: 'Survival was never the goal. Purpose was.',
    bgImage: '/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp',
    youtubeId: 'dQw4w9WgXcQ',
    story: [
      'The road was longer than promised. The night, darker than expected.',
      'But every detour had a purpose. Every delay, a lesson.',
      'He wasn\'t lost. He was being led.',
      'The destination was never the point. The transformation was.'
    ],
    meaning: 'Spiritual Journey is for the ones in the middle. Not at the start, not at the finish. The messy, mundane, miraculous middle where faith becomes real.'
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
      {/* Hero with Cover Image */}
      <div style={{
        height:'60vh',
        backgroundImage:`url(${relic.bgImage})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        position:'relative',
        display:'flex',
        alignItems:'flex-end'
      }}>
        <div style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          background:'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)'
        }}></div>
        <div style={{
          position:'relative',
          padding:'60px 20px',
          maxWidth:'1000px',
          margin:'0 auto',
          width:'100%'
        }}>
          <h1 style={{
            fontSize:'72px',
            margin:'0 0 10px 0',
            fontFamily:'Georgia, serif',
            fontWeight:'bold',
            textShadow:'3px 3px 6px rgba(0,0,0,0.9)'
          }}>
            {relic.title}
          </h1>
          <p style={{
            fontSize:'20px',
            fontStyle:'italic',
            color:'#ddd',
            margin:0,
            textShadow:'2px 2px 4px rgba(0,0,0,0.9)'
          }}>
            {relic.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth:'800px',
        margin:'0 auto',
        padding:'60px 20px'
      }}>
        
        {/* Play Button / YouTube */}
        <div style={{marginBottom:'60px'}}>
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${relic.youtubeId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{borderRadius:'8px'}}
          ></iframe>
        </div>

        {/* The Story */}
        <div style={{marginBottom:'60px'}}>
          <h2 style={{
            fontSize:'32px',
            marginBottom:'30px',
            fontFamily:'Georgia, serif',
            borderBottom:'2px solid #333',
            paddingBottom:'10px'
          }}>
            THE STORY
          </h2>
          {relic.story.map((paragraph, i) => (
            <p key={i} style={{
              fontSize:'18px',
              lineHeight:'1.8',
              marginBottom:'20px',
              color:'#ccc'
            }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Meaning */}
        <div style={{
          marginBottom:'80px',
          padding:'30px',
          background:'#111',
          borderLeft:'4px solid #666',
          borderRadius:'4px'
        }}>
          <h3 style={{
            fontSize:'24px',
            marginBottom:'15px',
            fontFamily:'Georgia, serif'
          }}>
            THE MEANING
          </h3>
          <p style={{
            fontSize:'18px',
            lineHeight:'1.8',
            color:'#ccc',
            margin:0,
            fontStyle:'italic'
          }}>
            {relic.meaning}
          </p>
        </div>

        {/* Continue to Next Relic */}
        <div style={{
          textAlign:'center',
          paddingTop:'40px',
          borderTop:'1px solid #333'
        }}>
          <p style={{color:'#666', marginBottom:'20px'}}>CONTINUE THE SAGA</p>
          <a 
            href={`/music/${nextRelic.slug}`}
            style={{
              display:'inline-block',
              padding:'15px 40px',
              background:'#222',
              color:'white',
              textDecoration:'none',
              borderRadius:'4px',
              border:'1px solid #444',
              fontSize:'18px',
              fontFamily:'Georgia, serif'
            }}
          >
            Next Relic: {nextRelic.title} →
          </a>
        </div>

      </div>
    </div>
  );
}
