export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-black text-white">
      <img
        src="/jessy-marquez.jpg"
        alt="Jessy Marquez - RunningWolf"
        className="rounded-full object-cover mx-auto mb-6"
        style={{ width: '14rem', height: '14rem' }}
      />
      <h1 className="text-4xl font-bold mb-2">Jessy Marquez</h1>
      <p className="text-lg opacity-80 mb-6">RunningWolf</p>
    </main>
  );
}
