"use client"

import { motion } from "framer-motion"

export function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-violet-200/50 to-transparent rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-200/50 to-transparent rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-purple-200/40 to-transparent rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-indigo-200/30 to-transparent rounded-full blur-3xl"
      />

      {/* Small floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full bg-violet-400/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        />
      ))}
    </div>
  )
}
