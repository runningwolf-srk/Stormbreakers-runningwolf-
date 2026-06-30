"use client";

import { useParams } from "next/navigation";

const RELICS = {
  "horn-of-war": {
    title: "Horn of War",
    subtitle: "The Call of Battle",
    description: `A battle hymn for the weary. This relic awakens the warrior spirit.`,
    scripture: `Every person must decide whether to stand or retreat. It's not an easy battle. It calls the faithful to stand.`,
    scriptureRef: "Ephesians 6:13",
    lyrics: `Sound the horn\nWake the dawn\nWe march at first light`,
    audioUrl: "/audio/horn-of-war.mp3"
  },
  "wolf-of-the-sage": {
    title: "Wolf of the Sage",
    subtitle: "Faith sharpened in the fire of brotherhood",
    description: `A relic of wisdom and ferocity. The wolf runs with the pack, but thinks with the sage.`,
    scripture: `As iron sharpens iron, so one person sharpens another.`,
    scriptureRef: "Proverbs 27:17",
    lyrics: `Eyes in the dark\nTeeth in the light\nWe run as one`,
    audioUrl: "/audio/wolf-of-the-sage.mp3"
  }
};

export default function RelicPage() {
  const params = useParams();
  const slug = params.slug as string;
  const relic = RELICS;

  if (!relic) {
    return <main className="p-8 text-center">Relic not found</main>;
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-400 mb-2">{relic.title}</h1>
        <p className="text-xl text-gray-400 mb-6">{relic.subtitle}</p>
        
        <div className="bg-zinc-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 mb-4">{relic.description}</p>
          <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-400">
            {relic.scripture}
            <cite className="block text-amber-500 mt-2 not-italic">— {relic.scriptureRef}</cite>
          </blockquote>
        </div>

        {relic.audioUrl && (
          <audio controls className="w-full mb-6" src={relic.audioUrl} />
        )}

        {relic.lyrics && (
          <div className="bg-zinc-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-amber-400 mb-3">Lyrics</h2>
            <pre className="whitespace-pre-wrap text-gray-300 font-sans">{relic.lyrics}</pre>
          </div>
        )}
      </div>
    </main>
  );
}
