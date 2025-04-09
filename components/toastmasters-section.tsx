import { motion } from "framer-motion"
import Image from "next/image"

const roles = [
  {
    title: "VPPR",
    organization: "Central Link Toastmasters",
    description: "Vice President Public Relations"
  },
  {
    title: "Division PRM",
    organization: "Division J, District 82",
    description: "Public Relations Manager"
  },
  {
    title: "Video Marketing Chair",
    organization: "Ovation 2025",
    description: "Leading video marketing initiatives"
  }
]

const awards = [
  "Champion Flyer",
  "Champion Video",
  "Excellence in Leadership"
]

export default function ToastmastersSection() {
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
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">Leadership & Public Speaking</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-light">Roles & Responsibilities</h3>
              <div className="space-y-6">
                {roles.map((role, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="text-xl font-light">{role.title}</h4>
                    <p className="text-zinc-600">{role.organization}</p>
                    <p className="text-zinc-500 text-sm">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-light">Awards & Recognition</h3>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-sm"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src="/toastmasters.jpg"
              alt="Toastmasters Event"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 