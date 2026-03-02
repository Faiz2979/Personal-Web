"use client"

import { useEffect, useRef, useState } from "react"

interface TypewriterProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
  className?: string
  hoverable?: boolean
  loop?: boolean
}

export default function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  delayBetween = 1200,
  className = "",
  hoverable = false,
  loop = true,
}: TypewriterProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [hovered, setHovered] = useState(false)
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  useEffect(() => {
    if (hovered) return
    if (!words.length) return

    let charIndex = 0
    let isDeleting = false
    let wordIndex = activeWordIndex

    const type = () => {
      const currentWord = words[wordIndex]
      const currentText = currentWord.substring(0, charIndex)

      if (textRef.current) {
        textRef.current.textContent = currentText
      }

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++
      } else if (isDeleting && charIndex > 0) {
        charIndex--
      } else {
        if (!isDeleting) {
          if (!loop && wordIndex === words.length - 1) {
            return // stop completely
          }
          isDeleting = true
          timeoutRef.current = setTimeout(type, delayBetween)
          return
        } else {
          isDeleting = false
          wordIndex = (wordIndex + 1) % words.length
          setActiveWordIndex(wordIndex)
        }
      }

      timeoutRef.current = setTimeout(
        type,
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    type()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [
    words,
    typingSpeed,
    deletingSpeed,
    delayBetween,
    hovered,
    loop,
    activeWordIndex,
  ])

  const handleSelectWord = (index: number) => {
    setActiveWordIndex(index)
    if (textRef.current) {
      textRef.current.textContent = words[index]
    }
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
    >
      {/* Main Text */}
      <span
        className={`${className} transition-colors duration-300 ${
          hoverable ? "hover:text-[#e83838]" : ""
        }`}
      >
        <span ref={textRef}></span>
        <span className="animate-pulse ml-1">|</span>
      </span>

      {/* Dropdown */}
      {hoverable && (
        <div
          className={`absolute left-0 top-full mt-3 w-max bg-black border border-red rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
            hovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          {words.map((word, index) => (
            <div
              key={index}
              onClick={() => handleSelectWord(index)}
              className="px-4 py-2 text-white hover:bg-primary transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {word}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}