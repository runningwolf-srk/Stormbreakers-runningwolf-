// Add this component at the top of the file
function StormEffects() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-black"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent animate-pulse delay-1000"></div>
      </div>
    </>
  );
}
