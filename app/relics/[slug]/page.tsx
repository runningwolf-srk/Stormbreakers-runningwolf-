'use client';

import { armory } from '@/data/armory';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string }
};

export default function RelicPage({ params }: Props) {
  const relic = armory.find(r => r.slug === params.slug);
  if (!relic) return notFound();

  const relicIndex = armory.findIndex(r => r.slug === params.slug) + 1;
  const videoId = relic.youtube.split('/').pop()?.split('?')[0];

  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Journey Progress */}
        <div className="mb-8 text-zinc-500 text-sm">
          <p className="text-amber-400">{relicIndex.toString().padStart(2, '0')} / 0{armory.length}</p>
          <p>Journey Progress: {relicIndex.toString().padStart(2, '0')} of 0{armory.length} Relics</p>
        </div>

        {/* Hero Image */}
        <img 
          src={relic.image} 
          alt={relic.relic}
          className="w-full h-96 object-cover rounded-xl mb-8 border border-zinc-800"
        />

        {/* Title + Subtitle */}
        <h1 className="font-cinzel text-5xl text-amber-400 mb-2">{relic.relic.toUpperCase()}</h1>
        <p className="text-2xl text-zinc-300 mb-8">{relic.subtitle}</p>

        {/* Bible Verse */}
        <blockquote className="border-l-4 border-amber-500 pl-6 my-8 bg-zinc-900/50 p-6 rounded-r-lg">
          <p className="text-lg italic text-zinc-200 mb-3">"{relic.verse}"</p>
          <cite className="text-amber-400 not-italic font-semibold">{relic.reference}</cite>
        </blockquote>

        {/* Tags */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {relic.tags.map(tag => (
            <span key={tag} className="px-4 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs uppercase tracking-wider text-zinc-400">
              {tag}
            </span>
          ))}
        </div>

        {/* YouTube Music Embed */}
        <div className="mb-12 rounded-xl overflow-hidden border border-zinc-800">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={relic.song}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Blog / Short Story */}
        <article className="prose prose-invert prose-lg max-w-none">
          <h2 className="font-cinzel text-3xl text-amber-400 mb-6">{relic.meditationTitle}</h2>
          <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
            {relic.blog}
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between">
          {relicIndex > 1 && (
            <a href={`/relics/${armory[relicIndex - 2].slug}`}
               className="text-amber-400 hover:text-amber-300 font-cinzel">
              ← {armory[relicIndex - 2].relic}
            </a>
          )}
          {relicIndex < armory.length && (
            <a href={`/relics/${armory[relicIndex].slug}`}
               className="text-amber-400 hover:text-amber-300 font-cinzel ml-auto">
              {armory[relicIndex].relic} →
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
