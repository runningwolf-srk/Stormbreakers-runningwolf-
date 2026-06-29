import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type RelicStory = {
  title: string;
  text: string;
};

type Relic = {
  slug: string;
  title: string;
  subtitle: string;
  scripture: string;
  scriptureRef: string;
  theme: string;
  backgroundImage: string;
  audioUrl?: string;
  youtubeId?: string;
  youtubeIdBonus?: string;
  story: RelicStory[];
  sagaNext?: string;
  sagaPrev?: string;
  status?: "live" | "coming-soon";
};

const RELICS: Record<string, Relic> = {
  "horn-of-war": {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The call to stand before the battle begins.",
    scripture: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.",
    scriptureRef: "Joel 2:1",
    theme: "By His Call We Rise",
    backgroundImage: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "M4wGCg5oCx0",
    // audioUrl: "/audio/horn-of-war.mp3", // Uncomment when file uploaded
    story: [
      {
        title: "WRITTEN 2024",
        text: "Composed when silence felt like surrender. Before the first sword was drawn, the horn sounded. Not to signal fear, but to awaken courage."
      },
      {
        title: "MEANING",
        text: "When you hear the call, you choose: cower or charge."
      }
    ],
    sagaNext: "iron-collide"
  },
  "iron-collide": {
    slug: "iron-collide",
    title: "Iron Collide",
    subtitle: "Faith sharpened in the fire of resistance.",
    scripture: "As iron sharpens iron, so one person sharpens another.",
    scriptureRef: "Proverbs 27:17",
    theme: "By His Strength We Endure",
    backgroundImage: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "odIsEMUtNJI",
    youtubeIdBonus: "fIkUDO2emoc",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Born where comfort died and calling began. Every trial was a hammer. Every enemy, an anvil."
      },
      {
        title: "MEANING",
        text: "Pressure does not destroy you. It forges you."
      }
    ],
    sagaPrev: "horn-of-war",
    sagaNext: "blood-of-the-cross"
  },
  "blood-of-the-cross": {
    slug: "blood-of-the-cross",
    title: "Blood of the Cross",
    subtitle: "Mercy written in sacrifice. Hope carried through suffering.",
    scripture: "And through him to reconcile to himself all things, making peace by his blood, shed on the cross.",
    scriptureRef: "Colossians 1:20",
    theme: "By His Blood We Are Redeemed",
    backgroundImage: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "4lcbjsNLlzo",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Written at Golgotha where defeat became invasion. The cross was not the end. It was the turning point."
      },
      {
        title: "MEANING",
        text: "What looked like loss became eternal victory."
      }
    ],
    sagaPrev: "iron-collide",
    sagaNext: "spiritual-journey"
  },
  "spiritual-journey": {
    slug: "spiritual-journey",
    title: "Spiritual Journey",
    subtitle: "Survival was never the goal. Purpose was.",
    scripture: "And we know that in all things God works for the good of those who love him.",
    scriptureRef: "Romans 8:28",
    theme: "By His Purpose We Are Led",
    backgroundImage: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "umDFjJjh0_c",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Written in the middle of nowhere between broken and becoming. You are not lost. You are being led."
      },
      {
        title: "MEANING",
        text: "The path is the transformation."
      }
    ],
    sagaPrev: "blood-of-the-cross",
    sagaNext: "lord-of-lords"
  },
  "lord-of-lords": {
    slug: "lord-of-lords",
    title: "Lord of Lords",
    subtitle: "Every knee will bow. Every tongue confess.",
    scripture: "On his robe and on his thigh he has this name written: King of kings and Lord of lords.",
    scriptureRef: "Revelation 19:16",
    theme: "By His Authority We Rule",
    backgroundImage: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    story: [
      {
        title: "WRITTEN 2024",
        text: "He was a lamb once. Now he returns as a lion. The age of silence is over."
      },
      {
        title: "MEANING",
        text: "When the Lion rises, everything bows."
      }
    ],
    sagaPrev: "spiritual-journey",
    sagaNext: "scars-that-preach",
    status: "coming-soon"
  },
  "scars-that-preach": {
    slug: "scars-that-preach",
    title: "Scars That Preach",
    subtitle: "Born through the fire. Testimony in flesh.",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities.",
    scriptureRef: "Isaiah 53:5",
    theme: "By His Wounds We Are Healed",
    backgroundImage: "/file_0000000065a071f5832301f52d11fb80.png",
    story: [
      {
        title: "WRITTEN 2024",
        text: "Your scars are not shame. They are scripture. Every wound is a sermon."
      },
      {
        title: "MEANING",
        text: "The fire did not consume you. It commissioned you."
      }
    ],
    sagaPrev: "lord-of-lords",
    status: "coming-soon"
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const relic = RELICS[params.slug];
  if (!relic) return { title: "Relic Not Found" };
  return {
    title: `${relic.title} | Hall of Relics`,
    description: `${relic.subtitle} — ${relic.scriptureRef}`,
    openGraph: {
      title: relic.title,
      description: relic.subtitle,
      images: [relic.backgroundImage],
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(RELICS).map((slug) => ({ slug }));
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug];

  if (!relic) return notFound();

  const prevRelic = relic.sagaPrev ? RELICS[relic.sagaPrev] : null;
  const nextRelic = relic.sagaNext ? RELICS[relic.sagaNext] : null;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO - MOBILE FIXED */}
      <div className="relative min-h- flex items-center justify-center text-center px-4 py-24 md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={relic.backgroundImage}
            alt={relic.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-amber-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold mb-4">
            {relic.theme}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-4 md:mb-6 px-2">
            {relic.title}
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 mb-6 max-w-2xl mx-auto px-4">
            {relic.subtitle}
          </p>
          <div className="border-l-4 border-amber-500 pl-4 md:pl-6 text-left max-w-2xl mx-auto mt-8">
            <p className="text-base md:text-xl italic text-zinc-200 leading-relaxed">
              "{relic.scripture}"
            </p>
            <p className="text-amber-500 font-bold mt-2">{relic.scriptureRef}</p>
          </div>
        </div>
      </div>

      {/* MEDIA SECTION - CONDITIONAL RENDERING */}
      <div className="bg-zinc-950 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {relic.status === "coming-soon"? (
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-12 md:p-16 text-center">
              <p className="text-2xl md:text-3xl font-black text-amber-500 tracking-wider">COMING SOON</p>
              <p className="text-zinc-500 mt-3">This relic is being forged.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* AUDIO - ONLY SHOWS IF FILE EXISTS */}
              {relic.audioUrl && (
                <div className="bg-zinc-900 p-4 md:p-6 rounded-xl">
                  <p className="text-xs md:text-sm text-zinc-400 mb-3 uppercase tracking-wider">Audio Relic</p>
                  <audio controls className="w-full" src={relic.audioUrl}>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}

              {/* YOUTUBE - PRIMARY */}
              {relic.youtubeId && (
                <div>
                  <p className="text-xs md:text-sm text-zinc-400 mb-3 uppercase tracking-wider">Video Scroll</p>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`https://www.youtube.com/embed/${relic.youtubeId}?rel=0&modestbranding=1`}
                      title={relic.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* YOUTUBE - BONUS */}
              {relic.youtubeIdBonus && (
                <div>
                  <p className="text-xs md:text-sm text-zinc-400 mb-3 uppercase tracking-wider">Bonus: Original Version</p>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={`https://www.youtube.com/embed/${relic.youtubeIdBonus}?rel=0&modestbranding=1`}
                      title={`${relic.title} Original`}
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* STORY SECTIONS */}
      <div className="bg-black px-4 md:px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
          {relic.story.map((section, i) => (
            <div key={i} className="border-l-2 border-zinc-800 pl-6 md:pl-8">
              <h2 className="text-xl md:text-2xl font-black text-amber-500 mb-3 md:mb-4 tracking-wide">
                {section.title}
              </h2>
              <p className="text-lg md:text-2xl leading-relaxed text-zinc-300 font-light">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SAGA NAVIGATION - MOBILE FIXED */}
      <div className="bg-zinc-950 border-t border-zinc-900 px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 items-center text-sm">
          {prevRelic? (
            <Link
              href={`/music/${prevRelic.slug}`}
              className="text-zinc-400 hover:text-amber-500 transition-colors font-semibold text-left"
            >
              <span className="block text-xs text-zinc-600">Previous</span>
              ← {prevRelic.title}
            </Link>
          ) : (
            <Link href="/music" className="text-zinc-600 hover:text-zinc-400 text-left">
              <span className="block text-xs text-zinc-700">Hall</span>
              ← Relics
            </Link>
          )}

          <Link 
            href="/music" 
            className="text-zinc-700 hover:text-amber-500 uppercase tracking-widest text-xs text-center transition-colors"
          >
            Hall
          </Link>

          {nextRelic? (
            <Link
              href={`/music/${nextRelic.slug}`}
              className="text-zinc-400 hover:text-amber-500 transition-colors font-semibold text-right"
            >
              <span className="block text-xs text-zinc-600">Next</span>
              {nextRelic.title} →
            </Link>
          ) : (
            <span className="text-zinc-700 text-right">
              <span className="block text-xs text-zinc-800">End</span>
              Saga
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
