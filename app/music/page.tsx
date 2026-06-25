"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

type Song = {
  slug: string;
  title: string;
  cover: string;
  tagline: string;
  youtubeId?: string;
  audioUrl?: string;
  story: {
    written: string;
    origin: string;
    lyric: string;
    meaning: string;
    forged?: string; // Behind the scenes
  };
};

const musicCatalog: Song[] = [
  {
    slug: "heaven-calling",
    title: "Heaven Is Calling",
    youtubeId: "oxNauKuxg4Q",
    cover: "/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Worship Anthem",
    story: {
      written: "2024",
      origin: "Written when worship was the only weapon left.",
      lyric: "Heaven is calling out my name",
      meaning: "God speaks when we’re too broken to speak."
    }
  },
  {
    slug: "iron-collide",
    title: "Iron Collide",
    youtubeId: "odIsEMUtNJI",
    cover: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "An Epic Hard Rock Anthem",
    story: {
      written: "2024, Guymon, OK",
      origin: "This one came when the guitars wouldn’t stay quiet during prayer.",
      lyric: "Let the iron collide with praise",
      meaning: "For the ones told their music was too loud for God. David had a whole band.",
      forged: "Forged in Suno v4.5. 47 generations to get the war drums right. The AI kept making it pretty. I needed it to bleed."
    }
  },
  {
    slug: "mahalla-rising",
    title: "Mahalla Rising",
    youtubeId: "fIkUDO2emoc",
    cover: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "Ancient Drums, Eternal King", 
    story: {
      written: "2024",
      origin: "Same Spartan. Different battlefield. The war drums call the nations.",
      lyric: "The nations will hear",
      meaning: "Iron Collide was the personal war. Mahalla Rising is the global one. Same warrior."
    }
  },
  {
    slug: "blood-of-cross",
    title: "Blood of Cross",
    youtubeId: "4lcbjsNLlzo",
    cover: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "By His Wounds We Are Healed",
    story: {
      written: "2026",
      origin: "Forged in Suno. Birthed at the cross. This one bleeds.",
      lyric: "By His wounds we are healed",
      meaning: "5 minutes wasn’t too long for the crucifixion. It’s not too long for worship."
    }
  },
  {
    slug: "spiritual-journey",
    title: "Spiritual Journey",
    youtubeId: "umDFjJjh0_c",
    cover: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    tagline: "A Journey to His Presence",
    story: {
      written: "2026",
      origin: "The Suno track that mapped the war. AI wrote the notes. God wrote the story.",
      lyric: "From dust to destiny, He’s calling me",
      meaning: "This is the map. Every battle, every breakthrough, every time we thought it was over but He said 'walk'."
    }
  }
];

export default function SongPage({ params }: { params: { slug: string } }) {
  const [windOn, setWindOn] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const song = musicCatalog.find((s) => s.slug === params.slug);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  if (!song) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Wind Ambience Audio */}
      {windOn && (
        <audio autoPlay loop src="/wind-ambience.mp3" className="hidden" />
      )}

      {/* Parallax Hero Cover */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src={song.cover} 
          alt={song.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Fog Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gray-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-600 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Title Block */}
        <div className="absolute bottom-20 left-0 right-0 p-8 max-w-4xl mx-auto">
          <Link href="/music" className="text-red-500 hover:text-red-400 mb-4 inline-block animate-fade-in">
            ← Back to Hall of Relics
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in-up" style={{ fontFamily: 'Cinzel, serif' }}>
            {song.title}
          </h1>
          <p className="text-2xl md:text-3xl text-red-500 mb-8 animate-fade-in-up delay-200">
            {song.tagline}
          </p>
          
          {/* Wind Toggle */}
          <button 
            onClick={() => setWindOn(!windOn)}
            className="bg-zinc-900/80 border border-zinc-700 px-4 py-2 rounded hover:border-red-600 transition-all text-sm"
          >
            {windOn ? "🌬️ Wind: ON" : "🌬️ Wind: OFF"}
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-8 -mt-20 relative z-10">
        
        {/* Player */}
        <div className="mb-12 animate-fade-in-up">
          {song.youtubeId && (
            <div className="aspect-video border-zinc-800 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${song.youtubeId}`}
                title={song.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        
        {/* Story Block */}
        <div className="bg-zinc-900/90 backdrop-blur border border-zinc-800 p-8 md:p-12 rounded-lg mb-8">
          <h2 className="text-4xl font-bold mb-8 text-red-500" style={{ fontFamily: 'Cinzel, serif' }}>
            The Story
          </h2>
          
          <div className="space-y-6 text-lg">
            <p className="text-zinc-400 animate-fade-in">
              <strong className="text-white">Written:</strong> {song.story.written}
            </p>
            
            <p className="text-zinc-300 animate-fade-in delay-100">
              <strong className="text-white">Origin:</strong> {song.story.origin}
            </p>
            
            <blockquote className="border-l-4 border-red-600 pl-6 my-8 text-2xl italic text-white animate-fade-in delay-200">
              "{song.story.lyric}"
            </blockquote>
            
            <p className="text-zinc-300 animate-fade-in delay-300">
              <strong className="text-white">Meaning:</strong> {song.story.meaning}
            </p>

            {/* Behind The Scenes */}
            {song.story.forged && (
              <div className="mt-8 pt-8 border-t border-zinc-700 animate-fade-in delay-500">
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">⚒️ How This Was Forged</h3>
                <p className="text-zinc-400 italic">{song.story.forged}</p>
              </div>
            )}
          </div>
        </div>

        {/* Next/Prev Navigation */}
        <div className="flex justify-between items-center text-zinc-500">
          <Link href="/music" className="hover:text-red-500">← Hall of Relics</Link>
          <Link href="/music/mahalla-rising" className="hover:text-red-500">Next: Mahalla Rising →</Link>
        </div>
      </div>

      {/* Global Styles for Animation */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </main>
  );
      }
