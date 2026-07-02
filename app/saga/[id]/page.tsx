import Link from 'next/link'
import { notFound } from 'next/navigation'

const chapters = [
  {
    id: 1,
    title: "The Call",
    subtitle: "HEAVEN SPEAKS A NAME",
    verse: "The Lord came and stood there, calling as at the other times, 'Samuel! Samuel!' Then Samuel said, 'Speak, for your servant is listening.'",
    ref: "1 Samuel 3:10",
    content: `Samuel was asleep when heaven spoke. Not in the temple during sacrifice. Not during prayer. In his bed.

Heaven doesn't wait for you to be "spiritual enough." It calls names in the dark.

Three times God called. Three times Samuel ran to Eli. He thought the voice was human. We often do. We call it coincidence, intuition, anxiety.

But when God speaks your name, the ordinary ends.

"Speak, Lord, for your servant is listening." That's the only right answer. Not "I'm busy." Not "Maybe later." Not "Are you sure it's me?"

The call comes before the assignment. Samuel had no idea he was about to anoint kings and confront nations. He just said yes to the voice.

Your name has been called. The valley ends when you answer.`
  },
  {
    id: 2,
    title: "The Valley",
    subtitle: "SHADOW BECOMES SONG",
    verse: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.",
    ref: "Psalm 23:4",
    content: `David didn't write this psalm from a palace. He wrote it from caves. Hiding. Hunted.

The valley isn't punishment. It's preparation for the mountain.

Notice: "valley of the SHADOW of death." Not death itself. Just the shadow. Shadows can't kill you. They can only scare you if you forget whose light is casting them.

"For you are with me." That's the line that breaks fear. Not "for you will deliver me" - though He does. Not "for you will explain this" - though He might. Just: "You are with me."

Your shadow season is proof you're on the path. Wolves don't hunt on the mountaintop. They hunt in valleys. But the Shepherd is there too.

Walk through. Don't build a house there. Through.`
  },
  {
    id: 3,
    title: "The Forge",
    subtitle: "IRON SHARPENS IRON",
    verse: "As iron sharpens iron, so one person sharpens another.",
    ref: "Proverbs 27:17",
    content: `Iron doesn't sharpen iron by accident. It takes heat. Pressure. Friction.

God will put people in your life that scrape against your pride until Christ is formed. They won't be comfortable. They won't always be kind. But they will be used.

We pray for ease and God sends a forge. We pray for friends and God sends blacksmiths.

The collision hurts. Your edges get ground down. The sparks fly when your independence hits their truth.

Don't run from the friction. Swords aren't made in air conditioning. They're folded, heated, hammered, quenched. Again. And again.

Every "difficult person" is an opportunity to become a weapon instead of a butter knife.

Let the forge do its work.`
  },
  {
    id: 4,
    title: "The Fire",
    subtitle: "ALTAR COAL COMMISSION",
    verse: "Then one of the seraphim flew to me with a live coal in his hand, which he had taken with tongs from the altar.",
    ref: "Isaiah 6:6",
    content: `Isaiah saw the Lord high and lifted up. His first response wasn't worship. It was "Woe is me! I am ruined!"

The presence of holiness revealed his uncleanness. "I am a man of unclean lips."

God didn't argue. He didn't give Isaiah a pep talk. He sent fire.

A live coal from the altar. Not from the campfire. From the place of sacrifice. Holy fire.

It touched Isaiah's mouth - the source of his shame - and burned it clean. "Your guilt is taken away and your sin atoned for."

Then came the question: "Whom shall I send?"

Isaiah's lips were burned before he said "Here am I, send me."

This is not natural fire. This is altar fire. It doesn't consume the bush. It commissions the prophet.

Let God touch what you speak with. The burn is the qualification.`
  }
]

export default function SagaChapter({ params }: { params: { id: string } }) {
  const chapter = chapters.find(c => c.id === parseInt(params.id))

  if (!chapter) {
    notFound()
  }

  const currentIndex = chapters.findIndex(c => c.id === chapter.id)
  const prevChapter = currentIndex > 0? chapters[currentIndex - 1] : null
  const nextChapter = currentIndex < chapters.length - 1? chapters[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-black text-zinc-200 font-serif">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center text-sm text-zinc-500 mb-16 tracking-widest font-sans">
          <Link href="/saga" className="hover:text-amber-500 transition-colors">← THE SAGA</Link>
          <span>CHAPTER {chapter.id}</span>
          <div className="w-16"></div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 tracking-wide">
            {chapter.title}
          </h1>
          <p className="text-zinc-500 text-lg tracking-widest mb-8">{chapter.subtitle}</p>
          <div className="w-24 h-px bg-amber-500/50 mx-auto"></div>
        </div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-2xl md:text-3xl font-serif text-zinc-100 leading-relaxed mb-4 italic">
            “{chapter.verse}”
          </p>
          <p className="text-zinc-500 tracking-widest text-sm">{chapter.ref}</p>
        </div>

        <div className="max-w-2xl mx-auto mb-16 border-t border-zinc-800 pt-12">
          <div className="text-zinc-300 leading-relaxed text-lg whitespace-pre-line">
            {chapter.content}
          </div>
        </div>

        <div className="flex justify-between mt-16 pt-8 border-t border-zinc-800 font-sans text-sm tracking-widest">
          {prevChapter? (
            <Link href={`/saga/${prevChapter.id}`} className="text-zinc-500 hover:text-amber-500 transition-colors">
              ← {prevChapter.title.toUpperCase()}
            </Link>
          ) : <div></div>}

          {nextChapter? (
            <Link href={`/saga/${nextChapter.id}`} className="text-zinc-500 hover:text-amber-500 transition-colors">
              {nextChapter.title.toUpperCase()} →
            </Link>
          ) : <div></div>}
        </div>

      </div>
    </main>
  )
}
