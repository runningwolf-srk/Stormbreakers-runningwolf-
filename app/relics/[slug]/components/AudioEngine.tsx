'use client'
import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import { motion } from 'framer-motion'
import { Relic } from '@/data/relics'

type AudioEngineProps = {
  relic: Relic
  onProgress: (p: number) => void
  onLoaded: () => void
  onExit: () => void
  children: React.ReactNode
}

export default function AudioEngine({ 
  relic, 
  onProgress, 
  onLoaded,
  onExit,
  children 
}: AudioEngineProps) {
  const soundRef = useRef<Howl | null>(null)
  const ambientRef = useRef<Howl | null>(null)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // 1. AMBient SWELL - 2.5s before main track
    if (relic.ambientUrl) {
      ambientRef.current = new Howl({
        src: [relic.ambientUrl],
        volume: 0.4,
        onload: () => {
          ambientRef.current?.play()
          // Start main track after 2500ms swell
          setTimeout(() => {
            soundRef.current?.play()
            setIsPlaying(true)
            onLoaded()
          }, 2500)
        }
      })
    } else {
      // No ambient, play main immediately
      soundRef.current?.play()
      setIsPlaying(true)
      onLoaded()
    }

    // 2. MAIN TRACK
    soundRef.current = new Howl({
      src: [relic.audioUrl],
      html5: true,
      onplay: () => {
        requestAnimationFrame(updateProgress)
      },
      onend: () => {
        setIsPlaying(false)
      }
    })

    // 3. PROGRESS TRACKER
    const updateProgress = () => {
      if (soundRef.current?.playing()) {
        const seek = soundRef.current.seek() as number
        const currentProgress = (seek / relic.duration) * 100
        setProgress(currentProgress)
        onProgress(currentProgress)
        requestAnimationFrame(updateProgress)
      }
    }

    // 4. ESC TO EXIT
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleExit()
      }
    }
    window.addEventListener('keydown', handleKey)

    // 5. CLEANUP
    return () => {
      soundRef.current?.unload()
      ambientRef.current?.unload()
      window.removeEventListener('keydown', handleKey)
    }
  }, [relic])

  const handleExit = () => {
    // Decay-based exit: fade out 400ms
    soundRef.current?.fade(soundRef.current.volume(), 0, 400)
    ambientRef.current?.fade(ambientRef.current.volume(), 0, 400)
    setTimeout(onExit, 400)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: isPlaying? 1 : 0 }}
      className="h-full w-full relative"
    >
      {/* MINIMAL PROGRESS BAR - DESIGN LAW: UI INVISIBLE UNTIL NEEDED */}
      <div className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between text-white/50 text-xs tracking-widest">
        <span>{relic.title}</span>
        <span>You are {Math.floor(progress)}% through the echo</span>
      </div>
      <div className="fixed top-12 left-0 right-0 h-[1px] bg-white/10 z-50">
        <motion.div 
          className="h-full bg-white/40"
          style={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* SCROLL ECHO RENDERS HERE */}
      {children}
    </motion.div>
  )
      }
