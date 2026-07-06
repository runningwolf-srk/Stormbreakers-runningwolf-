import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <Link href="/" className="text-amber-400 mb-8 block">← Back to Home</Link>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-cinzel text-5xl mb-12">RUNNINGWOLF</h1>
        <img src="/runningwolf-avatar.jpg" alt="RunningWolf" className="w-48 h-48 rounded-full mb-8 object-cover" />
        <p className="text-xl text-gray-300 mb-6">
          I write these songs from the forge. Each relic is a scar. Each verse is a battle.
        </p>
        <p className="text-gray-400">
          Stormbreakers is the world these songs live in. Eight Relics. Eight Declarations. 
          One Call to rise. This is my creative work — worship through war, scripture through steel.
        </p>
        <p className="text-amber-400 mt-8 font-cinzel">
          — Jessy Marquez, Guymon, Oklahoma
        </p>
      </div>
    </main>
  );
}
