// app/relics//page.tsx
import { armory } from '../../../data/armory'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const relic = armory.find(r => r.slug === params.slug)
  return {
    title: `${relic?.relic} | Stormbreakers`,
    description: relic?.declaration
  }
}

export default function RelicPage({ params }: Props) {
  const relic = armory.find(r => r.slug === params.slug)

  if (!relic) {
    notFound()
  }

  const relicIndex = armory.findIndex(r => r.slug === params.slug) + 1;
  const videoId = relic.youtube?.split('/').pop()?.split('?')[0] || '';

  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* HERO */}
        <header className="mb-12 text-center">
          {relic.image && (
            <img
              src={relic.image}
              alt={relic.relic}
              className="w-full h-80 object-cover rounded-lg mb-8"
            />
          )}
          <p className="text-xs text-amber-500/50 uppercase tracking-widest mb-2">
            Relic {relicIndex} of {armory.length}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            {relic.song}
          </h1>
          {relic.subtitle && (
            <p className="text-xl text-amber-200/70">{relic.subtitle}</p>
          )}
        </header>

        {/* YOUTUBE EMBED - SAFE CHECK */}
        {relic.youtube && videoId && (
          <div className="mb-12 aspect-video w-full bg-black rounded overflow-hidden border border-amber-600/30">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3`}
              title={relic.song}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* SCRIPTURE */}
        <section className="mb-12">
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-3">Scripture</p>
          <blockquote className="text-xl text-amber-100 leading-relaxed border-l-2 border-amber-600/50 pl-6 italic">
            "{relic.scripture}"
          </blockquote>
          <cite className="text-amber-400 block mt-3">— {relic.reference}</cite>

          {relic.supportingScripture && (
            <div className="mt-6 text-amber-100/70 text-sm">
              <p>"{relic.supportingScripture.verse}"</p>
              <cite className="text-amber-400/60">— {relic.supportingScripture.reference}</cite>
            </div>
          )}
        </section>

        {/* DECLARATION */}
        <section className="bg-gradient-to-r from-amber-600/20 to-amber-600/5 border-l-4 border-amber-500 p-6 my-12 rounded-r">
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Declaration</p>
          <p className="text-2xl font-bold text-amber-300">{relic.declaration}</p>
        </section>

        {/* REFLECTION */}
        <article className="prose prose-invert prose-amber max-w-none">
          <p className="text-amber-100/90 leading-loose text-lg whitespace-pre-line">
            {relic.reflection}
          </p>
        </article>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return armory.map((relic) => ({
    slug: relic.slug,
  }))
}
