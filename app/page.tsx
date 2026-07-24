import Link from "next/link"
import { CANON_PROGRESS } from "@/data/armory"
export default function Home(){
  return (
    <div className="px-6 py-20 max-w-3xl mx-auto text-center space-y-12">
      <h1 className="text-6xl font-black tracking-[0.2em]">RUNNING WOLF</h1>
      <p className="text-xl tracking-[0.4em] text-zinc-500">STORMBREAKERS</p>
      <p className="text-xs tracking-[0.3em] text-zinc-400">⚔️ FORGED: {CANON_PROGRESS.forged}/16 • 🔥 IN PROGRESS: {CANON_PROGRESS.inProgress}/16 • 🔒 UNREVEALED: {CANON_PROGRESS.unrevealed}/16</p>
      <div className="grid grid-cols-2 gap-4 pt-12">
        <Link href="/armory" className="border border-zinc-800 p-8 rounded-xl hover:border-white transition"><span className="text-xs tracking-widest">⚔️ ARMORY</span><p className="text-xs text-zinc-500 mt-2">Hear</p></Link>
        <Link href="/chronicles" className="border border-zinc-800 p-8 rounded-xl hover:border-white transition"><span className="text-xs tracking-widest">📖 CHRONICLES</span><p className="text-xs text-zinc-500 mt-2">Understand</p></Link>
        <Link href="/word" className="border border-zinc-800 p-8 rounded-xl hover:border-white transition"><span className="text-xs tracking-widest">✝️ WORD</span><p className="text-xs text-zinc-500 mt-2">Root</p></Link>
        <Link href="/books" className="border border-zinc-800 p-8 rounded-xl hover:border-white transition"><span className="text-xs tracking-widest">📚 BOOKS</span><p className="text-xs text-zinc-500 mt-2">Live</p></Link>
      </div>
    </div>
  )
}
