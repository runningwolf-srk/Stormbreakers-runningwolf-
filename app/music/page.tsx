// app/music/page.tsx
import Link from "next/link";

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-500 mb-8 block">← Back Home</Link>
        <h1 className="text-4xl font-black text-amber-500 mb-8">THE SOUND</h1>
        <p className="text-gray-400">Music page is live. Add your YouTube embeds here.</p>
      </div>
    </main>
  );
}
