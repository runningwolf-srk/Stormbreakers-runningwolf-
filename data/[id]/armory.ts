import { getRelicById } from '@/data/[id]/armory';

export default function RelicPage({ params }: { params: { id: string } }) {
  const relic = getRelicById(params.id);
  
  if (!relic) return <div>Relic not found</div>;
  
  return (
    <div key={relic.id}>
      <h1>{relic.name}</h1>
      <img src={relic.image} alt={relic.name} />
      <a href={relic.youtubeUrl}>{relic.songTitle}</a>
    </div>
  );
}
