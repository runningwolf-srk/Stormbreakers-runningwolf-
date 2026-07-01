import Link from 'next/link'

export default function SagaPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Top Nav */}
        <div className="flex justify-between text-sm text-zinc-500 mb-16 font-sans">
          <Link href="/relics" className="hover:text-amber-500">← Relics</Link>
          <span className="tracking-widest">SCENES</span>
          <span className="text-zinc-700">Next →</span>
        </div>

        {/* SCENE 1 */}
        <section className="mb-24">
          <p className="text-amber-500 text-sm tracking-[0.3em] mb-4 font-sans">SCENE 1</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">THE SILENCE</h2>
          <p className="text-lg text-zinc-300 leading-relaxed font-sans">
            Before the battle, everything is still. The enemy whispers that silence means safety. 
            Heaven says silence is surrender.
          </p>
        </section>

        <div className="w-full h-px bg-zinc-800 my-16"></div>

        {/* SCENE 2 */}
        <section className="mb-24">
          <p className="text-amber-500 text-sm tracking-[0.3em] mb-4 font-sans">SCENE 2</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">THE HORN</h2>
          <p className="text-lg text-zinc-300 leading-relaxed font-sans">
            The call goes out, awakening courage. Not to signal fear, but to summon the faithful. 
            One note breaks the spell.
          </p>
        </section>

        <div className="w-full h-px bg-zinc-800 my-16"></div>

        {/* SCENE 3 */}
        <section className="mb-24">
          <p className="text-amber-500 text-sm tracking-[0.3em] mb-4 font-sans">SCENE 3</p>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">THE CHOICE</h2>
          <p className="text-lg text-zinc-300 leading-relaxed font-sans">
            Every person must decide whether to stand or retreat. The battlefield is already inside 
            you. The horn just reveals it.
          </p>
        </section>

        {/* Scripture Block */}
        <div className="border-l-2 border-amber-500 pl-6 my-20">
          <p className="text-xl italic text-zinc-300 font-serif mb-2">
            "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly."
          </p>
          <p className="text-amber-500 font-sans">Joel 2:1</p>
        </div>

      </div>
    </main>
  )
}
