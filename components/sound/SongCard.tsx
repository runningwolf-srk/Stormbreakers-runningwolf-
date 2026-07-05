// components/sound/SoundGrid.tsx
'use client';
import { SONGS } from '@/data/songs';
import { SongCard } from './SongCard';

export function SoundGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SONGS.map((song) => (
        <SongCard key={song.id} song={song} onPlay={() => console.log(song.slug)} />
      ))}
    </div>
  );
}
