// app/word/page.tsx - FINAL with Intro + Consistent Wording
import Link from 'next/link'

const scriptures = [
  { 
    ref: "Psalm 40:3", 
    theme: "Worship", 
    text: "He put a new song in my mouth, a hymn of praise to our God.",
    relics: ["The First Song"],
    chapters: ["Chapter 1: The Map"]
  },
  { 
    ref: "Joshua 1:9", 
    theme: "Spiritual Warfare", 
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    relics: ["Battle Cry"],
    chapters: ["Chapter 2: The Valley"]
  },
  { 
    ref: "Isaiah 43:2", 
    theme: "Refining Fire / Testimony", 
    text: "When you walk through fire, you shall not be burned; the flames will not set you ablaze.",
    relics: ["Fire Forged", "Scars That Preach"],
    chapters: ["Chapter 3: The Fire"]
  },
  { 
    ref: "Jeremiah 30:17", 
    theme: "Healing", 
    text: "I will restore health to you and heal your wounds, declares the Lord.",
    relics: ["Jesus Is The Healer"],
    chapters: ["Chapter 3: The Breaking"]
  },
  { 
    ref: "2 Corinthians 12:9", 
    theme: "Grace", 
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    relics: ["Scars That Preach"],
    chapters: ["Chapter 4: The Scars"]
  },
  { 
    ref: "Leviticus 6:13", 
    theme: "Altar", 
    text: "The fire must be kept burning on the altar continuously; it must not go out.",
    relics: ["The Fire That Never Goes Out"],
    chapters: ["Chapter 5: The Altar"]
  },
]

export default function WordPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100 mb-6">THE WORD</h1>
          
          {/* NEW INTRO - Reinforces relationship */}
          <div className="max-w-2xl mx-auto p-6 rounded-xl bg-stone-900/60 border border-amber-400/10 mb-8">
            <p className="text-amber-100/80 text-sm leading-relaxed">
              Every theme in Stormbreakers begins with Scripture. The songs and testimonies are meant to point back to God's Word, not replace it.
            </p>
          </div>

          <div className="max-w-2xl mx-auto p-4 rounded-lg bg-amber-500/5 border border-amber-400/10">
            <p className="text-amber-200/50 text-xs italic">This is not Scripture. These are my songs, anchored in Scripture.</p>
          </div>
        </div>

        <div className="space-y-6">
          {scriptures.map((s) => (
            <div key={s.ref} className="p-6 bg-stone-900/40 border border-amber-400/10 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <h3 className="text-amber-300 font-black text-lg">{s.ref}</h3>
                <span className="text-amber-400/50 text-xs tracking-widest font-black border border-amber-400/10 px-2 py-1 rounded self-start">{s.theme.toUpperCase()}</span>
              </div>
              
              <p className="text-amber-100/80 italic mb-6 leading-relaxed">"{s.text}"</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-amber-400/40 tracking-widest font-black mb-2">CONNECTED RELICS</p>
                  <div className="flex flex-wrap gap-2">
                    {s.relics.map(r => (
                      <Link key={r} href="/armory" className="px-3 py-1 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-300 hover:bg-amber-500 hover:text-stone-950 transition">
                        {r}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-amber-400/40 tracking-widest font-black mb-2">CONNECTED CHAPTERS</p>
                  <div className="flex flex-wrap gap-2">
                    {s.chapters.map(ch => (
                      <Link key={ch} href="/chronicles" className="px-3 py-1 bg-stone-800 border border-amber-400/10 rounded-full text-amber-200/60 hover:border-amber-400/30 transition">
                        {ch}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-6 border-t border-amber-400/10">
          <p className="text-amber-400 font-black tracking-[0.3em] text-sm">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
          <p className="text-amber-200/30 text-xs mt-4 max-w-xl mx-auto">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
        </div>
      </div>
    </main>
  )
}
