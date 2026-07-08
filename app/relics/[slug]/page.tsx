// app/relics/[slug]/page.tsx
import { armory } from '../../../data/armory'
import { notFound } from 'next/navigation'
import { RelicCard } from '../../../components/relics/RelicCard'

export async function generateStaticParams() {
  return armory.map((relic) => ({
    slug: relic.slug,
  }))
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = armory.find((r) => r.slug === params.slug)

  if (!relic) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <RelicCard relic={relic} />
        
        {/* ONLY RENDER IF supportingScripture EXISTS */}
        {relic.supportingScripture && (
          <div className="mt-8 border-t border-amber-600/20 pt-8">
            <h3 className="text-amber-400 font-bold mb-4">Supporting Scripture</h3>
            <blockquote className="text-amber-100/80 italic mb-2">
              "{relic.supportingScripture.verse}"
            </blockquote>
            <cite className="text-amber-400 text-sm">
              — {relic.supportingScripture.reference}
            </cite>
          </div>
        )}
      </div>
    </main>
  )
}
