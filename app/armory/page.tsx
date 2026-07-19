// app/armory/page.tsx
import Link from 'next/link'
import TestimonyDisclaimer from '@/components/Disclaimer'

const relics = [
  {
    id: 1, total: "01 / 16", slug: "first-song",
    relicTitle: "The First Song", songTitle: "A New Song",
    theme: "Worship", scripture: "Psalm 40:3",
    declaration: "He put a new song in my mouth, a hymn of praise to our God.",
    reflection: "Psalm 23 wasn't poetry anymore. It was a map.",
  },
  {
    id: 2, total: "02 / 16", slug: "battle-cry",
    relicTitle: "Battle Cry", songTitle: "Warrior's Anthem",
    theme: "Spiritual Warfare", scripture: "Joshua 1:9",
    declaration: "Be strong and courageous. Do not be afraid.",
    reflection: "The battle is not mine, but the Lord's.",
  },
  {
    id: 3, total: "03 / 16", slug: "fire-forged",
    relicTitle: "Fire Forged", songTitle: "Through The Fire",
    theme: "Redemption", scripture: "Isaiah 43:2",
    declaration: "When you walk through fire, you shall not be burned.",
    reflection: "The fire didn't destroy me. God used it to reveal who He created me to become.",
  },
  {
    id: 4, total: "04 / 16", slug: "healer",
    relicTitle: "Jesus Is The Healer", songTitle: "Healer's Cry",
    theme: "Healing", scripture: "Jeremiah 30:17",
    declaration: "I will restore health to you and heal your wounds, declares the Lord.",
    reflection: "He heals what doctors can't touch.",
  },
  {
    id: 5, total: "05 / 16", slug: "im-on-fire",
    relicTitle: "Scars That Preach", songTitle: "I'm On Fire",
    theme: "Fire", scripture: "Isaiah 43:2",
    declaration: "When you walk through fire, you shall not be burned.",
    reflection: "The fire didn't destroy me. God used it to reveal who He created me to become.",
  },
  {
    id: 6, total: "06 / 16", slug: "eternal-fire",
    relicTitle: "The Fire That Never Goes Out", songTitle: "Eternal Fire",
    theme: "Fire", scripture: "Leviticus 6:13",
    declaration: "The fire must be kept burning on the altar continuously.",
    // FIXED ICU WORDING
    reflection: "The fire that tested me in the darkest valley never went out. It burns on the altar of my life.",
  },
]

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-amber-100 mb-4">THE ARMORY</h1>
          <p className="text-amber-200/60">16 relics. Each a song. Each a testimony. Each anchored in the Word.</p>
          <div className="max-w-2xl mx-auto mt-6"><TestimonyDisclaimer /></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relics.map((relic) => (
            <div key={relic.id} className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition h-full flex flex-col">
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-amber-400/60 text-xs tracking-[0.3em] font-black">RELIC {String(relic.id).padStart(2, '0')} — {relic.relicTitle.toUpperCase()}</span>
                <span className="text-amber-200/30 text-xs font-mono border border-amber-400/10 px-2 py-1 rounded">{relic.total}</span>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-amber-400/40 text- tracking-widest font-black">SONG TITLE</p>
                  <p className="text-amber-100 font-bold text-lg italic">{relic.songTitle}</p>
                </div>
                <div>
                  <p className="text-amber-400/40 text- tracking-widest font-black">THEME</p>
                  <p className="text-amber-300 text-sm">{relic.theme}</p>
                </div>
                <div>
                  <p className="text-amber-400/40 text- tracking-widest font-black">SCRIPTURE</p>
                  <p className="text-amber-300 text-sm font-bold">{relic.scripture}</p>
                </div>
                <div>
                  <p className="text-amber-400/40 text- tracking-widest font-black">DECLARATION</p>
                  <p className="text-amber-100/80 text-sm">"{relic.declaration}"</p>
                </div>
                <div>
                  <p className="text-amber-400/40 text- tracking-widest font-black">REFLECTION</p>
                  <p className="text-amber-200/60 text-sm italic">"{relic.reflection}"</p>
                </div>
              </div>

              <Link href={`/armory/${relic.slug}`} className="mt-6 w-full py-3 bg-amber-500/10 border border-amber-400/20 text-amber-400 font-black text-sm rounded-lg hover:bg-amber-500 hover:text-stone-950 transition text-center tracking-widest">
                ♫ LISTEN
              </Link>

            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-6 border-t border-amber-400/10">
          <p className="text-amber-400 font-black tracking-widest text-sm">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
        </div>
      </div>
    </main>
  )
}
