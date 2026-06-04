"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Animated rings */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-20 h-20 rounded-full bg-violet-200 mx-auto"
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          />
          <motion.div
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute inset-0 w-20 h-20 rounded-full bg-blue-200 mx-auto"
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
          />

          {/* Logo */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center mx-auto shadow-lg"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6"
        >
          <h2 className="text-xl font-bold text-slate-900">SeoBrain</h2>
          <motion.div className="flex items-center justify-center gap-1 mt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                className="w-2 h-2 rounded-full bg-violet-600"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
