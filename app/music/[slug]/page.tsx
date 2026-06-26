'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// ============================================
// HALL OF RELICS — DESIGN SYSTEM v2.1
// Added: Cinematic Hook for immediate emotional identity
// Emotional Arc: Origin → Reflection → Meaning → Revelation
// ============================================

const songs = {
  "heaven-calling": {
    title: "Heaven Is Calling",
    hook: "When every other voice falls silent, heaven still speaks.",
    subtitle: "By His Voice We Are Known",
    youtubeId: "oxNauKuxg4Q", 
    bgImage: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e",
    story: {
      written: "2024",
      origin: "Forged in a season where worship became the only weapon against silence. A declaration of divine pursuit.",
      lyricQuote: "Heaven is calling out my name.",
      reflection: "A reminder that even in stillness, we are sought. What was distant became the sound that draws near.",
      meaning: "Divine calling is not earned—it is answered. This song stands as a moment of recognition: that we were heard before we ever learned to speak.",
      revelation: "God speaks most clearly when words fail."
    }
  },
  "iron-collide": {
    title: "Iron Collide", 
    hook: "Faith sharpened in the fire of resistance.",
    subtitle: "When Faith Meets the Fight",
    youtubeId: "odIsEMUtNJI",
    bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    story: {
      written: "2024",
      origin: "Forged in the fire of spiritual warfare. A sound for those who refuse to bow.",
      lyricQuote: "Let iron collide with iron.",
      reflection: "A reminder that resistance shapes resolve. What was pressure became the forge of strength.",
      meaning: "The battle is not for victory—it is from victory. This song stands as a declaration: the outcome was written before the first strike.",
      revelation: "We don't fight FOR the crown. We fight FROM it."
    }
  },
  "iron-collide-worship": {
    title: "Iron Collide Worship", 
    hook: "Where the battlefield becomes an altar.",
    subtitle: "Praise Is the Weapon",
    youtubeId: "fIkUDO2emoc",
    bgImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    story: {
      written: "2024",
      origin: "Where warfare becomes worship. The moment the clash transforms into praise.",
      lyricQuote: "Every weapon formed against me falls.",
      reflection: "A reminder that surrender is strength. What was conflict became the pathway to peace.",
      meaning: "Praise breaks what force cannot. This song stands as an altar: where the fight ends and worship begins.",
      revelation: "Worship is warfare in its highest form."
    }
  },
  "blood-of-cross": {
    title: "Blood of the Cross",
    hook: "Mercy written in sacrifice. Hope carried through suffering.",
    subtitle: "By His Wounds We Are Healed", 
    youtubeId: "4lcbjsNLlzo",
    bgImage: "https://images.unsplash.com/photo-1507692049790-de58290a4334",
    story: {
      written: "2024",
      origin: "Forged in sound and shaped through worship. A reflection on sacrifice, mercy, and redemption at the cross.",
      lyricQuote: "By His wounds we are healed.",
      reflection: "A reminder that what was broken became the source of healing. What was suffering became the doorway to grace.",
      meaning: "The cross is not only an event—it is the turning point of restoration. This song stands as a moment of reflection: that healing was carried through sacrifice, and love was proven through pain.",
      revelation: "Mercy spoke louder than the grave."
    }
  },
  "horn-of-war": {
    title: "Horn of War",
    hook: "The call to stand before the battle begins.",
    subtitle: "The Call to Purpose",
    youtubeId: "M4wGCg5oCx0",
    bgImage: "https://images.unsplash.com/photo-1519563459339-59bb6d7f5e5e",
    story: {
      written: "2024",
      origin: "The horn blast that awakens the sleeping warband. A call not to violence, but to purpose.",
      lyricQuote: "Sound the horn. Wake the dead.",
      reflection: "A reminder that awakening precedes movement. What was dormant became the signal to rise.",
      meaning: "Every movement needs a sound that declares its arrival. This song stands as the call: we are here, and we were sent.",
      revelation: "The war was won before the horn ever sounded."
    }
  },
  "im-on-fire": {
    title: "I'm On Fire",
    hook: "Holy fire cannot be contained. It must be released.",
    subtitle: "Holy Fire Cannot Be Contained",
    youtubeId: "8XQUhWB_N5M",
    bgImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    story: {
      written: "2024",
      origin: "Written when the Holy Spirit set dry bones ablaze. A testimony of divine ignition.",
      lyricQuote: "Let the fire fall. Let it burn.",
      reflection: "A reminder that holy fire purifies before it empowers. What was cold became the vessel for flame.",
      meaning: "God doesn't call the qualified—He sets the available on fire. This song stands as an altar: where human effort ends and divine fire begins.",
      revelation: "You cannot manufacture what only heaven can ignite."
    }
  },
  "spiritual-journey": {
    title: "Spiritual Journey",
    hook: "Survival was never the goal. Purpose was.",
    subtitle: "God Kept Me Alive",
    youtubeId: "umDFjJjh0_c",
    bgImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", 
    story: {
      written: "2024",
      origin: "The soundtrack to sanctification. A testimony of survival through the wilderness.",
      lyricQuote: "God kept me alive.",
      reflection: "A reminder that preservation is proof of purpose. What was meant to destroy became the path to destiny.",
      meaning: "This song stands for the 3am prayers. The wilderness seasons. The moments when faith felt like walking uphill in fog—and still, He sustained.",
      revelation: "You survived because you were called."
    }
  },
};

