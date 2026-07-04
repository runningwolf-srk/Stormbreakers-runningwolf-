'use client'
import { Relic } from '@/data/relics'

export default function SoundGate({ relic }: { relic: Relic }) {
  return (
    <main className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="text-white text-4xl">
        {relic.title} - SoundGate Loading...
      </div>
    </main>
  )
}
