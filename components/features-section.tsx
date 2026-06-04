"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, MessageSquare, Eye, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "SEO Agent",
    description: "Automatically analyze your content, suggest improvements, and track keyword rankings across all major search engines.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    highlights: ["Keyword Research", "Content Optimization", "Rank Tracking"],
  },
  {
    icon: MessageSquare,
    title: "Reddit Agent",
    description: "Discover trending topics, monitor relevant discussions, and find content opportunities across thousands of subreddits.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
    highlights: ["Trend Detection", "Discussion Analysis", "Opportunity Finder"],
  },
  {
    icon: Eye,
    title: "Brand Monitor",
    description: "Track mentions of your brand across the web, analyze sentiment, and respond to conversations in real-time.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    highlights: ["Real-time Alerts", "Sentiment Analysis", "Competitor Watch"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            AI Agents
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
            Intelligent agents that work while you sleep
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-pretty">
            Our AI-powered agents continuously monitor, analyze, and optimize your online presence 
            so you can focus on what matters most.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className={`relative group rounded-2xl p-8 ${feature.bgColor} border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-6">
                {feature.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/80 text-slate-700 border border-slate-200/50"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#"
                className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
              >
                Learn more
                <ArrowRight className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
