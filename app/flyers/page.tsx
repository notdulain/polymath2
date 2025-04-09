"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const flyers = [
  {
    id: 1,
    title: "Toastmasters Club Meeting",
    date: "March 2024",
    image: "/flyers/centennialMain.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Leadership Workshop",
    date: "February 2024",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 3,
    title: "Public Speaking Seminar",
    date: "January 2024",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 4,
    title: "Division Conference",
    date: "December 2023",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 5,
    title: "Club Anniversary",
    date: "November 2023",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 6,
    title: "Speech Contest",
    date: "October 2023",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 7,
    title: "Workshop Series",
    date: "September 2023",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 8,
    title: "New Member Orientation",
    date: "August 2023",
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 9,
    title: "Summer Social",
    date: "July 2023",
    image: "/placeholder.svg",
    link: "#"
  }
]

export default function FlyersPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">Graphic Design Portfolio</h1>
          <p className="text-zinc-400 mt-4">A collection of event flyers and promotional materials</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flyers.map((flyer, index) => (
            <motion.div
              key={flyer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800"
            >
              <Image
                src={flyer.image}
                alt={flyer.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-light">{flyer.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{flyer.date}</p>
                  <Link
                    href={flyer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full border border-zinc-400 text-zinc-400 hover:bg-zinc-400 hover:text-zinc-900 transition-colors duration-200"
                  >
                    View on Instagram
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 