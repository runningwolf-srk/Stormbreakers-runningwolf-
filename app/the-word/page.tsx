// app/the-word/page.tsx
import { allScriptures } from '@/data/scripture'
import { allRelics } from '@/data/armory'
import { chapters } from '@/data/chronicles'
import Link from 'next/link'

export default function TheWordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-amber-100">The Word</h1>
      
      {allScriptures.map((scripture) => {
        const connectedRelics = allRelics.filter(relic => 
          scripture.relatedRelics?.includes(relic.slug)
        )
        
        const connectedChapters = chapters.filter(chapter =>
          scripture.relatedChapters?.includes(chapter.id)
        )

        return (
          <div key={scripture.slug} className="mb-12 border-b border-zinc-800 pb-8">
            <h2 className="text-2xl font-bold mb-2 text-amber-300">{scripture.reference}</h2>
            <p className="text-lg mb-2 italic text-amber-100">"{scripture.text}"</p>
            <p className="text-sm mb-4 text-zinc-400">{scripture.context}</p>
            
            <div className="mb-4">
              <h3 className="font-semibold text-sm uppercase mb-2 text-zinc-300">Connected Relics:</h3>
              {connectedRelics.length > 0 ? (
                <div className="flex gap-2 flex-wrap">
                  {connectedRelics.map(relic => (
                    <Link 
                      key={relic.slug} 
                      href={`/armory/${relic.slug}`}
                      className="px-3 py-1 bg-zinc-800 rounded text-sm hover:bg-zinc-700 text-amber-200"
                    >
                      {relic.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-500 text-sm">No relics connected yet.</p>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase mb-2 text-zinc-300">Connected Chapters:</h3>
              {connectedChapters.length > 0 ? (
                <div className="flex gap-2 flex-wrap">
                  {connectedChapters.map(chapter => (
                    <Link 
                      key={chapter.slug}
                      href={`/chronicles/${chapter.slug}`}
                      className="px-3 py-1 bg-zinc-800 rounded text-sm hover:bg-zinc-700 text-amber-200"
                    >
                      {chapter.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-500 text-sm">No chapters connected yet.</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
