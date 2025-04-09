"use client"

import { useEffect } from "react"

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor")

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }
    }

    const growCursor = () => {
      if (cursor) {
        cursor.classList.add("scale-150")
        cursor.classList.add("border-[#00FFAA]")
      }
    }

    const shrinkCursor = () => {
      if (cursor) {
        cursor.classList.remove("scale-150")
        cursor.classList.remove("border-[#00FFAA]")
      }
    }

    window.addEventListener("mousemove", moveCursor)

    const links = document.querySelectorAll("a, button, [role='button']")
    links.forEach((link) => {
      link.addEventListener("mouseenter", growCursor)
      link.addEventListener("mouseleave", shrinkCursor)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      links.forEach((link) => {
        link.removeEventListener("mouseenter", growCursor)
        link.removeEventListener("mouseleave", shrinkCursor)
      })
    }
  }, [])

  return null
}
