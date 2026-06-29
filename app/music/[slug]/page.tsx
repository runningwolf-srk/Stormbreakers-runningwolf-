"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RelicStory = { title: string; text: string; };
type Relic = {
  slug: string; title: string; subtitle: string; scriptureRef: string;
  theme: string; backgroundImage: string; audioUrl?: string; ambientUrl?: string;
  youtubeId?: string; youtubeIdBonus?: string; story: RelicStory[]; meaning: string;
  written: string; genre: string; relicNumber: string; sagaNext?: string; sagaPrev?: string;
  status?: "live" | "coming-soon";
};

const RELICS: Record<string, Relic> = {
  "horn-of-war": {
    slug: "horn-of-war", title: "Horn of War", subtitle: "The call to stand before the battle begins.",
    scripture: "Blow the trumpet in Zion, declare a holy fast, call a sacred assembly.", scriptureRef: "Joel 2:1",
    theme: "By His Call We Rise", backgroundImage: "/f9a9d930-631f-11f1-94f7-f3f3b6c0f03c.webp",
    audioUrl: "/audio/horn-of-war.mp3", ambientUrl: "/audio/wind-horn.mp3", youtubeId: "M4wGCg5oCx0",
    written: "2024", genre: "Cinematic Worship • Viking War Hymn • Orchestral", relicNumber: "01 / 07",
    story: [
      { title: "THE SILENCE", text: "Before the battle, everything is still. The enemy whispers that silence means safety. Heaven says silence is surrender." },
      { title: "THE HORN", text: "The call goes out, awakening courage. Not to signal fear, but to summon the faithful. One note breaks the spell." },
      { title: "THE CHOICE", text: "Every person must decide whether to stand or retreat. The battlefield is already inside you. The horn just reveals it." }
    ],
    meaning: "The horn does not promise an easy battle. It calls the faithful to stand.", sagaNext: "iron-collide"
  },
  "iron-collide": {
    slug: "iron-collide", title: "Iron Collide", subtitle: "Faith sharpened in the fire of resistance.",
    scripture: "As iron sharpens iron, so one person sharpens another.", scriptureRef: "Proverbs 27:17",
    theme: "By His Strength We Endure", backgroundImage: "/1fe52410-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "odIsEMUtNJI", youtubeIdBonus: "fIkUDO2emoc", written: "2024",
    genre: "Cinematic Worship • Viking War Hymn • Orchestral", relicNumber: "02 / 07",
    story: [
      { title: "THE ANVIL", text: "You thought the trial was punishment. It was preparation. You were placed, not abandoned." },
      { title: "THE HAMMER", text: "Every enemy was an anvil. Every hardship, a hammer. You were not being broken. You were being forged." },
      { title: "THE EDGE", text: "Pressure does not destroy the called. It gives them an edge. What tried to crush you sharpened you." }
    ],
    meaning: "You were not meant to survive the fire. You were meant to be shaped by it.", sagaPrev: "horn-of-war", sagaNext: "blood-of-the-cross"
  },
  "blood-of-the-cross": {
    slug: "blood-of-the-cross", title: "Blood of the Cross", subtitle: "Mercy written in sacrifice. Hope carried through suffering.",
    scripture: "And through him to reconcile to himself all things, making peace by his blood, shed on the cross.", scriptureRef: "Colossians 1:20",
    theme: "By His Blood We Are Redeemed", backgroundImage: "/148e9d30-6320-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "4lcbjsNLlzo", written: "2024", genre: "Cinematic Worship • Orchestral • Choir", relicNumber: "03 / 07",
    story: [
      { title: "THE PLACE", text: "Golgotha. The place of the skull. They saw a man dying. Heaven saw a king conquering." },
      { title: "THE WORD", text: "It is finished. Not a whisper of defeat. A shout of completion. The debt was paid in full." },
      { title: "THE EXCHANGE", text: "What looked like loss became eternal victory. His blood bought your freedom. His death bought your life." }
    ],
    meaning: "The cross was not the end of the story. It was the turning point of history.", sagaPrev: "iron-collide", sagaNext: "spiritual-journey"
  },
  "spiritual-journey": {
    slug: "spiritual-journey", title: "Spiritual Journey", subtitle: "Survival was never the goal. Purpose was.",
    scripture: "And we know that in all things God works for the good of those who love him.", scriptureRef: "Romans 8:28",
    theme: "By His Purpose We Are Led", backgroundImage: "/e8a21b70-631f-11f1-94f7-f3f3b6c0f03c.webp",
    youtubeId: "umDFjJjh0_c", written: "2024", genre: "Cinematic Worship • Ambient • Orchestral", relicNumber: "04 / 07",
    story: [
      { title: "THE WILDERNESS", text: "The desert was not punishment. It was training. Between broken and becoming, God does His best work." },
      { title: "THE VOICE", text: "You thought God was silent. He was speaking. You just had to get quiet enough to hear Him." },
      { title: "THE BECOMING", text: "You are not lost. You are being led. The path is not the problem. The path is the transformation." }
    ],
    meaning: "God wastes no wilderness. Every step is preparing you for where you're going.", sagaPrev: "blood-of-the-cross", sagaNext: "lord-of-lords"
  },
  "lord-of-lords": {
    slug: "lord-of-lords", title: "Lord of Lords", subtitle: "Every knee will bow. Every tongue confess.",
    scripture: "On his robe and on his thigh he has this name written: King of kings and Lord of lords.", scriptureRef: "Revelation 19:16",
    theme: "By His Authority We Rule", backgroundImage: "/060a2ef0-6320-11f1-94f7-f3f3b6c0f03c.webp",
    written: "2024", genre: "Cinematic Worship • Epic • Choir", relicNumber: "05 / 07",
    story: [
      { title: "THE LAMB", text: "He came first as a lamb. Silent before His shearers. Led to slaughter without a word." },
      { title: "THE LION", text: "He returns as a lion. The age of silence is over. The age of the roar has begun." },
      { title: "THE BOW", text: "When the Lion rises, everything bows. Kings. Kingdoms. Demons. You. There is no debate." }
    ],
    meaning: "He was slain to receive power. He returns to exercise it.", sagaPrev: "spiritual-journey", sagaNext: "scars-that-preach", status: "coming-soon"
  },
  "scars-that-preach": {
    slug: "scars-that-preach", title: "Scars That Preach", subtitle: "Born through the fire. Testimony in flesh.",
    scripture: "But he was pierced for our transgressions, he was crushed for our iniquities.", scriptureRef: "Isaiah 53:5",
    theme: "By His Wounds We Are Healed", backgroundImage: "/file_0000000065a071f5832301f52d11fb80.png",
    written: "2024", genre: "Cinematic Worship • Intimate • Strings", relicNumber: "06 / 07",
    story: [
      { title: "THE FIRE", text: "They told you to hide your scars. God said display them. Your pain is someone else's map out of hell." },
      { title: "THE SERMON", text: "Your scars are not shame. They are scripture written in flesh. Every wound is a sermon waiting to be preached." },
      { title: "THE COMMISSION", text: "The fire did not consume you. It commissioned you. You survived for a reason. Now go tell." }
    ],
    meaning: "Your testimony is not in what you avoided. It's in what you survived.", sagaPrev: "lord-of-lords", status: "coming-soon"
  }
};

