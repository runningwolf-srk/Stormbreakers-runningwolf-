import { CANON } from "@/data/constants"
export default function Footer(){
  return (
    <footer className="border-t border-white/10 mt-24 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-[10px] font-mono text-white/30 tracking-[0.2em] gap-2">
        <span>{CANON.TAGLINE}</span>
        <span>© 2026 RUNNINGWOLF • STORMBREAKERS</span>
      </div>
    </footer>
  )
}
