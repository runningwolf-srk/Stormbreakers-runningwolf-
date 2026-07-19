export function RelicIcon({ symbol }: { symbol?: string }) {
  return (
    <div className="w-full h-full bg-amber-500/20 rounded-full flex items-center justify-center border border-amber-500/50">
      <span className="text-amber-400 text-xs uppercase">{symbol?.substring(0, 2)}</span>
    </div>
  )
}
