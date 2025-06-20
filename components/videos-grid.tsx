import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Milestone Video",
    description: "The story of building a legacy: Central Link",
    thumbnail: "/thumbnails/milestone.JPG",
    category: "Storyteller",
    youtubeID: "De3DhlN8yik",
    videoUrl: "https://youtu.be/De3DhlN8yik",
    link: "https://www.instagram.com/reel/DESJCVjABom/",
  },
  {
    id: 2,
    title: "Year Recap Video",
    description: "The video that unfolds the TM year 2023/24 of Central Link",
    thumbnail: "/thumbnails/2023recap.JPG",
    category: "Nostalgia",
    youtubeID: "r41LcnUBgsM",
    videoUrl: "https://youtu.be/r41LcnUBgsM",
    link: "https://www.instagram.com/reel/C8yq-SRyZZb/",
  },
  {
    id: 3,
    title: "Ovation 2024",
    description: "Reliving the Ovation memories",
    thumbnail: "/thumbnails/ovation.JPG",
    category: "Storyteller",
    youtubeID: "sZ-kkKJz2Yc",
    videoUrl: "https://youtu.be/sZ-kkKJz2Yc",
    link: "https://www.instagram.com/reel/C7jQxZRvwyM/",
  },
  {
    id: 4,
    title: "Kokis 2024",
    description: "Reliving the unforgettable day where Central Link celebrated Aurudu",
    thumbnail: "/thumbnails/kokis.JPG",
    category: "Storyteller",
    youtubeID: "Gkkp3xfkplE",
    videoUrl: "https://youtu.be/Gkkp3xfkplE",
    link: "https://www.instagram.com/reel/C6rBc46Po9e/",
  },
  {
    id: 5,
    title: "TMPL Website Launch",
    description: "The launch video for the website me & a friend created for TMPL 2025",
    thumbnail: "/thumbnails/tmpl.JPG",
    category: "Website launch",
    youtubeID: "BI9DTc4oFLA",
    videoUrl: "https://youtu.be/BI9DTc4oFLA",
    link: "https://www.instagram.com/reel/DJawW7UBJYy/",
  },
  {
    id: 6,
    title: "Promo Video",
    description: "A small promotional video I made for the club: not shared in social media",
    thumbnail: "/thumbnails/promo.JPG",
    category: "Quick edit",
    youtubeID: "eFpZanIqv68",
    videoUrl: "https://youtube.com/shorts/eFpZanIqv68?feature=shared",
    link: "#",
  },
  {
    id: 7,
    title: "Halloween 2024",
    description: "A skit we filmed to promote the Halloween themed meeting: Toastmonsters",
    thumbnail: "/thumbnails/halloween.JPG",
    category: "Skit",
    youtubeID: "yP7xagK5BYc",
    videoUrl: "https://youtu.be/yP7xagK5BYc",
    link: "https://www.instagram.com/reel/DB1JPDkNU_2/",
  },
  {
    id: 8,
    title: "RTC X CLTC",
    description: "The recap video I made for the joint meeting we had with Rajagiriya Toastmasters club",
    thumbnail: "/thumbnails/rtc.JPG",
    category: "Recap",
    youtubeID: "h8U39hxPh4o",
    videoUrl: "https://youtu.be/h8U39hxPh4o",
    link: "https://www.instagram.com/reel/C5istt0v2KT/",
  }
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
  const scrollRef = useRef<HTMLDivElement>(null)
  
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
            className="flex space-x-8 overflow-x-auto no-scrollbar scroll-smooth touch-pan-x"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 w-[300px]"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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