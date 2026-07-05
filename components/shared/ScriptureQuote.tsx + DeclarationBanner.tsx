// components/shared/ScriptureQuote.tsx
export function ScriptureQuote({ text, ref }: { text: string; ref: string }) {
  return (
    <blockquote className="border-l-4 border-amber-600 pl-6 py-2 my-8">
      <p className="text-lg text-stone-200 italic mb-2">"{text}"</p>
      <cite className="text-sm text-amber-400 not-italic">— {ref}</cite>
    </blockquote>
  );
}

// components/shared/DeclarationBanner.tsx
export function DeclarationBanner({ text }: { text: string }) {
  return (
    <div className="w-full bg-gradient-to-r from-amber-900/20 via-amber-700/30 to-amber-900/20 py-12 my-16">
      <p className="text-center text-2xl md:text-3xl font-norse tracking-wider text-amber-300 max-w-4xl mx-auto px-6">
        {text}
      </p>
    </div>
  );
}
