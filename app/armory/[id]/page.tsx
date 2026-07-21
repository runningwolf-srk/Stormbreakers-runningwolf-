// @ts-nocheck
import { notFound } from 'next/navigation'
import { getRelic } from '@/lib/constants'
export const dynamic = 'force-dynamic'
export default function Page({ params }: any) {
  const id = params?.id
  if (!id) return notFound()
  const relic = getRelic(id)
  if (!relic) return notFound()
  return <main style={{padding:40,background:'#0a0a0a',color:'white',minHeight:'100vh'}}><h1>{relic.name}</h1><div style={{fontSize:80}}>{relic.symbol}</div><p style={{marginTop:20}}>Song → Story → Scripture → Practice</p><a href="/" style={{color:'#a78bfa'}}>Return to the journey</a></main>
}
