"use client"

export default function EventSection() {
  return (
    <section id="event" className="min-h-screen py-20 px-4 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white">
      <div className="max-w-4xl mx-auto text-center" data-animate="fade-up">
        <h2 className="text-4xl md:text-5xl text-slate-800 font-heading mb-16">Waktu & Tempat</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Akad Nikah */}
          <div
            className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            data-animate="fade-up"
          >
            <div className="text-5xl mb-6">💍</div>
            <h3 className="text-2xl text-slate-800 font-heading mb-6">Akad Nikah</h3>
            <div className="space-y-3">
              <p className="text-xl text-slate-700 font-medium">Minggu, 13 Juli 2025</p>
              <p className="text-lg text-slate-600">Pukul 08:30 WIB</p>
            </div>
          </div>

          {/* Resepsi */}
          <div
            className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            data-animate="fade-up"
          >
            <div className="text-5xl mb-6">🎉</div>
            <h3 className="text-2xl text-slate-800 font-heading mb-6">Resepsi</h3>
            <div className="space-y-3">
              <p className="text-xl text-slate-700 font-medium">Minggu, 13 Juli 2025</p>
              <p className="text-lg text-slate-600">Pukul 11:00 WIB s/d selesai</p>
            </div>
          </div>
        </div>

        {/* Lokasi */}
        <div
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 mb-12 hover:shadow-2xl transition-all duration-500"
          data-animate="fade-up"
        >
          <div className="text-5xl mb-6">📍</div>
          <h3 className="text-2xl text-slate-800 font-heading mb-6">Lokasi Acara</h3>
          <p className="text-xl text-slate-700 mb-4 font-medium">Kediaman Mempelai Wanita</p>
          <div className="text-slate-600 mb-8 leading-relaxed space-y-1">
            <p>Kp. Sawahbera Rt 03 Rw 05</p>
            <p>Des/Kec Cicantayan</p>
            <p>Kab. Sukabumi, Jawa Barat</p>
          </div>
          <button
            onClick={() => document.getElementById("maps")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-full hover:from-slate-800 hover:to-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fas fa-map-marker-alt mr-2"></i>Lihat Peta
          </button>
        </div>

        {/* Keluarga yang Berbahagia */}
        <div
          className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
          data-animate="fade-up"
        >
          <div className="text-4xl mb-6">👨‍👩‍👧‍👦</div>
          <h3 className="text-2xl text-slate-800 font-heading mb-8 text-center">Kami yang Berbahagia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-50/50 rounded-xl border border-slate-100">
              <h4 className="text-lg font-medium text-slate-800 mb-4">Keluarga Mempelai Wanita</h4>
              <p className="text-slate-700 mb-2">Bapak Isap Saprudin</p>
              <p className="text-slate-500 mb-2">&</p>
              <p className="text-slate-700">Ibu Uu Yuningsih</p>
            </div>
            <div className="p-6 bg-slate-50/50 rounded-xl border border-slate-100">
              <h4 className="text-lg font-medium text-slate-800 mb-4">Keluarga Mempelai Pria</h4>
              <p className="text-slate-700 mb-2">Bapak Asep Badrutamam</p>
              <p className="text-slate-500 mb-2">&</p>
              <p className="text-slate-700">Ibu Heni Suarni</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
