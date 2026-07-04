import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Your Stormbreakers Logo */}
        <div className="mb-8">
          <img 
            src="/stormbreakers-logo.png" 
            alt="Stormbreakers" 
            className="w-48 h-48 mx-auto rounded-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-amber-400 tracking-wider">
          STORMBREAKERS
        </h1>
        
        <p className="text-xl text-gray-300 mb-2">
          RunningWolf - Jessy Marquez
        </p>
        
        <div className="w-24 h-0.5 bg-amber-400 mx-auto my-6"></div>
        
        <p className="text-gray-400 mb-12">
          Cinematic Worship • Spirit Led • 🔥 🐺 ⚔️
        </p>

        {/* FIXED BUTTONS - THIS IS THE CRITICAL PART */}
        <div className="space-y-4 max-w-md mx-auto">
          <Link href="/music">
            <button className="w-full bg-amber-400 text-black font-bold py-4 px-8 rounded-lg hover:bg-amber-300 transition-all">
              LISTEN NOW
            </button>
          </Link>

          <Link href="/saga">
            <button className="w-full border border-amber-400 text-amber-400 font-bold py-4 px-8 rounded-lg hover:bg-amber-400/10 transition-all">
              READ THE SAGA  
            </button>
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-16">
          By His call we rise.
        </p>

      </div>
    </main>
  )
}
