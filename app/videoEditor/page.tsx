"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, ChevronLeft } from "lucide-react"
import GrainEffect from "@/components/grain-effect"
import { link } from "fs"

type VideoProject = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  youtubeID: string;
  videoUrl: string;
  link: string;
};

const videoProjects: VideoProject[] = [
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
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '';
}

export default function VideoPortfolioPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null)

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
              width: '90vw',
              height: '80vh',
              maxWidth: '1280px',
              maxHeight: '720px',
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedVideo.videoUrl.startsWith('https://youtu') ? (
              <iframe
                width="100%"
                height="100%"
                src={getYoutubeEmbedUrl(selectedVideo.videoUrl)}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-contain bg-black rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-lg">No video available</div>
            )}

            {/* View on Instagram Button */}
            <a
              href={selectedVideo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 bg-white/10 text-white border border-white/30 hover:bg-white/20 px-4 py-2 rounded-md text-base font-medium backdrop-blur-sm transition-all"
            >
              View on Instagram
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
