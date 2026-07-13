// app/chronicles//page.tsx
import { armory } from '@/data/armory'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const relic = armory.find((r) => r.slug === params.slug)
  
  if (!relic) {
    return {
      title: 'Relic Not Found | Stormbreakers'
    }
  }

  return {
    title: `${relic.title} | Stormbreakers`,
    description: relic.description,
    openGraph: {
      title: relic.title,
      description: relic.description,
      images: [relic.image],
    },
  }
}

export async function generateStaticParams() {
  return armory.map((relic) => ({
    slug: relic.slug,
  }))
}

export default function ChroniclePage({ params }: Props) {
  const relic = armory.find((r) => r.slug === params.slug)
  
  if (!relic) {
    notFound()
  }

  const relatedRelics = armory.filter(
    (r) => r.theme === relic.theme && r.slug !== relic.slug
  )

  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Main Relic */}
        <div className="mb-12">
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden border border-amber-400/20">
            <Image
              src={relic.image}
              alt={relic.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20 mb-4">
              {relic.theme}
            </span>
            <h1 className="text-5xl font-black mb-4 text-amber-100 leading-tight">
              {relic.title}
            </h1>
            <p className="text-xl text-amber-200/80 leading-relaxed">
              {relic.description}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-amber-300/70 text-sm border-l-2 border-amber-400/30 pl-4">
            {relic.lyrics && (
              <p>
                <span className="font-semibold text-amber-300">Song:</span> {relic.lyrics}
              </p>
            )}
            {relic.scriptureRef && (
              <p>
                <span className="font-semibold text-amber-300">Scripture:</span> {relic.scriptureRef}
              </p>
            )}
          </div>
        </div>

        {/* Related Relics */}
        {relatedRelics.length > 0 && (
          <div className="mt-16 pt-8 border-t border-amber-400/10">
            <h2 className="text-3xl font-bold mb-6 text-amber-100">
              More from {relic.theme}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedRelics.map((relatedRelic) => (
                <Link
                  key={relatedRelic.slug}
                  href={`/chronicles/${relatedRelic.slug}`}
                  className="block bg-amber-400/5 border border-amber-400/20 p-5 rounded-lg hover:bg-amber-400/10 hover:border-amber-400/40 transition-all duration-200 group"
                >
                  <p className="text-amber-100 font-bold text-lg mb-1 group-hover:text-amber-300 transition">
                    {relatedRelic.title}
                  </p>
                  <p className="text-amber-200/70 text-sm line-clamp-2 mb-3">
                    {relatedRelic.description}
                  </p>
                  <div className="flex flex-col gap-1 text-xs text-amber-300/60">
                    {relatedRelic.lyrics && (
                      <p>
                        <span className="font-semibold">Song:</span> {relatedRelic.lyrics}
                      </p>
                    )}
                    {relatedRelic.scriptureRef && (
                      <p>
                        <span className="font-semibold">Scripture:</span> {relatedRelic.scriptureRef}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
            }
