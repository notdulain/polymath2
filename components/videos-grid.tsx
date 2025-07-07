import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Milestone Video",
    src: "/videos/milestone.mp4",
    ratio: "horizontal",
  },
  {
    id: 2,
    title: "Year Recap Video",
    src: "/videos/2023recap.mp4",
    ratio: "vertical",
  },
  {
    id: 3,
    title: "Ovation 2024",
    src: "/videos/ovation.mp4",
    ratio: "horizontal",
  },
  {
    id: 4,
    title: "Kokis 2024",
    src: "/videos/kokis.mp4",
    ratio: "horizontal",
  },
  {
    id: 5,
    title: "TMPL Website Launch",
    src: "/videos/tmpl_demo.mp4",
    ratio: "vertical",
  },
  {
    id: 6,
    title: "Promo Video",
    src: "/videos/promo.mp4",
    ratio: "vertical",
  },
  {
    id: 7,
    title: "Halloween 2024",
    src: "/videos/halloween.mp4",
    ratio: "vertical",
  },
  {
    id: 8,
    title: "RTC X CLTC",
    src: "/videos/rtc.mp4",
    ratio: "horizontal",
  },
]

function getYoutubeEmbedUrl(url: string) {
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split(/[?&]/)[0];
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1].split(/[?&]/)[0];
  } else if (url.includes('/shorts/')) {
    videoId = url.split('/shorts/')[1].split(/[?&]/)[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

export default function VideosGrid() {
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
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Reel Time</h2>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex items-start space-x-8 overflow-x-auto no-scrollbar scrollbar-none scroll-smooth touch-pan-x scroll-snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, index) => {
              // Assign width and aspect based on ratio
              let cardClass = "w-[320px] aspect-[16/10]";
              if (video.ratio === "vertical") {
                cardClass = "w-[200px] aspect-[9/14]";
              }
              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-xl shadow-lg bg-black overflow-hidden flex-shrink-0 cursor-pointer ${cardClass} scroll-snap-align-start`}
                >
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-light mb-1">{video.title}</h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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