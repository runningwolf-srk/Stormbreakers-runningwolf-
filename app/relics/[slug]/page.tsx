import { relics } from '@/data/relics'
import { notFound } from 'next/navigation'
import SoundGate from './components/SoundGate'

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = relics.find(r => r.slug === params.slug)
  
  if (!relic) {
    notFound()
  }

  return <SoundGate relic={relic} />
}
