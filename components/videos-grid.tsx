import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Video Title 1",
    preview: "/videos/promo.mp4",
    link: "https://instagram.com/p/..."
  },
  // Add more videos here
]

export default function VideosGrid() {
  const scrollRef = useRef(null)
  
    const scroll = (direction) => {
      const container = scrollRef.current
      if (!container) return
      const scrollAmount = 300
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }

  return (
    <section className="py-24 px-4 md:px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Reel Time</h2>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[9/16] rounded-lg overflow-hidden"
              >
                <video
                  src={video.preview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-light">{video.title}</h3>
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
            href="/videoEditor"
            className="inline-block px-8 py-3 rounded-full border border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
          >
            View All Edits
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 