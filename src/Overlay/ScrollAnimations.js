// ScrollAnimations.js
"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 75 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Reusable animated component
export const AnimatedSection = ({ children, variants = fadeIn, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated list items
export const AnimatedList = ({ items, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.ul
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={fadeIn}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}

// Animated cards
export const AnimatedCard = ({ children, index, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      transition={{ delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated numbers counter
export const AnimatedNumber = ({ value, duration = 2 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [number, setNumber] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value)
      if (start === end) return

      let totalMilSecDur = duration * 1000
      let incrementTime = (totalMilSecDur / end) * 1000

      let timer = setInterval(() => {
        start += 1
        setNumber(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{number}%</span>
}

export default function ScrollAnimations() {
  // This is a provider component that would wrap your entire app
  // But we'll implement the animations directly in the Overlay component
  return null
}