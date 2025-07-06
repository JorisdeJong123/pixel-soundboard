"use client"

import { useRef } from "react"
import type { AudioClip } from "../data/clips"
import { useSoundboard } from "../contexts/SoundboardContext"

interface SoundButtonProps {
  clip: AudioClip
}

export default function SoundButton({ clip }: SoundButtonProps) {
  const { volume } = useSoundboard()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = () => {
    // Create new Audio instance to allow overlapping sounds
    const audio = new Audio(clip.file)
    audio.volume = volume
    audio.play().catch(console.error)
  }

  return (
    <button
      onClick={handlePlay}
      aria-label={`Play ${clip.label} sound`}
      className="group relative aspect-square min-h-[80px] sm:min-h-[100px] bg-gradient-to-br from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 active:scale-95 rounded-lg shadow-neon border border-purple-500 transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-opacity-75 touch-manipulation"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-150" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-2 sm:p-3 text-center">
        <span className="text-white font-bold text-xs sm:text-sm lg:text-base leading-tight drop-shadow-lg break-words">
          {clip.label}
        </span>
        {clip.key && <span className="text-cyan-300 text-[10px] sm:text-xs mt-1 opacity-75">[{clip.key}]</span>}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 group-active:opacity-20 blur-sm transition-opacity duration-150 -z-10" />
    </button>
  )
}
