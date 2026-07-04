'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AudioEngine from './AudioEngine'
import { Relic } from '@/data/relics'

export default function SoundGate({ relic }: { relic: Relic }) {
  const [stage, setStage] = useState<'reader' | 'gate' | 'playing'>('reader')
  const [progress, setProgress] = useState(0)

  return (
    <main className="min-h-screen w-screen bg-black text-white overflow-y-auto">
      <AnimatePresence mode="wait">
        {stage === 'reader' && (
          <motion.div 
            key="reader"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto p-6 pt-20"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white">{relic.title}</h1>
            <p className="text-amber-400 text-xl mt-2">{relic.subtitle}</p>
            
            <div className="aspect-video relative my-8">
              <img src={relic.image} alt={relic.title} className="w-full h-full object-cover rounded" />
            </div>

            <div className="border-l-4 border-amber-400 pl-6 my-8">
              <p className="text-amber-400 font-bold">{relic.verse.ref}</p>
              <p className="italic text-lg">"{relic.verse.text}"</p>
            </div>

            <p className="text-lg leading-relaxed mb-12">{relic.declaration}</p>

            <button 
              onClick={() => setStage('gate')}
              className="bg-amber-500 text-black font-bold px-8 py-4 rounded hover:bg-amber-400 transition-all"
            >
              ▶ ENTER SOUND
            </button>
          </motion.div>
        )}

        {stage === 'gate' && (
          <motion.div 
            key="gate"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white mb-16">
              {relic.title}
            </h1>
            <button 
              onClick={() => setStage('playing')}
              className="text-white text-xl border border-white/20 px-12 py-4 hover:bg-white/5 transition-all"
            >
              ▶ BEGIN
            </button>
          </motion.div>
        )}

        {stage === 'playing' && (
          <AudioEngine 
            relic={relic} 
            onProgress={setProgress}
            onLoaded={() => {}}
            onExit={() => setStage('reader')}
          >
            <div className="h-full w-full flex items-center justify-center text-white/30 text-2xl">
              ScrollEcho builds next.
            </div>
          </AudioEngine>
        )}
      </AnimatePresence>
    </main>
  )
}
