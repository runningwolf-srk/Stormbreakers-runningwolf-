// app/music/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

const relicsData = {
  "horn-of-war": {
    number: "01 / 07",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Joel 2:1",
    verseText: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    youtubeId: "REPLACE_HORN_ID",
    sections: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender."
      },
      {
        title: "THE HORN", 
        text: "Mahalla wasn’t written in a studio. It was birthed at 3am when addiction was screaming. The Spirit said: ‘Blow the horn.’ This is your war cry. The distorted guitars are the alarm. The chant is the army assembling."
      },
      {
        title: "THE ALARM",
        text: "You don’t blow the shofar for ambiance. You blow it because the enemy is at the gate. Blow it over your house. Over your mind. Over your addiction. The day of the Lord is coming — for your chains."
      }
    ]
  },
  "iron-collide": {
    number: "02 / 07",
    title: "Iron Collide", 
    subtitle: "Sharpened Together",
    verse: "Proverbs 27:17",
    verseText: "As iron sharpens iron, so one person sharpens another.",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    youtubeId: "REPLACE_IRON_ID",
    sections: [
      {
        title: "THE FORGE",
        text: "Iron doesn’t sharpen iron by accident. It takes heat. Pressure. Friction. God will put people in your life that scrape against your pride until Christ is formed in you."
      },
      {
        title: "THE COLLISION",
        text: "Hybrid is the sound of two kingdoms colliding. Your worship against your prison. The drop is the moment God marches out like Isaiah 42:13. You don’t fight FOR victory. You fight FROM it."
      },
      {
        title: "THE EDGE",
        text: "Dull swords get people killed. Let the Spirit sharpen you. Let brotherhood sharpen you. The enemy fears a sharpened saint."
      }
    ]
  }
};

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = relicsData[params.slug as keyof typeof relicsData];
  
  if (!relic) {
    notFound();
  }

  return (
    <main className="min-h-screen text-white antialiased relative z-0 flex flex-col">
      
      <header className="w-full border-b border-gray-900 bg-black/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-amber-500 font-black tracking-tight text-lg">
            Stormbreakers
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link href="/music" className="text-amber-500">Relics</Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          
          <p className="text-xs text-amber-500 font-mono mb-4">{relic.number}</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
            {relic.title}
          </h1>
          <p className="text-gray-400 text-xl mb-8">{relic.subtitle}</p>

          <blockquote className="border-l-2 border-amber-500 pl-6 mb-4">
            <p className="text-lg text-gray-200 italic mb-2">"{relic.verseText}"</p>
            <cite className="text-sm text-gray-500 not-italic">{relic.verse}</cite>
          </blockquote>

          <p className="text-xs text-gray-600 tracking-wider mb-12">{relic.tags}</p>

          {/* RELIC EXPERIENCE */}
          <div className="mb-16">
            <p className="text-xs text-amber-500 tracking-[0.3em] mb-4 font-mono">▶ RELIC EXPERIENCE</p>
            <div className="aspect-video border border-gray-800">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${relic.youtubeId}`}
                title={relic.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* STORY SECTIONS */}
          <div className="space-y-12">
            {relic.sections.map((section, idx) => (
              <div key={idx} className="border-l border-gray-800 pl-6">
                <h3 className="text-amber-500 font-black text-lg mb-3 tracking-wide">
                  {section.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-900 mt-16 pt-8">
            <Link href="/music" className="text-amber-500 hover:text-amber-400 text-sm font-mono">
              ← RETURN TO HALL
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
