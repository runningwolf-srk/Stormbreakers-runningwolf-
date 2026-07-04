import SoundGate from '../components/SoundGate'
import { relics } from '@/data/relics'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export default function RelicPage({ params }: Props) {
  const relic = relics.find(r => r.slug === params.slug)
  
  if (!relic) return notFound()
  
  return <SoundGate relic={relic} />
}
