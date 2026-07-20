// app/word/[slug]/page.tsx
// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function WordDetail({params}:{params:{slug:string}}) {
  const r = CANON.find((x:any)=>x.slug===params.slug)
  if(!r) return <main className="px-4 py-24 text-center">Not revealed yet</main>
  return (<main className="px-4 py-12 max-w-3xl mx-auto"><Link href="/word" className="text-xs uppercase tracking-widest text-zinc-500">← Back to Word</Link><p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">BOOK II — THE WORD</p>
