"use client"

import { useEffect, useRef, useState } from "react"
import { Compass, Briefcase, Rocket } from "lucide-react"
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import { cn } from "@/lib/utils";

export default function AboutMeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [particles, setParticles] = useState<{left: number, top: number, delay: number, duration: number}[]>([]);
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Generate random particles only on client
    setParticles(
      Array.from({ length: 12 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 15 + Math.random() * 10,
      }))
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // --- Interactive Dots Background Logic (from HeroHighlight) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const dotPatterns = {
    light: {
      default:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E\")",
      hover:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E\")",
    },
    dark: {
      default:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E\")",
      hover:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E\")",
    },
  };

  const columns = [
    {
      icon: Compass,
      title: "Who I Am",
      content:
        "Computer Science Undergraduate at SLIIT (the card doesn't have much space smh)",
    },
    {
      icon: Briefcase,
      title: "What I Do",
      content:
        "Code full-stack apps, Edit Videos, Design Graphics and a LOT more",
    },
    {
      icon: Rocket,
      title: "What I'm Good At",
      content: "What I do. And... solving problems, learning fast & public speaking. Also I can make a good french toast",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden bg-transparent"
      onMouseMove={handleMouseMove}
    >
      {/* Blurred Hero Image Background */}
      <div className="pointer-events-none absolute inset-0 z-[-2]">
        <img
          src="/mainPortrait2.jpg"
          alt="Blurred hero background"
          className="w-full h-full object-cover object-[50%_100%] blur-3xl scale-110 opacity-60"
          draggable={false}
        />
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/35" />
      </div>
      {/* Interactive Dots Background */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        {/* Base dot pattern */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{ backgroundImage: dotPatterns.light.default }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ backgroundImage: dotPatterns.dark.default }}
        />
        {/* Zoomed dot pattern at cursor */}
        <motion.div
          className="absolute inset-0 dark:hidden"
          style={{
            pointerEvents: 'none',
            backgroundImage: dotPatterns.light.default,
            backgroundSize: '200%',
            backgroundPosition: `${-0.5 * mouseX.get() + 100}px ${-0.5 * mouseY.get() + 100}px`,
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                120px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                120px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            opacity: 0.7,
          }}
        />
        <motion.div
          className="absolute inset-0 hidden dark:block"
          style={{
            pointerEvents: 'none',
            backgroundImage: dotPatterns.dark.default,
            backgroundSize: '200%',
            backgroundPosition: `${-0.5 * mouseX.get() + 100}px ${-0.5 * mouseY.get() + 100}px`,
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                120px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                120px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            opacity: 0.7,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#9ACCA7] rounded-full opacity-10 animate-float-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism Overlay (optional, can be commented out if it blocks background) */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 backdrop-blur-[0.5px] z-0" /> */}

      <div className="relative max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-32 w-full min-w-0 justify-items-center">
          {columns.map((column, index) => {
            const Icon = column.icon
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                {/* Glassmorphism Card */}
                <div className="relative px-6 py-8 md:px-10 md:py-12 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-2 transition-all duration-500 group-hover:bg-white/60 w-full max-w-[340px] min-w-[260px] h-[200px] min-h-[200px] md:max-w-[480px] md:h-[300px] flex flex-col justify-center">
                  {/* Card Inner Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-[#9ACCA7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Enhanced Icon Container */}
                    <div className="inline-flex items-center justify-center w-10 h-10 md:w-20 md:h-20 mb-4 md:mb-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-100/80 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/40">
                      <Icon
                        className="w-6 h-6 md:w-10 md:h-10 text-[#9ACCA7] group-hover:text-[#8BC49A] transition-all duration-300"
                        strokeWidth={1.5}
                      />

                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-[#9ACCA7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    </div>

                    {/* Enhanced Separator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#9ACCA7]/40 to-transparent group-hover:w-16 group-hover:via-[#9ACCA7]/60 transition-all duration-500"></div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-base md:text-2xl font-semibold text-grey-900 tracking-tight group-hover:text-grey-800 transition-colors duration-300">
                      {column.title}
                    </h3>
                    <p className="text-xs md:text-lg text-grey-900 leading-relaxed max-w-xs mx-auto font-grey-900 group-hover:text-grey-900 transition-colors duration-300">
                      {column.content}
                    </p>
                  </div>

                  {/* Enhanced Hover Border */}
                  <div className="absolute inset-0 rounded-3xl border border-[#9ACCA7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Enhanced Bottom Accent with Parallax */}
        <div
          className="mt-16 flex justify-center"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          <div className="relative">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#9ACCA7]/50 to-transparent"></div>
            <div className="absolute inset-0 w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.02; transform: scale(1); }
          50% { opacity: 0.04; transform: scale(1.1); }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          10% { opacity: 0.1; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
    </section>
  )
}
