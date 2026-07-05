// components/sound/SongCard.tsx
'use client';
import { Song } from '@/data/songs';
import { Play } from 'lucide-react';

interface SongCardProps {
  song: Song;
  onPlay: () => void;
}

export function SongCard({ song, onPlay }: SongCardProps) {
  return (
    <div className="group bg-stone-900/50 border border-stone-800 rounded-lg p-6 hover:border-amber-900/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-stone-100 mb-1">{song.title}</h3>
          <p className="text-sm text-amber-400">{song.scripture.ref}</p>
        </div>
        <button 
          onClick={onPlay}
          className="w-12 h-12 rounded-full bg-amber-600 hover:bg-amber-500 flex items-center justify-center transition-colors"
          aria-label={`Play ${song.title}`}
        >
          <Play className="w-5 h-5 text-stone-950 fill-current ml-0.5" />
        </button>
      </div>
      <p className="text-sm text-stone-400 italic">"{song.declaration}"</p>
    </div>
  );
}