export default function RelicPage({ params }: { params: { slug: string } }) {
  const relic = RELICS[params.slug];
  const [isNarrating, setIsNarrating] = useState(false);
  const [storyMode, setStoryMode] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const ambientRef = useRef<HTMLAudioElement>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [isPaused, setIsPaused] = useState(false);

  if (!relic) return notFound();
  const prevRelic = relic.sagaPrev? RELICS[relic.sagaPrev] : null;
  const nextRelic = relic.sagaNext? RELICS[relic.sagaNext] : null;

  useEffect(() => {
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
      const saved = localStorage.getItem('relic-voice');
      setSelectedVoice(saved || v.find(x => x.lang.startsWith('en'))?.name || "");
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    if (storyMode) {
      document.body.style.overflow = "hidden";
      ambientRef.current?.play().catch(() => {});
    } else {
      document.body.style.overflow = "auto";
      ambientRef.current?.pause();
      window.speechSynthesis.cancel();
      setIsNarrating(false);
      setIsPaused(false);
    }
  }, [storyMode]);

  const narrateStory = () => {
    if (isNarrating) return window.speechSynthesis.cancel(), setIsNarrating(false), setIsPaused(false);
    const t = `${relic.title}. ${relic.subtitle}. ${relic.story.map(s => `${s.title}. ${s.text}`).join('. ')} ${relic.meaning}`;
    const u = new SpeechSynthesisUtterance(t);
    const v = voices.find(v => v.name === selectedVoice);
    if (v) u.voice = v;
    u.rate = 0.85; u.pitch = 0.9;
    u.onend = () => { setIsNarrating(false); setIsPaused(false); };
    setIsNarrating(true);
    window.speechSynthesis.speak(u);
  };

  const pauseResumeNarration = () => {
    isPaused? window.speechSynthesis.resume() : window.speechSynthesis.pause();
    setIsPaused(!isPaused);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <audio ref={ambientRef} loop src={relic.ambientUrl || "/audio/wind-horn.mp3"} preload="none" />
      <div className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={relic.backgroundImage} alt={relic.title} fill className="object-cover scale-105" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.2}} className="text-amber-500 uppercase tracking-[0.3em] text-sm font-bold mb-6">{relic.theme}</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1.2,delay:0.5}} className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 px-2">{relic.title}</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.2}} className="text-xl md:text-3xl text-zinc-300 mb-12 max-w-2xl mx-auto px-4 font-light">{relic.subtitle}</motion.p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1.8}}>
            <button onClick={() => setStoryMode(true)} className="bg-amber-600 hover:bg-amber-500 text-black font-black py-4 px-12 rounded-lg transition-all hover:scale-105 shadow-2xl shadow-amber-600/40 text-lg tracking-wider w-full sm:w-auto">ENTER STORY MODE</button>
          </motion.div>
        </div>
      </div>

      {relic.status!== "coming-soon" && (
        <div className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
              <p className="text-sm text-zinc-400 uppercase tracking-wider mb-4">Play Relic</p>
              {relic.audioUrl &&!audioError? (
                <audio controls className="w-full" src={relic.audioUrl} preload="metadata" onError={() => setAudioError(true)} />
              ) : (
                <div className="bg-zinc-950 rounded-lg p-8 text-center border border-zinc-800"><p className="text-amber-500 font-bold">Audio preparing for battle...</p></div>
              )}
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 md:p-8">
              <p className="text-sm text-zinc-400 uppercase tracking-wider mb-4">Play Story</p>
              <select value={selectedVoice} onChange={e => {setSelectedVoice(e.target.value); localStorage.setItem('relic-voice', e.target.value);}} className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm rounded-lg p-3 mb-4">
                {voices.filter(v => v.lang.startsWith('en')).map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
              </select>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={narrateStory} className="bg-zinc-800 hover:bg-amber-600 text-white hover:text-black font-bold py-4 rounded-lg transition-all">{isNarrating? "■ STOP" : "▶ PLAY"}</button>
                <button onClick={pauseResumeNarration} disabled={!isNarrating} className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-lg transition-all disabled:opacity-30">{isPaused? "RESUME" : "PAUSE"}</button>
              </div>
            </div>
            {relic.youtubeId && <div className="aspect-video w-full rounded-xl overflow-hidden"><iframe className="w-full h-full" src={`https://www.youtube.com/embed/${relic.youtubeId}?rel=0&modestbranding=1`} title={relic.title} allowFullScreen /></div>}
          </div>
        </div>
      )}

      <div className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border-l-4 border-amber-500 pl-6 md:pl-8 text-left">
            <p className="text-2xl md:text-4xl italic text-zinc-200 leading-relaxed font-light">"{relic.scripture}"</p>
            <p className="text-amber-500 font-bold mt-4 text-xl">{relic.scriptureRef}</p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {storyMode && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <button onClick={() => setStoryMode(false)} className="fixed top-6 right-6 z-50 bg-zinc-900 hover:bg-amber-600 text-white hover:text-black p-3 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            {relic.story.map((scene, i) => (
              <div key={i} data-scene={i} className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-black">
                <div className="max-w-3xl mx-auto">
                  <p className="text-amber-600 font-black text-base mb-4 tracking-[0.3em]">SCENE {["I","II","III"][i]}</p>
                  <h2 className="text-3xl md:text-6xl font-black text-white mb-8">{scene.title}</h2>
                  <p className="text-xl md:text-3xl leading-relaxed text-zinc-300 font-light">{scene.text}</p>
                </div>
              </div>
            ))}
            <div className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-zinc-950">
              <div className="max-w-4xl mx-auto text-center">
                <div className="border-t-2 border-b-2 border-amber-600 py-12 px-8">
                  <p className="text-2xl md:text-5xl font-black text-amber-500">{relic.meaning}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!storyMode && (
        <div className="bg-black border-t border-zinc-900 px-4 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            {prevRelic? (
              <Link href={`/music/${prevRelic.slug}`} className="group text-center sm:text-left">
                <p className="text-xs text-zinc-600 mb-1">← Return to Hall</p>
                <p className="text-zinc-400 group-hover:text-amber-500 transition-colors font-bold">{prevRelic.title}</p>
              </Link>
            ) : (
              <Link href="/music" className="group text-center sm:text-left">
                <p className="text-xs text-zinc-700 mb-1">← Return to Hall</p>
                <p className="text-zinc-600 group-hover:text-zinc-400 font-bold">All Relics</p>
              </Link>
            )}
            <Link href="/music" className="text-zinc-700 hover:text-amber-500 uppercase tracking-widest text-xs text-center">Hall of Relics</Link>
            {nextRelic? (
              <Link href={`/music/${nextRelic.slug}`} className="group text-center sm:text-right">
                <p className="text-xs text-zinc-600 mb-1">Next Relic →</p>
                <p className="text-zinc-400 group-hover:text-amber-500 font-bold">{nextRelic.title}</p>
              </Link>
            ) : <div className="text-center sm:text-right"><p className="text-xs text-zinc-800 mb-1">Saga Complete</p><p className="text-zinc-700 font-bold">End</p></div>}
          </div>
        </div>
      )}
    </main>
  );
              }
