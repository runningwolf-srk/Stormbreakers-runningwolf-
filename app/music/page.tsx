import Link from 'next/link'

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">The Sound of War</h1>
        <p className="text-gray-400 mb-8">Eight tracks. Eight declarations.</p>
        
        <div className="text-center p-12 border border-amber-400/30 rounded-lg">
          <p className="text-2xl">Stormbreakers Album</p>
          <p className="text-gray-400 mt-2">Releasing Soon</p>
          <p className="text-amber-400 mt-6">By His call we rise.</p>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-amber-400 hover:underline">← Return to Stormbreakers</Link>
        </div>
      </div>
    </main>
  )
}
