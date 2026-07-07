import { notFound } from 'next/navigation';
import { chronicles } from '@/data/chronicles';
import { armory } from '@/data/armory';
import Link from 'next/link';

export async function generateStaticParams() {
  return chronicles.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = chronicles.find((c) => c.slug === params.slug);
  if (!chapter) notFound();

  const relatedRelic = armory.find((r) => r.slug === chapter.relic);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <article className="max-w-3xl mx-auto">
        <Link 
          href="/chronicles" 
          className="text-amber-500 hover:text-amber-400 text-sm mb-8 inline-block"
        >
          ← Back to The Chronicles
        </Link>

        <div className="text-amber-500 text-sm font-bold mb-4 tracking-widest">
          CHAPTER {chapter.num}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">{chapter.title}</h1>

        <blockquote className="border-l-4 border-amber-500 pl-6 py-2 mb-12 bg-zinc-900/50">
          <p className="text-xl italic text-zinc-300 mb-2">"{chapter.verse}"</p>
          <cite className="text-zinc-500 not-italic">— {chapter.ref}</cite>
        </blockquote>

        <div className="prose prose-invert prose-lg max-w-none">
          {chapter.content.map((paragraph, idx) => (
            <p key={idx} className="text-zinc-300 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedRelic && (
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm mb-4">This chapter points to:</p>
            <Link 
              href={`/armory/${relatedRelic.slug}`}
              className="group bg-zinc-900 border border-zinc-800 hover:border-amber-500 p-6 flex items-center gap-6 transition"
            >
              <img 
                src={relatedRelic.image} 
                alt={relatedRelic.relic}
                className="w-20 h-20 object-cover"
              />
              <div>
                <div className="text-amber-500 text-xs font-bold mb-1">RELIC</div>
                <h3 className="text-xl font-bold group-hover:text-amber-500 transition">
                  {relatedRelic.relic}
                </h3>
                <p className="text-zinc-400 text-sm">{relatedRelic.subtitle}</p>
              </div>
            </Link>
          </div>
        )}
      </article>
    </main>
  )
}
