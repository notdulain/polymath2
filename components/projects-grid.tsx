import { motion } from "framer-motion"
import Link from "next/link"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "TMPL Website",
    description: "Live score entry and viewer site for a cricket tournament.",
    image: "/tmpl.png",
    category: "Web App",
    link: "https://watchtmpl.com/home",
    website: "watchtmpl.com",
    details: "With the help of a friend, we built this in a week for a Toastmasters cricket tournament. Live score updates, team registration, NRR leaderboard, and a bracket that actually worked.\n\n Debugged half of it during the matches. Learned more in one day than any lecture ever taught me.\n\n Built it. Broke it. Fixed it. Loved it.",
    github: "https://github.com/notdulain/tmpl-website",
    video: "/videos/tmpl_demo.mp4",
    tech: ["TypeScript", "Next.js", "Firebase", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Gymsync",
    description: "Gym management system for tracking attendance, workouts, and equipment.",
    image: "/gymsync.png",
    category: "Full Stack",
    link: "https://mansagym.me",
    website: "mansagym.me",
    details: "Our full-stack group project for Y2S1.\n\nHandles everything from member registration to workout plans, staff shifts, equipment tracking, ticketing, and QR code-based attendance. Basically, if a gym could run itself, this would be it. \n\nBuilt with Java - SpringBoot, MySQL, and React. Sweated more on the code than we ever did at an actual gym. \n\n🚧 Note: Backend's currently offline (Railway free credits said goodbye). Demo's on pause, but the build? Solid.",
    github: "https://github.com/SLIIT-FacultyOfComputing/group-project-group-5#",
    video: "/videos/gymsync_demo.mp4",
    tech: ["Springboot", "React", "Node.js", "MySQL"],
  },
  {
    id: 3,
    title: "Rawriser",
    description: "Batch convert RAW image folders into JPEGs instantly.",
    image: "/rawriser.png",
    category: "Utility Tool",
    link: "https://github.com/notdulain/RawRiser/releases/download/v1.0.0/RawRiser.exe",
    website: "Download",
    details: "I deal with RAW photos a lot and I can't keep Googling sketchy online RAW-to-JPEG converters every time I need a quick JPEG. \n\nSo I built my own. Simple, offline, and does exactly what I need. \n\nDesigned it because I needed it. Coded it so no one else had to deal with the mess.",
    github: "https://github.com/notdulain/RawRiser",
    video: "/videos/rawriser_demo.mp4",
    tech: ["Python", "rawpy", "imageio"],
  },
  {
    id: 4,
    title: "Hextractor",
    description: "Pick any screen color and get its hex-code instantly.",
    image: "/hextractor.png",
    category: "Dev Tool",
    link: "https://github.com/notdulain/Hextractor/releases/download/v1.0.0/Hextractor.V1.ahk",
    website: "Download",
    details: "I got tired of taking screenshots and uploading them to imagecolorpicketr.com just to grab a hex code off my own screen. \n\nSo I made a tool that does it in one move: Hit Shift+C, then click anywhere on the screen. The color under your cursor gets copied as a hex code, instantly. \n\nNo fuss. No pop-ups. Just point, click, paste.",
    github: "https://github.com/notdulain/Hextractor",
    video: "",
    tech: ["AutoHotKey V1"],
  },
  {
    id: 5,
    title: "Textforge",
    description: "Format text (bold, italic etc.) for social platforms.",
    image: "/textforge.png",
    category: "Productivity",
    link: "#",
    details: "A productivity tool to format text for social media platforms, supporting bold, italic, and more.",
    github: "https://github.com/yourusername/textforge",
    video: "",
    tech: ["React", "Vite"],
  },
]

