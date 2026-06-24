import Image from "next/image";

export default function MusicPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Heaven Is Calling Card */}
      <div className="max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Heaven Is Calling</h1>
        <Image 
          src="/29ed31f0-6320-11f1-94f7-f3f3b6c0f03c.webp"
          alt="Heaven Calling - A Worship Anthem"
          width={800}
          height={800}
          className="rounded-lg shadow-2xl shadow-red-900/30 mx-auto"
          priority
        />
      </div>

      {/* Heaven Calling YouTube Video */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Official Visualizer</h2>
        <div className="aspect-video w-full">
          <iframe 
            className="rounded-lg w-full h-full"
            src="https://www.youtube.com/embed/oxNauKuxg4Q" 
            title="Heaven Is Calling - RUNNINGWOLF"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Stormbreakers Playlist */}
      <div className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Stormbreakers Playlist</h2>
        <iframe 
          className="rounded-lg"
          src="https://open.spotify.com/embed/playlist/5BxENwMmi8ygKIZLCCvgmS?utm_source=generator&theme=0" 
          width="100%" 
          height="380" 
          frameBorder="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
