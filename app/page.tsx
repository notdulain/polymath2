"use client"

import { useRef, useState, useEffect, RefObject } from "react"
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
import Link from "next/link"
import AboutMeSection from "@/components/aboutme-section"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showNavbar, setShowNavbar] = useState(true)

  const heroRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const workRef = useRef<HTMLDivElement | null>(null)
  const skillsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

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
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout",
      image: "/placeholder.svg?height=600&width=800",
      category: "DEVELOPMENT",
      link: "#",
    },
    {
      title: "Travel Journal App",
      description: "Document adventures with an intuitive mobile interface",
      image: "/placeholder.svg?height=600&width=800",
      category: "MOBILE",
      link: "#",
    },
    {
      title: "Music Visualization",
      description: "Interactive audio experience with custom animations",
      image: "/placeholder.svg?height=600&width=800",
      category: "CREATIVE",
      link: "#",
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

  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen relative text-[#2C2C2C] overflow-hidden">
      {/* Patterned Background */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundColor: "#f7f7f7",
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
        }}
        aria-hidden="true"
      />

      {/* Minimal Centered Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-7 bg-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "About", ref: aboutRef },
            { name: "Work", ref: workRef },
            { name: "Skills", ref: skillsRef },
            { name: "Contact", ref: contactRef },
          ].map((item, index) => (
            <motion.button
              key={index}
              className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-light focus:outline-none"
              whileHover={{ scale: 1.13 }}
              whileFocus={{ scale: 1.13 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              onClick={() => scrollToSection(item.ref)}
              style={{ background: 'none', border: 'none', outline: 'none' }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
        {/* Hamburger for Mobile */}
        <div className="flex md:hidden w-full justify-end pr-6">
          <button
            className="flex flex-col justify-center items-center w-9 h-9 group"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white/80 rounded transition-all duration-300 group-hover:scale-x-110"></span>
            <span className="block w-6 h-0.5 bg-white/80 rounded mt-1.5 transition-all duration-300 group-hover:scale-x-110"></span>
            <span className="block w-6 h-0.5 bg-white/80 rounded mt-1.5 transition-all duration-300 group-hover:scale-x-110"></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#181818] bg-opacity-95 z-50 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-7 w-7 text-white/80" />
            </button>
            <div className="flex flex-col space-y-8 items-center">
              {[
                { name: "About", ref: aboutRef },
                { name: "Work", ref: workRef },
                { name: "Skills", ref: skillsRef },
                { name: "Contact", ref: contactRef },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  className="text-base uppercase tracking-widest text-white/90 font-light focus:outline-none"
                  whileHover={{ scale: 1.15 }}
                  whileFocus={{ scale: 1.15 }}
                  onClick={() => { scrollToSection(item.ref); setIsMenuOpen(false); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 18, duration: 0.4, delay: 0.1 * index }}
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
              src="/mainPortrait2.jpg?height=1080&width=1920"
              alt="Dulain portrait"
              fill
              className="object-cover object-[80%] md:object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/70 to-transparent"></div>
            {/* <div className="absolute inset-0 bg-[#2C2C2C]/10"></div> */}
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
                className="text-3xl md:text-4xl font-light tracking-wide font-display text-white/90"
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
                An individual whose knowledge spans many different subjects and diverse creative skills — one who thrives at the intersection of
                science, art and philosophy.
              </p>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-md pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              I design visuals, edit stories, and use code to bring creative ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                className="mt-8 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full px-8 py-6 relative overflow-hidden group"
                onClick={() => scrollToSection(aboutRef)}
              >
                <span className="relative z-10">Who is this Dulain?</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
                <span className="absolute -inset-px bg-gradient-to-r from-white/30 to-white/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 rounded-full"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content (sections) */}
      <div className="relative z-10">
        {/* About Me Section
        <AboutMeSection /> */}

        {/* Combined Work Section with Tabs - moved immediately after AboutMeSection */}
        <section className="relative pt-10 md:pt-16 pb-24 md:pb-32 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-zinc-700 mb-10">My Work</h2>
            {/* Tabs with animated selector */}
            {(() => {
              const tabList = ['Projects', 'Designs', 'Videos', 'Photography'];
              const [activeTab, setActiveTab] = useState('Projects');
              const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
              const [selectorStyle, setSelectorStyle] = useState({ left: 0, width: 0 });

              // Update selector position on tab change
              const updateSelector = (tab: string) => {
                const idx = tabList.indexOf(tab);
                const btn = tabRefs.current[idx];
                if (btn) {
                  const rect = btn.getBoundingClientRect();
                  const parentRect = btn.parentElement?.getBoundingClientRect();
                  if (parentRect) {
                    setSelectorStyle({ left: rect.left - parentRect.left, width: rect.width });
                  }
                }
              };

              // On mount and tab change
              useEffect(() => {
                updateSelector(activeTab);
                // Recalculate on window resize
                const handleResize = () => updateSelector(activeTab);
                window.addEventListener('resize', handleResize);
                return () => window.removeEventListener('resize', handleResize);
              }, [activeTab]);

              return (
                <div className="div className=flex overflow-x-auto no-scrollbar gap-2 px-2">
                  {/* Animated selector */}
                  <div
                    className="absolute bottom-0 h-9 md:h-10 transition-all duration-300 z-0"
                    style={{ left: selectorStyle.left, width: selectorStyle.width, pointerEvents: 'none' }}
                  >
                    <div className="w-full h-full rounded-full border-2 border-zinc-400 transition-all duration-300 px-5" />
                  </div>
                  {tabList.map((tab, idx) => (
                    <button
                      key={tab}
                      ref={el => { tabRefs.current[idx] = el; }}
                      className={
                        "relative z-10 text-[11px] md:text-base uppercase tracking-widest font-zinc px-2 md:px-5 py-1 md:py-2 rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 " +
                        (activeTab === tab
                          ? "text-zinc-700 font-semibold"
                          : "text-zinc-700 hover:bg-white/10")
                      }
                      style={{ minWidth: 64 }}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              );
            })()}
            {/* TODO: Add tab content here */}
            <div className="w-full min-h-[300px] flex items-center justify-center text-white/60 text-lg font-light">
              Select a tab to view content.
            </div>
          </div>
        </section>

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

              <section ref={aboutRef} className="relative">
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
                Long story short: I'm Dulain Gunawardhana — born and raised in the scenic hills of Hanthana, Kandy. 
                I studied at Dharmaraja College from grade 1 all the way through A/Ls, 
                and now Im a second-year undergraduate at SLIIT, working my way through a BSc in Computer Science.
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
               I'm also someone who wears many hats — editor, reader, violinist, guitarist, researcher, coder — 
               constantly jumping between the creative and the technical, and loving every bit of it.
              </motion.p>

            </motion.div>
          </motion.div>
        </section>

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
                href="https://github.com/notdulain"
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
                href="https://www.linkedin.com/in/dulain-nethwin-gunawardhana-41b251294/"
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
                href="https://instagram.com/notdulain/"
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
      </div>

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
