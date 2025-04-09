import { motion } from "framer-motion"
import Link from "next/link"

const videos = [
  {
    id: 1,
    title: "Toastmasters Club Promo",
    description: "A cinematic showcase of our club's vibrant community and events",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "#"
  },
  {
    id: 2,
    title: "Leadership Workshop Highlights",
    description: "Key moments from our transformative leadership workshop",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "#"
  },
  {
    id: 3,
    title: "Public Speaking Tips",
    description: "Expert tips and techniques for effective public speaking",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "#"
  },
  {
    id: 4,
    title: "Division Conference Recap",
    description: "Highlights from our annual division conference",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "#"
  },
  {
    id: 5,
    title: "Club Anniversary Celebration",
    description: "Memorable moments from our club's anniversary event",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "#"
  },
  {
    id: 6,
    title: "Speech Contest Finals",
    description: "The best speeches from our annual contest",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "#"
  }
]

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">All Videos</h1>
          <p className="text-zinc-400 mt-4">A collection of video content showcasing events and highlights</p>
        </motion.div>

        <div className="space-y-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-light">{video.title}</h2>
                <p className="text-zinc-400">{video.description}</p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-zinc-800">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="flex justify-end">
                <Link
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full border border-zinc-400 text-zinc-400 hover:bg-zinc-400 hover:text-zinc-900 transition-colors duration-200"
                >
                  View on Instagram
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 