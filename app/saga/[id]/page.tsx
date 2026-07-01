{/* After chapter text, before navigation */}
<div className="mt-16 pt-8 border-t border-zinc-800">
  <p className="text-amber-500 text-sm mb-6 font-sans tracking-wider">THE CHOICE IS YOURS</p>
  
  {chapter.id === 3 ? (
    <div className="space-y-4">
      <Link 
        href="/saga/4" 
        className="block border border-amber-500/50 p-4 hover:bg-amber-500/10 transition-colors"
      >
        <p className="text-white font-bold">ASCEND THE MOUNTAIN →</p>
        <p className="text-zinc-500 text-sm">Follow the call to Heaven Calling</p>
      </Link>
      <Link 
        href="/relics/1" 
        className="block border border-zinc-700 p-4 hover:bg-zinc-900 transition-colors"
      >
        <p className="text-white font-bold">RETURN TO THE RELIC →</p>
        <p className="text-zinc-500 text-sm">Study the Horn of War again</p>
      </Link>
    </div>
  ) : (
    // Normal Next Chapter button
  )}
</div>
