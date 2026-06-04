"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

const companyLogos = [
  { name: "Vercel", svg: <svg viewBox="0 0 76 65" fill="currentColor" className="h-5 w-auto"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" /></svg> },
  { name: "Stripe", svg: <svg viewBox="0 0 60 25" fill="currentColor" className="h-5 w-auto"><path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM41.04 20.8h4.18V5.52h-4.18v15.28zM43.13 0a2.42 2.42 0 1 1 0 4.84 2.42 2.42 0 0 1 0-4.84zm-8.55 5.52l-.14 1.47h-.1c-.62-.98-1.76-1.68-3.45-1.68-3.37 0-5.59 3.18-5.59 7.29 0 4.87 2.64 7.2 5.36 7.2 1.3 0 2.6-.5 3.5-1.67h.1l.13 1.47h3.85V5.52h-3.66zm.02 8.17c0 1.82-.88 3.3-2.43 3.3-1.25 0-2.25-1.05-2.25-3.16 0-2.3 1.15-3.4 2.35-3.4 1.47 0 2.33 1.22 2.33 3.26zM18.71 5.52h4.18v15.28h-4.18V5.52zm2.09-5.52a2.42 2.42 0 1 1 0 4.84 2.42 2.42 0 0 1 0-4.84zM9.36 5.52l-.14 1.47h-.1c-.62-.98-1.76-1.68-3.45-1.68C2.3 5.31.08 8.49.08 12.6c0 4.87 2.64 7.2 5.36 7.2 1.3 0 2.6-.5 3.5-1.67h.1l.13 1.47H13V5.52H9.36zm.02 8.17c0 1.82-.88 3.3-2.43 3.3-1.25 0-2.25-1.05-2.25-3.16 0-2.3 1.15-3.4 2.35-3.4 1.47 0 2.33 1.22 2.33 3.26z" /></svg> },
  { name: "Notion", svg: <svg viewBox="0 0 100 100" fill="currentColor" className="h-5 w-auto"><path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fillRule="evenodd" /><path d="M61.35.227l-55.333 4.087c-4.467.387-6.017 3.303-6.017 6.8v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.81-2.863-3.303-4.617l-18.24-12.88c-4.273-3.107-6.02-3.5-12.817-2.917zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.387 6.793 1.167 8.537 2.527l9.123 6.61c.39.197.967 1.17-.193 1.17l-54.993 3.347-.23.197zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.387 4.667-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887l-19.03-29.94v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97V36.2l-4.857-.39c-.387-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327V34.84l-5.053-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.897z" fill="#fff" fillRule="evenodd" /></svg> },
  { name: "Linear", svg: <svg viewBox="0 0 100 100" fill="currentColor" className="h-5 w-auto"><path d="M1.22 61.44c-.08-1.25-.08-2.52-.08-3.9v-2.48c0-1.4 0-2.68.08-3.88.23-3.75.86-7.16 2.2-10.4a33.27 33.27 0 0 1 7.29-10.32L39.29 1.22c1.62.76 3.14 1.68 4.52 2.73L2.73 43.81c-1.05 1.38-1.97 2.9-2.73 4.52l29.24 29.24c-1.38 1.05-2.9 1.97-4.52 2.73L1.22 61.44zM9.13 73.58l17.29 17.29c1.82-.37 3.55-.93 5.17-1.68L7.45 68.41a33.27 33.27 0 0 0 1.68 5.17zm-2.42-5.07l24.78 24.78c1.08-.21 2.12-.49 3.14-.84L6.22 72.04c.35-1.02.63-2.06.84-3.14l24.43-24.43c.31-1.64.31-3.35.31-5.17v-.6c0-1.81 0-3.53-.31-5.17L6.71 58.51c-.21 1.08-.49 2.12-.84 3.14L30.22 86.5c-1.02.35-2.06.63-3.14.84L6.65 66.91c-.08.84-.08 1.72-.08 2.65v.3c0 .93 0 1.81.08 2.65l-24.43-24.43c.31 1.64.31 3.36.31 5.17v.6c0 1.82 0 3.53-.31 5.17l24.78 24.78c1.08.21 2.12.49 3.14.84zm4.9 21.28A49.96 49.96 0 0 0 50 100c27.61 0 50-22.39 50-50S77.61 0 50 0a49.96 49.96 0 0 0-38.39 17.89l38.39 38.39v37.51zM43.72 2.95L2.95 43.72c-.51-2.11-.85-4.27-1.03-6.49L36.2 2.95C33.98 3.13 31.82 3.47 29.71 2.95L43.72 2.95zm-20.51 1.16L1.11 26.21c.72-2.33 1.64-4.55 2.73-6.65l12.72-12.72c2.1-1.09 4.32-2.01 6.65-2.73zM56.28 97.05l40.77-40.77c-.18 2.22-.52 4.38-1.03 6.49l-33.25 33.25a49.24 49.24 0 0 1-6.49 1.03zm20.51-1.16L98.89 73.79c-.72 2.33-1.64 4.55-2.73 6.65L83.44 93.16c-2.1 1.09-4.32 2.01-6.65 2.73z" /></svg> },
  { name: "Figma", svg: <svg viewBox="0 0 38 57" fill="currentColor" className="h-5 w-auto"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" /><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" /><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" /><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" /><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" /></svg> },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-1/4 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-1/2 w-72 h-72 bg-purple-100/60 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/5 w-56 h-56 bg-pink-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-slate-600">{"Now with GPT-5 integration"}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-slate-900">AI-Powered </span>
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              SEO & Content
            </span>
            <br />
            <span className="text-slate-900">Tools for Growth</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Automate your SEO workflows, monitor brand mentions, and discover trending topics 
            with intelligent agents that work 24/7 to grow your online presence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white border-0 px-8 h-12 text-base shadow-lg shadow-violet-500/25"
              asChild
            >
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-12 px-8 text-base bg-white/80 hover:bg-white"
            >
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-12 flex items-center justify-center gap-8 sm:gap-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                <AnimatedCounter value={50} suffix="K+" />
              </div>
              <div className="text-sm text-slate-500">Active Users</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                <AnimatedCounter value={2} suffix="M+" />
              </div>
              <div className="text-sm text-slate-500">Pages Optimized</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                <AnimatedCounter value={99} suffix=".9%" />
              </div>
              <div className="text-sm text-slate-500">Uptime</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Logos */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap opacity-60 grayscale">
            {companyLogos.map((company, index) => (
              <motion.div 
                key={company.name} 
                className="text-slate-400 hover:text-slate-600 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                {company.svg}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
