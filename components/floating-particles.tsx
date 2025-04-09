"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])
  
  useEffect(() => {
    // Generate particles only on the client
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2, // Size between 2-8px
      duration: Math.random() * 15 + 20, // Slower movement (20-35s)
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#FFFFFF]/20 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`, // Equal height and width for circular particles
          }}
          animate={{
            y: [0, -50, 0], // More subtle vertical movement
            x: [0, Math.random() > 0.5 ? 10 : -10, 0], // Slight horizontal drift
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle horizontal flowing lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#FFFFFF]/10 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 30 + i * 10, // Much slower movement
              ease: "linear",
              delay: i * 5,
            }}
          />
        ))}
      </div>
    </div>
  )
}