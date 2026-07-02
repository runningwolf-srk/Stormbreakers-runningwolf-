/export default function HornOfWarRelic() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-8 md:py-16">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-amber-500 text-sm tracking-widest uppercase mb-2">
            Hall of Relics
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Horn of War
          </h1>
          <p className="text-zinc-400">
            RunningWolf - Jessy Marquez
          </p>
        </div>

        {/* Scripture Block */}
        <div className="border-l-4 border-amber-500 pl-4 mb-8 bg-zinc-900/50 py-4 rounded-r">
          <p className="text-zinc-300 italic text-lg leading-relaxed">
            "Blow the trumpet in Zion; sound the alarm on my holy hill. 
            Let all who live in the land tremble, for the day of the Lord is coming."
          </p>
          <p className="text-amber-500 text-sm mt-2">
            Joel 2:1
          </p>
        </div>

        {/* Reflection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-amber-500">
            The Reflection
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            This is where you write 2-3 sentences about what this song means to you. 
            Replace this text. Keep it raw. Keep it short. This relic stands alone - 
            a man should feel the weight without needing the saga.
          </p>
        </div>

        {/* Artwork */}
        <div className="mb-8 rounded-lg overflow-hidden border border-zinc-800">
          <img 
            src="/horn-of-war-art.jpg" 
            alt="Horn of War artwork"
            className="w-full h-auto"
          />
        </div>

        {/* Music Embed */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-amber-500">
            Enter the Relic
          </h2>
          <div className="aspect-video rounded-lg overflow-hidden border border-zinc-800">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Horn of War - RunningWolf"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Feedback Button */}
        <div className="text-center mb-12">
          <button 
            onClick={() => console.log('Horn of War hit')}
            className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-8 py-3 rounded-lg border border-zinc-700 transition"
          >
            👍 This hit
          </button>
        </div>

        {/* Cross-link to Saga */}
        <div className="border-t border-zinc-800 pt-8 text-center">
          <p className="text-zinc-400 text-sm mb-4">
            Continue the Story
          </p>
          <a 
            href="/saga/chapter-1"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-zinc-950 font-semibold px-6 py-3 rounded-lg transition"
          >
            Read Saga - Chapter 1: Horn of War →
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-zinc-900">
          <a href="/" className="text-zinc-500 hover:text-amber-500 text-sm">
            ← Return to Hall of Relics
          </a>
        </div>

      </div>
    </main>
  )
    }
