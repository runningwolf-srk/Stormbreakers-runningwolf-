import Link from 'next/link';

export default function Saga() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="text-amber-400 mb-8 block">← Back to Home</Link>
      <h1 className="font-cinzel text-5xl mb-12 text-center">THE SAGA</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-xl text-gray-300">
          Chapter structure coming soon. Each relic unlocks a chapter of the story.
        </p>
        <p className="text-gray-500">
          The journey begins with The First Flame...
        </p>
      </div>
    </main>
  );
}
