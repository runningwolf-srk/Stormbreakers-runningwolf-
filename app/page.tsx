import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#0b0b0f] text-[#e8e6e3] min-h-screen">
      {/* HEADER */}
      <header className="bg-black/80 backdrop-blur-md border-b border-yellow-900/30 px-4 py-4 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-lg tracking-wide text-yellow-500">
            Stormbreakers - RunningWolf
          </span>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-yellow-500">Home</Link>
            <Link href="/heaven-calling" className="hover:text-yellow-500">Music</Link>
          </nav>
        </div>
      </header>

      {/* HERO CARD */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-yellow-600/50 shadow-2xl shadow-yellow-900/20 mb-8">
            <Image 
              src="/729068345_1706992463868756_7233760520950384832_n~2.jpg"
              alt="RunningWolf - The Stormbreaker"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
            Jessy Marquez
          </h1>
          <p className="text-lg text-white/60 tracking-[0.3em] mb-8">
            RUNNINGWOLF
          </p>
          
          <Link 
            href="/heaven-calling" 
            className="inline-block text-yellow-500 hover:text-yellow-400 text-lg font-semibold transition-colors"
          >
            Listen Now →
          </Link>
        </div>
      </section>

      {/* STORY / BLOG SECTION - FIXED APOSTROPHES */}
      <section className="bg-black py-16 md:py-24 px-4 border-t border-yellow-900/20">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-yellow-500 tracking-[0.3em] mb-6 text-center font-semibold">
            THE SAGA
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
            This Is Stormbreakers
          </h2>
          
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              <span className="text-yellow-500 font-bold">RunningWolf</span> isn&apos;t a stage name. 
              It&apos;s the name the fire gave Jessy Marquez when everything else burned down.
            </p>
            <p>
              The ruins behind him aren&apos;t CGI. They&apos;re real — broken homes, silent fathers, 
              addiction, religion without power. He was called to walk through them not with a sword, 
              but with worship.
            </p>
            <p className="text-xl text-yellow-500 font-semibold py-6 text-center border-y border-yellow-900/30">
              &quot;Worship is your weapon.<br/>The storm is your calling.&quot;
            </p>
            <p>
              <span className="text-yellow-500 font-bold">Stormbreakers</span> is the sound of that calling. 
              Music for the ones fighting battles in the dark. Anthems written in the rubble, 
              not in a studio. Each song is a hymn for the clan — the addicted, the broken, the chosen.
            </p>
            <p>
              You&apos;re here because the storm brought you. The first hymn is <span className="text-yellow-500">&quot;Heaven Is Calling.&quot;</span> 
              It&apos;s waiting.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/heaven-calling" 
              className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-lg text-lg transition-all hover:scale-105"
            >
              READ THE FULL STORY & HEAR THE HYMN
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b0b0f] py-8 text-center text-white/40 text-sm border-t border-yellow-900/20">
        <p>Stormbreakers © 2026 — JESSY MARQUEZ // RUNNINGWOLF</p>
      </footer>
    </main>
  );
    }
