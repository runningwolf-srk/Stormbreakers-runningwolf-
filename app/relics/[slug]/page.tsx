import { notFound } from 'next/navigation'
import { relics } from '@/data/relics'
import SoundGate from './components/SoundGate'

export async function generateStaticParams() {
  return relics.map(r => ({ slug: r.slug }))
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = relics.find(r => r.slug === params.slug)
  if (!relic) return notFound()

  return <SoundGate relic={relic} />
}
