import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Chronicles | Stormbreakers',
  description: 'The Testimony of RunningWolf — Written in Ash and Fire',
};

const chapters = [
  {
    num: 1,
    title: "The Valley",
    slug: "the-valley",
    verse: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.",
    ref: "Psalm 23:4",
    teaser: "I was broken. The storm didn't let up. But He was in the rain with me.",
    relic: "jesus-is-an-healer"
  },
  {
    num: 2,
    title: "The Encounter", 
    slug: "the-encounter",
    verse: "Speak, for your servant is listening.",
    ref: "1 Samuel 3:10",
    teaser: "He called my name when I wasn't ready. Not clean. But called anyway.",
    relic: "heaven-calling"
  },
  {
    num: 3,
    title: "The Armory",
    slug: "the-armory",
    verse: "Blow the trumpet in Zion; sound the alarm on my holy hill.",
    ref: "Joel 2:1", 
    teaser: "Before the horn, there is silence. God uses silence to prepare warriors.",
    relic: "horn-of-war"
  },
  {
    num: 4,
    title: "The Commission",
    slug: "the-commission",
    verse: "As iron sharpens iron, so one person sharpens another.",
    ref: "Proverbs 27:17",
    teaser: "God put brothers in my path who scraped against my pride until Christ was formed.",
    relic: "iron-collide"
  },
  {
    num: 5,
    title: "The Journey",
    slug: "the-journey",
    verse: "I will restore to you the years that the swarming locust has eaten.",
    ref: "Joel 2:25",
    teaser: "You thought you were too far gone. Too late. But God kept you alive for a reason.",
    relic: "spiritual-journey"
  },
  {
    num: 6,
    title: "The Battle",
    slug: "the-battle",
    verse: "Making peace through his blood, shed on the cross.",
    ref: "Colossians 1:20",
    teaser: "All the war, all the scars, all the journey — it only matters because of His blood.",
    relic: "blood-of-the-cross"
  },
  {
    num: 7,
    title: "The Witness",
    slug: "the-witness",
    verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
    ref: "2 Corinthians 12:9",
    teaser: "I used to hide my scars. Then God said, 'Show them. That's where My power lives.'",
    relic: "scars-that-preach"
  },
  {
    num: 8,
    title: "The Hope",
    slug: "the-hope",
    verse: "KING OF KINGS AND LORD OF LORDS.",
    ref: "Revelation 19:16",
    teaser: "This is where the Armory ends and worship begins. He is Lord of my storm, my scars, and my story.",
    relic: "lord-of-lords"
  }
];

export default function Chronicles() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-wider">THE CHRONICLES</h1>
        <p className="text-xl text-zinc-400 mb-2">The Testimony of RunningWolf</p>
        <p className="text-zinc-500 italic mb-8">Written in Ash and Fire</p>
        <div className="h-px bg-zinc-800 my-8 max-w-xl mx-auto" />
        <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          This is not Scripture. This is my story. Every chapter points back to The Word that saved me.
        </p>
      </section>

      <section className="max-w-4xl mx-auto grid gap-4">
        {chapters.map((ch) => (
          <Link 
            key={ch.num}
            href={`/chronicles/${ch.slug}`}
            className="group bg-zinc-900 border border-zinc-800 hover:border-amber-500 p-8 transition duration-300"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="text-amber-500 text-sm font-bold mb-2 tracking-widest">CHAPTER {ch.num}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-amber-500 transition">{ch.title}</h2>
                <p className="text-zinc-400 mb-4 leading-relaxed">{ch.teaser}</p>
                <blockquote className="border-l-2 border-zinc-700 pl-4 italic text-zinc-500 text-sm">
                  "{ch.verse}" <cite className="not-italic text-zinc-600">— {ch.ref}</cite>
                </blockquote>
              </div>
              <div className="text-4xl opacity-20 group-hover:opacity-100 transition">📖</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
