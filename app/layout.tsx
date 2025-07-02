import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Undangan Pernikahan Indri & Luthfi",
  description:
    "Undangan pernikahan digital Indri & Luthfi - Minggu, 13 Juli 2025 di Kp. Sawahbera, Cicantayan, Sukabumi",
  keywords: [
    "undangan pernikahan",
    "wedding invitation",
    "Indri Ramdani",
    "Luthfi Farhan Maulana",
    "pernikahan digital",
  ],
  authors: [{ name: "Indri & Luthfi" }],
  creator: "Indri & Luthfi",
  publisher: "Wedding Invitation",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://indri-luthfi-wedding.vercel.app",
    siteName: "Undangan Pernikahan Indri & Luthfi",
    title: "Undangan Pernikahan Indri & Luthfi",
    description:
      "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk hadir dalam pernikahan kami pada Minggu, 13 Juli 2025",
    images: [
      {
        url: "https://indri-luthfi-wedding.vercel.app/thumbnail-wedding.jpg",
        width: 1200,
        height: 1200,
        alt: "Indri & Luthfi - Wedding Invitation",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@wedding",
    creator: "@indriluthfi",
    title: "Undangan Pernikahan Indri & Luthfi",
    description:
      "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk hadir dalam pernikahan kami pada Minggu, 13 Juli 2025",
    images: ["https://indri-luthfi-wedding.vercel.app/thumbnail-wedding.jpg"],
  },

  // Additional Meta Tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/wedding-ring.png", sizes: "32x32", type: "image/png" },
      { url: "/wedding-ring.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/wedding-ring.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/wedding-ring.png",
  },

  // Manifest
  manifest: "/manifest.json",

  // Additional
  category: "wedding",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#334155" />
        <meta name="msapplication-TileColor" content="#334155" />
        <meta name="msapplication-TileImage" content="/wedding-ring.png" />

        {/* Preload Critical Resources */}
        <link rel="preload" href="/thumbnail-wedding.jpg" as="image" />
        <link rel="preload" href="/herosection-bg.jpg" as="image" />

        {/* External Resources */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-rose-50">
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>
        <script>
          {`
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://weatherwidget.io/js/widget.min.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","weatherwidget-io-js");
          `}
        </script>
      </body>
    </html>
  )
}
