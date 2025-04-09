import { motion } from "framer-motion"

const polymathText = "Polymath · Video Editor · Flyer Designer · Photographer · Toastmaster · Violinist · Computer Science Student · "

export default function PolymathBar() {
  return (
    <div className="w-full overflow-hidden bg-white/5 backdrop-blur-sm border-y border-white/10">
      <motion.div
        className="flex whitespace-nowrap py-3"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="text-zinc-500 text-sm tracking-wide font-light">
          {polymathText.repeat(3)}
        </span>
      </motion.div>
    </div>
  )
} 