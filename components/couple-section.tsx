export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 relative overflow-hidden"
    >
      {/* Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-pink-300/30 text-2xl animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-red-300/40 text-xl animate-float-delayed">💕</div>
        <div className="absolute bottom-32 left-20 text-pink-400/25 text-lg animate-float">🌺</div>
        <div className="absolute bottom-20 right-10 text-red-400/30 text-2xl animate-float-delayed">💖</div>
        <div className="absolute top-60 left-1/4 text-pink-200/20 text-sm animate-float">🌹</div>
        <div className="absolute bottom-60 right-1/4 text-red-200/25 text-base animate-float-delayed">❤️</div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10" data-animate="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-800 font-heading mb-8">
          Bismillahirrahmanirrahim
        </h2>
        <p className="text-lg sm:text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT,
          <br />
          kami bermaksud menyelenggarakan pernikahan putra-putri kami:
        </p>

        {/* Container untuk Foto Mempelai */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-16">
          {/* Mempelai Wanita */}
          <div className="text-center group" data-animate="fade-right">
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
              <img
                src="/indri-mempelai.jpg"
                alt="Indri Ramdani - Mempelai Wanita"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl text-slate-800 font-heading mb-3">Indri Ramdani, S.Pd.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Putri ke-2 dari
              <br />
              <span className="font-medium text-slate-700">Bpk. Isap Saprudin & Ibu Uu Yuningsih</span>
            </p>
          </div>

          {/* Symbol Love */}
          <div className="text-6xl text-amber-400 font-heading animate-pulse">❤️</div>

          {/* Mempelai Pria */}
          <div className="text-center group" data-animate="fade-left">
            <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105">
              <img
                src="/luthfi-mempelai.jpg"
                alt="Luthfi Farhan Maulana - Mempelai Pria"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl text-slate-800 font-heading mb-3">Luthfi Farhan Maulana, S.Pd.</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Putra ke-1 dari
              <br />
              <span className="font-medium text-slate-700">Bpk. Asep Badrutamam & Ibu Heni Suarni</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
