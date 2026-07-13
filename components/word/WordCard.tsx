// components/word/WordCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Relic } from '@/data/armory'

type Props = {
  relic: Relic
}

export function WordCard({ relic }: Props) {
  return (
    <Link
      href={`/chronicles/${relic.slug}`}
      className="group block bg-amber-400/5 border border-amber-400/20 rounded-lg overflow-hidden hover:bg-amber-400/10 hover:border-amber-400/40 transition-all duration-200"
    >
      <div className="relative w-full h-48">
        <Image
          src={relic.image}
          alt={relic.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-2 py-1 text-xs font-bold uppercase bg-amber-400/10 text-amber-400 rounded mb-3">
          {relic.theme}
        </span>
        <h2 className="text-amber-100 font-bold text-xl mb-2 group-hover:text-amber-300 transition">
          {relic.title}
        </h2>
        <p className="text-amber-200/70 text-sm line-clamp-2 mb-3">
          {relic.description}
        </p>
        <div className="text-xs text-amber-300/60 space-y-1">
          {relic.lyrics && <p>Song: {relic.lyrics}</p>}
          {relic.scriptureRef && <p>Scripture: {relic.scriptureRef}</p>}
        </div>
      </div>
    </Link>
  )
}
