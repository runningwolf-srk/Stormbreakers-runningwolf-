"use client";
import { notFound } from "next/navigation";
import Link from "next/link";

const musicCatalog = [
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
    cover: "/iron-collide-cover.webp",
    tagline: "Where Worship Meets War",
    story: {
      written: "2024, Guymon, OK",
      origin: "This one came when the guitars wouldn’t stay quiet during prayer.",
      lyric: "Let the iron collide with praise",
      meaning: "For the ones told their music was too loud for God. David had a whole band."
    }
  },
  {
    slug: "mahalla-hybrid",
    title: "Mahalla Rising",
    youtubeId: "fIkUDO2emoc",
    cover: "/mahalla-cover.webp",
    tagline: "Ancient Drums, Eternal King", 
    story: {
      written: "2024",
      origin: "Heard the war drums of old nations and realized they were calling the same God.",
      lyric: "The nations will hear",
      meaning: "Worship isn’t Western. The whole earth groans."
    }
  },
];

export default function SongPage({ params }: { params: { slug: string } }) {
  const song = musicCatalog.find((s) => s.slug === params.slug);
  
  if (!song) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Link href="/music" className="text-red-500 hover:text-red-400 mb-8 inline-block">
        ← Back to Hall of Relics
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <img 
          src={song.cover} 
          alt={song.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        
        <h1 className="text-5xl font-bold mb-4">{song.title}</h1>
        <p className="text-2xl text-red-500 mb-8">{song.tagline}</p>
        
        <div className="aspect-video mb-8">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${song.youtubeId}`}
            title={song.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        
        <div className="bg-zinc-900 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">The Story</h2>
          <p className="text-zinc-400 mb-4"><strong>Written:</strong> {song.story.written}</p>
          <p className="text-zinc-300 mb-4"><strong>Origin:</strong> {song.story.origin}</p>
          <blockquote className="border-l-4 border-red-600 pl-4 my-6 text-xl italic">
            "{song.story.lyric}"
          </blockquote>
          <p className="text-zinc-300"><strong>Meaning:</strong> {song.story.meaning}</p>
        </div>
      </div>
    </main>
  );
}
