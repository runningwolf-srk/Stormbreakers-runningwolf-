// app/music//page.tsx

type StoryItem = {
  title: string;
  text: string;
};

type SongData = {
  slug: string;
  title: string;
  subtitle: string;
  scripture: string;
  youtubeId: string;
  youtubeIdBonus?: string;
  genre: string;
  story: StoryItem[];
  meaning: string;
  sagaNext?: string;
  sagaPrev?: string;
  trackNumber: string;
};

const songs: Record<string, SongData> = {
  "horn-of-war": {
    slug: "horn-of-war",
    title: "Horn of War",
    subtitle: "The Battle Cry",
    scripture: "As iron sharpens iron, so one person sharpens another. — Proverbs 27:17",
    youtubeId: "odIsEMUtNJI",
    youtubeIdBonus: "fIkUD02emoc",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral",
    story: [
      {
        title: "THE SILENCE",
        text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender."
      },
      {
        title: "THE HORN",
        text: "The call goes out, awakening courage. Not to signal fear, but to summon the faithful. One note breaks the spell."
      },
      {
        title: "THE CHOICE",
        text: "Every person must decide whether to stand or retreat. The battlefield is already inside you. The horn just reveals it."
      }
    ],
    meaning: "The horn does not promise an easy battle. It calls the faithful to stand.",
    sagaNext: "iron-collide",
    sagaPrev: "blood-of-the-cross",
    trackNumber: "01 / 07"
  }
};

export default function Page({ params }: { params: { slug: string } }) {
  const song = songs[params.slug];
  if (!song) return <div>Song not found</div>;

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-amber-500 text-sm tracking-widest mb-2">{song.trackNumber}</p>
        <h1 className="text-5xl font-bold mb-2">{song.title}</h1>
        <p className="text-xl text-gray-400 mb-4">{song.subtitle}</p>
        <p className="text-gray-300 italic mb-8">{song.scripture}</p>
        
        <div className="space-y-8 mb-12">
          {song.story.map((item, index) => (
            <div key={index} className="border-l-2 border-amber-500 pl-6">
              <h2 className="text-2xl font-bold text-amber-500 mb-2">{item.title}</h2>
              <p className="text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <p className="text-lg text-gray-200">{song.meaning}</p>
        </div>
      </div>
    </main>
  );
}
