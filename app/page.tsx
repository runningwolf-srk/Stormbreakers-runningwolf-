import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <Image
        src="/729068345_1706992463868756_7233760520950384832_n.jpg"
        alt="Jessy Marquez"
        width={200}
        height={200}
        className="rounded-full"
        priority
      />
      <h1 className="text-4xl font-bold mt-6">Jessy Marquez</h1>
      <p className="text-xl text-gray-600 mt-2">RunningWolf</p>
    </main>
  );
}
