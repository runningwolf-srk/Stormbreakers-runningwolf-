// components/shared/ScriptureQuote.tsx
export function ScriptureQuote({ text, ref }: { text: string; ref: string }) {
  return (
    <blockquote className="border-l-4 border-amber-600 pl-6 py-2 my-8">
      <p className="text-lg text-stone-200 italic mb-2">"{text}"</p>
      <cite className="text-sm text-amber-400 not-italic">— {ref}</cite>
    </blockquote>
  );
}
