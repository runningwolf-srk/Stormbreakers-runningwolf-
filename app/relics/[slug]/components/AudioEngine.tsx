"use client"

import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { motion } from 'framer-motion'
import { Relic } from '@/data/relics'

interface AudioEngineProps {
  relic: Relic
  autoPlay?: boolean
}

export default function AudioEngine({ relic, autoPlay = false }: AudioEngineProps) {
  const ambientRef = useRef<Howl | null>(null)
  const mainRef = useRef<Howl | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // 1. AMBIENT SWELL - Only if ambientUrl exists
    if (relic.ambientUrl) {
      ambientRef.current = new Howl({
        src: [relic.ambientUrl],
        volume: 0.4,
        loop: true,
        preload: true,
        html5: true
      })
    }

    // 2. MAIN TRACK
    mainRef.current = new Howl({
      src: [relic.audioUrl],
      volume: 0.8,
      html5: true,
      onplay: () => setIsPlaying(true),
      onend: () => {
        setIsPlaying(false)
        setProgress(100)
      },
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false)
    })

    // Progress tracking
    const interval = setInterval(() => {
      if (mainRef.current?.playing()) {
        const seek = mainRef.current.seek() as number
        const duration = mainRef.current.duration()
        setProgress((seek / duration) * 100)
      }
    }, 1000)

    if (autoPlay) {
      setTimeout(() => {
        ambientRef.current?.play()
        setTimeout(() => {
          mainRef.current?.play()
        }, 2500) // 2.5s ambient before main
      }, 100)
    }

    return () => {
      clearInterval(interval)
      ambientRef.current?.unload()
      mainRef.current?.unload()
    }
  }, [relic, autoPlay])

  const togglePlay = () => {
    if (!mainRef.current) return
    
    if (isPlaying) {
      mainRef.current.pause()
      ambientRef.current?.pause()
    } else {
      if (!ambientRef.current?.playing() && relic.ambientUrl) {
        ambientRef.current?.play()
      }
      mainRef.current.play()
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur border-t border-yellow-600 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            {isPlaying ? 'PAUSE' : 'ENTER SOUND'}
          </button>
          
          <div className="flex-1">
            <p className="text-white font-bold">{relic.title}</p>
            <p className="text-yellow-500 text-sm">{relic.subtitle}</p>
          </div>
          
          <div className="text-right text-gray-400 text-sm">
            {Math.floor(relic.duration / 60)}:{(relic.duration % 60).toString().padStart(2, '0')}
          </div>
        </div>
        
        <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-yellow-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </div>
  )
}
