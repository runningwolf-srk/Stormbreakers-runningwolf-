// app/chronicles/page.tsx
import Link from 'next/link'
import TestimonyDisclaimer from '@/components/Disclaimer'

const chronicles = [
  {
    slug: "running-wolf",
    relicTitle: "Running Wolf",
    songTitle: "The Calling Anthem",
    theme: "Calling",
    subtitle: "I am called, chosen, and set apart for the storm",
    scripture: "Isaiah 6:8",
  },
  {
    slug: "royal-relic",
    relicTitle: "The Crown of the Chosen",
    songTitle: "Royal Blood",
    theme: "Royalty",
    subtitle: "I am royalty. Not by blood, but by Blood. Chosen. Holy.",
    scripture: "1 Peter 2:9",
  },
  {
    slug: "redeemed",
    relicTitle: "The Exchange",
    songTitle: "Redeemed",
    theme: "Redemption",
    subtitle: "I am not who I was. Bought with blood. Raised with Christ.",
    scripture: "Ephesians 1:7",
  },
  {
    slug: "wolf-fang",
    relicTitle: "The Tooth of the Sent One",
    songTitle: "Wolf Fang - War Cry",
    theme: "Authority",
    subtitle: "Hard as flint. Sharp as heaven. The mark of RunningWolf.",
    scripture: "Isaiah 50:7",
  },
  {
    slug: "im-on-fire",
    relicTitle: "Scars That Preach",
    songTitle: "I'm On Fire",
    theme: "Fire",
    subtitle: "I walked through the fire and it did not burn me.",
    scripture: "Isaiah 43:2",
  },
  {
    slug: "eternal-fire",
    relicTitle: "The Fire That Never Goes Out",
    songTitle: "Eternal Fire",
    theme: "Fire",
    subtitle: "The fire that refined me in ICU never goes out.",
    scripture: "Leviticus 6:13",
  },
  {
    slug: "spirit-mantle",
    relicTitle: "The Anointing You Can't Take Off",
    songTitle: "Mantle",
    theme: "Anointing",
    subtitle: "The Spirit wears you. Fire from heaven, not from earth.",
    scripture: "2 Kings 2:9",
  },
  {
    slug: "blade",
    relicTitle: "The Sword of the Sent One",
    songTitle: "Sword of the Spirit",
    theme: "Warfare",
    subtitle: "I am not just sent — I am sharpened.",
    scripture: "Ephesians 6:17",
  },
  {
    slug: "thunder-drums",
    relicTitle: "The Sound of the Storm",
    songTitle: "Thunder Drums",
    theme: "Worship",
    subtitle: "The storm is my cover. The thunder is His voice.",
    scripture: "Isaiah 42:13",
  },
  {
    slug: "psalm-23",
    relicTitle: "The Shepherd King",
    songTitle: "Psalm 23",
    theme: "Shepherd",
    subtitle: "The Lord is my shepherd; I shall not want.",
    scripture: "Psalm 23:1-3",
  },
]

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-black tracking-tighter text-amber-100 mb-4">
            The Chronicles
          </h1>
          <p className="text-amber-200/60 text-lg mb-2">The Testimony of RunningWolf</p>
          <p className="text-amber-200/40 text-sm mb-8">Music. Scripture. Book to book.</p>
          
          <div className="max-w-2xl mx-auto">
            <TestimonyDisclaimer />
            <p className="text-amber-200/50 text-xs uppercase tracking-widest font-bold mt-4">
              This is not Scripture. This is my song with Scripture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {chronicles.map((item) => (
            <Link key={item.slug} href={`/chronicles/${item.slug}`} className="group">
              <div className="h-full p-6 bg-stone-900/50 border border-amber-400/10 rounded-2xl hover:border-amber-400/30 hover:bg-stone-900 transition-all duration-300">
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-amber-400/40 text-xs px-2 py-1 bg-amber-400/10 rounded-full tracking-widest font-black">
                    {item.theme}
                  </span>
                  <span className="text-amber-400/30 text-xs">{item.scripture}</span>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-amber-400/50 text- tracking-[0.2em] font-black">RELIC</p>
                    <h3 className="text-amber-100 font-black text-lg leading-tight group-hover:text-amber-300 transition">
                      {item.relicTitle}
                    </h3>
                  </div>

                  <div>
                    <p className="text-amber-400/50 text- tracking-[0.2em] font-black">SONG</p>
                    <p className="text-amber-200/60 text-sm italic leading-tight">
                      {item.songTitle}
                    </p>
                  </div>

                  <p className="text-amber-100/70 text-sm leading-relaxed pt-2 border-t border-amber-400/10 mt-4">
                    {item.subtitle}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <p className="text-amber-400/60 text-xs font-bold">Scripture: {item.scripture}</p>
                    <span className="text-amber-400/60 text-xs group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16 p-6 border border-amber-400/10 rounded-2xl bg-stone-900/30">
          <p className="text-amber-400 font-black tracking-widest text-sm">JESUS CHRIST IS THE CENTER OF THEM ALL</p>
        </div>

      </div>
    </main>
  )
          }
