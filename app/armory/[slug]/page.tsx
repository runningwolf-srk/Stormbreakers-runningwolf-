"use client"
import {useParams} from "next/navigation"
const DATA:any = {
  "runningwolf-blade":{title:"RUNNINGWOLF BLADE", yt:"YOUR_YT_ID_1", verse:"Hebrews 4:12"},
  "lord-of-lords":{title:"LORD OF LORDS", yt:"YOUR_YT_ID_2", verse:"Revelation 19:16"},
  "blood-of-cross":{title:"BLOOD OF CROSS", yt:"", verse:"Colossians 1:20"}
}
export default function RelicPage(){
  const {slug} = useParams()
  const relic = DATA[slug as string]
  if(!relic) return <div className="min-h-screen bg-black text-white p-10">🔒 RELIC {slug} — THE NEXT CHAPTER HAS NOT BEEN FORGED</div>
  return (
    <div className="min-h-screen bg-black text-white max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-black">{relic.title}</h1>
      <div className="mt-6 aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
        {relic.yt? <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${relic.yt}`} allowFullScreen/> : <div className="flex items-center justify-center h-full text-white/20">🔥 FORGING — VIDEO COMING SOON</div>}
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="border border-white/10 rounded-xl p-5"><div className="text-[10px] font-mono text-white/30">SCRIPTURE</div><div className="mt-2">{relic.verse}</div></div>
        <div className="border border-white/10 rounded-xl p-5"><div className="text-[10px] font-mono text-white/30">TESTIMONY / BEHIND-THE-SCENES</div><div className="mt-2 text-sm text-white/60">Add your story here — this is what Supporters get expanded.</div></div>
      </div>
    </div>
  )
}
