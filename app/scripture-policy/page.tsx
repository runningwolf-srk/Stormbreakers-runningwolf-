// app/scripture-policy/page.tsx
import { BIBLE, STYLE } from '@/lib/constants'
export default function ScripturePolicy() {
  return (
    <main className="px-6 py-16"><div className="max-w-2xl mx-auto"><h1 className="text-3xl font-black text-amber-100">SCRIPTURE POLICY</h1><p className="text-amber-400/60 text-xs font-black mt-2">{STYLE.FLOW}</p><div className="mt-8 space-y-4 text-sm text-stone-300"><p><strong className="text-amber-100">Copyright:</strong> {BIBLE.COPYRIGHT}</p><p><strong className="text-amber-100">Note:</strong> {BIBLE.NOTE}</p></div></div></main>
  )
}
