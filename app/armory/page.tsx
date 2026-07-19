// app/armory/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import TestimonyDisclaimer from '@/components/Disclaimer'

const relics = [
  { 
    id: 1, 
    slug: "first-song", 
    relicTitle: "The First Song", 
    songTitle: "A New Song",
    theme: "Worship", 
    scripture: "Psalm 40:3",
    declaration: "He put a new song in my mouth.",
    reflection: "Psalm 23 wasn't poetry anymore. It was a map."
  },
  { 
    id: 2, 
    slug: "battle-cry", 
    relicTitle: "Battle Cry", 
    songTitle: "Warrior's Anthem",
    theme: "Spiritual Warfare", 
    scripture: "Joshua 1:9",
    declaration: "Be strong and courageous.",
    reflection: "The battle is not mine, but the Lord's."
  },
  { 
    id: 3, 
    slug: "fire-forged", 
    relicTitle: "Fire Forged", 
    songTitle: "Through The Fire",
    theme: "Redemption", 
    scripture: "Isaiah 43:2",
    declaration: "When you walk through fire, you shall not be burned.",
    reflection: "The fire didn't destroy me, it defined me."
  },
  { 
    id: 4, 
    slug: "healer", 
    relicTitle: "Jesus Is The Healer", 
    songTitle: "Healer's Cry",
    theme: "Healing", 
    scripture: "Jeremiah 30:17",
    declaration: "I will restore health to you.",
    reflection: "He heals what doctors can't touch."
  },
  // Add your other 12 here with same structure
]

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-black text-amber-100 tracking-tighter mb-4">THE ARMORY</h1>
          <p className="text-amber-200/60">16 relics. Each a song. Each a testimony. Each anchored in the Word.</p>
          <TestimonyDisclaimer />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relics.map((relic) => (
            <Link key={relic.id} href={`/armory/${relic.slug}`} className="group">
              <div className="h-full p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 transition-all duration-300 hover:bg-stone-900">
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-amber-400/60 text-[10px] tracking-[0.3em] font-black">RELIC {String(relic.id).padStart(2, '0')}</span>
                  <span className="text-amber-400/40 text-xs px-2 py-1 bg-amber-400/10 rounded-full">{relic.theme}</span>
                </div>

                <div className="mb-1">
                  <p className="text-amber-400/50 text-[10px] tracking-[0.2em] font-black mb-1">RELIC TITLE</p>
                  <h3 className="text-amber-100 text-xl font-black leading-tight group-hover:text-amber-300 transition">{relic.relicTitle}</h3>
                </div>

                <div className="mb-4">
                  <p className="text-amber-400/50 text-[10px] tracking-[0.2em] font-black mb-1 mt-3">SONG TITLE</p>
                  <p className="text-amber-200/70 text-sm italic">{relic.songTitle}</p>
                </div>

                <div className="space-y-3 mt-6 pt-6 border-t border-amber-400/10">
                  <div>
                    <p className="text-amber-400/50 text-[10px] tracking-widest font-black">SCRIPTURE</p>
                    <p className="text-amber-300 text-sm font-bold">{relic.scripture}</p>
                  </div>
                  <div>
                    <p className="text-amber-400/50 text-[10px] tracking-widest font-black">DECLARATION</p>
                    <p className="text-amber-100/80 text-sm">{relic.declaration}</p>
                  </div>
                  <div>
                    <p className="text-amber-400/50 text-[10px] tracking-widest font-black">REFLECTION</p>
                    <p className="text-amber-200/60 text-sm italic">"{relic.reflection}"</p>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
