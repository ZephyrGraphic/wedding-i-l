"use client"
import { useState, useEffect } from "react"
import type React from "react"

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

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

  const handleImageClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()

    const actualIndex =
      selectedCategory === "all" ? index : galleryItems.findIndex((item) => item.src === filteredItems[index].src)

    console.log("Opening slideshow for image:", actualIndex, galleryItems[actualIndex])

    setSelectedImage(actualIndex)
    setImageLoaded(false)
    setImageError(false)

    // Prevent body scroll
    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
    document.body.style.width = "100%"
  }

  const closeSlideshow = () => {
    console.log("Closing slideshow")
    setSelectedImage(null)
    setImageLoaded(false)
    setImageError(false)

    // Restore body scroll
    document.body.style.overflow = ""
    document.body.style.position = ""
    document.body.style.width = ""
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      const newIndex = (selectedImage + 1) % galleryItems.length
      setSelectedImage(newIndex)
      setImageLoaded(false)
      setImageError(false)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const newIndex = selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1
      setSelectedImage(newIndex)
      setImageLoaded(false)
      setImageError(false)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      e.preventDefault()

      if (e.key === "Escape") closeSlideshow()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage])

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true)
    setImageError(false)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(false)
  }

  return (
    <section
      id="gallery"
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 relative overflow-hidden"
    >
      {/* Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 text-pink-300/25 text-xl animate-float">🌸</div>
        <div className="absolute top-60 right-24 text-red-300/30 text-lg animate-float-delayed">💕</div>
        <div className="absolute bottom-40 left-12 text-pink-400/20 text-base animate-float">🌺</div>
        <div className="absolute bottom-24 right-16 text-red-400/25 text-xl animate-float-delayed">💖</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" data-animate="fade-up">
        <div className="text-center mb-12 md:mb-16" data-animate="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-800 font-heading mb-4 md:mb-6">Galeri Foto</h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-4">
            Momen-momen indah perjalanan cinta kami yang diabadikan dengan penuh makna
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 px-4"
          data-animate="fade-up"
        >
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

        {/* Gallery Grid - 3 columns on mobile */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6" data-animate="fade-up">
          {filteredItems.map((item, index) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 bg-white border border-white/50 cursor-pointer"
              onClick={(e) => handleImageClick(e, index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
                    <i className="fas fa-search-plus text-white text-sm sm:text-lg"></i>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:p-3 bg-white/80 backdrop-blur-safe hidden sm:block">
                <h3 className="text-slate-800 font-semibold mb-1 text-xs sm:text-sm">{item.title}</h3>
                <p className="text-slate-600 text-xs line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Debug Info */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Selected Image: {selectedImage !== null ? selectedImage : "None"}</p>
          <p>
            Category: {selectedCategory} | Items: {filteredItems.length}
          </p>
        </div>
      </div>

      {/* Slideshow Modal - Moved outside section */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[9999]"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
          }}
        >
          {/* Header with close button */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm z-[10000]">
            <div className="text-white text-sm sm:text-base font-medium">
              {selectedImage + 1} / {galleryItems.length}
            </div>
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                closeSlideshow()
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
          </div>

          {/* Main content area */}
          <div className="absolute inset-0 flex items-center justify-center pt-20 pb-32">
            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 z-[10000]"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>

            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 z-[10000]"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>

            {/* Image container */}
            <div className="relative w-full h-full flex items-center justify-center px-16">
              {/* Loading state */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}

              {/* Error state */}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <i className="fas fa-exclamation-triangle text-4xl mb-4"></i>
                    <p>Gagal memuat gambar</p>
                    <button
                      onClick={() => {
                        setImageError(false)
                        setImageLoaded(false)
                      }}
                      className="mt-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      Coba Lagi
                    </button>
                  </div>
                </div>
              )}

              {/* Main image */}
              {selectedImage !== null && galleryItems[selectedImage] && (
                <img
                  src={galleryItems[selectedImage].src || "/placeholder.svg"}
                  alt={galleryItems[selectedImage].title}
                  className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    maxWidth: "calc(100vw - 8rem)",
                    maxHeight: "calc(100vh - 12rem)",
                  }}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              )}
            </div>
          </div>

          {/* Footer with image info */}
          {selectedImage !== null && galleryItems[selectedImage] && (
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent z-[10000]">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-2">{galleryItems[selectedImage].title}</h3>
              <p className="text-white/80 text-sm sm:text-base">{galleryItems[selectedImage].description}</p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
