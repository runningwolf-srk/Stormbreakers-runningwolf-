// app/chronicles/[slug]/page.tsx
import { armory } from '../../../data/armory'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const relic = armory.find(r => r.slug === params.slug)
  return {
    title: `${relic?.relic} | Stormbreakers Chronicles`,
    description: relic?.subtitle || relic?.declaration
  }
}

export default function ChroniclePage({ params }: Props) {
  const relic = armory.find(r => r.slug === params.slug)
  
  if (!relic) {
    notFound()
  }

  const relatedRelics = armory.filter(r => r.slug !== relic.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* BACK LINK */}
        <Link 
          href="/armory" 
          className="text-amber-500 hover:text-amber-300 text-sm mb-8 inline-block"
        >
          ← Back to The Armory
        </Link>

        {/* HEADER */}
        <header className="mb-12 text-center">
          {relic.image && (
            <img 
              src={relic.image} 
              alt={relic.relic}
              className="w-full h-80 object-cover rounded-lg mb-8"
            />
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            {relic.relic}
          </h1>
          {relic.subtitle && (
            <p className="text-xl text-amber-200/70">{relic.subtitle}</p>
          )}
        </header>

        {/* SCRIPTURE */}
        <section className="mb-12">
          <blockquote className="text-xl text-amber-100 leading-relaxed border-l-2 border-amber-600/50 pl-6 italic">
            "{relic.scripture}"
          </blockquote>
          <cite className="text-amber-400 block mt-3">— {relic.reference}</cite>
        </section>

        {/* DECLARATION */}
        <section className="bg-gradient-to-r from-amber-600/20 to-amber-600/5 border-l-4 border-amber-500 p-6 my-12 rounded-r">
          <p className="text-xs text-amber-500/70 uppercase tracking-widest mb-2">Declaration</p>
          <p className="text-2xl font-bold text-amber-300">{relic.declaration}</p>
        </section>

        {/* REFLECTION / CHAPTER */}
        <article className="prose prose-invert prose-amber max-w-none">
          <p className="text-amber-100/90 leading-loose text-lg whitespace-pre-line">
            {relic.reflection}
          </p>
        </article>

        {/* RELATED RELICS - FIXED */}
        <section className="mt-20 pt-12 border-t border-amber-600/20">
          <h2 className="text-2xl font-bold text-amber-400 mb-8">Continue The Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedRelics.map((relatedRelic) => (
              <Link 
                key={relatedRelic.slug} 
                href={`/chronicles/${relatedRelic.slug}`}
                className="bg-black/50 border border-amber-600/30 rounded-lg p-4 hover:border-amber-500 transition"
              >
                <h3 className="text-amber-400 font-bold mb-2">{relatedRelic.relic}</h3>
                {relatedRelic.subtitle && (
                  <p className="text-zinc-400 text-sm">{relatedRelic.subtitle}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

// Generate static paths for all relics
export async function generateStaticParams() {
  return armory.map((relic) => ({
    slug: relic.slug,
  }))
          }
