export default function MusicPage() {
  const tracks = [
    { 
      id: 1, 
      title: 'Spiritual Journey', 
      youtubeId: 'umDFjJjh0_c',
      url: 'https://youtu.be/umDFjJjh0_c'
    },
    { 
      id: 2, 
      title: "I'm on Fire", 
      youtubeId: '8XQUhWB_N5M',
      url: 'https://youtu.be/8XQUhWB_N5M'
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black text-amber-400 mb-4">
            STORMBREAKERS
          </h1>
          <p className="text-zinc-400 text-lg">
            Cinematic worship and epic spiritual rock forged in fire.
          </p>
          <p className="text-zinc-500 mt-2">
            By RunningWolf - Jessy Marquez
          </p>
        </div>

        <div className="space-y-3">
          {tracks.map((track) => (
            <div 
              key={track.id} 
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 flex items-center justify-between hover:border-amber-500/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="text-zinc-600 text-xl font-bold w-8">{track.id}</span>
                <div>
                  <div className="font-bold text-lg text-white">{track.title}</div>
                  <div className="text-zinc-500 text-sm">RunningWolf</div>
                </div>
              </div>
              <a 
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-bold transition flex items-center gap-2"
              >
                ▶ PLAY
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-zinc-600 text-sm">
          More tracks coming soon 🔥🐺⚔️
        </div>
      </div>
    </main>
  );
}
