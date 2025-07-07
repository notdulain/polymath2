"use client"

import { useEffect, useRef, useState } from "react"
import { Compass, Briefcase, Rocket } from "lucide-react"

export default function AboutMeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const columns = [
    {
      icon: Compass,
      title: "Who I Am",
      content:
        "I'm a curious creator who believes the best solutions come from understanding people, not just problems.",
    },
    {
      icon: Briefcase,
      title: "What I Do",
      content:
        "I build digital experiences that matter — from clean code to thoughtful design, always with the user in mind.",
    },
    {
      icon: Rocket,
      title: "What I'm Good At",
      content: "I turn complex ideas into simple solutions, learn fast, and tell stories that connect.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fafafa 0%, #f8f9fa 50%, #ffffff 100%)",
      }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-[0.03] blur-3xl animate-float-slow"
          style={{
            background: "radial-gradient(circle, #9ACCA7 0%, transparent 70%)",
            top: "10%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-[0.04] blur-2xl animate-float-reverse"
          style={{
            background: "radial-gradient(circle, #e5e7eb 0%, transparent 70%)",
            top: "60%",
            right: "15%",
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-[0.02] blur-2xl animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, #9ACCA7 0%, transparent 70%)",
            bottom: "20%",
            left: "20%",
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#9ACCA7] rounded-full opacity-10 animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 backdrop-blur-[0.5px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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
                <div className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/20 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-gray-200/60 hover:-translate-y-2 transition-all duration-500 group-hover:bg-white/60">
                  {/* Card Inner Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-[#9ACCA7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Enhanced Icon Container */}
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-100/80 group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/40">
                      <Icon
                        className="w-7 h-7 text-[#9ACCA7] group-hover:text-[#8BC49A] transition-all duration-300"
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
                    <h3 className="text-lg font-semibold text-gray-900 tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                      {column.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-xs mx-auto font-light group-hover:text-gray-700 transition-colors duration-300">
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
