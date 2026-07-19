// app/chronicles/[slug]/page.tsx
import TestimonyDisclaimer from '@/components/Disclaimer'
import Link from 'next/link'

export default function ChroniclePage() {
  return (
    <main className="min-h-screen bg-stone-950 text-amber-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/chronicles" className="text-amber-400/60 text-sm hover:text-amber-400 mb-8 inline-block">
          ← Back to Chronicles
        </Link>

        <h1 className="text-4xl sm:text-5xl font-black text-amber-100 tracking-tighter mb-4">
          Chapter 1: The Map
        </h1>

        {/* THIS IS THE DISCLAIMER — Correct way to use it */}
        <TestimonyDisclaimer />

        <div className="prose prose-invert prose-amber max-w-none mt-8 space-y-6 text-amber-100/80 leading-relaxed">
          <p className="text-xl font-bold text-amber-100">
            Psalm 23 wasn't poetry anymore. It was a map.
          </p>
          
          <p>
            This is where your testimony goes. This is not Scripture. 
            This is my story — anchored in Scripture.
          </p>

          <p>
            The Lord is my shepherd, I shall not want...
          </p>
        </div>

        <div className="mt-12 flex justify-between border-t border-amber-400/10 pt-8">
          <span className="text-amber-200/30 text-sm">Chapter 1 of 16</span>
          <Link href="/chronicles/chapter-2" className="text-amber-400 font-bold hover:text-amber-300">
            Continue the journey →
          </Link>
        </div>

      </div>
    </main>
  )
}
