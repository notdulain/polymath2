"use client"
import { motion, useScroll, useTransform } from "framer-motion"

export default function GrainEffect() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.05, 0.03])

  return (
    <motion.div className="fixed inset-0 z-10 pointer-events-none" style={{ opacity }}>
      <div
        className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-20"
        style={{ backgroundSize: "200px 200px" }}
      ></div>
    </motion.div>
  )
}
