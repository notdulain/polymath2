import { motion } from "framer-motion"
import Image from "next/image"

export default function BeyondDesign() {
  return (
    <section className="py-24 px-4 md:px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Beyond Design</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Violin Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/violin.jpg"
                alt="Violin Performance"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Violin</h3>
              <p className="text-zinc-600">
                Award-winning violinist. 3-time Kala Ulela Champion. Passionate about classical music and performance.
              </p>
            </div>
          </motion.div>

          {/* Computer Science Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/coding.jpg"
                alt="Computer Science"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Computer Science</h3>
              <p className="text-zinc-600">
                BSc Computer Science @ SLIIT, Dean's List 2024. Passionate about logic, algorithms, and innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 