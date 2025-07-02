"use client"

import { useState, useRef, useEffect } from "react"

interface MusicControlProps {
  show: boolean
  onMusicRefChange: (ref: HTMLAudioElement | null) => void
}

export default function MusicControl({ show, onMusicRefChange }: MusicControlProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasEnded, setHasEnded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      onMusicRefChange(audioRef.current)

      const audio = audioRef.current

      const handleLoadStart = () => setIsLoading(true)
      const handleCanPlay = () => setIsLoading(false)
      const handleCanPlayThrough = () => setIsLoading(false)
      const handleWaiting = () => setIsLoading(true)
      const handleEnded = () => {
        setIsPlaying(false)
        setHasEnded(true)
        setIsLoading(false)
      }
      const handlePlay = () => {
        setIsPlaying(true)
        setHasEnded(false)
        setIsLoading(false)
      }
      const handlePause = () => {
        setIsPlaying(false)
        setIsLoading(false)
      }
      const handleError = () => {
        setIsLoading(false)
        setIsPlaying(false)
        console.error("Audio loading error")
      }

      // Add all event listeners
      audio.addEventListener("loadstart", handleLoadStart)
      audio.addEventListener("canplay", handleCanPlay)
      audio.addEventListener("canplaythrough", handleCanPlayThrough)
      audio.addEventListener("waiting", handleWaiting)
      audio.addEventListener("ended", handleEnded)
      audio.addEventListener("play", handlePlay)
      audio.addEventListener("pause", handlePause)
      audio.addEventListener("error", handleError)

      return () => {
        audio.removeEventListener("loadstart", handleLoadStart)
        audio.removeEventListener("canplay", handleCanPlay)
        audio.removeEventListener("canplaythrough", handleCanPlayThrough)
        audio.removeEventListener("waiting", handleWaiting)
        audio.removeEventListener("ended", handleEnded)
        audio.removeEventListener("play", handlePlay)
        audio.removeEventListener("pause", handlePause)
        audio.removeEventListener("error", handleError)
      }
    }
  }, [onMusicRefChange])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying && audioRef.current) {
        audioRef.current.pause()
      }
    }

    const handleBeforeUnload = () => {
      if (isPlaying && audioRef.current) {
        audioRef.current.pause()
      }
    }

    // Auto-play when invitation is shown (only once)
    if (show && audioRef.current && !isPlaying && !hasEnded) {
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Auto-play successful
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error)
            setIsLoading(false)
          })
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [show]) // Only depend on show, not on isPlaying or hasEnded

  const toggleMusic = () => {
    if (!audioRef.current || isLoading) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      // Reset to beginning if song has ended
      if (hasEnded) {
        audioRef.current.currentTime = 0
        setHasEnded(false)
      }

      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Play successful
          })
          .catch((error) => {
            console.log("Play prevented:", error)
            setIsLoading(false)
          })
      }
    }
  }

  const getButtonIcon = () => {
    if (isLoading) return "fa-spinner fa-spin"
    if (hasEnded) return "fa-redo"
    return isPlaying ? "fa-pause" : "fa-play"
  }

  const getButtonText = () => {
    if (isLoading) return "Loading..."
    if (hasEnded) return "Replay Music"
    return isPlaying ? "Pause Music" : "Play Music"
  }

  return (
    <>
      <div
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative group">
          <button
            onClick={toggleMusic}
            disabled={isLoading}
            className={`bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white rounded-full p-3 sm:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group-hover:px-4 sm:group-hover:px-6 disabled:opacity-70 disabled:cursor-not-allowed ${
              isPlaying && !isLoading && !hasEnded ? "ring-2 ring-white/30" : ""
            }`}
            style={{ pointerEvents: "auto" }}
          >
            <i className={`fas ${getButtonIcon()} text-base sm:text-lg`}></i>
            <span className="hidden group-hover:inline whitespace-nowrap text-xs sm:text-sm ml-1 sm:ml-2 transition-all duration-300 max-w-0 group-hover:max-w-xs overflow-hidden">
              {getButtonText()}
            </span>
          </button>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" loop={false}>
        <source src="/MUARA - Adera-Fix.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  )
}