// ============================================
// RELIC STORY COMPONENT — 10/10 TEMPLATE
// ============================================
function RelicStory({ story }: { story: typeof songs[keyof typeof songs]['story'] }) {
  return (
    <div className="max-w-2xl mx-auto text-left space-y-10 text-zinc-300">
      <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Cinzel, serif' }}>
        The Story
      </h2>
      
      <div className="space-y-3 text-zinc-400">
        <p><span className="text-zinc-500">Written:</span> {story.written}</p>
        <p className="leading-relaxed">
          <span className="text-zinc-500">Origin:</span> {story.origin}
        </p>
      </div>

      <div className="my-10 py-8 border-y border-zinc-800">
        <p className="text-3xl text-center text-amber-400 italic leading-relaxed" style={{ fontFamily: 'Cinzel, serif' }}>
          “{story.lyricQuote}”
        </p>
      </div>

      <div className="space-y-6 leading-relaxed text-lg">
        <p className="text-zinc-300">
          {story.reflection}
        </p>
        
        <p className="text-zinc-300">
          {story.meaning}
        </p>
      </div>

      <div className="pt-6 mt-8 border-t border-zinc-800">
        <p className="text-xl text-amber-400 font-semibold text-center" style={{ fontFamily: 'Cinzel, serif' }}>
          {story.revelation}
        </p>
      </div>
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
            className="inline-block mb-8 text-amber-400 hover:text-amber-300 transition-colors text-sm tracking-widest uppercase"
          >
            ← Hall of Relics
          </Link>
          
          <h1 
            className="text-5xl md:text-7xl font-bold mb-4" 
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            {song.title}
          </h1>
          
          {/* CINEMATIC HOOK — THE 10/10 UPGRADE */}
          <p className="text-xl md:text-2xl text-zinc-200 mb-6 max-w-2xl mx-auto leading-relaxed italic">
            {song.hook}
          </p>
          
          <p className="text-lg md:text-xl text-amber-400 mb-8 font-semibold">
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

      {/* STORY SECTION — CINEMATIC RELIC ENTRY */}
      <div className="relative bg-zinc-950 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <RelicStory story={song.story} />
          
          <div className="mt-20 text-center">
            <Link 
              href="/music"
              className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-500 text-black font-bold rounded-lg transition-colors tracking-wide"
            >
              ← RETURN TO THE HALL
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
