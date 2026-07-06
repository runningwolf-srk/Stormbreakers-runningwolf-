import { Relic } from '@/data/armory';

type Props = {
  relic: Relic;
};

export default function RelicCard({ relic }: Props) {
  const videoId = relic.youtube.split('/').pop()?.split('?')[0];

  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800">
      <img
        src={relic.image}
        alt={relic.relic} // ✅ FIXED: was relic.name
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="p-4">
        <h3 className="text-amber-400 font-bold text-xl mb-1">{relic.relic}</h3> {/* ✅ FIXED */}
        <p className="text-zinc-400 text-sm mb-4">{relic.song}</p>
        <iframe
          className="w-full aspect-video rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={relic.song}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
