import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black text-amber-400 mb-4">
          STORMBREAKERS
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-2">
          RunningWolf - Jessy Marquez
        </p>
        <p className="text-zinc-600 mb-12">
          Cinematic Worship • Spirit Led • 🔥🐺⚔️
        </p>
        
        <Link 
          href="/music" 
          className="inline-block bg-amber-500 text-black px-10 py-4 rounded-lg font-black text-lg hover:bg-amber-400 transition"
        >
          LISTEN NOW
        </Link>
        
        <p className="text-zinc-700 mt-16 text-sm">
          Clean slate. Rebuilt right.
        </p>
      </div>
    </main>
  );
}
