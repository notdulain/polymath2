"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface HorizontalScrollImage {
  src: string
  alt: string
  caption: string
}

interface HorizontalScrollProps {
  images: HorizontalScrollImage[]
}

export default function HorizontalScroll({ images }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <div ref={containerRef} className="relative h-[50vh] md:h-[70vh] overflow-hidden">
      <motion.div className="absolute top-0 left-0 h-full flex items-center" style={{ x }}>
        <div className="flex gap-8 pl-[10vw]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-[40vh] md:h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="text-xs tracking-widest text-white/80 font-light uppercase">{image.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
