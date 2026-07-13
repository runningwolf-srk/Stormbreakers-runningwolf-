// app/the-word/page.tsx
import { allScriptures } from '@/data/scripture' // <- your scripture data
import { armory } from '@/data/armory'           // <- exports allRelics as armory
import { chronicles } from '@/data/chronicles'   // <- now this works

export default function TheWordPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">The Word</h1>
      
      {allScriptures.map((scripture) => {
        // Find connected relics for this scripture
        const connectedRelics = armory.filter(relic => 
          scripture.relatedRelics?.includes(relic.slug)
        )
        
        // Find connected chapters for this scripture  
        const connectedChapters = chronicles.filter(chapter =>
          chapter.relatedScriptures?.includes(scripture.slug)
        )

        return (
          <div key={scripture.slug} className="mb-12 border-b pb-8">
            <h2 className="text-2xl font-bold mb-2">{scripture.reference}</h2>
            <p className="text-lg mb-4 italic">"{scripture.text}"</p>
            
            {/* Connected Relics */}
            <div className="mb-4">
              <h3 className="font-semibold text-sm uppercase mb-2">Connected Relics:</h3>
              {connectedRelics.length > 0 ? (
                <div className="flex gap-2 flex-wrap">
                  {connectedRelics.map(relic => (
                    <a 
                      key={relic.slug} 
                      href={`/armory/${relic.slug}`}
                      className="px-3 py-1 bg-zinc-800 rounded text-sm hover:bg-zinc-700"
                    >
                      {relic.title}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-zinc-500 text-sm">No relics connected yet.</p>
              )}
            </div>

            {/* Connected Chapters */}
            <div>
              <h3 className="font-semibold text-sm uppercase mb-2">Connected Chapters:</h3>
              {connectedChapters.length > 0 ? (
                <div className="flex gap-2 flex-wrap">
                  {connectedChapters.map(chapter => (
                    <a 
                      key={chapter.slug}
                      href={`/chronicles/${chapter.slug}`}
                      className="px-3 py-1 bg-zinc-800 rounded text-sm hover:bg-zinc-700"
                    >
                      {chapter.title}
                    </a>
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
