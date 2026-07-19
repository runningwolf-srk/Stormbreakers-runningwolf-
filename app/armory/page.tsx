// app/armory/page.tsx - Descriptive Listen + Smoother Disclaimer
import Link from 'next/link'

const relics = [
  { id: 1, slug: "first-song", relicTitle: "The First Song", songTitle: "A New Song", theme: "Worship", scripture: "Psalm 40:3", declaration: "He put a new song in my mouth.", reflection: "Psalm 23 wasn't poetry anymore. It was a map." },
  { id: 2, slug: "battle-cry", relicTitle: "Battle Cry", songTitle: "Warrior's Anthem", theme: "Spiritual Warfare", scripture: "Joshua 1:9", declaration: "Be strong and courageous.", reflection: "The moment fear left and the warrior rose. God doesn't call the qualified, He qualifies the called." },
  { id: 3, slug: "fire-forged", relicTitle: "Fire Forged", songTitle: "Through The Fire", theme: "Refining Fire", scripture: "Isaiah 43:2", declaration: "When you walk through fire, you shall not be burned.", reflection: "The flames tested my faith, but God was already waiting on the other side." },
  { id: 4, slug: "healer", relicTitle: "Jesus Is The Healer", songTitle: "Healer's Cry", theme: "Healing", scripture: "Jeremiah 30:17", declaration: "I will restore health to you.", reflection: "He heals wounds no human hands can reach and restores what life tried to steal." },
  { id: 5, slug: "im-on-fire", relicTitle: "Scars That Preach", songTitle: "I'm On Fire", theme: "Testimony", scripture: "2 Corinthians 12:9", declaration: "My grace is sufficient.", reflection: "The scars I wanted hidden became the testimony God used to speak." },
  { id: 6, slug: "eternal-fire", relicTitle: "The Fire That Never Goes Out", songTitle: "Eternal Fire", theme: "Altar", scripture: "Leviticus 6:13", declaration: "The fire must be kept burning.", reflection: "The fire that tested me in the darkest valley never went out. It burns on the altar of my life." },
]

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100 mb-4">THE ARMORY</h1>
          <p className="text-amber-200/60 text-sm">16 relics. Each a song. Each a testimony. Each anchored in the Word.</p>
          <div className="max-w-2xl mx-auto mt-6 p-4 rounded-lg bg-amber-500/5 border border-amber-400/10">
            <p className="text-amber-200/50 text-xs italic">This is not Scripture. These are my songs, anchored in Scripture.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relics.map((relic) => (
            <div key={relic.id} className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <span className="text-amber-400/60 text- tracking-widest font-black">RELIC {String(relic.id).padStart(2, '0')} — {relic.relicTitle.toUpperCase()}</span>
                <span className="text-amber-200/20 text-xs font-mono border border-amber-400/10 px-2 py-1 rounded">{String(relic.id).padStart(2, '0')} / 16</span>
              </div>
              <div className="space-y-3 flex-1 text-sm">
                <p><span className="text-amber-400/40 text- font-black tracking-widest">SONG TITLE: </span><span className="text-amber-100 italic">{relic.songTitle}</span></p>
                <p><span className="text-amber-400/40 text- font-black tracking-widest">THEME: </span><span className="text-amber-300">{relic.theme}</span></p>
                <p><span className="text-amber-400/40 text- font-black tracking-widest">SCRIPTURE: </span><span className="text-amber-300 font-bold">{relic.scripture}</span></p>
                <p className="text-amber-100/70 italic">"{relic.declaration}"</p>
                <p className="text-amber-200/50 italic text-xs">"{relic.reflection}"</p>
              </div>
              <Link href={`/armory/${relic.slug}`} className="mt-6 w-full py-3 bg-amber-500/10 border border-amber-400/20 text-amber-400 font-black text-xs rounded-lg hover:bg-amber-500 hover:text-stone-950 transition text-center tracking-widest">
                LISTEN TO "{relic.songTitle.toUpperCase()}"
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-amber-400 font-black tracking-widest text-xs">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
      </div>
    </main>
  )
}
