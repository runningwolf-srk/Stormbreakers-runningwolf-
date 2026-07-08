// app/armory/page.tsx
import { armory } from '../../data/armory'
import { RelicGrid } from '../../components/relics/RelicGrid'

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE ARMORY</h1>
          <p className="text-amber-200/70">The expression of worship. Every song anchored in Scripture.</p>
        </header>

        {armory.length === 0? (
          <div className="text-center py-20">
            <p className="text-amber-100/60 text-lg">The Armory is being forged.</p>
            <p className="text-amber-500/70 text-sm mt-2">First relic coming soon.</p>
          </div>
        ) : (
          <RelicGrid relics={armory} />
        )}

        <footer className="mt-20 pt-12 border-t border-amber-600/20 text-center">
          <p className="text-amber-400 font-bold text-lg">
            Every song is an offering of worship to Christ.
          </p>
        </footer>
      </div>
    </main>
  )
}
