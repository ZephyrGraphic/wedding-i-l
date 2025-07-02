"use client"

import type React from "react"
import { useState } from "react"

interface RsvpSectionProps {
  guestName: string
}

export default function RsvpSection({ guestName }: RsvpSectionProps) {
  const [formData, setFormData] = useState({
    nama: guestName,
    kehadiran: "",
    jumlah: "",
    doa: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxuxwMBgdlzKipcOK0tgOapOTW5wS0i6QB_r4QLPoNuiKQKekwcFWHiysBz3JfFIqSA/exec",
        {
          method: "POST",
          body: new FormData(e.target as HTMLFormElement),
        },
      )

      if (response.ok) {
        alert("Konfirmasi Kehadiran Berhasil Terkirim!")
        setFormData({
          nama: guestName,
          kehadiran: "",
          jumlah: "",
          doa: "",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="rsvp" className="min-h-screen py-20 px-4 bg-gradient-to-br from-white via-emerald-50 to-emerald-100">
      <div className="max-w-2xl mx-auto" data-animate="fade-up">
        <h2 className="text-4xl md:text-5xl text-slate-800 font-heading text-center mb-16">Konfirmasi Kehadiran</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
          data-animate="fade-up"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-slate-800 mb-3 font-medium">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-300 bg-white/50 backdrop-blur-safe"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="attendance" className="block text-slate-800 mb-3 font-medium">
              Konfirmasi Kehadiran
            </label>
            <select
              id="attendance"
              name="kehadiran"
              value={formData.kehadiran}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-300 bg-white/50 backdrop-blur-safe"
              required
            >
              <option value="">Pilih konfirmasi kehadiran</option>
              <option value="yes">Ya, Saya Akan Hadir</option>
              <option value="no">Maaf, Saya Tidak Bisa Hadir</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="guests" className="block text-slate-800 mb-3 font-medium">
              Jumlah Tamu
            </label>
            <input
              type="number"
              id="guests"
              name="jumlah"
              min="1"
              max="5"
              value={formData.jumlah}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-300 bg-white/50 backdrop-blur-safe"
              required
            />
            <p className="text-sm text-slate-500 mt-2">Maksimal 5 orang per undangan</p>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-slate-800 mb-3 font-medium">
              Ucapan & Doa untuk Mempelai
            </label>
            <textarea
              id="message"
              name="doa"
              rows={4}
              value={formData.doa}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-300 bg-white/50 backdrop-blur-safe resize-none"
              placeholder="Tuliskan ucapan dan doa terbaik untuk kedua mempelai..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 shadow-xl font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Mengirim...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane mr-2"></i>
                Kirim Konfirmasi
              </>
            )}
          </button>
        </form>

        {/* Ucapan Terima Kasih */}
        <div
          className="mt-8 bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 text-center hover:shadow-2xl transition-all duration-500"
          data-animate="fade-up"
        >
          <div className="text-4xl mb-4">🙏</div>
          <h3 className="text-2xl text-slate-800 font-heading mb-4">Terima Kasih</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i merupakan kebahagiaan bagi kami.
          </p>
          <p className="text-slate-600">Atas perhatian dan kehadirannya, kami ucapkan terima kasih.</p>
          <div className="mt-6 text-slate-500 text-sm">
            <p>Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
          </div>
        </div>
      </div>
    </section>
  )
}
