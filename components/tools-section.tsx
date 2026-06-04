"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  ImageIcon, 
  FileText, 
  BarChart3, 
  Link2, 
  Hash,
  Wand2,
  Sparkles,
  PenTool,
  RefreshCw,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Camera,
  Palette
} from "lucide-react"

const categories = [
  { id: "all", label: "All Tools" },
  { id: "seo", label: "SEO" },
  { id: "content", label: "Content" },
  { id: "image", label: "Image" },
  { id: "analytics", label: "Analytics" },
]

const tools = [
  {
    id: 1,
    name: "Keyword Research",
    description: "Find high-volume, low-competition keywords",
    icon: Search,
    category: "seo",
    color: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    id: 2,
    name: "AI Image Generator",
    description: "Create stunning images from text prompts",
    icon: ImageIcon,
    category: "image",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    id: 3,
    name: "Content Writer",
    description: "Generate SEO-optimized articles instantly",
    icon: FileText,
    category: "content",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    name: "Rank Tracker",
    description: "Monitor your search rankings daily",
    icon: BarChart3,
    category: "analytics",
    color: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 5,
    name: "Backlink Analyzer",
    description: "Analyze and monitor your backlink profile",
    icon: Link2,
    category: "seo",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 6,
    name: "Hashtag Generator",
    description: "Find trending hashtags for social media",
    icon: Hash,
    category: "content",
    color: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    id: 7,
    name: "Meta Tag Generator",
    description: "Create perfect meta titles and descriptions",
    icon: Wand2,
    category: "seo",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 8,
    name: "AI Rewriter",
    description: "Rewrite content to be unique and engaging",
    icon: RefreshCw,
    category: "content",
    color: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 9,
    name: "Image Upscaler",
    description: "Enhance image resolution with AI",
    icon: Sparkles,
    category: "image",
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    id: 10,
    name: "Blog Outline",
    description: "Generate structured blog post outlines",
    icon: PenTool,
    category: "content",
    color: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    id: 11,
    name: "Site Audit",
    description: "Complete technical SEO analysis",
    icon: Globe,
    category: "seo",
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    id: 12,
    name: "Traffic Analyzer",
    description: "Understand your website traffic patterns",
    icon: TrendingUp,
    category: "analytics",
    color: "bg-lime-100",
    iconColor: "text-lime-600",
  },
  {
    id: 13,
    name: "Competitor Analysis",
    description: "Spy on competitor SEO strategies",
    icon: Target,
    category: "analytics",
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    id: 14,
    name: "Speed Optimizer",
    description: "Improve page load times and Core Web Vitals",
    icon: Zap,
    category: "seo",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: 15,
    name: "Background Remover",
    description: "Remove backgrounds from images instantly",
    icon: Camera,
    category: "image",
    color: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
  },
  {
    id: 16,
    name: "Color Palette",
    description: "Extract and generate color schemes",
    icon: Palette,
    category: "image",
    color: "bg-sky-100",
    iconColor: "text-sky-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

export function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="tools" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Tools Library
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
            Everything you need in one place
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-pretty">
            Access our full suite of AI-powered tools designed to supercharge your SEO and content workflows.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredTools.map((tool) => (
            <motion.button
              key={tool.id}
              variants={cardVariants}
              className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-200 text-left"
              whileHover={{ y: -4 }}
            >
              <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <tool.icon className={`w-6 h-6 ${tool.iconColor}`} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{tool.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
            </motion.button>
          ))}
        </motion.div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No tools found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
