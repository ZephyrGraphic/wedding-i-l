"use client"

import { useState, useEffect } from "react"

interface HeroSectionProps {
  onShowInvitation: () => void
  guestName: string
  pronoun: string
}

export default function HeroSection({ onShowInvitation, guestName, pronoun }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Updated to 08:30 for Akad Nikah
    const akadNikahDate = new Date("2025-07-13T08:30:00+07:00")

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = akadNikahDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      } else {
        setTimeLeft({ days, hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden z-40">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/herosection-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-800/30 to-slate-900/50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-300/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-200/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-amber-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-amber-300/30 rounded-full animate-float-delayed"></div>
      </div>

      {/* Content - Ensure it's above overlay */}
      <div
        className="relative z-50 backdrop-blur-xl-safe shadow-2xl rounded-2xl p-4 sm:p-6 md:p-10 w-full max-w-4xl mx-auto text-center border border-white/20 hero-card"
        data-animate="fade-up"
      >
        {/* Kata-kata Pembuka */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 mb-3 md:mb-4 font-light">
            Kepada <span className="font-medium text-slate-800">{`${pronoun} ${guestName}`.replace(/ $/, "")},</span>
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-slate-800 font-heading mb-4 md:mb-6 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Indri & Luthfi
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed px-2">
            Akan Melangsungkan Resepsi Pernikahan Dalam:
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-8 md:mb-10">
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-6 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: "Hari" },
              { value: timeLeft.hours.toString().padStart(2, "0"), label: "Jam" },
              { value: timeLeft.minutes.toString().padStart(2, "0"), label: "Menit" },
              { value: timeLeft.seconds.toString().padStart(2, "0"), label: "Detik" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 text-center shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1">
                  {item.value}
                </div>
                <div className="text-slate-600 text-xs sm:text-sm md:text-base font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Lihat Undangan - Ensure it's clickable */}
        <div className="mt-6 md:mt-8 relative z-50">
          <button
            onClick={onShowInvitation}
            className="group px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full hover:from-slate-800 hover:to-slate-900 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl font-medium text-sm sm:text-base md:text-lg cursor-pointer w-full sm:w-auto"
            style={{ pointerEvents: "auto" }}
          >
            <i className="fas fa-envelope-open-text mr-2 md:mr-3 group-hover:animate-bounce"></i>
            Lihat Undangan
          </button>
        </div>
      </div>
    </div>
  )
}
