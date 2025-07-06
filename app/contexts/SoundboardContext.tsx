"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface SoundboardContextType {
  volume: number
  setVolume: (volume: number) => void
  retroMode: boolean
  setRetroMode: (mode: boolean) => void
}

const SoundboardContext = createContext<SoundboardContextType | undefined>(undefined)

export function SoundboardProvider({ children }: { children: ReactNode }) {
  const [volume, setVolume] = useState(0.7)
  const [retroMode, setRetroMode] = useState(false)

  return (
    <SoundboardContext.Provider value={{ volume, setVolume, retroMode, setRetroMode }}>
      {children}
    </SoundboardContext.Provider>
  )
}

export function useSoundboard() {
  const context = useContext(SoundboardContext)
  if (context === undefined) {
    throw new Error("useSoundboard must be used within a SoundboardProvider")
  }
  return context
}
