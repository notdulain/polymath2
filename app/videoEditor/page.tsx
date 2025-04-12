"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, ChevronLeft } from "lucide-react"
import GrainEffect from "@/components/grain-effect"
import { link } from "fs"

const videoProjects = [
  {
    id: 1,
    title: "Urban Exploration",
    description: "A cinematic journey through city landscapes",
    thumbnail: "/flyers/centennialMain.jpg?height=800&width=600",
    category: "DOCUMENTARY",
    videoUrl: "/videos/promo.mp4",
    link: "https://instagram.com/p/Cxk1v0rJ3gG",
  },
  {
    id: 2,
    title: "Product Launch",
    description: "Promotional video for tech product release",
    thumbnail: "/placeholder.svg?height=800&width=600",
    category: "COMMERCIAL",
    videoUrl: "#",
    link: "https://instagram.com/p/Cxk1v0rJ3gG",
  },
  {
    id: 3,
    title: "Dance Performance",
    description: "Contemporary dance captured in slow motion",
    thumbnail: "/placeholder.svg?height=800&width=600",
    category: "PERFORMANCE",
    videoUrl: "#",
    link: "https://instagram.com/p/Cxk1v0rJ3gG",
  },
  {
    id: 4,
    title: "Travel Montage",
    description: "Visual storytelling across diverse landscapes",
    thumbnail: "/placeholder.svg?height=800&width=600",
    category: "TRAVEL",
    videoUrl: "#",
    link: "https://instagram.com/p/Cxk1v0rJ3gG",
  },
  {
    id: 5,
    title: "Fashion Film",
    description: "Seasonal collection showcase with artistic direction",
    thumbnail: "/placeholder.svg?height=800&width=600",
    category: "FASHION",
    videoUrl: "#",
    link: "https://instagram.com/p/Cxk1v0rJ3gG",
  },
  {
    id: 6,
    title: "Music Video",
    description: "Visual interpretation of an indie artist's single",
    thumbnail: "/placeholder.svg?height=800&width=600",
    category: "MUSIC",
    videoUrl: "#",
    link: "https://instagram.com/p/Cxk1v0rJ3gG",
  },
]

export default function VideoPortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videoDimensions, setVideoDimensions] = useState({ width: 1280, height: 720 })
  const videoRef = useRef(null)

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] overflow-hidden">
      {/* Grain Effect */}
      <GrainEffect />

      {/* Header */}
      <div className="relative py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-[#2C2C2C]/70 hover:text-[#2C2C2C] transition-colors mb-12"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          <span className="text-sm tracking-wide">Back to Home</span>
        </Link>

        <motion.div
          className="mb-16 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-widest text-[#2C2C2C]/60 font-light">Portfolio</p>

          <h1 className="text-4xl md:text-5xl font-light font-display tracking-tight">Video Editing Portfolio</h1>

          <p className="text-lg text-[#2C2C2C]/80 max-w-xl pt-4">
            Frames in Motion – The Craft of Video Storytelling
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {videoProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              }}
              onClick={() => setSelectedVideo(project)}
            >
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6 text-white fill-white" />
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-[#2C2C2C]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="absolute top-6 left-6">
                  <span className="text-xs tracking-widest text-white/80 font-light">{project.category}</span>
                </div>

                <h3 className="text-2xl font-medium text-white font-display">{project.title}</h3>
                <p className="text-white/80 mt-2 max-w-xs">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="relative bg-black rounded-lg overflow-hidden"
            style={{
              width: `${videoDimensions.width}px`,
              height: `${(videoDimensions.height / videoDimensions.width) * videoDimensions.width}px`,
              maxWidth: '90vw',
              maxHeight: '80vh',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={selectedVideo.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain bg-black rounded-lg"
              onLoadedMetadata={() => {
                if (videoRef.current) {
                  setVideoDimensions({
                    width: videoRef.current.videoWidth,
                    height: videoRef.current.videoHeight,
                  })
                }
              }}
            />  

            {/* Watch on Instagram Button */}
            <a
              href="https://www.instagram.com/yourprofile" // Replace with actual link if needed
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 bg-white/10 text-white border border-white/30 hover:bg-white/20 px-4 py-2 rounded-md text-base font-medium backdrop-blur-sm transition-all"
            >
              Watch on Instagram
            </a>

              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white/80 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedVideo(null)
                }}
              >
                ✕
              </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
