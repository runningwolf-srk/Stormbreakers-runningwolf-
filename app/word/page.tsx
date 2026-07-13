// app/word/page.tsx
import { armory } from '@/data/armory'
import { WordCard } from '@/components/word/WordCard'

export default function TheWordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-amber-100">The Word</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {armory.map((relic) => (
          <WordCard key={relic.slug} relic={relic} />
        ))}
      </div>
    </div>
  )
}
