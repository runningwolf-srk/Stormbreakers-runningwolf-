import {CANON} from "@/data/constants"
import {usePathname} from "next/navigation"
export default function Footer(){
  // only show closing on / and /armory
  return <footer className="border-t border-white/10 mt-24"><div className="max-w-7xl mx-auto px-6 py-6 flex justify-between text-[10px] font-mono text-white/30"><span>{CANON.TAGLINE}</span><span>© 2026 FORGED • ONE KING</span></div></footer>
}
