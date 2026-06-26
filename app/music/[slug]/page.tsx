'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// ============================================
// HALL OF RELICS — UNIFIED DESIGN SYSTEM v1.1
// 7 Relics Locked. Structure: Title → Subtitle → Story → Meaning
// ============================================

const songs = {
  "heaven-calling": {
    title: "Heaven Is Calling",
    subtitle: "A Stormbreakers Worship Anthem",
    youtubeId: "oxNauKuxg4Q", 
    bgImage: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e",
    story: {
      written: "2024",
      origin: "Written in a season where worship became the only weapon against silence.",
      lyricQuote: "Heaven is calling out my name.",
      meaning: "God speaks most clearly when words fail."
    }
  },
  "iron-collide": {
    title: "Iron Collide", 
    subtitle: "A Stormbreakers Worship Anthem",
    youtubeId: "odIsEMUtNJI",
    bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    story: {
      written: "2024",
      origin: "Forged in the fire of spiritual warfare. This track is the sound of a believer who refuses to bow.",
      lyricQuote: "Let iron collide with iron.",
      meaning: "You don't fight FOR victory. You fight FROM it. The iron collides, but the outcome is already written."
    }
  },
  "iron-collide-worship": {
    title: "Iron Collide Worship", 
    subtitle: "A Stormbreakers Worship Anthem",
    youtubeId: "fIkUDO2emoc",
    bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    story: {
      written: "2024",
      origin: "The worship version — where the battle becomes surrender and the clash becomes praise.",
      lyricQuote: "Every weapon formed against me falls.",
      meaning: "Worship is warfare. Praise breaks chains."
    }
  },
  "blood-of-cross": {
    title: "Blood of the Cross",
    subtitle: "A Stormbreakers Worship Anthem", 
    youtubeId: "4lcbjsNLlzo",
    bgImage: "https://images.unsplash.com/photo-1507692049790-de58290a4334",
    story: {
      written: "2024",
      origin: "Forged through cinematic worship and inspired by the sacrifice of Christ. A song of redemption, mercy, and hope that points to the power of the cross.",
      lyricQuote: "By His wounds we are healed.",
      meaning: "Five minutes of worship is a small offering in light of such great sacrifice."
    }
  },
  "horn-of-war": {
    title: "Horn of War",
    subtitle: "A Stormbreakers Worship Anthem",
    youtubeId: "M4wGCg5oCx0",
    bgImage: "https://images.unsplash.com/photo-1519563459339-59bb6d7f5e5e",
    story: {
      written: "2024",
      origin: "The horn blast that awakens the sleeping warband. This is the call — not to violence, but to purpose.",
      lyricQuote: "Sound the horn. Wake the dead.",
      meaning: "Every movement needs a sound that says 'we're here.' This is ours."
    }
  },
  "im-on-fire": {
    title: "I'm On Fire",
    subtitle: "A Stormbreakers Worship Anthem",
    youtubeId: "8XQUhWB_N5M",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    story: {
      written: "2024",
      origin: "Written when the Holy Spirit set the dry bones ablaze. This isn't hype — it's holy fire.",
      lyricQuote: "Let the fire fall. Let it burn.",
      meaning: "God doesn't call the qualified. He sets the available on fire."
    }
  },
  "spiritual-journey": {
    title: "Spiritual Journey",
    subtitle: "A Stormbreakers Worship Anthem",
    youtubeId: "umDFjJjh0_c",
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", 
    story: {
      written: "2024",
      origin: "The soundtrack to sanctification. The long walk between who you were and who you’re becoming.",
      lyricQuote: "God kept me alive.",
      meaning: "This is for the 3am prayers. The wilderness seasons. The moments when faith feels like walking uphill in fog."
    }
  },
};

// ============================================
// RELIC STORY COMPONENT — REUSABLE TEMPLATE
// ============================================
function RelicStory({ story }: { story: typeof songs[keyof typeof songs]['story'] }) {
  return (
    <div className="max-w-2xl mx-auto text-left space-y-8 text-zinc-300">
      <h2 className="text-2xl font-bold text-white mb-6">The Story</h2>
      
      <div className="space-y-4 text-zinc-400">
        <p><span className="text-zinc-500">Written:</span> {story.written}</p>
        <p>
          <span className="text-zinc-500">Origin:</span> {story.origin}
        </p>
      </div>

      <div className="my-8 py-6 border-y border-zinc-800">
        <p className="text-2xl text-center text-amber-400 italic" style={{ fontFamily: 'Cinzel, serif' }}>
          “{story.lyricQuote}”
        </p>
      </div>

      <p className="text-xl text-zinc-300 font-semibold">
        {story.meaning}
      </p>
    </div>
  );
}

// ============================================
// MAIN SONG PAGE
// ============================================
export default function SongPage() {
  const params = useParams();
  const slug = params.slug as string;
  const song = songs[slug as keyof typeof songs];
  
  const [windOn, setWindOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (windOn) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [windOn]);

  if (!song) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Relic Not Found</h1>
          <Link href="/music" className="text-amber-400 hover:underline">
            ← Return to Hall of Relics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO — PARALLAX COVER */}
      <div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${song.bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <Link 
            href="/music" 
            className="inline-block mb-8 text-amber-400 hover:text-amber-300 transition-colors"
          >
            ← Back to Hall of Relics
          </Link>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            {song.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            {song.subtitle}
          </p>

          {slug === 'iron-collide' && (
            <button
              onClick={() => setWindOn(!windOn)}
              className="mb-8 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-lg hover:bg-white/20 transition-all"
            >
              🌬️ Wind: {windOn? 'ON' : 'OFF'}
            </button>
          )}
          
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-zinc-800">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${song.youtubeId}`}
              title={song.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* STORY SECTION — UNIFIED TEMPLATE */}
      <div className="relative bg-zinc-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <RelicStory story={song.story} />
          
          <div className="mt-16 text-center">
            <Link 
              href="/music"
              className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg transition-colors"
            >
              ← Return to Hall of Relics
            </Link>
          </div>
        </div>
      </div>

      {/* AUDIO LAYER */}
      <audio ref={audioRef} loop>
        <source src="/wind-ambience.mp3" type="audio/mpeg" />
      </audio>

      {/* FONT SYSTEM */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}
