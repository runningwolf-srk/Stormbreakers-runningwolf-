import { chapters } from '../../../data/chronicles'
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

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/chronicles" className="text-amber-400 hover:text-amber-300 mb-8 block">
          ← Return to Table of Contents
        </Link>

        <h1 className="text-4xl font-bold text-amber-400 mb-2">{chapter.title}</h1>
        <p className="text-amber-200/60 mb-12">Chapter {index + 1} of {chapters.length}</p>

        <article className="prose prose-invert prose-lg whitespace-pre-wrap">
          {chapter.content}
        </article>

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
