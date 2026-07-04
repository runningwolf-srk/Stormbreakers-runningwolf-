'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AudioEngine from './AudioEngine'
import { Relic } from '@/data/relics'

export default function SoundGate({ relic }: { relic: Relic }) {
  const [entered, setEntered] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  return (
    <main className="h-screen w-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        {!entered? (
          <motion.div 
            key="gate"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="h-full flex flex-col items-center justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white mb-16 text-center px-4">
              {relic.title}
            </h1>
            <button 
              onClick={() => setEntered(true)}
              className="text-white text-xl border border-white/20 px-12 py-4 hover:bg-white/5 transition-all"
            >
              ▶ ENTER SOUND
            </button>
          </motion.div>
        ) : (
          <AudioEngine 
            relic={relic} 
            onProgress={setProgress}
            onLoaded={() => setLoaded(true)}
            onExit={() => setEntered(false)}
          >
            <div className="h-full w-full flex items-center justify-center text-white/30 text-2xl">
              Audio loaded. ScrollEcho builds next.
            </div>
          </AudioEngine>
        )}
      </AnimatePresence>
    </main>
  )
}
