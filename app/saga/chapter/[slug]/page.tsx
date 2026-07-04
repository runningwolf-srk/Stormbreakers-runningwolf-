import { notFound } from 'next/navigation'
import Link from 'next/link'
import { chapters } from '@/data/saga-chapters'

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }))
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapterIndex = chapters.findIndex(c => c.slug === params.slug)
  const chapter = chapters[chapterIndex]
  
  if (!chapter) notFound()

  const prevChapter = chapterIndex > 0 ? chapters[chapterIndex - 1] : null
  const nextChapter = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : null

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-amber-400/20">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/saga" className="text-amber-400 font-bold text-xl font-serif">← The Saga</Link>
          <Link href="/relics" className="text-gray-400 hover:text-amber-400">Relics</Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-lg border-2 border-amber-400/30 shadow-2xl shadow-amber-400/10">
          
          {chapter.image && (
            <div className="relative w-full aspect-video border-b-2 border-amber-400/20">
              <img src={chapter.image} alt={chapter.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
            </div>
          )}
          
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-amber-400 font-serif">{chapter.title}</h1>
            <p className="text-gray-500 mb-6 italic">{chapter.subtitle}</p>
            <div className="w-24 h-0.5 bg-amber-400/50 mb-8"></div>
            
            <div className="text-lg text-gray-200 leading-relaxed font-serif whitespace-pre-line mb-8">
              {chapter.text.split('\n').map((para, idx) => (
                <p key={idx} className="mb-4 first-letter:text-5xl first-letter:text-amber-400 first-letter:font-bold first-letter:mr-2 first-letter:float-left">
                  {para}
                </p>
              ))}
            </div>
            
            {chapter.verse && (
              <div className="mt-8 pt-6 border-t border-amber-400/20">
                <p className="text-amber-400 italic text-right font-serif text-lg">— {chapter.verse}</p>
              </div>
            )}

            {chapter.relicId && (
              <Link 
                href={`/relics/${chapter.relicId}`}
                className="mt-8 inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-lg transition text-lg"
              >
                LISTEN TO THE RELIC →
              </Link>
            )}
          </div>

          <div className="px-8 pb-6 text-center text-gray-600 text-sm font-mono">
            Chapter {String(chapterIndex + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {prevChapter ? (
            <Link 
              href={`/saga/chapter/${prevChapter.slug}`}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 px-4 rounded-lg transition text-center"
            >
              ← {prevChapter.title}
            </Link>
          ) : <div></div>}
          
          <Link 
            href="/saga"
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-4 rounded-lg transition text-center"
          >
            ALL CHAPTERS
          </Link>
          
          {nextChapter ? (
            <Link 
              href={`/saga/chapter/${nextChapter.slug}`}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 px-4 rounded-lg transition text-center"
            >
              {nextChapter.title} →
            </Link>
          ) : <div></div>}
        </div>
      </div>
    </main>
  )
}
