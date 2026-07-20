// @ts-nocheck
export const dynamic = 'force-dynamic'
import { CANON } from '@/lib/constants'
import Link from 'next/link'
export default function ChroniclesIndex() {
  const actData = {1:{name:'AWAKENING', desc:'Encounter God in the storm.'},2:{name:'TRANSFORMATION', desc:'Identity rebuilt.'},3:{name:'WARFARE', desc:'Walking in authority.'},4:{name:'CALLING', desc:'Carrying Kingdom forward.'}}
  return (
    <main className="px-4 py-12 max-w-5xl mx-auto"><h1 className="text-6xl font-black">CHRONICLES</h1><p className="text
