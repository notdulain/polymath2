import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const flyers = [
  {
    id: 1,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialMain.jpg",
    link: "https://www.instagram.com/p/DDrd-YDvxXD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 2,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennial2days.jpg",
    link: "https://www.instagram.com/p/DEE59zHv1ji/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 3,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialTomorrow.jpg",
    link: "https://www.instagram.com/p/DEHOkRIPlUI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 4,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialCountdown1.png",
    link: "https://www.instagram.com/p/DDlhihTPjy_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 5,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialCountdown2.png",
    link: "https://www.instagram.com/p/DDoOBS0t4bv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 6,
    title: "Themed Meeting",
    date: "January 2025",
    image: "/flyers/laksTMOD.png",
    link: "https://www.instagram.com/p/DEm6YwAv6BM/?utm_source=ig_web_copy_link"
  },
  {
    id: 7,
    title: "Promotional Flyer",
    date: "January 2025",
    image: "/flyers/CLTCpromo.jpg",
    link: "https://www.instagram.com/p/DFX49fGPwmw/?utm_source=ig_web_copy_link"
  },
  {
    id: 8,
    title: "New Year Flyer",
    date: "January 2025",
    image: "/flyers/clubNewYear.jpg",
    link: "https://www.instagram.com/p/DERi5dBv6b9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 9,
    title: "New Year Flyer",
    date: "January 2025",
    image: "/flyers/divisionNewYear.png",
    link: "https://www.instagram.com/p/DEQX2oaBpbl/?utm_source=ig_web_copy_link"
  },
  {
    id: 10,
    title: "Newsletter Announcement",
    date: "April 2025",
    image: "/flyers/emergeFlyer1.jpg",
    link: "https://www.instagram.com/p/DH-87rHhtGr/?utm_source=ig_web_copy_link"
  },
  {
    id: 11,
    title: "Newsletter Announcement",
    date: "April 2025",
    image: "/flyers/emergeFlyer2.jpg",
    link: "https://www.instagram.com/p/DH-8478hN0x/?utm_source=ig_web_copy_link"
  },
  {
    id: 12,
    title: "Halloween 2023",
    date: "November 2023",
    image: "/flyers/halloween.jpg",
    link: "#"
  },
  // Add more flyers here
]

export default function FlyersGrid() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = 300
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">The Wall</h2>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto no-scrollbar scrollbar-none scroll-smooth touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >

            {flyers.map((flyer, index) => (
              <motion.div
                key={index}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden flex-shrink-0 w-[300px]" // Adjust width as needed
              >
                <Image
                  src={flyer.image}
                  alt={flyer.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-light">{flyer.title}</h3>
                    <p className="text-white/80 text-sm">{flyer.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Arrows for Desktop */}
        <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:scale-125 transition-transform duration-200"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:scale-125 transition-transform duration-200"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/flyers"
            className="inline-block px-8 py-3 rounded-full border border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
          >
            View All Designs
          </Link>
        </motion.div>
      </div>
    </section>
  )
}