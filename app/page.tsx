// app/page.tsx
import { ArmoryNavigation } from '@/components/armory/ArmoryNavigation';
import { ProphecySection } from '@/components/saga/ProphecySection';
import { RelicGrid } from '@/components/relics/RelicGrid';
import { SoundGrid } from '@/components/sound/SoundGrid';
import { ChapterNavigator } from '@/components/saga/ChapterNavigator';
import { Footer } from '@/components/shared/Footer';

export default function ArmoryHome() {
  return (
    <main className="bg-stone-950 text-stone-100 min-h-screen">
      <ArmoryNavigation />
      <section id="prophecy"><ProphecySection /></section>
      <section id="relics" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-norse tracking-wider">⚔️ THE RELICS</h2>
          <RelicGrid />
        </div>
      </section>
      <section id="sound" className="py-24 px-6 bg-stone-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-norse tracking-wider">🎧 THE SOUND</h2>
          <SoundGrid />
        </div>
      </section>
      <section id="saga"><ChapterNavigator /></section>
      <Footer />
    </main>
  );
}
