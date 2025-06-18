"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Play, ChevronLeft } from "lucide-react"

const flyers = [
  {
    id: 1,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialMain.jpg",
    link: "https://www.instagram.com/p/DDrd-YDvxXD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 2,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennial2days.jpg",
    link: "https://www.instagram.com/p/DEE59zHv1ji/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 3,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialTomorrow.jpg",
    link: "https://www.instagram.com/p/DEHOkRIPlUI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 4,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialCountdown1.png",
    link: "https://www.instagram.com/p/DDlhihTPjy_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 5,
    title: "Central Centennial",
    date: "December 2024",
    image: "/flyers/centennialCountdown2.png",
    link: "https://www.instagram.com/p/DDoOBS0t4bv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 6,
    title: "Themed Meeting",
    date: "January 2025",
    image: "/flyers/laksTMOD.png",
    link: "https://www.instagram.com/p/DEm6YwAv6BM/?utm_source=ig_web_copy_link"
  },
  {
    id: 7,
    title: "Promotional Flyer",
    date: "January 2025",
    image: "/flyers/CLTCpromo.jpg",
    link: "https://www.instagram.com/p/DFX49fGPwmw/?utm_source=ig_web_copy_link"
  },
  {
    id: 8,
    title: "New Year Flyer",
    date: "January 2025",
    image: "/flyers/clubNewYear.jpg",
    link: "https://www.instagram.com/p/DERi5dBv6b9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 9,
    title: "New Year Flyer",
    date: "January 2025",
    image: "/flyers/divisionNewYear.png",
    link: "https://www.instagram.com/p/DEQX2oaBpbl/?utm_source=ig_web_copy_link"
  },
  {
    id: 10,
    title: "Newsletter Announcement",
    date: "April 2025",
    image: "/flyers/emergeFlyer1.jpg",
    link: "https://www.instagram.com/p/DH-87rHhtGr/?utm_source=ig_web_copy_link"
  },
  {
    id: 11,
    title: "Newsletter Announcement",
    date: "April 2025",
    image: "/flyers/emergeFlyer2.jpg",
    link: "https://www.instagram.com/p/DH-8478hN0x/?utm_source=ig_web_copy_link"
  },
  {
    id: 12,
    title: "Halloween 2023",
    date: "November 2023",
    image: "/flyers/halloween.jpg",
    link: "#"
  },
  {
    id: 13,
    title: "Division Council Meeting",
    date: "June 2025",
    image: "/flyers/councilMeeting.jpg",
    link: "https://www.instagram.com/p/DIt6PPYy9Yd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 14,
    title: "Division Council Meeting Agenda",
    date: "June 2025",
    image: "/flyers/councilMeetingAgenda.jpg",
    link: "https://www.instagram.com/p/DIt6PPYy9Yd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 15,
    title: "Good Luck Flyer for TM Farweez",
    date: "May 2025",
    image: "/flyers/tripleThreat.png",
    link: "https://www.instagram.com/p/DJTxl_Svxdc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 16,
    title: "Good Luck Flyer for District semi's",
    date: "May 2025",
    image: "/flyers/semisGoodluck.jpg",
    link: "https://www.instagram.com/p/DJHHkmHPEqn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 17,
    title: "Awareness Program at ESOFT",
    date: "June 2025",
    image: "/flyers/esoftAwareness.jpg",
    link: "#"
  },
  {
    id: 18,
    title: "Thank You Flyer for DTM Yasir",
    date: "July 2024",
    image: "/flyers/yasirThanks.jpg",
    link: "https://www.instagram.com/p/C9L8vL2q5T1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 19,
    title: "Themed Meeting",
    date: "May 2024",
    image: "/flyers/laworder.jpg",
    link: "https://www.instagram.com/p/C7GzWzXPLfP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 20,
    title: "TMPL 2024",
    date: "February 2024",
    image: "/flyers/TMPL2024.png",
    link: "https://www.instagram.com/p/C2Fg9kwtoeC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 21,
    title: "TMPL 2025",
    date: "May 2025",
    image: "/flyers/TMPLwebsite.png",
    link: "https://www.instagram.com/p/DJdUhX9BqjB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 22,
    title: "HSC & ESC 2024",
    date: "September 2024",
    image: "/flyers/HSCmain.jpg",
    link: "https://www.instagram.com/p/C_seABUPP8k/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 23,
    title: "HSC & ESC 2024",
    date: "September 2024",
    image: "/flyers/HSCchair.jpg",
    link: "https://www.instagram.com/p/C_uPo4tPYbT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 24,
    title: "HSC & ESC 2024",
    date: "September 2024",
    image: "/flyers/HSCmasters.jpg",
    link: "https://www.instagram.com/p/C_uPzxVvskD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 25,
    title: "HSC & ESC 2024",
    date: "September 2024",
    image: "/flyers/HSCtomorrow.jpg",
    link: "https://www.instagram.com/p/C_4jBRvtpo7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 26,
    title: "Exco 24/25",
    date: "July 2025",
    image: "/flyers/exco24.jpg",
    link: "https://www.instagram.com/p/C9Uvh_IvFRW/?utm_source=ig_web_copy_link"
  },
  {
    id: 24,
    title: "Themed Meeting",
    date: "February 2025",
    image: "/flyers/valentine.png",
    link: "https://www.instagram.com/p/DGVW186PmaZ/?utm_source=ig_web_copy_link"
  },
  {
    id: 25,
    title: "Newsletter Cover",
    date: "Read Emerge",
    image: "/flyers/emergeCover.jpg",
    link: "#"
  },
  {
    id: 26,
    title: "Themed Meeting",
    date: "October 2023",
    image: "/flyers/friendship.jpg",
    link: "https://www.instagram.com/p/CyC2nP1tqni/?utm_source=ig_web_copy_link"
  },
  {
    id: 27,
    title: "Themed Meeting",
    date: "July 2024",
    image: "/flyers/devsTMOD.jpg",
    link: "https://www.instagram.com/p/C8_oGCcP0kw/?utm_source=ig_web_copy_link"
  },
  {
    id: 28,
    title: "Division Conference - J&F",
    date: "January 2025",
    image: "/flyers/JFteaser.png",
    link: "https://www.instagram.com/p/DFOu2X7Mejv/?utm_source=ig_web_copy_link"
  },
  {
    id: 29,
    title: "Division Conference - J&F",
    date: "January 2025",
    image: "/flyers/JFmain.jpg",
    link: "https://www.instagram.com/p/DGKbo4ovWF_/?utm_source=ig_web_copy_link"
  },
  {
    id: 30,
    title: "Division Conference - J&F",
    date: "January 2025",
    image: "/flyers/JFregsOpen.png",
    link: "https://www.instagram.com/p/DGhVkkvvMj8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 31,
    title: "Division Conference - J&F",
    date: "January 2025",
    image: "/flyers/JFregs.png",
    link: "https://www.instagram.com/p/DHVH5dvPhKh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 32,
    title: "Division Conference - J&F",
    date: "January 2025",
    image: "/flyers/JFregsClose.png",
    link: "https://www.instagram.com/p/DHnaJOZvUGv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 32,
    title: "Division Conference - J&F",
    date: "January 2025",
    image: "/flyers/JFregsClose.png",
    link: "https://www.instagram.com/p/DHnaJOZvUGv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: 33,
    title: "Division Conference - J&F",
    date: "January 2025",
    image: "/flyers/JFvolunteers.png",
    link: "#"
  },
  {
    id: 34,
    title: "Good Luck Flyer for TM Farweez",
    date: "May 2025",
    image: "/flyers/",
    link: "#"
  },{
    id: 34,
    title: "Good Luck Flyer for TM Farweez",
    date: "May 2025",
    image: "/flyers/",
    link: "#"
  },{
    id: 34,
    title: "Good Luck Flyer for TM Farweez",
    date: "May 2025",
    image: "/flyers/",
    link: "#"
  },{
    id: 34,
    title: "Good Luck Flyer for TM Farweez",
    date: "May 2025",
    image: "/flyers/",
    link: "#"
  },
]

export default function FlyersPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

      <Link
          href="/"
          className="inline-flex items-center text-[#F4F4F5]/70 hover:text-[#F4F4F5] transition-colors mb-12"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          <span className="text-sm tracking-wide">Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-[#F4F4F5]/60 font-light">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">Graphic Design Portfolio</h1>
          <p className="text-zinc-400 mt-4">A collection of event flyers and promotional materials</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flyers.map((flyer, index) => (
            <motion.div
              key={flyer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800"
            >
              <Image
                src={flyer.image}
                alt={flyer.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-light">{flyer.title}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{flyer.date}</p>
                  <Link
                    href={flyer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full border border-zinc-400 text-zinc-400 hover:bg-zinc-400 hover:text-zinc-900 transition-colors duration-200"
                  >
                    View on Instagram
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 