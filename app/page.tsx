import { ALL_RELICS } from "@/data/armory"

export default function Home(){
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex gap-6 p-6 text-sm tracking-widest text-white/60">
        <span className="text-white font-bold">STORMBREAKERS</span>
        <a href="/armory">ARMORY</a>
        <a href="/books">BOOKS</a>
        <a href="/chronicles">CHRONICLES</a>
        <a href="/word">WORD</a>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-16 flex flex-col items-center text-center">
        
        {/* ONLY AVATAR ON MAIN */}
        <img 
          src="/images/avatar.png" 
          alt="RUNNINGWOLF"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/10 object-cover shadow-2xl shadow-white/10"
        />

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-8 leading-none">
          RUNNINGWOLF
        </h1>
        
        <p className="text-white/50 mt-3 tracking-widest text-sm">
          {ALL_RELICS.length} RELICS UNLOCKED • STORMBREAKER
        </p>

        <div className="flex gap-4 mt-10">
          <a href="/armory" className="bg-white text-black px-8 py-4 rounded-full font-black hover:bg-zinc-200 transition">
            ENTER ARMORY →
          </a>
          <a href="/books" className="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition
