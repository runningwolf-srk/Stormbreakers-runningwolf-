// app/word/page.tsx
import { armory } from '@/data/armory'
import { WordCard } from '@/components/word/WordCard'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'The Armory | Stormbreakers',
  description: 'Every relic carries a word. Every word carries power. Music + Scripture, book to book.',
}

export default function TheWordPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-amber-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-4 text-amber-100">The Armory</h1>
          <p className="text-amber-200/80 text-xl max-w-2xl mx-auto">
            Music. Scripture. Book to book. This is your battle hymnal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {armory.map((relic) => (
            <WordCard key={relic.slug} relic={relic} />
          ))}
        </div>
      </div>
    </div>
  )
}
