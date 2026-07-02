import Link from 'next/link'
import { notFound } from 'next/navigation'

const relics = [
  {
    id: 1,
    title: "Horn of War",
    subtitle: "The Battle Cry",
    verse: "Blow the trumpet in Zion; sound the alarm on my holy hill. Let all who live in the land tremble, for the day of the Lord is coming.",
    ref: "Joel 2:1",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    videoId: "M4wGCg5oCx0",
    videoTitle: "Horn of war mahalla",
    backgroundImage: "/images/horn-of-war-bg.jpg",
    progress: "01 / 06",
    devotionalTitle: "THE SILENCE",
    devotional: "Before the horn, there is silence. Not peace - silence. The moment before war breaks. God uses silence to prepare warriors. David was anointed in the field before he ever faced Goliath. Your horn is coming. Let the silence train you."
  },
  {
    id: 2,
    title: "Heaven Calling",
    subtitle: "The Voice That Finds Us",
    verse: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    ref: "1 Samuel 3:10",
    tags: "CINEMATIC WORSHIP • VIKING • ORCHESTRAL • CHORAL",
    videoId: "oxNauKuxg4Q",
    videoTitle: "Heaven calling in Viking",
    backgroundImage: "/images/heaven-calling-bg.jpg",
    progress: "02 / 06",
    devotionalTitle: "THE CALL",
    devotional: "Heaven doesn't whisper suggestions. It calls names. When God speaks your name, the valley ends and the ascent begins. Samuel thought it was Eli. You might think it's coincidence. It's not. Answer: Speak, Lord."
  },
  {
    id: 3,
    title: "Iron Collide",
    subtitle: "Sharpened Together",
    verse: "As iron sharpens iron, so one person sharpens another.",
    ref: "Proverbs 27:17",
    tags: "CINEMATIC WORSHIP • VIKING WAR HYMN • ORCHESTRAL",
    videoId: "odIsEMUtNJI",
    videoTitle: "Iron collide hybrid",
    backgroundImage: "/images/iron-collide-bg.jpg",
    progress: "03 / 06",
    devotionalTitle: "THE FORGE",
    devotional: "Iron doesn't sharpen iron by accident. It takes heat. Pressure. Friction. God will put people in your life that scrape against your pride until Christ is formed. Don't run from the collision. It's how weapons are made."
  },
  {
    id: 4,
    title: "Spiritual Journey",
    subtitle: "The Path Home",
    verse: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.",
    ref: "Psalm 23:4",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL",
    videoId: "umDFjJjh0_c",
    videoTitle: "Spiritual Journey - god kept me alive",
    backgroundImage: "/images/spiritual-journey-bg.jpg",
    progress: "04 / 06",
    devotionalTitle: "THE VALLEY",
    devotional: "Every warrior walks through shadow. The valley isn't punishment. It's preparation for the mountain. David wrote this psalm not from the palace, but from caves. Your shadow season is proof you're on the path home."
  },
  {
    id: 5,
    title: "Blood of the Cross",
    subtitle: "The Covenant",
    verse: "And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.",
    ref: "Colossians 1:20",
    tags: "CINEMATIC WORSHIP • ORCHESTRAL • CHORAL • SACRED",
    videoId: "4lcbjsNLlzo",
    videoTitle: "Blood of cross in viking",
    backgroundImage: "/images/blood-of-cross-bg.jpg",
    progress: "05 / 06",
    devotionalTitle: "THE PRICE",
    devotional: "Viking blood oaths bound men to vengeance. Christ's blood binds us to victory. The cross wasn't a tragedy that happened to Jesus. It was a triumph He accomplished. Your sin for His righteousness. That trade still stands."
  },
  {
    id: 6,
    title: "I'm On Fire",
    subtitle: "Wildfire Spreads",
    verse: "Then one of the seraphim flew to me with a live coal in his hand, which he had taken with tongs from the altar.",
    ref: "Isaiah 6:6",
    tags: "CINEMATIC WORSHIP • HOLY FIRE • COMMISSION",
    videoId: "8XQUhWB_N5M",
    videoTitle: "Im on fire",
    backgroundImage: "/images/im-on-fire-bg.jpg",
    progress: "06 / 06",
    devotionalTitle: "THE HOLY COAL",
    devotional: "This is not natural fire. This is altar fire. It doesn't consume the bush. It commissions the prophet. Isaiah's lips were burned before he said 'Here am I, send me.' Let God touch what you speak with."
  }
]

export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = relics.find(r => r.id === parseInt(params.id))
  
  if (!relic) {
    notFound()
  }

  const currentIndex = relics.findIndex(r => r.id === relic.id)
  const prevRelic = currentIndex > 0 ? relics[currentIndex - 1] : null
  const nextRelic = currentIndex < relics.length - 1 ? relics[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-black text-zinc-200 font-serif">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        <div className="flex justify-between items-center text-sm text-zinc-500 mb-16 tracking-widest font-sans">
          <Link href="/relics" className="hover:text-amber-500 transition-colors">← RELICS</Link>
          <div className="flex items-center gap-4">
            <span>VOL. I</span>
            <span className="text-zinc-700">|</span>
            <span>{relic.progress}</span>
          </div>
          <div className="w-16"></div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-wide">
            {relic.title}
          </h1>
          <p className="text-zinc-500 text-lg tracking-widest mb-8">{relic.subtitle}</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto"></div>
        </div>

        {relic.videoId && (
          <div className="aspect-video mb-12 border border-zinc-800 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${relic.videoId}`}
              title={relic.videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-serif text-zinc-100 leading-relaxed mb-4 italic">
            “{relic.verse}”
          </p>
          <p className="text-zinc-500 tracking-widest text-sm">{relic.ref}</p>
        </div>

        <div className="text-center mb-16">
          <p className="text-xs text-zinc-600 tracking-[0.3em] font-sans">
            {relic.tags}
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16 border-t border-zinc-800 pt-12">
          <h3 className="text-amber-500 text-sm tracking-[0.3em] mb-6 font-sans">
            {relic.devotionalTitle}
          </h3>
          <p className="text-zinc-300 leading-relaxed text-lg">
            {relic.devotional}
          </p>
        </div>

        <div className="flex justify-between mt-16 pt-8 border-t border-zinc-800 font-sans text-sm tracking-widest">
          {prevRelic ? (
            <Link href={`/relics/${prevRelic.id}`} className="text-zinc-500 hover:text-amber-500 transition-colors">
              ← {prevRelic.title.toUpperCase()}
            </Link>
          ) : <div></div>}
          
          {nextRelic ? (
            <Link href={`/relics/${nextRelic.id}`} className="text-zinc-500 hover:text-amber-500 transition-colors">
              {nextRelic.title.toUpperCase()} →
            </Link>
          ) : <div></div>}
        </div>

      </div>
    </main>
  )
}
