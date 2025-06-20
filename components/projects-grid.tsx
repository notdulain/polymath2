import { motion } from "framer-motion"
import Link from "next/link"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Portfolio Redesign",
    description: "A minimalist approach to showcasing creative work",
    image: "/placeholder.svg?height=400&width=700",
    category: "DESIGN",
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    image: "/placeholder.svg?height=400&width=700",
    category: "DEVELOPMENT",
    link: "#",
  },
  {
    id: 3,
    title: "Travel Journal App",
    description: "Document adventures with an intuitive mobile interface",
    image: "/placeholder.svg?height=400&width=700",
    category: "MOBILE",
    link: "#",
  },
  {
    id: 4,
    title: "Music Visualization",
    description: "Interactive audio experience with custom animations",
    image: "/placeholder.svg?height=400&width=700",
    category: "CREATIVE",
    link: "#",
  },
]

export default function ProjectsGrid() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = 400
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
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">The Stack</h2>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto no-scrollbar scrollbar-none scroll-smooth touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[16/10] rounded-lg overflow-hidden flex-shrink-0 w-[420px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-light">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{project.description}</p>
                    <span className="text-xs text-white/60 font-light">{project.category}</span>
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
          <button
            className="inline-block px-8 py-3 rounded-full border border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
            // No link yet
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
} 