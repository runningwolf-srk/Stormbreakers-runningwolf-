// components/ArmoryGrid.tsx
import { armory } from "@/data/armory";

export default function ArmoryGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {armory.map((item) => (
        <a
          key={item.relic}
          href={item.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-amber-500 transition-all"
        >
          <img
            src={item.image}
            alt={item.relic}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-4 w-full">
            <h3 className="text-amber-400 font-bold text-lg">{item.relic}</h3>
            <p className="text-zinc-300 text-sm">{item.song}</p>
          </div>
        </a>
      ))}
    </section>
  );
}
