"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Instagram, Linkedin, Menu, X, ChevronRight } from "lucide-react"
import GrainEffect from "@/components/grain-effect"
import FloatingParticles from "@/components/floating-particles"
import HorizontalScroll from "@/components/horizontal-scroll"
import { cn } from "@/lib/utils"
import PolymathBar from "@/components/polymath-bar"
import FlyersGrid from "@/components/flyers-grid"
import VideosGrid from "@/components/videos-grid"
import ToastmastersSection from "@/components/toastmasters-section"
import BeyondDesign from "@/components/beyond-design"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)

  const { scrollY } = useScroll()

  const heroInView = useInView(heroRef, { once: false, amount: 0.5 })
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 })
  const workInView = useInView(workRef, { once: false, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 })

  // Parallax effects
  const heroTextY = useTransform(scrollY, [0, 500], [0, 100])
  const heroImageScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const heroImageY = useTransform(scrollY, [0, 500], [0, 50])
  const aboutImageY = useTransform(scrollY, [300, 900], [0, -50])
  const aboutTextY = useTransform(scrollY, [300, 900], [0, 30])

  // Control navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const projects = [
    {
      title: "Portfolio Redesign",
      description: "A minimalist approach to showcasing creative work",
      image: "/placeholder.svg?height=600&width=800",
      category: "DESIGN",
    },
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout",
      image: "/placeholder.svg?height=600&width=800",
      category: "DEVELOPMENT",
    },
    {
      title: "Travel Journal App",
      description: "Document adventures with an intuitive mobile interface",
      image: "/placeholder.svg?height=600&width=800",
      category: "MOBILE",
    },
    {
      title: "Music Visualization",
      description: "Interactive audio experience with custom animations",
      image: "/placeholder.svg?height=600&width=800",
      category: "CREATIVE",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Behind the scenes",
      caption: "ON SET",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Creative process",
      caption: "PROCESS",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Studio work",
      caption: "STUDIO",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Location shoot",
      caption: "LOCATION",
    },
  ]

  const skills = ["React", "Tailwind", "Video Editing", "Graphic Design", "Public Speaking", "Violin"]

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] overflow-hidden">
      {/* Grain Effect */}
      <GrainEffect />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Navbar */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          showNavbar ? "translate-y-0" : "-translate-y-full",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/20 shadow-xl rounded-2xl">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-zinc-700 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dulain
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", ref: heroRef },
                { name: "About", ref: aboutRef },
                { name: "Work", ref: workRef },
                { name: "Skills", ref: skillsRef },
                { name: "Contact", ref: contactRef },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className="text-zinc-700 hover:text-white transition-colors duration-200"
                  onClick={() => scrollToSection(item.ref)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4}}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <motion.button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#FAF9F6] z-50 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <div className="flex flex-col space-y-6 items-center">
              {[
                { name: "Home", ref: heroRef },
                { name: "About", ref: aboutRef },
                { name: "Work", ref: workRef },
                { name: "Skills", ref: skillsRef },
                { name: "Contact", ref: contactRef },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className="text-xl text-[#2C2C2C]/70 hover:text-[#2C2C2C] transition-colors tracking-wide"
                  onClick={() => scrollToSection(item.ref)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-start justify-center px-4 md:px-6 overflow-hidden"
      >
        {/* Hero Background Image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: heroImageY,
            scale: heroImageScale,
          }}
        >
          <div className="relative h-full w-full">
            <Image
              src="/mainPortrait.jpg?height=1080&width=1920"
              alt="Dulain portrait"
              fill
              className="object-cover object-[80%] md:object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/70 to-transparent"></div>
            <div className="absolute inset-0 bg-[#2C2C2C]/30"></div>
          </div>
        </motion.div>

        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center">
          <motion.div className="max-w-xl space-y-6 ml-0 md:ml-12 lg:ml-24" style={{ y: heroTextY }}>
            <motion.p
              className="text-sm md:text-base uppercase tracking-widest text-white/80 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Creative Developer & Visual Storyteller
            </motion.p>

            <motion.div className="space-y-2">
              <motion.h1
                className="text-5xl md:text-7xl font-light tracking-tight font-display text-white"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Hi, I'm Dulain.
              </motion.h1>

              <motion.h2
                className="text-3xl md:text-5xl font-light tracking-wide font-display text-white/90"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Polymath
              </motion.h2>
            </motion.div>

            <motion.div
              className="border-l-2 border-white/20 pl-4 py-1"
              initial={{ opacity: 0, x: -10 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm text-white/70 font-light italic">
                <span className="font-normal not-italic">Polymath</span> /ˈpɒl.i.mæθ/
              </p>
              <p className="text-sm text-white/70 font-light">
                <span className="italic">noun.</span>
              </p>
              <p className="text-sm text-white/70 font-light">
                A person of wide-ranging knowledge and diverse creative skills — one who thrives at the intersection of
                art, science, and storytelling.
              </p>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-md pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              I craft interfaces, tell visual stories, and blend code with creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                className="mt-8 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full px-8 py-6 relative overflow-hidden group"
                onClick={() => scrollToSection(workRef)}
              >
                <span className="relative z-10">Who is this Dulain?</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="absolute -inset-px bg-gradient-to-r from-white/30 to-white/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 rounded-full"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={heroInView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Polymath Bar */}
      <PolymathBar />

      {/* Flyers Section */}
      <FlyersGrid />

      {/* Videos Section */}
      <VideosGrid />

      {/* Toastmasters Section */}
      <ToastmastersSection />

      {/* Beyond Design Section */}
      <BeyondDesign />

      {/* Section Divider */}
      <div className="relative h-24">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F7F4]/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="relative py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-[#D4CBC4]/20 shadow-2xl"
            style={{ y: aboutImageY }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <Image src="/actualDulain.jpg"alt="Dulain portrait" fill className="object-cover" style={{ objectPosition: "50% 30%" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/20 to-transparent"></div>
          </motion.div>

          <motion.div className="space-y-8" style={{ y: aboutTextY }}>
            <motion.p
              className="text-sm uppercase tracking-widest text-[#2C2C2C]/60 font-light"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              01 — About
            </motion.p>

            <section ref={workRef} className="relative">
              <motion.h2
                className="text-4xl md:text-5xl font-light font-display tracking-tight"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                Seriously, who am I??
              </motion.h2>
            </section>  

            <motion.p
              className="text-lg leading-relaxed text-[#2C2C2C]/80"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              I'm Dulain — a computer science undergrad who loves digging deep into how things work.
              I'm that guy who can't rest until I understand something to the core, and then I try to explain it 
              in a way that even a 10-year-old could get. 
              I don't just study concepts — I break them apart, rebuild them, and give them my own twist. 
              That's kind of my thing.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-[#2C2C2C]/80"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              I'm also a graphic designer and a video editor who enjoys telling stories — not with words alone, 
              but with visuals, sounds, and rhythm. I've been editing videos and designing flyers for years now, 
              mostly for Toastmasters, and it's become one of my favorite creative outlets. 
              I get a weird amount of joy from making stuff look and feel just right.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-[#2C2C2C]/80"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              I'm a Toastmaster, a violinist, a guitarist, a researcher... basically a polymath — 
              someone who loves doing a lot of different things, and doing them well. 
              Whether I'm on stage speaking, behind the camera shooting, or in front of a screen writing code,
              I always try to bring something unique to the table.
            </motion.p>

            <motion.p
              className="text-lg leading-relaxed text-[#2C2C2C]/80"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              At the end of the day, I'm just someone who likes building cool things, 
              solving problems, and helping others see the fun side of learning.
            </motion.p>


          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="px-4 md:px-6 max-w-7xl mx-auto mb-12">
          <motion.p
            className="text-sm uppercase tracking-widest text-[#2C2C2C]/60 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            02 — Gallery
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-light font-display tracking-tight mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            Behind the scenes
          </motion.h2>
        </div>

        <HorizontalScroll images={galleryImages} />
      </section>

      {/* Section Divider */}
      <div className="relative h-24">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#F8F7F4]/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>

      {/* Selected Work Section */}
      <div className="relative py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div className="mb-16 space-y-2">
          <motion.p
            className="text-sm uppercase tracking-widest text-[#2C2C2C]/60 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            03 — Portfolio
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-light font-display tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected Work
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          initial="hidden"
          animate={workInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
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
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-[#2C2C2C]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                <div className="absolute top-6 left-6">
                  <span className="text-xs tracking-widest text-white/80 font-light">{project.category}</span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-medium text-white font-display">{project.title}</h3>
                  <p className="text-white/80 mt-2 max-w-xs">{project.description}</p>

                  <div className="mt-6 overflow-hidden h-8">
                    <motion.div
                      className="flex items-center text-white/80 text-sm"
                      initial={{ y: 30, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="mr-2">View Project</span>
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="relative h-24">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F7F4]/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>

      {/* Skills Section */}
      <section ref={skillsRef} className="relative py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div className="mb-16 space-y-2">
          <motion.p
            className="text-sm uppercase tracking-widest text-[#2C2C2C]/60 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            04 — Expertise
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-light font-display tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Skills
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 rounded-full border border-[#2C2C2C]/10 text-[#2C2C2C]/80 shadow-md backdrop-blur-sm bg-white/30"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{
                y: -5,
                backgroundColor: "#BCC6B6",
                color: "#2C2C2C",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="relative h-24">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#F8F7F4]/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>

      {/* Contact Section */}
      <section ref={contactRef} className="relative py-24 md:py-32 px-4 md:px-6 max-w-3xl mx-auto">
        <motion.div className="mb-16 space-y-2">
          <motion.p
            className="text-sm uppercase tracking-widest text-[#2C2C2C]/60 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            05 — Connect
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-light font-display tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Contact
          </motion.h2>
        </motion.div>

        <motion.div
          className="space-y-12"
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.form
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-lg text-[#2C2C2C]/80">
                Name
              </label>
              <Input
                id="name"
                className="bg-white/50 backdrop-blur-sm border-[#2C2C2C]/20 rounded-lg p-6 text-lg focus-visible:ring-[#BCC6B6] shadow-md"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-lg text-[#2C2C2C]/80">
                Email
              </label>
              <Input
                id="email"
                type="email"
                className="bg-white/50 backdrop-blur-sm border-[#2C2C2C]/20 rounded-lg p-6 text-lg focus-visible:ring-[#BCC6B6] shadow-md"
                placeholder="Your email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-lg text-[#2C2C2C]/80">
                Message
              </label>
              <Textarea
                id="message"
                className="bg-white/50 backdrop-blur-sm border-[#2C2C2C]/20 rounded-lg p-6 text-lg min-h-[150px] focus-visible:ring-[#BCC6B6] shadow-md"
                placeholder="Your message"
              />
            </div>
            <Button className="w-full bg-[#BCC6B6] hover:bg-[#BCC6B6]/90 text-[#2C2C2C] rounded-lg py-6 text-lg relative overflow-hidden group shadow-lg">
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
              <span className="absolute -inset-px bg-gradient-to-r from-[#BCC6B6] to-[#BCC6B6]/80 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></span>
            </Button>
          </motion.form>

          <motion.div
            className="flex justify-center space-x-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-md"
            >
              <Github className="h-6 w-6 text-[#2C2C2C]/70" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-md"
            >
              <Linkedin className="h-6 w-6 text-[#2C2C2C]/70" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-md"
            >
              <Instagram className="h-6 w-6 text-[#2C2C2C]/70" />
              <span className="sr-only">Instagram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-[#2C2C2C]/10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#BCC6B6]/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "linear",
            }}
          ></motion.div>
        </div>

        <motion.div
          className="text-center text-[#2C2C2C]/60 text-sm uppercase tracking-widest relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © Dulain {new Date().getFullYear()}
        </motion.div>
      </footer>
    </div>
  )
}
