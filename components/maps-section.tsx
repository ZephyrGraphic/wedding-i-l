"use client"

import { useState, useEffect } from "react"

interface WeatherData {
  location: {
    name: string
    region: string
    country: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    humidity: number
    wind_kph: number
  }
}

export default function MapsSection() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=4c7dc9525aeb4a7b83151903250107&q=Sukabumi,Indonesia&aqi=no`,
        )
        const data = await response.json()
        setWeather(data)
      } catch (error) {
        console.error("Error fetching weather:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  const shareLocation = () => {
    const locationUrl = "https://goo.gl/maps/ALtzLZTKHtnnKqUWA"
    const locationText = "Kp. Sawahbera Rt 03 Rw 05, Des/Kec Cicantayan, Kab. Sukabumi"
    const text = "Lokasi Pernikahan Indri & Luthfi"

    if (navigator.share) {
      navigator
        .share({
          title: "Lokasi Pernikahan",
          text: text,
          url: locationUrl,
        })
        .catch(console.error)
    } else {
      navigator.clipboard
        .writeText(`${text}\n${locationText}\n${locationUrl}`)
        .then(() => alert("Link lokasi telah disalin!"))
        .catch(() => {
          const dummy = document.createElement("textarea")
          document.body.appendChild(dummy)
          dummy.value = `${text}\n${locationText}\n${locationUrl}`
          dummy.select()
          document.execCommand("copy")
          document.body.removeChild(dummy)
          alert("Link lokasi telah disalin!")
        })
    }
  }

  return (
    <section id="maps" className="min-h-screen py-20 px-4 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white">
      <div className="max-w-4xl mx-auto" data-animate="fade-up">
        <h2 className="text-4xl md:text-5xl text-slate-800 font-heading text-center mb-16">Lokasi Acara</h2>

        {/* Info Cuaca */}
        <div
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 mb-8 hover:shadow-2xl transition-all duration-500"
          data-animate="fade-up"
        >
          <h3 className="text-2xl text-slate-800 font-heading mb-6 text-center">Prakiraan Cuaca</h3>
          {loading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-slate-700"></div>
              <p className="text-slate-600 mt-2">Memuat data cuaca...</p>
            </div>
          ) : weather ? (
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <img src={weather.current.condition.icon || "/placeholder.svg"} alt="Weather" className="w-16 h-16" />
                <div className="ml-4">
                  <p className="text-3xl font-bold text-slate-800">{Math.round(weather.current.temp_c)}°C</p>
                  <p className="text-slate-600">{weather.current.condition.text}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50/50 p-4 rounded-xl">
                  <p className="text-slate-600 text-sm">Kelembaban</p>
                  <p className="text-slate-800 font-semibold">{weather.current.humidity}%</p>
                </div>
                <div className="bg-slate-50/50 p-4 rounded-xl">
                  <p className="text-slate-600 text-sm">Angin</p>
                  <p className="text-slate-800 font-semibold">{weather.current.wind_kph} km/h</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-4">
                {weather.location.name}, {weather.location.region}
              </p>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-600">Gagal memuat data cuaca</p>
            </div>
          )}
        </div>

        {/* Embedded Map */}
        <div
          className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 mb-8 hover:shadow-2xl transition-all duration-500"
          data-animate="fade-up"
        >
          <div className="relative w-full h-96 rounded-xl overflow-hidden" data-animate="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.6682504410524!2d106.83959607499652!3d-6.930197993069635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTUnNDguNyJTIDEwNsKwNTAnMzEuOCJF!5e0!3m2!1sid!2sid!4v1751345841657!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 rounded-xl"
            />
          </div>
        </div>

        {/* Alamat Detail */}
        <div
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 mb-8 hover:shadow-2xl transition-all duration-500"
          data-animate="fade-up"
        >
          <h3 className="text-2xl text-slate-800 font-heading mb-6 text-center">Alamat Lengkap</h3>
          <div className="text-center text-slate-700 space-y-2">
            <p className="text-lg font-medium">Kediaman Mempelai Wanita</p>
            <p className="text-lg">Kp. Sawahbera Rt 03 Rw 05</p>
            <p className="text-lg">Des/Kec Cicantayan</p>
            <p className="text-lg">Kab. Sukabumi, Jawa Barat</p>
            <p className="text-sm text-slate-500 mt-4">Koordinat: 6°55'48.7"S 106°50'31.8"E</p>
          </div>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex flex-col sm:flex-row justify-center gap-4" data-animate="fade-up">
          <a
            href="https://goo.gl/maps/ALtzLZTKHtnnKqUWA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
          >
            <i className="fas fa-directions mr-2"></i>
            Petunjuk Arah
          </a>
          <button
            onClick={shareLocation}
            className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-full hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center"
          >
            <i className="fas fa-share-alt mr-2"></i>
            Bagikan Lokasi
          </button>
        </div>
      </div>
    </section>
  )
}
