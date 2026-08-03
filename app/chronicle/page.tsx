export default function ChroniclePage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.5em] text-amber-700/60 mb-4">📖 THE CHRONICLE</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Stories reveal meaning</h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            This is where the battles, scars, victories, failures, and testimonies behind each relic are preserved.<br/>
            <span className="text-zinc-200 font-semibold">Not another music page.<br/>This is the story behind the artifact.</span>
          </p>
        </div>

        <div className="border border-amber-900/20 rounded-xl p-8 mb-12 bg-zinc-900/30">
          <h2 className="text-xs tracking-[0.4em] text-amber-700/70 mb-6">CHAPTER I — FOUNDATION</h2>
          <h3 className="text-2xl font-bold mb-6">The Keeper&apos;s Oath</h3>

          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>RunningWolf is not the center.<br/>He is the guide who carries the pages.</p>
            <p className="text-xl font-semibold text-white mt-6">Not the hero above the story —<br/>the witness inside it.</p>
            <p className="text-amber-200/80 font-semibold">The power comes from the King, not the warrior.</p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2 text-sm tracking-widest">
            <span className="text-amber-500 font-bold">The King</span>
            <span className="text-zinc-600">↓</span>
            <span className="text-zinc-300">The Word</span>
            <span className="text-zinc-600">↓</span>
            <span className="text-amber-700/80">The Chronicle</span>
            <span className="text-zinc-600">↓</span>
            <span className="text-zinc-400">The Keeper</span>
            <span className="text-zinc-600">↓</span>
            <span className="text-zinc-500">The Relics</span>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="border border-zinc-800 rounded-lg p-6">
            <p className="text-xs tracking-widest text-zinc-500 mb-2">RELIC I — ⚔️ RunningWolf Blade</p>
            <p className="text-amber-500/80 text-sm mb-2">Hebrews 4:12</p>
            <h4 className="font-bold">The story behind the blade.</h4>
            <p className="text-zinc-400 text-sm mt-1">How the Word became sharper than steel.</p>
          </div>
          <div className="border border-zinc-800 rounded-lg p-6">
            <p className="text-xs tracking-widest text-zinc-500 mb-2">RELIC II — 👑 Lord of Lords</p>
            <p className="text-amber-500/80 text-sm mb-2">Revelation 19:16</p>
            <h4 className="font-bold">When the Keeper kneels, the King stands.</h4>
          </div>
          <div className="border border-zinc-800 rounded-lg p-6">
            <p className="text-xs tracking-widest text-zinc-500 mb-2">RELIC III — ✝️ Blood of Cross</p>
            <p className="text-amber-500/80 text-sm mb-2">Colossians 1:20</p>
            <h4 className="font-bold">Peace was not won by the blade.</h4>
            <p className="text-zinc-400 text-sm mt-1">It was bought by blood.</p>
          </div>
        </div>

        <div className="text-center mt-16 pt-10 border-t border-amber-900/10">
          <p className="text-[11px] tracking-[0.4em] text-zinc-500">19 Pages Waiting to Be Discovered</p>
          <p className="text-sm tracking-[0.3em] text-amber-700/60 mt-3">19 Relics • 3 Revealed • 16 Sealed • The Chronicle Continues</p>
        </div>

      </div>
    </div>
  );
}
