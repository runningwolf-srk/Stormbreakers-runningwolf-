import Link from 'next/link';

const relics = [
  { 
    slug: 'heaven-calling', 
    title: 'Heaven Is Calling', 
    hook: 'When every other voice falls silent, heaven still speaks.',
    bgImage: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=1200&q=80'
  },
  { 
    slug: 'iron-collide', 
    title: 'Iron Collide', 
    hook: 'Faith sharpened in the fire of resistance.',
    bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80'
  },
  { 
    slug: 'iron-collide-worship', 
    title: 'Iron Collide Worship', 
    hook: 'Where the battlefield becomes an altar.',
    bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80'
  },
  { 
    slug: 'blood-of-cross', 
    title: 'Blood of the Cross', 
    hook: 'Mercy written in sacrifice. Hope carried through suffering.',
    bgImage: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1200&q=80'
  },
  { 
    slug: 'horn-of-war', 
    title: 'Horn of War', 
    hook: 'The call to stand before the battle begins.',
    bgImage: 'https://images.unsplash.com/photo-1519563459339-59bb6d7f5e5e?w=1200&q=80'
  },
  { 
    slug: 'im-on-fire', 
    title: 'I\'m On Fire', 
    hook: 'Holy fire cannot be contained. It must be released.',
    bgImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=80'
  },
  { 
    slug: 'spiritual-journey', 
    title: 'Spiritual Journey', 
    hook: 'Survival was never the goal. Purpose was.',
    bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80'
  },
];

export default function Page() {
  return (
    <div style={{
