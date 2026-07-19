import { RelicGrid } from '@/components/relics/RelicGrid'
import { STYLE } from '@/lib/constants'

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-6xl mx-auto text-center mb-12"><h1 className="text-5xl font-black text-amber-100">THE ARMORY</h1><p className="text-amber-200/40 text-sm mt-3">16 relics. Each a song. Each a testimony.</p><p className="text-amber-400/30 text-xs tracking-[0.3em] mt-2">{STYLE.FLOW}</p></div>
      <RelicGrid />
    </main>
  )
}
