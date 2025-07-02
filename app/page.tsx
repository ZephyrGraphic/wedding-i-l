"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import CoupleSection from "@/components/couple-section"
import EventSection from "@/components/event-section"
import GallerySection from "@/components/gallery-section"
import MapsSection from "@/components/maps-section"
import RsvpSection from "@/components/rsvp-section"
import GiftsSection from "@/components/gifts-section"
import MusicControl from "@/components/music-control"

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false)
  const [guestName, setGuestName] = useState("")
  const [pronoun, setPronoun] = useState("Bapak/Ibu/Saudara/i")
  const [musicRef, setMusicRef] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initialize enhanced scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a small delay for better visual effect
          setTimeout(() => {
            entry.target.classList.add("animate-in")
          }, 50)
        }
      })
    }, observerOptions)

    // Observe all elements with data-animate attribute
    const animateElements = document.querySelectorAll("[data-animate]")
    animateElements.forEach((el) => observer.observe(el))

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const nama = urlParams.get("n") || ""
    const p = urlParams.get("p") || "Bapak/Ibu/Saudara/i"

    setGuestName(nama)
    setPronoun(p)

    // Lock scroll initially
    document.body.classList.add("lock-scroll")

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleShowInvitation = () => {
    setShowInvitation(true)
    document.body.classList.remove("lock-scroll")

    // Auto-play music when invitation is opened
    if (musicRef) {
      musicRef.play().catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }

    // Scroll to couple section after content shows
    setTimeout(() => {
      document.getElementById("couple")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 800)
  }

  return (
    <>
      <Navbar show={showInvitation} />

      {/* Hero Section - Always visible */}
      <HeroSection onShowInvitation={handleShowInvitation} guestName={guestName} pronoun={pronoun} />

      {/* Lock Overlay - Fixed z-index issue */}
      {!showInvitation && <div className="fixed inset-0 bg-black/60 z-30 transition-all duration-700 overlay-safe" />}

      <MusicControl show={showInvitation} onMusicRefChange={setMusicRef} />

      {/* Main Content */}
      <div className={`transition-all duration-700 ${showInvitation ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <CoupleSection />
        <EventSection />
        <GallerySection />
        <MapsSection />
        <RsvpSection guestName={guestName} />
        <GiftsSection />
      </div>
    </>
  )
}
