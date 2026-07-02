import { relics } from '@/app/music/relics'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default function RelicPage({ searchParams }: { searchParams: { slug: string } }) {
  const relic = relics.find(r => r.slug === searchParams.slug)
  
  if (!relic) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-200 p-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/music">
          <button className="text-amber-500 mb-8 hover:text-amber-400">← THE ARMORY</button>
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-amber-500 mb-4">{relic.title}</h1>
        
        <div className="border-l-2 border-amber-500 pl-4 mb-8">
          <p className="text-xl italic text-zinc-300">"{relic.description}"</p>
          <p className="text-amber-500/80 mt-2">{relic.scripture}</p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {relic.tags.map(tag => (
            <span key={tag} className="text-xs border border-zinc-700 px-3 py-1 text-zinc-500">{tag}</span>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-amber-500 text-xl mb-4">▶ RELIC EXPERIENCE</h2>
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${relic.youtubeId}`}
              title={relic.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div>
          <h2 className="text-amber-500 text-xl mb-4">THE SILENCE</h2>
          <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{relic.lore}</p>
        </div>

      </div>
    </main>
  )
}
