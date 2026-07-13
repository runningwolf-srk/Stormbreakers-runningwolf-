// app/chronicles/page.tsx
import { armory } from '@/data/armory'
import { WordCard } from '@/components/word/WordCard'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'The Chronicles | Stormbreakers',
  description: 'The Testimony of RunningWolf. Music. Scripture. Book to book.',
}

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4 text-amber-100">
            The Chronicles
          </h1>
          <p className="text-xl text-amber-200/80 max-w-2xl mx-auto mb-2">
            The Testimony of RunningWolf
          </p>
          <p className="text-amber-200/60 italic mb-2">
            Music. Scripture. Book to book.
          </p>
          <p className="text-amber-200/70 italic max-w-xl mx-auto">
            This is not Scripture. This is my song with Scripture.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {armory.map((relic) => (
            <WordCard key={relic.slug} relic={relic} />
          ))}
        </div>
      </div>
    </main>
  )
}
