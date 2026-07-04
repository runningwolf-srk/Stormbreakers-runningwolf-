import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION WITH WARRIOR IMAGE */}
      <div className="relative h-screen w-full overflow-hidden">
        <img 
          src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
          alt="Stormbreakers Warrior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-400 drop-shadow-lg">
            STORMBREAKERS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl drop-shadow-lg">
            Eight Relics. Eight Declarations. One Call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/relics" 
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-lg transition"
            >
              Enter The Armory
            </Link>
            <Link 
              href="/music" 
              className="border border-amber-400 hover:bg-amber-400/20 text-amber-400 font-bold py-3 px-8 rounded-lg transition"
            >
              Hear The Sound of War
            </Link>
          </div>
        </div>
      </div>

      {/* PROPHECY SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 text-amber-400">The Prophecy</h2>
        <p className="text-lg text-gray-300 mb-4">
          When the world grows cold and the church grows quiet, 
          He will raise up Stormbreakers.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Not from pulpits, but from prisons. Not from stages, but from streets.
          Men and women marked by fire, called by name.
        </p>
        <div className="text-amber-400 text-xl">By His call we rise.</div>
      </div>

      {/* NAV SECTION */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/saga" className="border border-amber-400/30 rounded-lg p-6 hover:bg-amber-400/10 transition">
            <h3 className="text-2xl font-bold mb-2 text-amber-400">The Saga</h3>
            <p className="text-gray-400">Read the Chronicle Stone. The full story of the call.</p>
          </Link>
          <Link href="/relics" className="border border-amber-400/30 rounded-lg p-6 hover:bg-amber-400/10 transition">
            <h3 className="text-2xl font-bold mb-2 text-amber-400">The Relics</h3>
            <p className="text-gray-400">Eight powers. Eight scriptures. Eight declarations.</p>
          </Link>
          <Link href="/music" className="border border-amber-400/30 rounded-lg p-6 hover:bg-amber-400/10 transition">
            <h3 className="text-2xl font-bold mb-2 text-amber-400">The Sound</h3>
            <p className="text-gray-400">Eight tracks. The war album of the end times.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
