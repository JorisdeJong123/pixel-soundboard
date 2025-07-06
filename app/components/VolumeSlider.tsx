"use client"

import type React from "react"
import { useSoundboard } from "../contexts/SoundboardContext"
import { Volume2, VolumeX } from "lucide-react"

export default function VolumeSlider() {
  const { volume, setVolume } = useSoundboard()

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number.parseFloat(e.target.value))
  }

  const toggleMute = () => {
    setVolume(volume > 0 ? 0 : 0.7)
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-purple-900/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-500/30">
      <button
        onClick={toggleMute}
        aria-label={volume > 0 ? "Mute" : "Unmute"}
        className="text-cyan-300 hover:text-cyan-200 active:text-cyan-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-opacity-75 rounded p-1 touch-manipulation"
      >
        {volume > 0 ? <Volume2 size={18} className="sm:w-5 sm:h-5" /> : <VolumeX size={18} className="sm:w-5 sm:h-5" />}
      </button>

      <div className="flex-1 relative">
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume"
          className="w-full h-3 sm:h-2 bg-purple-800 rounded-lg appearance-none cursor-pointer slider touch-manipulation"
        />
      </div>

      <span className="text-cyan-300 text-xs sm:text-sm font-mono min-w-[2.5ch] sm:min-w-[3ch] text-right">
        {Math.round(volume * 100)}%
      </span>
    </div>
  )
}
