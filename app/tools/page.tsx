"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Sparkles,
  Target,
  FileText,
  Image,
  BarChart3,
  Globe,
  Link2,
  TrendingUp,
  Users,
  MessageSquare,
  Zap,
  Shield,
  Clock,
  Hash,
  PenTool,
  Layers,
  RefreshCw,
  Settings,
  Database,
  Code,
  Palette,
  Video,
  FileImage,
  Wand2,
  Megaphone,
  Eye,
  Brain,
  Rocket,
  Mail,
  BookOpen,
  ChevronRight
} from "lucide-react"

const categories = [
  { id: "all", label: "All Tools", count: 45 },
  { id: "seo", label: "SEO", count: 12 },
  { id: "content", label: "Content", count: 10 },
  { id: "image", label: "Image", count: 8 },
  { id: "analytics", label: "Analytics", count: 8 },
  { id: "social", label: "Social", count: 7 },
]

const tools = [
  // SEO Tools
  { name: "Keyword Explorer", description: "Discover high-value keywords with search volume, difficulty, and CPC data.", category: "seo", icon: Target, color: "violet" },
  { name: "SERP Analyzer", description: "Analyze search engine results pages to understand ranking factors.", category: "seo", icon: Search, color: "violet" },
  { name: "Rank Tracker", description: "Monitor your keyword rankings across search engines daily.", category: "seo", icon: TrendingUp, color: "violet" },
  { name: "Backlink Checker", description: "Analyze your backlink profile and find new link opportunities.", category: "seo", icon: Link2, color: "violet" },
  { name: "Site Audit", description: "Comprehensive technical SEO audit for your entire website.", category: "seo", icon: Shield, color: "violet" },
  { name: "Competitor Analysis", description: "Spy on competitor keywords, backlinks, and content strategy.", category: "seo", icon: Eye, color: "violet" },
  { name: "Local SEO", description: "Optimize for local search and manage business listings.", category: "seo", icon: Globe, color: "violet" },
  { name: "Schema Generator", description: "Create structured data markup for rich search results.", category: "seo", icon: Code, color: "violet" },
  { name: "XML Sitemap", description: "Generate and optimize XML sitemaps for search engines.", category: "seo", icon: Layers, color: "violet" },
  { name: "Robots.txt Editor", description: "Create and validate robots.txt files for crawl control.", category: "seo", icon: Settings, color: "violet" },
  { name: "Page Speed", description: "Analyze and optimize page load performance.", category: "seo", icon: Zap, color: "violet" },
  { name: "Mobile Checker", description: "Test mobile-friendliness and responsive design.", category: "seo", icon: RefreshCw, color: "violet" },

  // Content Tools
  { name: "AI Writer", description: "Generate SEO-optimized content with advanced AI models.", category: "content", icon: PenTool, color: "blue" },
  { name: "Content Editor", description: "Real-time content optimization with keyword suggestions.", category: "content", icon: FileText, color: "blue" },
  { name: "Blog Ideas", description: "AI-powered topic suggestions based on trending searches.", category: "content", icon: Sparkles, color: "blue" },
  { name: "Title Generator", description: "Create click-worthy headlines that rank and convert.", category: "content", icon: Wand2, color: "blue" },
  { name: "Meta Description", description: "Write compelling meta descriptions for better CTR.", category: "content", icon: Hash, color: "blue" },
  { name: "Content Brief", description: "Generate detailed outlines for content writers.", category: "content", icon: BookOpen, color: "blue" },
  { name: "Plagiarism Check", description: "Ensure content originality before publishing.", category: "content", icon: Shield, color: "blue" },
  { name: "Grammar Fix", description: "AI-powered grammar and style correction.", category: "content", icon: Brain, color: "blue" },
  { name: "Readability", description: "Analyze and improve content readability scores.", category: "content", icon: Eye, color: "blue" },
  { name: "Tone Adjuster", description: "Rewrite content to match your brand voice.", category: "content", icon: MessageSquare, color: "blue" },

  // Image Tools
  { name: "Image Generator", description: "Create stunning AI images from text descriptions.", category: "image", icon: Image, color: "emerald" },
  { name: "Background Remove", description: "Instantly remove backgrounds from any image.", category: "image", icon: Palette, color: "emerald" },
  { name: "Image Upscaler", description: "Enhance image resolution up to 4x with AI.", category: "image", icon: Rocket, color: "emerald" },
  { name: "Alt Text Writer", description: "Generate SEO-friendly alt text for images.", category: "image", icon: FileImage, color: "emerald" },
  { name: "Thumbnail Maker", description: "Create eye-catching thumbnails for videos and blogs.", category: "image", icon: Video, color: "emerald" },
  { name: "Logo Generator", description: "Design professional logos with AI assistance.", category: "image", icon: Sparkles, color: "emerald" },
  { name: "Banner Creator", description: "Create social media banners and web graphics.", category: "image", icon: Layers, color: "emerald" },
  { name: "Image Compress", description: "Optimize images for faster page load times.", category: "image", icon: Zap, color: "emerald" },

  // Analytics Tools
  { name: "Traffic Analyzer", description: "Deep dive into website traffic patterns and sources.", category: "analytics", icon: BarChart3, color: "orange" },
  { name: "Conversion Tracker", description: "Monitor and optimize conversion funnels.", category: "analytics", icon: TrendingUp, color: "orange" },
  { name: "A/B Testing", description: "Run experiments to optimize content performance.", category: "analytics", icon: RefreshCw, color: "orange" },
  { name: "Heatmaps", description: "Visualize user behavior on your website.", category: "analytics", icon: Eye, color: "orange" },
  { name: "Report Builder", description: "Create custom SEO reports for clients.", category: "analytics", icon: FileText, color: "orange" },
  { name: "ROI Calculator", description: "Calculate SEO return on investment.", category: "analytics", icon: Database, color: "orange" },
  { name: "Benchmark", description: "Compare performance against industry standards.", category: "analytics", icon: Target, color: "orange" },
  { name: "Alerts", description: "Get notified about ranking changes and issues.", category: "analytics", icon: Clock, color: "orange" },

  // Social Tools
  { name: "Social Scheduler", description: "Schedule posts across multiple platforms.", category: "social", icon: Clock, color: "pink" },
  { name: "Reddit Monitor", description: "Track brand mentions and trends on Reddit.", category: "social", icon: MessageSquare, color: "pink" },
  { name: "Hashtag Finder", description: "Discover trending hashtags for your content.", category: "social", icon: Hash, color: "pink" },
  { name: "Influencer Search", description: "Find relevant influencers in your niche.", category: "social", icon: Users, color: "pink" },
  { name: "Social Analytics", description: "Track engagement metrics across platforms.", category: "social", icon: BarChart3, color: "pink" },
  { name: "Brand Monitor", description: "Real-time alerts for brand mentions online.", category: "social", icon: Megaphone, color: "pink" },
  { name: "Email Finder", description: "Find verified email addresses for outreach.", category: "social", icon: Mail, color: "pink" },
]

const colorClasses: Record<string, { bg: string; iconBg: string; text: string }> = {
  violet: { bg: "bg-violet-50", iconBg: "bg-violet-100", text: "text-violet-600" },
  blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", text: "text-blue-600" },
  emerald: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", text: "text-emerald-600" },
  orange: { bg: "bg-orange-50", iconBg: "bg-orange-100", text: "text-orange-600" },
  pink: { bg: "bg-pink-50", iconBg: "bg-pink-100", text: "text-pink-600" },
}

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "all" || tool.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-violet-100 text-violet-700 hover:bg-violet-100">
              <Sparkles className="w-3 h-3 mr-1" />
              45+ AI-Powered Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything you need to dominate SEO
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From keyword research to content creation, image generation to analytics - all powered by cutting-edge AI.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-11 h-12 bg-slate-50 border-slate-200"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-70">{category.count}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTools.map((tool, index) => {
              const colors = colorClasses[tool.color]
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ y: -4 }}
                  className={`group cursor-pointer rounded-2xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-lg transition-all ${colors.bg}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
                      <tool.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors flex items-center gap-1">
                        {tool.name}
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{tool.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500">No tools found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
