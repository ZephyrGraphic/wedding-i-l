"use client"

import { useState, useEffect } from "react"

interface NavbarProps {
  show: boolean
}

export default function Navbar({ show }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll("section")
      const navLinks = document.querySelectorAll(".nav-link")

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionBottom = sectionTop + section.offsetHeight
        const currentScroll = window.scrollY

        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          navLinks.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${section.id}`) {
              link.classList.add("active")
            }
          })
        }
      })
    }

    window.addEventListener("scroll", updateActiveNavLink)
    return () => window.removeEventListener("scroll", updateActiveNavLink)
  }, [])

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#couple", label: "Mempelai" },
    { href: "#event", label: "Waktu dan Tempat" },
    { href: "#gallery", label: "Galeri" },
    { href: "#maps", label: "Lokasi" },
    { href: "#rsvp", label: "RSVP" },
    { href: "#gifts", label: "Gift" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-700 navbar-safe ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              I&L
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="nav-link text-slate-700 hover:text-slate-900 px-4 py-2 text-sm font-medium rounded-full hover:bg-slate-100 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 transition-all duration-300"
            >
              <span className="sr-only">Buka menu utama</span>
              <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden backdrop-blur-safe border-t border-slate-200`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="nav-link block px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 w-full text-left transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
