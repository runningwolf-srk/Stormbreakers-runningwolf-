// app/armory/page.tsx - THE ARMORY - FINAL 01-06
const relics = [
  { id: 1, label: "RELIC 01 — THE FIRST SONG", song: "A New Song", theme: "Worship", scripture: "Psalm 40:3", declaration: "He put a new song in my mouth.", reflection: "Psalm 23 wasn't poetry anymore. It was a map." },
  { id: 2, label: "RELIC 02 — BATTLE CRY", song: "Warrior's Anthem", theme: "Spiritual Warfare", scripture: "Joshua 1:9", declaration: "Be strong and courageous.", reflection: "The moment fear left and the warrior rose. God doesn't call the qualified, He qualifies the called." },
  { id: 3, label: "RELIC 03 — FIRE FORGED", song: "Through The Fire", theme: "Refining Fire", scripture: "Isaiah 43:2", declaration: "When you walk through fire, you shall not be burned.", reflection: "The flames tested my faith, but God was already waiting on the other side." },
  { id: 4, label: "RELIC 04 — JESUS IS THE HEALER", song: "Healer's Cry", theme: "Healing", scripture: "Jeremiah 30:17", declaration: "I will restore health to you.", reflection: "He heals wounds no human hands can reach and restores what life tried to steal." },
  { id: 5, label: "RELIC 05 — SCARS THAT PREACH", song: "I'm On Fire", theme: "Testimony", scripture: "2 Corinthians 12:9", declaration: "My grace is sufficient.", reflection: "The scars I wanted hidden became the testimony God used to speak." },
  { id: 6, label: "RELIC 06 — THE FIRE THAT NEVER GOES OUT", song: "Eternal Fire", theme: "Altar", scripture: "Leviticus 6:13", declaration: "The fire must be kept burning.", reflection: "The fire that tested me in the darkest valley never went out. It burns on the altar of my life." },
]

export default function ArmoryPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter text-amber-100 mb-4">THE ARMORY</h1>
          <p className="text-amber-200/40 text-sm">16 relics. Each a song. Each a testimony. Each anchored in the Word.</p>
          <div className="max-w-xl mx-auto mt-6 p-3 rounded-lg bg-amber-500/5 border border-amber-400/10">
            <p className="text-amber-200/50 text-xs italic">This is my story — anchored in Scripture. These are my songs — rooted in the Word.</p>
          </div>
        </div>

        <div className="space-y-6">
          {relics.map((r) => (
            <div key={r.id} className="p-6 bg-stone-900/50 border border-amber-400/10 rounded-xl">
              <p className="text-amber-400/50 text-xs tracking-[0.3em] font-black">{r.label}</p>
              <p className="text-amber-200/30 text-xs mt-1">0{String(r.id).padStart(1,'0')} / 16</p>
              <div className="mt-4 space-y-2 text-xs">
                <p><span className="text-amber-400/40 tracking-widest font-black">SONG TITLE: </span><span className="text-amber-100 font-bold">{r.song}</span></p>
                <p><span className="text-amber-400/40 tracking-widest font-black">THEME: </span><span className="text-amber-300">{r.theme}</span></p>
                <p><span className="text-amber-400/40 tracking-widest font-black">SCRIPTURE: </span><span className="text-amber-300">{r.scripture}</span></p>
                <p className="text-amber-100/70 italic">"{r.declaration}"</p>
                <p className="text-stone-300 italic">"{r.reflection}"</p>
              </div>
              <button className="mt-4 w-full py-2 bg-amber-500/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-black tracking-widest">LISTEN TO "{r.song.toUpperCase()}"</button>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 text-amber-400 font-black tracking-[0.3em] text-xs">THE WORD IS AUTHORITY. MY STORY IS TESTIMONY.</p>
      </div>
    </main>
  )
}
