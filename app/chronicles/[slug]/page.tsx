// app/chronicles/[slug]/page.tsx
import { armory } from '@/data/armory'
import { notFound } from 'next/navigation'

export default function ChroniclePage({ params }: { params: { slug: string } }) {
  const relic = armory.find((r) => r.slug === params.slug)
  
  if (!relic) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-amber-100">{relic.title}</h1>
      <p className="text-amber-200 mb-6">{relic.description}</p>
      {/* rest of your chronicle UI */}
    </div>
  )
}

// Generate static paths for all relics
export async function generateStaticParams() {
  return armory.map((relic) => ({
    slug: relic.slug,
  }))
}
