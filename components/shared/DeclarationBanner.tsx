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
