// app/music/page.tsx
import Link from "next/link";

const relics = [
  {
    number: "01",
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The Battle Cry", 
    verse: "Joel 2:1",
    verseText: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    status: "unlocked"
  },
  {
    number: "02",
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Sharpened Together", 
    verse: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so one person sharpens another.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    status: "unlocked"
  },
  {
    number: "03",
    slug: "crown-of-thorns",
    title: "Crown of Thorns",
    subtitle: "The King of Pain", 
    verse: "Matthew 27:29",
    verseText: "They twisted together a crown of thorns and set it on his head. They put a staff in his right hand. Then they knelt in front of him and mocked him.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    status: "unlocked"
  },
  {
    number: "04",
    slug: "lion-and-lamb",
    title: "Lion and Lamb",
    subtitle: "The Paradox", 
    verse: "Revelation 5:5",
    verseText: "Then one of the elders said to me, 'Do not weep! See, the Lion of the tribe of Judah, the Root of David, has triumphed. He is able to open the scroll and its seven seals.'",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    status: "unlocked"
  },
  {
    number: "05",
    slug: "blood-of-cross",
    title: "Blood of Cross",
    subtitle: "The Covenant", 
    verse: "Colossians 1:20",
    verseText: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL • SACRED",
    status: "unlocked"
  },
  {
    number: "06",
    slug: "heaven-calling",
    title: "Heaven Calling",
    subtitle: "The Summoning", 
    verse: "1 Samuel 3:10",
    verseText: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    tags: "CINEMATIC WORSHIP • VIKING • ORCHESTRAL • CHORAL",
    status: "unlocked"
  },
  {
    number: "07",
    slug: "scars-that-preach",
    title: "Scars That Preach",
    subtitle: "Born Through Fire", 
    verse: "Job 23:10",
    verseText: "But he knows the way that I take; when he has tested me, I will come forth as gold.",
    tags: "CINEMATIC WORSHIP • TESTIMONY • ORCHESTRAL",
    status: "sealed"
  }
];

export default function MusicPage() {
  return (
    <main className="min-h-screen text-white antialiased relative z-0 flex flex-col bg-black">
      
      <header className="w-full border-b border-gray-900 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers - RunningWolf
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/music" className="text-amber-500">Relics</Link>
            <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 px-6 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              Hall of Relics
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Each song is a weapon. Each verse is a key. These are not tracks — they are testimonies forged in fire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relics.map((relic) => (
              <div 
                key={relic.slug}
                className={`border border-gray-800 bg-gray-950/50 p-6 flex flex-col ${relic.status === 'sealed' ? 'opacity-60' : 'hover:border-amber-500/50 transition-colors'}`}
              >
                <p className="text-xs text-amber-500 font-mono mb-3">{relic.number} / 07</p>
                <h3 className="text-2xl font-black text-white mb-1 tracking-tight">
                  {relic.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{relic.subtitle}</p>
                
                <blockquote className="border-l-2 border-amber-500/30 pl-4 mb-4 flex-1">
                  <p className="text-sm text-gray-300 italic mb-2">"{relic.verseText}"</p>
                  <cite className="text-xs text-gray-500 not-italic">{relic.verse}</cite>
                </blockquote>

                <p className="text-xs text-gray-600 tracking-wider mb-6">{relic.tags}</p>

                {relic.status === 'unlocked' ? (
                  <Link 
                    href={`/music/${relic.slug}`}
                    className="text-amber-500 hover:text-amber-400 text-sm font-mono tracking-wider"
                  >
                    ENTER RELIC →
                  </Link>
                ) : (
                  <div className="text-gray-600 text-sm font-mono tracking-wider">
                    🔒 TIER 3 SEALED
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <footer className="w-full border-t border-gray-900 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-gray-700 tracking-widest">
            STORMBREAKERS — RUNNINGWOLF
          </p>
        </div>
      </footer>

    </main>
  );
                        }
