import Link from 'next/link'
import { armory } from '@/data/armory' // your allRelics export
import { chronicles } from '@/data/chronicles' // your chapters export

function VerseCard({ verse }: { verse: Scripture }) {
  return (
    <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-amber-400">{verse.reference}</h3>
        <span className="text-xs px-2 py-1 bg-zinc-800 rounded text-zinc-400">{verse.theme}</span>
      </div>
      
      <p className="mt-3 text-zinc-200 italic">"{verse.text}"</p>
      {verse.context && <p className="mt-2 text-sm text-zinc-500">{verse.context}</p>}

      {/* CONNECTED RELICS */}
      {verse.connectedRelics && verse.connectedRelics.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm font-bold text-amber-400 mb-2">Connected Relics:</h4>
          <div className="flex flex-wrap gap-2">
            {verse.connectedRelics.map(slug => {
              const relic = armory.find(r => r.slug === slug);
              return relic? (
                <Link 
                  key={slug} 
                  href={`/chronicles/${slug}`}
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-amber-600 hover:text-black transition"
                >
                  <img src={relic.image} alt="" className="w-6 h-6 rounded object-cover" />
                  <span className="font-semibold">{relic.relic}</span>
                </Link>
              ) : null;
            })}
          </div>
        </div>
      )}

      {/* CONNECTED CHAPTERS */}
      {verse.connectedChapters && verse.connectedChapters.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-bold text-blue-400 mb-2">Connected Chapters:</h4>
          <div className="flex flex-wrap gap-2">
            {verse.connectedChapters.map(chapterNum => {
              const chapter = chronicles.find(c => c.chapter === chapterNum);
              return chapter? (
                <Link 
                  key={chapterNum} 
                  href={`/chronicles/chapter-${chapterNum}`}
                  className="px-3 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-blue-600 hover:text-white transition"
                >
                  Chapter {chapterNum}: {chapter.title}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  )
}
