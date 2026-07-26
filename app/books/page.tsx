import { BRAND } from "@/data/armory"
export default function BooksPage(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-black">BOOKS</h1>
      <p className="text-white/40 font-mono text-[11px] mt-2 tracking-widest">{BRAND}</p>
      <p className="mt-6 text-white/50 text-sm max-w-2xl">Hear → Understand → Root → Live. Each book expands its relic into devotional, reflection, and practical application.</p>
    </div>
  )
}