export default function ProjectsGrid() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const scrollAmount = 400
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

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
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">The Stack</h2>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto overflow-y-hidden no-scrollbar scrollbar-none scroll-smooth touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[8/5] rounded-lg overflow-hidden flex-shrink-0 w-[320px] md:w-[400px] lg:w-[480px] shadow-2xl shadow-zinc-400/40 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-light">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{project.description}</p>
                    <span className="text-xs text-white/60 font-light">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrows for Desktop */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white hover:scale-125 transition-transform duration-200"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-white hover:scale-125 transition-transform duration-200"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            className="inline-block px-8 py-3 rounded-full border border-zinc-700 text-zinc-700 hover:bg-zinc-700 hover:text-white transition-colors duration-200"
            // No link yet
          >
            View All Projects
          </button>
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-0">
          {/* Blurred background overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-zinc-900/65 text-white rounded-2xl shadow-2xl w-full max-w-[384px] h-auto max-h-[85vh] md:w-full md:h-full md:max-w-[90vw] lg:max-w-[1300px] md:h-[90vh] md:max-h-[700px] flex flex-col md:flex-row md:overflow-hidden p-3 md:p-8 backdrop-blur-md border border-zinc-700"
            onClick={e => e.stopPropagation()}
          >
            {/* Video (16:9) on the left, content on the right */}
            <div className="w-full flex flex-col justify-start items-center h-auto md:w-[55%] md:min-w-[480px] md:justify-center md:p-8 p-1 pt-4 md:pt-8 flex-shrink-0">
              <div className="w-full aspect-[16/9] max-w-[320px] md:max-w-2xl rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-zinc-900/80 backdrop-blur-md">
                {selectedProject.video ? (
                  <video preload='metadata'
                    src={selectedProject.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain bg-zinc-900"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain bg-zinc-900"
                  />
                )}
              </div>
            </div>
            {/* Details on the right */}
            <div className="flex-1 w-full px-1 md:px-10 pt-2 md:pt-12 pb-1 md:pb-8 flex flex-col justify-between min-w-0 md:min-w-[350px] overflow-y-auto md:overflow-visible">
              <div className="pl-3 md:pl-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{selectedProject.title}</h2>
                {selectedProject.details.split(/\n{2,}/).map((para, idx) => {
                  // Check if paragraph starts with a number followed by a dot or parenthesis
                  const numberedStepMatch = para.trim().match(/^(\d+)[.)]\s*(.+)$/);
                  
                  if (numberedStepMatch) {
                    const [, number, content] = numberedStepMatch;
                    return (
                      <div key={idx} className="flex items-start mb-2 text-sm md:text-lg md:mb-1">
                        <span className="flex-shrink-0 text-zinc-300 text-sm md:text-lg font-semibold mr-3 md:mr-4">
                          {number}.
                        </span>
                        <p className="text-zinc-300 flex-1">{content}</p>
                      </div>
                    );
                  }
                  
                  return (
                    <p key={idx} className="text-zinc-300 mb-4 text-sm md:text-lg md:mb-6">{para}</p>
                  );
                })}
                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-2 mb-4 md:mb-8">
                  {selectedProject.tech && selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="inline-block px-2 py-0.5 md:px-3 md:py-1 lg:px-2.4 lg:py-1 rounded-full bg-zinc-800 text-xs md:text-base lg:text-sm font-semibold tracking-wide border border-zinc-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-start items-end w-full mt-auto">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors mr-3"
                  >
                    {/* GitHub SVG icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-9 md:h-9 lg:w-7 lg:h-7">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z" />
                    </svg>
                  </a>
                )}
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-12 md:h-16 lg:h-12 px-3.5 md:px-3.5 lg:px-3.5 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors text-base md:text-lg lg:text-base font-semibold gap-2"
                  >
                    <span className="text-xl md:text-2xl lg:text-xl">🔗</span>
                    <span className="truncate max-w-[120px] md:max-w-[200px] lg:max-w-[140px]">{selectedProject.website}</span>
                  </a>
                )}
              </div>
            </div>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 md:top-4 md:right-4 z-50 w-7 h-7 md:w-8 md:h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
} 