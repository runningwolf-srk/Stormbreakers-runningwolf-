import './globals.css'
import { BIBLE, STYLE } from '@/lib/constants'
import { Nav } from '@/components/Nav'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-stone-950 text-amber-50 min-h-screen"><Nav />{children}<footer className="border-t border-amber-400/10 py-10 mt-20"><div className="max-w-4xl mx-auto px-6 text-center"><p className="text-amber-400 font-black text-xs tracking-[0.3em]">{STYLE.FOOTER}</p><p className="text-amber-200/20 text-xs mt-6">{BIBLE.COPYRIGHT}</p></div></footer></body></html>)
}
