// app/relics/[slug]/page.tsx - COPY/PASTE THIS ENTIRE FILE
import { armory } from '@/data/armory';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string }
};

export default function RelicPage({ params }: Props) {
  const relic = armory.find(r => r.slug === params.slug);
  if (!relic) return notFound();

  const relicIndex = armory.findIndex(r => r.slug === params.slug) + 1;
  const videoId = relic.youtube.split('/').pop()?.split('?')[0] || '';

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

        {/* Relic Name + Subtitle */}
        <h1 className="font-cinzel text-5xl text-amber-400 mb-2">{relic.relic}</h1>
        <p className="text-2xl text-zinc-300 mb-8">{relic.subtitle}</p>

        {/* Key Scripture */}
        <blockquote className="border-l-4 border-amber-500 pl-6 my-8 bg-zinc-900/50 p-6 rounded-r-lg">
          <p className="text-lg italic text-zinc-200 mb-3">"{relic.scripture}"</p>
          <cite className="text-amber-400 not-italic font-semibold">{relic.reference}</cite>
          {relic.supportingScripture && (
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <p className="text-sm italic text-zinc-300 mb-1">"{relic.supportingScripture.verse}"</p>
              <cite className="text-amber-400/80 not-italic text-sm">{relic.supportingScripture.reference}</cite>
            </div>
          )}
        </blockquote>

        {/* Tags */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {relic.tags.map(tag => (
            <span key={tag} className="px-4 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs uppercase tracking-wider text-zinc-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Meaning */}
        {relic.meaning && (
          <div className="mb-8">
            <h2 className="font-cinzel text-2xl text-amber-400 mb-4">Meaning</h2>
            <p className="text-zinc-300 leading-relaxed">{relic.meaning}</p>
          </div>
        )}

        {/* Reflection */}
        {relic.reflection && (
          <div className="mb-12">
            <h2 className="font-cinzel text-2xl text-amber-400 mb-4">Reflection</h2>
            <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{relic.reflection}</p>
          </div>
        )}

        {/* Related Song */}
        <div className="mb-12">
          <h2 className="font-cinzel text-2xl text-amber-400 mb-4">Related Song</h2>
          <p className="text-zinc-400 mb-4">{relic.song}</p>
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={relic.song}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a href={relic.youtube} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm mt-2 inline-block">
            Listen on YouTube →
          </a>
        </div>

        {/* Related Relics */}
        {relic.relatedRelics.length > 0 && (
          <div className="mb-12">
            <h2 className="font-cinzel text-2xl text-amber-400 mb-4">Related Relics</h2>
            <div className="flex gap-4 flex-wrap">
              {relic.relatedRelics.map(slug => {
                const related = armory.find(r => r.slug === slug);
                return related && (
                  <a key={slug} href={`/relics/${slug}`} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded hover:border-amber-500 transition">
                    {related.relic}
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Continue the Saga */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <a href="/saga" className="text-amber-400 hover:text-amber-300 font-cinzel text-xl">
            Continue the Saga →
          </a>
        </div>
      </div>
    </main>
  );
}
