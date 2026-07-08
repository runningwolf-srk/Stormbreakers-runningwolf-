// app/chronicles/[slug]/page.tsx
import { armory } from '../../../data/armory'
import { notFound } from 'next/navigation'
import { RelicCard } from '../../../components/relics/RelicCard'

export async function generateStaticParams() {
  return armory.map((relic) => ({
    slug: relic.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const relic = armory.find((r) => r.slug === params.slug)

  if (!relic) return {}

  return {
    title: `${relic.relic} | Stormbreakers Chronicles`,
    description: relic.declaration || relic.scripture
  }
}

export default function ChroniclePage({ params }: { params: { slug: string } }) {
  const relic = armory.find((r) => r.slug === params.slug)

  if (!relic) notFound()

  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <RelicCard relic={relic} />
      </div>
    </main>
  )
}
