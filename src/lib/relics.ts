import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { RELICS } from '@/src/lib/relics'; // ← IMPORT FROM YOUR LIB

export async function generateStaticParams() {
  return RELICS.map((relic) => ({
    slug: relic.id, // ← You use 'id' not 'slug'
  }));
}

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS.find((r) => r.id === params.slug); // ← Use 'id'
  
  if (!relic) notFound();
  
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          href="/relics" 
          className="inline-block text-amber-400 hover:text-amber-300 mb-8 font-semibold"
        >
          ← Back to Hall of Relics
        </Link>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <Image 
              src={relic.cover} 
              alt={relic.title}
              width={600}
              height={600}
              className="rounded-xl shadow-2xl w-full border border-amber-900/30"
              priority
            />
          </div>
          
          <div>
            <div className="text-amber-500 text-sm font-bold tracking-widest mb-2">
              {relic.subtitle} {/* ← Shows "RELIC 01" */}
            </div>
            <h1 className="text-5xl font-black text-amber-400 mb-3 tracking-tight">
              {relic.title}
            </h1>
            
            <p className="text-zinc-300 mb-6 text-lg leading-relaxed">
              {relic.scripture}
            </p>
            
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-6">
              <h2 className="text-amber-400 font-bold mb-4 text-xl">Prophecy</h2>
              <p className="text-lg text-zinc-200 leading-relaxed">
                {relic.prophecy}
              </p>
            </div>

            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${relic.youtubeId}`}
              title={relic.title}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
              }
