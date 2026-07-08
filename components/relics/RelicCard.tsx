<article id={relic.slug} className="border border-amber-600/30 rounded-lg overflow-hidden bg-black/50 scroll-mt-20 mb-12">
  {/* THUMBNAIL HEADER — Always visible */}
  <div className="relative h-48 bg-gradient-to-br from-amber-900/20 to-black">
    {relic.image? (
      <img
        src={relic.image}
        alt={relic.relic}
        className="w-full h-full object-cover opacity-80"
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-amber-600/30 text-6xl font-bold">
        ⚔️
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    <div className="absolute bottom-4 left-6 right-6">
      <div className="flex flex-wrap gap-2 mb-2">
        {relic.themes.map((theme) => (
          <span key={theme} className="text-xs bg-amber-600/30 backdrop-blur text-amber-200 px-2 py-1 rounded">
            {theme}
          </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-amber-400">{relic.song}</h3>
      <p className="text-amber-200/60 text-sm uppercase tracking-widest">{relic.relic}</p>
    </div>
  </div>

  <div className="p-6">
    {/* Rest of card stays the same — Scripture, Declaration, Enter Sound */}
