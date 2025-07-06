"use client"

import { useEffect } from "react"
import { useSoundboard } from "../contexts/SoundboardContext"
import { Monitor, MonitorSpeaker } from "lucide-react"

export default function RetroToggle() {
  const { retroMode, setRetroMode } = useSoundboard()

  useEffect(() => {
    if (retroMode) {
      document.body.classList.add("retro-mode")
    } else {
      document.body.classList.remove("retro-mode")
    }

    return () => {
      document.body.classList.remove("retro-mode")
    }
  }, [retroMode])

  return (
    <button
      onClick={() => setRetroMode(!retroMode)}
      aria-label={`${retroMode ? "Disable" : "Enable"} retro CRT mode`}
      className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-opacity-75 touch-manipulation ${
        retroMode
          ? "bg-cyan-500 text-purple-900 border-cyan-400 shadow-neon-cyan"
          : "bg-purple-900/50 text-cyan-300 border-purple-500/30 hover:bg-purple-800/50 active:bg-purple-700/50"
      }`}
    >
      {retroMode ? (
        <MonitorSpeaker size={14} className="sm:w-4 sm:h-4" />
      ) : (
        <Monitor size={14} className="sm:w-4 sm:h-4" />
      )}
      <span className="text-xs sm:text-sm font-bold">CRT {retroMode ? "ON" : "OFF"}</span>
    </button>
  )
}
