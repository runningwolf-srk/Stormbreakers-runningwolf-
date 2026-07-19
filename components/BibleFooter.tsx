import { BIBLE, STYLE } from '@/lib/constants'

export function BibleFooter() {
  return (
    <footer className="mt-20 pt-8 border-t border-amber-400/10 text-center">
      <p className="text-amber-400 font-black tracking-[0.3em] text-xs">{STYLE.FOOTER}</p>
      <p className="text-amber-200/30 text-xs mt-6 max-w-2xl mx-auto leading-relaxed">{BIBLE.COPYRIGHT}</p>
      <p className="text-amber-200/20 text-xs mt-2">{BIBLE.NOTE}</p>
    </footer>
  )
}
