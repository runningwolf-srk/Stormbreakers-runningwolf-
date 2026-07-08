// app/chronicles/page.tsx
export const metadata = {
  title: 'The Chronicles | Stormbreakers',
  description: 'This is not Scripture. This is my story.',
}

export default function ChroniclesPage() {
  return (
    <main className="min-h-screen bg-black text-amber-100 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 tracking-widest mb-4">THE CHRONICLES</h1>
          <p className="text-amber-200/70 italic">
            This is not Scripture. This is my story. Every chapter points back to The Word that saved me.
          </p>
        </header>

        <div className="prose prose-invert prose-amber max-w-none">
          <h2>The Valley</h2>
          <p>Chapter coming soon.</p>

          <h2>The Encounter</h2>
          <p>Chapter coming soon.</p>

          <h2>The Armory</h2>
          <p>Chapter coming soon.</p>

          <h2>The Commission</h2>
          <p>Chapter coming soon.</p>

          <h2>The Journey</h2>
          <p>Chapter coming soon.</p>

          <h2>The Battle</h2>
          <p>Chapter coming soon.</p>

          <h2>The Witness</h2>
          <p>Chapter coming soon.</p>

          <h2>The Hope</h2>
          <p>Chapter coming soon.</p>
        </div>

        <footer className="mt-20 pt-12 border-t border-amber-600/20 text-center">
          <p className="text-amber-400 font-bold text-lg">
            Jesus Christ is the center of them all.
          </p>
        </footer>
      </div>
    </main>
  )
}
