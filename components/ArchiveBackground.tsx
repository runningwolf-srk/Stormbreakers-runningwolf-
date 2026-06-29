// components/ArchiveBackground.tsx
export default function ArchiveBackground() {
  return (
    <>
      {/* Base gradient: deep void to true black */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-950 via-black to-black -z-10" />
      
      {/* Radial glow: subtle amber focus, like torchlight in a tomb */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/[0.04] via-transparent to-transparent" />
      
      {/* Stone texture: fractal noise, very low opacity */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Vignette edges: darkens corners for focus */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_black_100%)] opacity-70 pointer-events-none" />
    </>
  );
}
