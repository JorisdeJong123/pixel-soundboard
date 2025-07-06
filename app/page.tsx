"use client"
import { clips } from "./data/clips"
import SoundButton from "./components/SoundButton"
import VolumeSlider from "./components/VolumeSlider"
import RetroToggle from "./components/RetroToggle"
import { SoundboardProvider } from "./contexts/SoundboardContext"
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts"

function SoundboardContent() {
  useKeyboardShortcuts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 mb-4 drop-shadow-lg">
            PIXEL SOUNDBOARD
          </h1>
        </header>

        {/* Controls */}
        <div className="flex flex-col gap-4 mb-6 sm:mb-8 px-2">
        </div>

        {/* Sound Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-8 px-2">
          {clips.map((clip) => (
            <SoundButton key={clip.id} clip={clip} />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-cyan-300/70 text-xs sm:text-sm px-4">
          <p className="mb-2">Press number keys for quick access</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>

      {/* CRT Scanlines Overlay */}
      <div className="retro-overlay" />
    </div>
  )
}

export default function Home() {
  return (
    <SoundboardProvider>
      <SoundboardContent />
    </SoundboardProvider>
  )
}
