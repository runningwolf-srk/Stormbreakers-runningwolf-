import { BIBLE, STYLE } from '@/lib/constants'

export default function ScripturePolicy() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-amber-100">SCRIPTURE POLICY</h1>
        <p className="text-amber-400/60 text-xs tracking-[0.3em] font-black mt-2">THE WORD IS AUTHORITY</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-stone-300">
          <p><strong className="text-amber-100">Flow:</strong> {STYLE.FLOW} — Scripture is foundation, testimony is response.</p>
          <p><strong className="text-amber-100">Translation:</strong> ESV for all 16 relics for consistency.</p>
          <p><strong className="text-amber-100">Copyright:</strong> {BIBLE.COPYRIGHT}</p>
          <p><strong className="text-amber-100">Permission:</strong> {BIBLE.NOTE}. ESV allows up to 500 verses when not a complete book, with attribution. Stormbreakers uses 16 verses — compliant.</p>
        </div>
      </div>
    </main>
  )
}
