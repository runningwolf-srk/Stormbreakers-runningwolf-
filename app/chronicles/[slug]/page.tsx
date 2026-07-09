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
  const relatedRelic = chapter.relicSlug ? armory.find(r => r.slug === chapter.relicSlug) : null

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/chronicles" className="text-amber-400 hover:text-amber-300 mb-8 block">
          ← Return to Table of Contents
        </Link>

        <h1 className="text-4xl font-bold text-amber-400 mb-2">{chapter.title}</h1>
        <p className="text-amber-200/60 mb-12">Chapter {index + 1} of {chapters.length} — {chapter.subtitle}</p>

        <article className="prose prose-invert prose-lg whitespace-pre-wrap mb-16">
          {chapter.content}
        </article>

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
          {prev ? (
            <Link href={`/chronicles/${prev.slug}`} className="text-amber-400 hover:text-amber-300">
              ← {prev.title}
            </Link>
          ) : <div />}
          
          {next ? (
            <Link href={`/chronicles/${next.slug}`} className="text-amber-400 hover:text-amber-300">
              {next.title} →
            </Link>
          ) : <div />}
        </nav>
      </div>
    </main>
  )
}
