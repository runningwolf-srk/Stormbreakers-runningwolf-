const currentIndex = tracks.findIndex(t => t.slug === searchParams.slug)
const nextRelic = tracks[currentIndex + 1]
const prevRelic = tracks[currentIndex - 1]

// Then in your JSX:
<div className="flex justify-between mt-12">
  {prevRelic && (
    <Link href={`/music/track?slug=${prevRelic.slug}`}>
      ← Relic {currentIndex}
    </Link>
  )}
  {nextRelic && (
    <Link href={`/music/track?slug=${nextRelic.slug}`}>
      Relic {currentIndex + 2} →
    </Link>
  )}
</div>
