import { SONGS } from '@/data/songs';
import Link from 'next/link';

export default function Sound() {
  const armorySongs = SONGS.filter(s => s.album === 'The Armory');
  const stormbreakerSongs = SONGS.filter(s => s.album === 'The Stormbreaker');

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="text-amber-400 mb-8 block">← Back to Home</Link>
      <h1 className="font-cinzel text-5xl mb-12 text-center">THE SOUND</h1>
      
      <h2 className="font-cinzel text-3xl mb-6 text-amber-400">The Armory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {armorySongs.map(song => (
          <div key={song.id} className="border border-gray-800 p-4">
            <h3 className="font-cinzel text-xl">{song.title}</h3>
            <p className="text-sm text-gray-400">{song.scripture.ref}</p>
            <p className="text-xs text-gray-500 mt-2">{song.declaration}</p>
            {song.youtubeId && (
              <iframe 
                className="w-full aspect-video mt-4"
                src={`https://www.youtube.com/embed/${song.youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            )}
          </div>
        ))}
      </div>

      <h2 className="font-cinzel text-3xl mb-6 text-amber-400">The Stormbreaker</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stormbreakerSongs.map(song => (
          <div key={song.id} className="border border-gray-800 p-4">
            {song.coverImage && <img src={song.coverImage} alt={song.title} className="w-full mb-4" />}
            <h3 className="font-cinzel text-xl">{song.title}</h3>
            <p className="text-sm text-gray-400">{song.declaration}</p>
            {song.youtubeId && (
              <iframe 
                className="w-full aspect-video mt-4"
                src={`https://www.youtube.com/embed/${song.youtubeId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
