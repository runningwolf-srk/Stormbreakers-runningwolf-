import Link from 'next/link'
import Image from 'next/image'

const tracks = [
  { 
    id: 1, 
    title: "Jesus Is An Healer", 
    image: "/relic-1-healer.png", 
    relic: 1,
    youtubeId: "stsryByK5h8"
  },
  { 
    id: 2, 
    title: "Horn of War", 
    image: "/relic-2-horn.png", 
    relic: 2,
    youtubeId: "M4wGCg5oCx0"
  },
  { id: 3, title: "Heaven Calling", image: "/relic-3-heaven.png", relic: 3, youtubeId: null },
  { 
    id: 4, 
    title: "Born Through The Fire", 
    image: "/relic-4-scars.png", 
    relic: 4,
    youtubeId: "8XQUhWB_N5M"
  },
  { 
    id: 5, 
    title: "Spiritual Journey", 
    image: "/relic-5-journey.png", 
    relic: 5,
    youtubeId: "umDFjJjh0_c"
  },
  { 
    id: 6, 
    title: "Iron Collide", 
    image: "/relic-6-iron.png", 
    relic: 6,
    youtubeId: "odIsEMUtNJI"
  },
  { 
    id: 7, 
    title: "Blood of Cross", 
    image: "/relic-7-blood.png", 
    relic: 7,
    youtubeId: "4lcbjsNLlzo"
  },
  { 
    id: 8, 
    title: "Lord of Lords", 
    image: "/relic-8-lord.png", 
    relic: 8,
    youtubeId: "9vP0NPrEv9s"
  },
]

export default function MusicPage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-amber-400">The Sound of War</
