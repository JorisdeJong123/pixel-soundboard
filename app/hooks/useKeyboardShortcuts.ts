"use client"

import { useEffect } from "react"
import { clips } from "../data/clips"
import { useSoundboard } from "../contexts/SoundboardContext"

export function useKeyboardShortcuts() {
  const { volume } = useSoundboard()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return
      }

      const clip = clips.find((c) => c.key === event.key)
      if (clip) {
        event.preventDefault()
        const audio = new Audio(clip.file)
        audio.volume = volume
        audio.play().catch(console.error)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [volume])
}
