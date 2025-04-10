import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const flyers = [
  {
    id: 1,
    title: "Central Centennial",
    date: "2024",
    image: "/flyers/centennialMain.jpg",
    link: "https://instagram.com/p/..."
  },

  {
    id: 2,
    title: "Halloween 2023",
    date: "2024",
    image: "/flyers/halloween.jpg",
    link: "https://instagram.com/p/..."
  },

  {
    id: 3,
    title: "Friendship Themed Meeting",
    date: "2023",
    image: "/flyers/friendship.jpg",
    link: "https://instagram.com/p/..."
  },
  // Add more flyers here
]

export default function FlyersGrid() {
  return (
    <section className="py-24 px-4 md:px-6">
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

        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["-100%", "100%"] }} // Move from right to left
            transition={{
              duration: 20, // Adjust speed of the animation
              ease: "linear",
              repeat: Infinity, // Infinite loop
            }}
          >
            {flyers.map((flyer, index) => (
              <motion.div
                key={flyer.id}
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
          </motion.div>
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