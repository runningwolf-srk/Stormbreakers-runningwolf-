import { armory } from '../../data/armory'
import { RelicCard } from '../../components/relics/RelicCard'

export const metadata = {
  title: 'The Armory | Stormbreakers',
  description: 'Worship relics. Each song anchored in Scripture.',
}

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE ARMORY</h1>
          <p className="text-amber-400 font-bold text-lg mb-2">Our worship declares.</p>
          <p className="text-amber-200/70">Every song is a weapon. Every weapon is forged in The Word.</p>
        </header>

        <div>
          {armory.map((relic) => (
            <RelicCard key={relic.slug} relic={relic} />
          ))}
        </div>

        <footer className="mt-20 pt-12 border-t border-amber-600/20 text-center">
          <p className="text-amber-400 font-bold text-lg">
            Jesus Christ is the center of them all.
          </p>
        </footer>
      </div>
    </main>
  )
}
