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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-800/10 to-slate-900/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-300/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-200/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-amber-400/25 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-amber-300/20 rounded-full animate-float-delayed"></div>
      </div>

      {/* Content - More transparent */}
      <div
        className="relative z-50 bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl p-3 sm:p-4 md:p-6 lg:p-10 w-full max-w-4xl mx-auto text-center border border-white/10 hero-card mt-auto mb-16 sm:mt-0 sm:mb-0"
        data-animate="fade-up"
      >
        {/* Kata-kata Pembuka */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 mb-3 md:mb-4 font-light">
            Kepada <span className="font-medium text-slate-900">{`${pronoun} ${guestName}`.replace(/ $/, "")},</span>
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-slate-900 font-heading mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-900 bg-clip-text text-transparent">
            Indri & Luthfi
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-800 leading-relaxed px-2">
            Akan Melangsungkan Resepsi Pernikahan Dalam:
          </p>
        </div>

        {/* Countdown Timer - More transparent */}
        <div className="mb-8 md:mb-10">
          <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-6 max-w-2xl mx-auto">
            {[
              { value: timeLeft.days, label: "Hari" },
              { value: timeLeft.hours.toString().padStart(2, "0"), label: "Jam" },
              { value: timeLeft.minutes.toString().padStart(2, "0"), label: "Menit" },
              { value: timeLeft.seconds.toString().padStart(2, "0"), label: "Detik" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-sm rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 lg:p-4 xl:p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-slate-900 mb-0.5 sm:mb-1">
                  {item.value}
                </div>
                <div className="text-slate-800 text-xs sm:text-xs md:text-sm lg:text-base font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Lihat Undangan */}
        <div className="mt-6 md:mt-8 relative z-50">
          <button
            onClick={onShowInvitation}
            className="group px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full hover:from-slate-800 hover:to-slate-900 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl font-medium text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer w-full sm:w-auto"
            style={{ pointerEvents: "auto" }}
          >
            <i className="fas fa-envelope-open-text mr-1.5 sm:mr-2 md:mr-3 group-hover:animate-bounce"></i>
            Lihat Undangan
          </button>
        </div>
      </div>
    </div>
  )
}
