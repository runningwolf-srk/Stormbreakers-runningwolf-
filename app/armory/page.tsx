import { CANON, STYLE } from '@/lib/constants'
import Link from 'next/link'
export default function ArmoryPage() {
  return (
    <main className={STYLE.FLOW + " px-4 py-12"}>
      <h1 className={STYLE.TITLE}>The Armory</h1>
      <div className={STYLE.GRID}>
        {CANON.map((r: any) => (<Link key={r.slug} href={`/armory/${r.slug}`} className={STYLE.CARD}>{r.title}</Link>))}
      </div>
    </main>
  )
}
