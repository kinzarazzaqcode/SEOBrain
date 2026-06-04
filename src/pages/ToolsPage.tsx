import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { tools } from "@/lib/tools-data"
import { Search, Sparkles, ChevronRight } from "lucide-react"

const categories = [
  { id: "all", label: "All Tools" },
  { id: "image", label: "Image" },
  { id: "seo", label: "SEO" },
  { id: "writing", label: "AI Writing" },
  { id: "analytics", label: "Analytics" },
  { id: "utility", label: "Utility" },
  { id: "agents", label: "Agents" },
]

const colorClasses: Record<string, { bg: string; iconBg: string; text: string }> = {
  image: { bg: "bg-violet-50", iconBg: "bg-violet-100", text: "text-violet-600" },
  seo: { bg: "bg-blue-50", iconBg: "bg-blue-100", text: "text-blue-600" },
  writing: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", text: "text-emerald-600" },
  analytics: { bg: "bg-orange-50", iconBg: "bg-orange-100", text: "text-orange-600" },
  utility: { bg: "bg-pink-50", iconBg: "bg-pink-100", text: "text-pink-600" },
  agents: { bg: "bg-slate-50", iconBg: "bg-slate-100", text: "text-slate-600" },
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

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return tools.length
    return tools.filter(t => t.category === categoryId).length
  }

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
              48 AI-Powered Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
              Everything you need to dominate SEO
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto text-pretty">
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
                  <span className="ml-2 text-xs opacity-70">({getCategoryCount(category.id)})</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTools.map((tool, index) => {
              const colors = colorClasses[tool.category] || colorClasses.seo
              return (
                <motion.div
                  key={tool.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                >
                  <Link
                    to={`/tools/${tool.slug}`}
                    className={`group block cursor-pointer rounded-2xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-lg transition-all ${colors.bg}`}
                  >
                    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
                          <tool.icon className={`w-6 h-6 ${colors.text}`} />
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
                      <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors flex items-center gap-1">
                        {tool.name}
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{tool.description}</p>
                    </motion.div>
                  </Link>
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
