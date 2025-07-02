"use client"

import { useState } from "react"

export default function GiftsSection() {
  const [activeTab, setActiveTab] = useState("qris")
  const [copySuccess, setCopySuccess] = useState("")

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(`${type} berhasil disalin!`)
      setTimeout(() => setCopySuccess(""), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      try {
        document.execCommand("copy")
        setCopySuccess(`${type} berhasil disalin!`)
        setTimeout(() => setCopySuccess(""), 2000)
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr)
      }
      document.body.removeChild(textArea)
    }
  }

  const giftOptions = [
    {
      id: "qris",
      label: "QRIS",
      icon: "fa-qrcode",
      content: (
        <div className="text-center">
          <div className="mb-6">
            <img
              src="/QRIS.jpg"
              alt="QRIS Code - Luthfi Farhan Maulana"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto rounded-xl shadow-lg border border-slate-200 object-contain bg-white"
            />
          </div>
          <p className="text-slate-700 font-medium mb-2 text-lg">QRIS Payment</p>
          <p className="text-slate-600 mb-4">Luthfi Farhan Maulana</p>
          <p className="text-sm text-slate-500">Scan QR Code untuk transfer</p>
        </div>
      ),
    },
    {
      id: "bca",
      label: "BCA",
      icon: "fa-university",
      content: (
        <div className="text-center">
          <div className="bg-slate-50 p-6 rounded-xl mb-6">
            <div className="text-4xl text-blue-600 mb-4">
              <i className="fas fa-university"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">Bank BCA</h4>
            <p className="text-2xl font-bold text-slate-800 mb-2 font-mono">0381648582</p>
            <p className="text-slate-600">Indri Ramdani</p>
          </div>
          <button
            onClick={() => copyToClipboard("0381648582", "Nomor rekening BCA")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            <i className="fas fa-copy mr-2"></i>Salin Nomor Rekening
          </button>
        </div>
      ),
    },
    {
      id: "dana",
      label: "DANA",
      icon: "fa-mobile-alt",
      content: (
        <div className="text-center">
          <div className="bg-slate-50 p-6 rounded-xl mb-6">
            <div className="text-4xl text-blue-500 mb-4">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">DANA</h4>
            <p className="text-2xl font-bold text-slate-800 mb-2 font-mono">085846717367</p>
            <p className="text-slate-600">Indri Ramdani</p>
          </div>
          <button
            onClick={() => copyToClipboard("085846717367", "Nomor DANA")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
          >
            <i className="fas fa-copy mr-2"></i>Salin Nomor DANA
          </button>
        </div>
      ),
    },
    {
      id: "gift",
      label: "Kirim Hadiah",
      icon: "fa-gift",
      content: (
        <div className="text-center">
          <div className="bg-slate-50 p-6 rounded-xl mb-6">
            <div className="text-4xl text-amber-500 mb-4">
              <i className="fas fa-gift"></i>
            </div>
            <h4 className="text-xl font-semibold text-slate-800 mb-4">Alamat Pengiriman Hadiah</h4>
            <div className="text-slate-700 space-y-2">
              <p className="font-medium">Indri Ramdani & Luthfi Farhan Maulana</p>
              <p>Kp. Sawahbera Rt 03 Rw 05</p>
              <p>Des/Kec Cicantayan</p>
              <p>Kab. Sukabumi, Jawa Barat</p>
              <p className="text-sm text-slate-500 mt-2">Indonesia</p>
            </div>
          </div>
          <button
            onClick={() =>
              copyToClipboard(
                "Indri Ramdani & Luthfi Farhan Maulana\nKp. Sawahbera Rt 03 Rw 05\nDes/Kec Cicantayan\nKab. Sukabumi, Jawa Barat\nIndonesia",
                "Alamat",
              )
            }
            className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 font-medium"
          >
            <i className="fas fa-copy mr-2"></i>Salin Alamat
          </button>
        </div>
      ),
    },
  ]

  return (
    <section
      id="gifts"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-4xl mx-auto" data-animate="fade-up">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-800 font-heading mb-4 md:mb-6">Wedding Gift</h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda
            kasih, Anda dapat memberi kado secara cashless.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
          {giftOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveTab(option.id)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center text-sm sm:text-base ${
                activeTab === option.id
                  ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <i className={`fas ${option.icon} mr-1.5 sm:mr-2`}></i>
              {option.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
          {giftOptions.find((option) => option.id === activeTab)?.content}
        </div>

        {/* Copy Success Message */}
        {copySuccess && (
          <div className="fixed bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg z-50 text-sm sm:text-base">
            <i className="fas fa-check mr-2"></i>
            {copySuccess}
          </div>
        )}

        {/* Thank You Message */}
        <div className="mt-6 sm:mt-8 bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl border border-white/50 text-center">
          <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🙏</div>
          <p className="text-slate-700 font-medium mb-2 text-base sm:text-lg">Terima Kasih</p>
          <p className="text-slate-600 text-sm sm:text-base">Atas perhatian dan kebaikan hati Anda</p>
        </div>
      </div>
    </section>
  )
}
