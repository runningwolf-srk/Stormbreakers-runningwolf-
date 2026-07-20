// @ts-nocheck
import { BIBLE, STYLE } from '@/lib/constants'

export function BibleFooter() {
  return (
    <footer className="mt-20 pt-8 border-t border-amber-900/20 text-center pb-10">
      <p className="text-amber-400 font-black tracking-widest text-sm">{BIBLE.VERSE}</p>
      <p className="text-amber-200/30 text-xs mt-3 tracking-widest">{BIBLE.FOOTER}</p>
      <p className="text-amber-200/20 text-xs mt-2">{BIBLE.COPYRIGHT}</p>
    </footer>
  )
}
