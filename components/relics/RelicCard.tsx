{!isOpen? (
  <button
    onClick={() => setIsOpen(true)}
    className="bg-amber-600 hover:bg-amber-500 text-black px-6 py-2 rounded font-bold transition"
  >
    ▶️ Enter Sound
  </button>
) : (
  <div className="space-y-6">
    {youtubeId && (
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          className="w-full h-full rounded"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )}

    {/* ONLY RENDER REFLECTION IF IT EXISTS AND ISN'T EMPTY */}
    {relic.reflection && relic.reflection.trim() !== "" && (
      <div className="prose prose-invert prose-amber max-w-none">
        <h4 className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-2">Reflection</h4>
        <p className="text-amber-100/90 leading-relaxed whitespace-pre-line">
          {relic.reflection}
        </p>
      </div>
    )}

    {/* ONLY RENDER TESTIMONY IF IT EXISTS */}
    {relic.testimony && relic.testimony.trim() !== "" && (
      <p className="text-amber-400/70 text-sm italic border-t border-amber-600/20 pt-4">
        {relic.testimony}
      </p>
    )}

    {/* FALLBACK IF BOTH ARE EMPTY */}
    {!youtubeId && (!relic.reflection || relic.reflection.trim() === "") && (
      <p className="text-amber-100/50 text-sm italic">
        Music and testimony for {relic.song} coming soon.
      </p>
    )}

    <button
      onClick={() => setIsOpen(false)}
      className="text-amber-500 hover:text-amber-300 text-sm"
    >
      Close
    </button>
  </div>
)}
