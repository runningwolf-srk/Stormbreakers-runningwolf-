// app/chronicles//page.tsx
import { notFound } from 'next/navigation'
import { armory } from '@/data/armory'
import { ChroniclePage } from '@/components/ChroniclePage'
import type { Metadata } from 'next'

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

export default function Page({ params }: Props) {
  const relic = armory.find((r) => r.slug === params.slug)

  if (!relic) {
    notFound()
  }

  return <ChroniclePage relic={relic} />
}
