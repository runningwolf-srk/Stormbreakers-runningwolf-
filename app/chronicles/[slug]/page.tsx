// app/chronicles//page.tsx
import { armory } from '@/data/armory'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ChroniclePage({ params }: { params: { slug: string } }) {
  const relic = armory.find((r) => r.slug === params.slug)
  
  if (!relic) {
    notFound()
  }

  const relatedRelics = armory.filter(r => r.theme === relic.theme && r.slug !== relic.slug)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-amber-100">{relic.title}</h1>
      <p className="text-amber-200 mb-6">{relic.description}</p>
      
      {relic.lyrics && (
        <p className="text-amber-300/80 italic mb-2">Song: {relic.lyrics}</p>
      )}
      
      {relic.scriptureRef && (
        <p className="text-amber-300/80 mb-8">Scripture: {relic.scriptureRef}</p>
      )}

      <h2 className="text-2xl font-bold mt-12 mb-4 text-amber-100">Related Relics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedRelics.map((relatedRelic) => (
          <Link 
            key={relatedRelic.slug}
            href={`/chronicles/${relatedRelic.slug}`}
            className="block bg-amber-400/5 border border-amber-400/20 p-4 hover:bg-amber-400/10 transition"
          >
            <p className="text-amber-200 font-semibold">{relatedRelic.title}</p>
            {relatedRelic.lyrics && (
              <p className="text-amber-200/60 text-sm">{relatedRelic.lyrics}</p>
            )}
            {relatedRelic.scriptureRef && (
              <p className="text-amber-200/60 text-sm">{relatedRelic.scriptureRef}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return armory.map((relic) => ({
    slug: relic.slug,
  }))
}
