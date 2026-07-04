import Link from 'next/link'

export default function SagaPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-amber-400">The Stormbreakers Saga</h1>
        <div className="prose prose-invert prose-amber text-lg">
          <p className="text-xl text-gray-300 mb-6">By His call we rise.</p>
          <p>I am RunningWolf - Jessy Marquez. This is not music. This is warfare.</p>
          <p>Eight songs. Eight relics. One King. The Stormbreakers rise when the world forgets how to worship through the storm.</p>
          <p>Each relic marks a battle. Each song is a weapon. We don't perform. We declare.</p>
        </div>
        <div className="mt-12">
          <Link href="/" className="text-amber-400 hover:underline">← Return to Stormbreakers</Link>
        </div>
      </div>
    </main>
  )
}
