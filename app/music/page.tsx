import Image from 'next/image'
import Link from 'next/link'

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center tracking-wider">RUNNINGWOLF</h1>
        <p className="text-center text-gray-400 mb-2">Jessy Marquez</p>
        <p className="text-center text-red-400/80 text-sm mb-12">
          Revival worship with spiritual adrenaline. Stormbreakers rise.
        </p>
        
        <h2 className="text-2xl font-semibold mb-6">Latest Single</h2>
        
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-red-900/30 shadow-2xl shadow-red-900/20">
          <Image 
            src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp" 
            alt="Heaven Is Calling - A Worship Anthem"
            width={1200}
            height={1200}
            className="w-full"
            priority
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Heaven Is Calling</h3>
              <span className="bg-red-900/50 text-red-200 text-xs px-3 py-1 rounded-full">
                Visualizer Ready
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              A Viking worship anthem. Through fire and storm, we rise.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/music/heaven-is-calling" 
                className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded font-semibold transition"
              >
                View Lyrics + Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
