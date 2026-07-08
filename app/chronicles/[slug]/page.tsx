// app/chronicles/[slug]/page.tsx
import { armory } from '../../../data/armory'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const relic = armory.find((r) => r.slug === params.slug)
  
  if (!relic) return {}

  return {
    title: `${relic.relic} | Stormbreakers Chronicles`,
    description: relic.declaration || relic.scripture  // ← Fixed: removed .subtitle
  }
}

export default function ChroniclePage({ params }: { params: { slug: string } }) {
  const relic = armory.find((r) => r.slug === params.slug)
  
  if (!relic) notFound()

  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-amber-400 mb-4">{relic.relic}</h1>
        <blockquote className="text-amber-100/80 italic mb-6 border-l-2 border-amber-600/50 pl-4">
          "{relic.scripture}"
        </blockquote>
        <cite className="text-amber-400 block mb-8">— {relic.reference}</cite>
        <p className="text-amber-100/90 leading-relaxed whitespace-pre-line">
          {relic.reflection}
        </p>
      </div>
    </main>
  )
}
