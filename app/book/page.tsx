import { ALL_RELICS } from "@/data/armory"
export default function BooksPage(){
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto space-y-12">
      <h1 className="text-3xl font-black tracking-widest text-center">📚 BOOKS</h1>
      <p className="text-center text-zinc-400 text-sm">Live — Walk and Practice</p>
      {ALL_RELICS.map(r=>(
        <div key={r.slug} className="border border-zinc-800 rounded-xl p-8 space-y-4">
          <p className="text-xs text-zinc-500">{r.num} • {r.title.toUpperCase()}</p>
          <p className="text-zinc-300 leading-7 whitespace-pre-wrap">{r.walk}</p>
          <p className="text-xs text-zinc-500 mt-4">Practice: {r.practice}</p>
        </div>
      ))}
    </div>
  )
}
