"use client"
import { useState } from "react"

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryItems = [
    {
      src: "/studio1.jpg",
      category: "studio",
      title: "Momen Romantis",
      description: "Kebahagiaan yang terpancar dari kedua mempelai",
    },
    {
      src: "/studio2.jpg",
      category: "studio",
      title: "Kebersamaan",
      description: "Saling mendukung dalam setiap langkah",
    },
    {
      src: "/studio3.jpg",
      category: "studio",
      title: "Kehangatan Cinta",
      description: "Momen penuh kasih sayang",
    },
    {
      src: "/studio4.jpg",
      category: "studio",
      title: "Potret Klasik",
      description: "Elegance dalam setiap pose",
    },
    {
      src: "/studio5.jpg",
      category: "studio",
      title: "Pelukan Hangat",
      description: "Cinta yang tulus dan mendalam",
    },
    {
      src: "/Alam1.jpg",
      category: "alam",
      title: "Alam Hijau",
      description: "Keindahan cinta di tengah alam",
    },
    {
      src: "/Alam2.jpg",
      category: "alam",
      title: "Santai Bersama",
      description: "Menikmati kebersamaan yang sederhana",
    },
    {
      src: "/Alam3.jpg",
      category: "alam",
      title: "Ikatan Suci",
      description: "Cincin sebagai simbol komitmen",
    },
    {
      src: "/Alam4.jpg",
      category: "alam",
      title: "Petualangan Bersama",
      description: "Menjalani hidup berdua dengan penuh semangat",
    },
    {
      src: "/Alam5.jpg",
      category: "alam",
      title: "Perjalanan Cinta",
      description: "Setiap perjalanan menjadi lebih bermakna",
    },
    {
      src: "/Alam6.jpg",
      category: "alam",
      title: "Kebahagiaan Alami",
      description: "Cinta yang tumbuh di tengah keindahan alam",
    },
  ]

  const categories = [
    { id: "all", label: "Semua Foto", icon: "fa-images" },
    { id: "studio", label: "Studio", icon: "fa-camera" },
    { id: "alam", label: "Alam", icon: "fa-leaf" },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section
      id="gallery"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-6xl mx-auto" data-animate="fade-up">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-800 font-heading mb-4 md:mb-6">Galeri Foto</h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
            Momen-momen indah perjalanan cinta kami yang diabadikan dengan penuh makna
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center text-sm sm:text-base ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-lg transform scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
              }`}
            >
              <i className={`fas ${category.icon} mr-1.5 sm:mr-2`}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 bg-white border border-white/50"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4 bg-white/80 backdrop-blur-safe">
                <h3 className="text-slate-800 font-semibold mb-1 text-sm sm:text-base">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Debug Info - Remove this after testing */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>
            Selected: {selectedCategory} | Showing: {filteredItems.length} photos
          </p>
        </div>
      </div>
    </section>
  )
}
