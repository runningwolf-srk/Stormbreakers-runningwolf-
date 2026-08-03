export default function WordPage() {
  return (
    <div className="min-h-screen bg-[#040404] text-zinc-100 px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.5em] text-amber-700/60">✝️ THE WORD</p>
        <h1 className="text-3xl font-black mt-4">Scripture gives foundation.</h1>
        <p className="text-zinc-500 text-sm mt-2">Relics become discoveries, not lists.<br/>Each relic is built on a passage, not around it.</p>
        <div className="mt-12 border border-amber-900/20 p-8 rounded-xl bg-zinc-900/20">
          <div className="flex flex-col gap-2 text-xs tracking-widest text-zinc-500">Meaning<br/>↓<br/>Context<br/>↓<br/>Story<br/>↓<br/>Song Connection<br/>↓<br/>Reflection</div>
        </div>
      </div>
    </div>
  );
}
