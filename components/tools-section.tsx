"use client"

import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
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
  Palette,
  Bot,
  ClipboardCheck,
  Brain,
  KeyRound,
  Eye,
  Gauge,
  Type,
  Code,
  Mic,
  FileCode,
  ScanSearch,
  ShieldCheck,
  FileJson,
  MapPin,
  Tags,
  Eraser,
  MessageSquare,
  Calculator,
  Clock,
  ArrowUpFromLine,
  Minimize2,
  RotateCcw,
  ShieldOff,
  Layers,
  Scissors,
  Expand,
  AlignLeft,
  Activity,
  Users
} from "lucide-react"

const categories = [
  { id: "all", label: "All Tools" },
  { id: "image", label: "Image" },
  { id: "seo", label: "SEO" },
  { id: "writing", label: "AI Writing" },
  { id: "analytics", label: "Analytics" },
  { id: "utility", label: "Utility" },
  { id: "agents", label: "Agents" },
]

const tools = [
  // IMAGE TOOLS (9) - Free
  {
    id: 1,
    name: "AI Image Generator",
    description: "Generate images from text prompts",
    icon: ImageIcon,
    category: "image",
    tier: "Free",
    slug: "ai-image-generator",
  },
  {
    id: 2,
    name: "Image Compressor",
    description: "Reduce image size without quality loss",
    icon: Minimize2,
    category: "image",
    tier: "Free",
    slug: "image-compressor",
  },
  {
    id: 3,
    name: "Image Format Converter",
    description: "Convert JPG PNG WebP AVIF instantly",
    icon: RefreshCw,
    category: "image",
    tier: "Free",
    slug: "image-format-converter",
  },
  {
    id: 4,
    name: "Background Remover",
    description: "Remove image background with AI",
    icon: Camera,
    category: "image",
    tier: "Free",
    slug: "background-remover",
  },
  {
    id: 5,
    name: "Image Upscaler",
    description: "Upscale image to 4x resolution with AI",
    icon: ArrowUpFromLine,
    category: "image",
    tier: "Free",
    slug: "image-upscaler",
  },
  {
    id: 6,
    name: "AI Image Detector",
    description: "Detect if image is AI generated",
    icon: ScanSearch,
    category: "image",
    tier: "Free",
    slug: "ai-image-detector",
  },
  {
    id: 7,
    name: "Watermark Remover",
    description: "Remove SynthID Gemini ChatGPT watermarks",
    icon: Eraser,
    category: "image",
    tier: "Free",
    slug: "watermark-remover",
  },
  {
    id: 8,
    name: "Blog Image Generator",
    description: "Generate SEO optimized blog cover images",
    icon: Layers,
    category: "image",
    tier: "Free",
    slug: "blog-image-generator",
  },
  {
    id: 9,
    name: "Alt Text Generator",
    description: "Generate SEO friendly alt text for images",
    icon: Type,
    category: "image",
    tier: "Free",
    slug: "alt-text-generator",
  },

  // SEO TOOLS (17)
  {
    id: 10,
    name: "SEO Agent",
    description: "24/7 automated SEO specialist",
    icon: Bot,
    category: "seo",
    tier: "Pro",
    slug: "seo-agent",
  },
  {
    id: 11,
    name: "SEO Audit",
    description: "Full site audit 47+ issues checked",
    icon: ClipboardCheck,
    category: "seo",
    tier: "Free",
    slug: "seo-audit",
  },
  {
    id: 12,
    name: "AI Grader",
    description: "Score content for AI search visibility",
    icon: Brain,
    category: "seo",
    tier: "Free",
    slug: "ai-grader",
  },
  {
    id: 13,
    name: "LLM Optimizer",
    description: "Optimize content for AI systems",
    icon: Sparkles,
    category: "seo",
    tier: "Pro",
    slug: "llm-optimizer",
  },
  {
    id: 14,
    name: "Keyword Rank Checker",
    description: "Check exact Google keyword positions",
    icon: KeyRound,
    category: "seo",
    tier: "Free",
    slug: "keyword-rank-checker",
  },
  {
    id: 15,
    name: "Competitor Keywords",
    description: "Reveal competitor top keywords",
    icon: Eye,
    category: "seo",
    tier: "Pro",
    slug: "competitor-keywords",
  },
  {
    id: 16,
    name: "SEO Ranking Checker",
    description: "Check website overall SEO performance",
    icon: Gauge,
    category: "seo",
    tier: "Free",
    slug: "seo-ranking-checker",
  },
  {
    id: 17,
    name: "Keyword Density Checker",
    description: "Analyze keyword usage in content",
    icon: Target,
    category: "seo",
    tier: "Free",
    slug: "keyword-density-checker",
  },
  {
    id: 18,
    name: "Schema Markup Generator",
    description: "Generate JSON-LD schema markup",
    icon: Code,
    category: "seo",
    tier: "Free",
    slug: "schema-markup-generator",
  },
  {
    id: 19,
    name: "GEO Optimization",
    description: "Generative engine optimization for AI search",
    icon: Globe,
    category: "seo",
    tier: "Pro",
    slug: "geo-optimization",
  },
  {
    id: 20,
    name: "AEO Optimization",
    description: "Answer engine optimization for voice search",
    icon: Mic,
    category: "seo",
    tier: "Pro",
    slug: "aeo-optimization",
  },
  {
    id: 21,
    name: "LLMs.txt Generator",
    description: "Generate AI crawler instructions file",
    icon: FileCode,
    category: "seo",
    tier: "Free",
    slug: "llms-txt-generator",
  },
  {
    id: 22,
    name: "Plagiarism Checker",
    description: "Scan content for duplicate text online",
    icon: ScanSearch,
    category: "seo",
    tier: "Free",
    slug: "plagiarism-checker",
  },
  {
    id: 23,
    name: "AI Detector",
    description: "Detect if content was written by AI",
    icon: ShieldCheck,
    category: "seo",
    tier: "Free",
    slug: "ai-detector",
  },
  {
    id: 24,
    name: "Robots.txt Generator",
    description: "Generate robots.txt file for your site",
    icon: FileJson,
    category: "seo",
    tier: "Free",
    slug: "robots-txt-generator",
  },
  {
    id: 25,
    name: "XML Sitemap Generator",
    description: "Auto generate XML sitemap",
    icon: MapPin,
    category: "seo",
    tier: "Free",
    slug: "xml-sitemap-generator",
  },
  {
    id: 26,
    name: "Meta Tag Generator",
    description: "Generate SEO meta titles and descriptions",
    icon: Tags,
    category: "seo",
    tier: "Free",
    slug: "meta-tag-generator",
  },

  // AI WRITING TOOLS (13)
  {
    id: 27,
    name: "AI Humanizer",
    description: "Make AI text sound human written",
    icon: PenTool,
    category: "writing",
    tier: "Free",
    slug: "ai-humanizer",
  },
  {
    id: 28,
    name: "Outrank Article",
    description: "Write better article than competitors",
    icon: TrendingUp,
    category: "writing",
    tier: "Pro",
    slug: "outrank-article",
  },
  {
    id: 29,
    name: "Topical Authority",
    description: "Build content cluster strategy",
    icon: Link2,
    category: "writing",
    tier: "Pro",
    slug: "topical-authority",
  },
  {
    id: 30,
    name: "Essay Extender",
    description: "Expand short essay with AI",
    icon: Expand,
    category: "writing",
    tier: "Free",
    slug: "essay-extender",
  },
  {
    id: 31,
    name: "Expand Sentence",
    description: "Expand single sentence to paragraph",
    icon: AlignLeft,
    category: "writing",
    tier: "Free",
    slug: "expand-sentence",
  },
  {
    id: 32,
    name: "Shorten Content",
    description: "Condense long content to shorter version",
    icon: Scissors,
    category: "writing",
    tier: "Free",
    slug: "shorten-content",
  },
  {
    id: 33,
    name: "Article Spinner",
    description: "Rewrite article in unique wording",
    icon: RotateCcw,
    category: "writing",
    tier: "Free",
    slug: "article-spinner",
  },
  {
    id: 34,
    name: "Bypass AI Detection",
    description: "Bypass GPTZero and AI detectors",
    icon: ShieldOff,
    category: "writing",
    tier: "Free",
    slug: "bypass-ai-detection",
  },
  {
    id: 35,
    name: "Copywriting Templates",
    description: "50+ AIDA PAS ad copy templates",
    icon: FileText,
    category: "writing",
    tier: "Free",
    slug: "copywriting-templates",
  },
  {
    id: 36,
    name: "AI Math Solver",
    description: "Solve any math problem step by step",
    icon: Calculator,
    category: "writing",
    tier: "Free",
    slug: "ai-math-solver",
  },
  {
    id: 37,
    name: "Reddit Post Generator",
    description: "Generate viral Reddit posts",
    icon: MessageSquare,
    category: "writing",
    tier: "Free",
    slug: "reddit-post-generator",
  },
  {
    id: 38,
    name: "Word Counter",
    description: "Count words characters and reading time",
    icon: Clock,
    category: "writing",
    tier: "Free",
    slug: "word-counter",
  },
  {
    id: 39,
    name: "Hashtag Generator",
    description: "Generate hashtags for social media",
    icon: Hash,
    category: "writing",
    tier: "Free",
    slug: "hashtag-generator",
  },

  // ANALYTICS TOOLS (3) - Pro
  {
    id: 40,
    name: "Rank Tracker",
    description: "Monitor keyword rankings daily",
    icon: BarChart3,
    category: "analytics",
    tier: "Pro",
    slug: "rank-tracker",
  },
  {
    id: 41,
    name: "Backlink Analyzer",
    description: "Analyze and monitor backlink profile",
    icon: Link2,
    category: "analytics",
    tier: "Pro",
    slug: "backlink-analyzer",
  },
  {
    id: 42,
    name: "Traffic Analyzer",
    description: "Understand website traffic patterns",
    icon: Activity,
    category: "analytics",
    tier: "Pro",
    slug: "traffic-analyzer",
  },

  // UTILITY TOOLS (3) - Free
  {
    id: 43,
    name: "Speed Optimizer",
    description: "Improve page load times Core Web Vitals",
    icon: Zap,
    category: "utility",
    tier: "Free",
    slug: "speed-optimizer",
  },
  {
    id: 44,
    name: "Color Palette",
    description: "Extract and generate color schemes",
    icon: Palette,
    category: "utility",
    tier: "Free",
    slug: "color-palette",
  },
  {
    id: 45,
    name: "Blog Outline",
    description: "Generate structured blog post outlines",
    icon: Wand2,
    category: "utility",
    tier: "Free",
    slug: "blog-outline",
  },

  // AGENTS (3) - Pro
  {
    id: 46,
    name: "SEO Agent",
    description: "Automate entire SEO workflow 24/7",
    icon: Bot,
    category: "agents",
    tier: "Pro",
    slug: "seo-agent-pro",
  },
  {
    id: 47,
    name: "Reddit Agent",
    description: "Monitor and participate in Reddit threads",
    icon: MessageSquare,
    category: "agents",
    tier: "Pro",
    slug: "reddit-agent",
  },
  {
    id: 48,
    name: "Brand Monitor",
    description: "Track brand mentions in ChatGPT Gemini Claude",
    icon: Users,
    category: "agents",
    tier: "Pro",
    slug: "brand-monitor",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
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

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return tools.length
    return tools.filter(t => t.category === categoryId).length
  }

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
            48 AI-Powered Tools in One Platform
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-pretty">
            Access our full suite of AI-powered tools designed to supercharge your SEO and content workflows.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="flex flex-col gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
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
                <span className="ml-1.5 text-xs opacity-70">({getCategoryCount(category.id)})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredTools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={cardVariants}
            >
              <Link
                to={`/tools/${tool.slug}`}
                className="group block p-5 rounded-xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all duration-200"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <tool.icon className="w-6 h-6 text-violet-600" />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={tool.tier === "Free" 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                        : "bg-violet-50 text-violet-700 border-violet-200"
                      }
                    >
                      {tool.tier}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
                </motion.div>
              </Link>
            </motion.div>
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
