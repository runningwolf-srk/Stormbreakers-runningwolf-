"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AudioEngine from './AudioEngine'
import { Relic } from '@/data/relics'

interface SoundGateProps {
  relic: Relic
}

export default function SoundGate({ relic }: SoundGateProps) {
  const [stage, setStage] = useState<'reader' | 'loading' | 'playing'>('reader')
  const [progress, setProgress] = useState(0)

  const handleEnterSound = () => {
    setStage('loading')
  }

  const handleLoaded = () => {
    setStage('playing')
  }

  return (
    <main className="min-h-screen w-screen bg-black text-white">
      <AnimatePresence mode="wait">
        {stage === 'reader' && (
          <motion.div
            key="reader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-3xl mx-auto p-6 pt-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-2">
              {relic.title}
            </h1>
            <p className="text-amber-400 text-xl mb-8">{relic.subtitle}</p>

            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden border border-yellow-600">
              <img 
                src={relic.image} 
                alt={relic.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="border-l-4 border-yellow-500 pl-6 mb-8">
              <p className="text-lg leading-relaxed italic text-gray-300">
                {relic.verse.text}
              </p>
              <p className="text-yellow-500 mt-3">— {relic.verse.ref}</p>
            </div>

            <button
              onClick={handleEnterSound}
              className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg text-xl hover:bg-yellow-400 transition transform hover:scale-105"
            >
              ENTER SOUND
            </button>
          </motion.div>
        )}

        {stage === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center min-h-screen"
          >
            <p className="text-yellow-500 text-2xl animate-pulse">Loading Relic...</p>
          </motion.div>
        )}

        {stage === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto p-6 pt-20 text-center"
          >
            <p className="text-2xl text-gray-300 leading-relaxed">{relic.declaration}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {stage !== 'reader' && (
        <AudioEngine
          relic={relic}
          autoPlay={stage === 'playing'}
          onProgress={setProgress}
          onLoaded={handleLoaded}
        />
      )}
    </main>
  )
}
