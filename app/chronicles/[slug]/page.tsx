import { chapters } from '../../../data/chronicles'
import { armory } from '../../../data/armory'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }))
}

export default function ChapterPage({ params }: Props) {
  const index = chapters.findIndex((c) => c.slug === params.slug)
  const chapter = chapters[index]

  if (!chapter) return notFound()

  const prev = chapters[index - 1]
  const next = chapters[index + 1]
  const relatedRelic = chapter.relicSlug? armory.find(r => r.slug === chapter.relicSlug) : null

  // Progress calculation
  const currentChapter = index + 1
  const totalChapters = chapters.length
  const progressPercent = Math.round((currentChapter / totalChapters) * 100)

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/chronicles" className="text-amber-400 hover:text-amber-300 mb-8 block">
          ← Return to Table of Contents
        </Link>

        <div className="mb-12">
          <div className="flex justify-between items-baseline mb-2">
            <h1 className="text-4xl font-bold text-amber-400">{chapter.title}</h1>
            <span className="text-amber-200/60 text-sm">
              Chapter {currentChapter} / {totalChapters}
            </span>
          </div>

          <p className="text-amber-200/60 mb-4">{chapter.subtitle}</p>

          <div className="w-full bg-amber-400/10 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-400 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-amber-200/40 text-xs mt-1 text-right">{progressPercent}% through the testimony</p>
        </div>

        <article className="prose prose-invert prose-lg whitespace-pre-wrap mb-16">
          {chapter.content}
        </article>

        {next && (
          <div className="bg-amber-400/5 border border-amber-400/30 p-8 mb-16 text-center">
            <p className="text-amber-200/60 text-sm mb-2">Continue the journey</p>
            <Link
              href={`/chronicles/${next.slug}`}
              className="inline-block text-2xl font-bold text-amber-400 hover:text-amber-300"
            >
              📖 {next.title} →
            </Link>
            <p className="text-amber-200/60 text-sm mt-2">{next.subtitle}</p>
          </div>
        )}

        <div className="border-t border-amber-400/20 pt-8 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-amber-400 mb-3">Related Scripture</h2>
            <div className="bg-amber-400/5 border border-amber-400/20 p-4">
              <p className="text-amber-400 font-semibold">{chapter.scripture.ref}</p>
              <p className="text-amber-100 italic">"{chapter.scripture.text}"</p>
            </div>
          </div>

          {relatedRelic && (
            <div>
              <h2 className="text-xl font-bold text-amber-400 mb-3">Related Relic</h2>
              <Link
                href={`/armory#${relatedRelic.slug}`}
                className="block bg-amber-400/5 border border-amber-400/20 p-4 hover:bg-amber-400/10 transition"
              >
                <p className="text-amber-200 font-semibold">{relatedRelic.song}</p>
                <p className="text-amber-200/60 text-sm">{relatedRelic.scripture}</p>
              </Link>
            </div>
          )}
        </div>

        <nav className="flex justify-between mt-16 pt-8 border-t border-amber-400/20">
          {prev? (
            <Link href={`/chronicles/${prev.slug}`} className="text-amber-400 hover:text-amber-300">
              ← {prev.title}
            </Link>
          ) : <div />}

          {next? (
            <Link href={`/chronicles/${next.slug}`} className="text-amber-400 hover:text-amber-300">
              {next.title} →
            </Link>
          ) : (
            <Link href="/word" className="text-amber-400 hover:text-amber-300">
              Study The Word →
            </Link>
          )}
        </nav>
      </div>
    </main>
  )
      }
