import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen">
      <header className="bg-black/80 backdrop-blur-md border-b border-yellow-900/30 px-4 py-3 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-base tracking-wide text-yellow-500">
            Stormbreakers - RunningWolf
          </span>
          <nav className="flex gap-4 text-xs">
            <Link href="/" className="text-yellow-500">Home</Link>
            <Link href="/music" className="hover:text-yellow-500">Music</Link>
          </nav>
        </div>
      </header>

      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 border-yellow-600/60 shadow-xl shadow-yellow-900/30 mb-4">
            <Image 
              src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
              alt="RunningWolf"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
            Jessy Marquez
          </h1>
          <p className="text-sm text-white/60 tracking-[0.3em] mb-4">
            RUNNINGWOLF
          </p>

          {/* 1. SHORT ARTIST BIO - GPT suggestion */}
          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-6">
            Jessy Marquez, performing as <span className="text-yellow-500 font-semibold">RunningWolf</span>, creates cinematic worship and epic spiritual rock inspired by faith, perseverance, and legendary storytelling.
          </p>
          
          {/* 2. CLEAR CTA - GPT suggestion */}
          <Link 
            href="/music" 
            className="inline-block bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-base transition-all hover:scale-105 shadow-lg shadow-yellow-900/40"
          >
            🎵 Explore the Music →
          </Link>
        </div>
      </section>

      {/* 3. FEATURED ARTWORK - GPT suggestion */}
      <section className="bg-black py-12 px-4 border-t border-yellow-900/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-yellow-500 tracking-[0.3em] mb-6 text-center font-semibold">
            FEATURED HYMN
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-yellow-900/40 shadow-2xl shadow-yellow-900/20">
              <Image 
                src="/heaven-calling-cover.jpg" 
                alt="Heaven Calling - RunningWolf"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="text-left">
              <h3 className="text-3xl font-bold text-yellow-500 mb-3" style={{fontFamily: 'Cinzel, serif'}}>
                Heaven Calling
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                The first hymn from the ruins. Written when worship was the only weapon left. 
                For the broken, the chosen, the ones who hear the storm.
              </p>
              <Link 
                href="/heaven-calling" 
                className="inline-block border border-yellow-600 hover:bg-yellow-600/10 text-yellow-500 font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Listen + Read the Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 border-t border-yellow-900/20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-yellow-500 tracking-[0.3em] mb-4 text-center font-semibold">
            THE SAGA
          </p>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{fontFamily: 'Cinzel, serif', fontWeight: 900}}>
            This Is Stormbreakers
          </h2>
          <div className="space-y-4 text-base text-white/80 leading-relaxed">
            <p>
              <span className="text-yellow-500 font-bold">RunningWolf</span> isn&apos;t a stage name. 
              It&apos;s the name the fire gave Jessy Marquez when everything else burned down.
            </p>
            <p className="text-lg text-yellow-500 font-semibold py-4 text-center border-y border-yellow-900/30">
              &quot;Worship is your weapon.<br/>The storm is your calling.&quot;
            </p>
            <p>
              <span className="text-yellow-500 font-bold">Stormbreakers</span> is the sound of that calling. 
              Music for the ones fighting battles in the dark. Anthems written in the rubble, 
              not in a studio.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#0b0b0f] py-6 text-center text-white/40 text-xs border-t border-yellow-900/20">
        <p>Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF</p>
      </footer>
    </main>
  );
}
