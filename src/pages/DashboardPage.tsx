import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sparkles,
  Home,
  Wrench,
  History,
  Settings,
  CreditCard,
  Search,
  Bell,
  Zap,
  Target,
  BookMarked,
  ArrowUpRight,
  Clock,
  FileText,
  Shield,
  Image,
  PenTool,
  Bot,
  LogOut,
  Menu,
  X,
  ChevronRight
} from "lucide-react"

const sidebarItems = [
  { icon: Home, label: "Home", href: "/dashboard", active: true },
  { icon: Wrench, label: "Tools", href: "/tools" },
  { icon: History, label: "History", href: "/dashboard/history" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
]

const quickTools = [
  { name: "AI Image Generator", description: "Create stunning images", icon: Image, color: "violet", href: "/tools/ai-image-generator" },
  { name: "AI Humanizer", description: "Make AI text natural", icon: PenTool, color: "blue", href: "/tools/ai-humanizer" },
  { name: "SEO Audit", description: "Check site health", icon: Shield, color: "emerald", href: "/tools/seo-audit" },
  { name: "Keyword Rank Checker", description: "Track positions", icon: Target, color: "orange", href: "/tools/keyword-rank-checker" },
  { name: "AI Detector", description: "Check AI content", icon: Bot, color: "pink", href: "/tools/ai-detector" },
  { name: "Meta Tag Generator", description: "SEO meta tags", icon: FileText, color: "slate", href: "/tools/meta-tag-generator" },
]

const recentActivity = [
  { action: "Generated blog image", target: "10 SEO Tips Article", time: "2 minutes ago", icon: Image, color: "violet" },
  { action: "SEO audit completed", target: "example.com - 12 issues found", time: "15 minutes ago", icon: Shield, color: "blue" },
  { action: "Content humanized", target: "1,245 words processed", time: "1 hour ago", icon: PenTool, color: "emerald" },
  { action: "Keywords analyzed", target: "competitor: seotool.io", time: "2 hours ago", icon: Target, color: "orange" },
  { action: "Meta tags generated", target: "Product landing page", time: "3 hours ago", icon: FileText, color: "pink" },
]

const colorClasses: Record<string, string> = {
  violet: "bg-violet-100 text-violet-600",
  blue: "bg-blue-100 text-blue-600",
  emerald: "bg-emerald-100 text-emerald-600",
  orange: "bg-orange-100 text-orange-600",
  pink: "bg-pink-100 text-pink-600",
  slate: "bg-slate-100 text-slate-600",
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1500
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
  }, [value])

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function DashboardPage() {
  const { user, isLoading, signOut } = useAuth()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/signin")
    }
  }, [user, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const stats = [
    { label: "Tools Used Today", value: 12, icon: Zap, color: "violet" },
    { label: "Credits Remaining", value: 847, icon: Sparkles, color: "blue" },
    { label: "Total Searches", value: 156, icon: Search, color: "emerald" },
    { label: "Saved Results", value: 34, icon: BookMarked, color: "orange" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed bottom-4 right-4 z-50 lg:hidden w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg flex items-center justify-center"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-gradient-to-b from-violet-900 via-violet-800 to-blue-900 flex flex-col z-40 transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-5 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SeoBrain</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                item.active
                  ? "bg-white/20 text-white shadow-lg"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{user.name}</p>
              <p className="text-xs text-white/60 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={signOut}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-20 bg-white border-b border-slate-200 px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search tools, keywords..."
                className="pl-10 h-10 bg-slate-50 border-slate-200 w-full"
              />
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 ml-4">
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {/* User Avatar - Desktop */}
              <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Welcome */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-slate-600">
                {"Here's an overview of your SEO activity today."}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[stat.color]} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-1">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Quick Access Tools */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-slate-900">Quick Access</h2>
                    <Link to="/tools" className="text-sm text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1">
                      View all tools
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {quickTools.map((tool, index) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          to={tool.href}
                          className="block p-4 rounded-xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all group"
                        >
                          <div className={`w-10 h-10 rounded-lg ${colorClasses[tool.color]} flex items-center justify-center mb-3`}>
                            <tool.icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-medium text-slate-900 mb-1 group-hover:text-violet-600 transition-colors flex items-center gap-1">
                            {tool.name}
                            <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </h3>
                          <p className="text-xs text-slate-500">{tool.description}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
                  <Button variant="ghost" size="sm" className="text-slate-600">
                    <Clock className="w-4 h-4 mr-1" />
                    View all
                  </Button>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-8 h-8 rounded-lg ${colorClasses[activity.color]} flex items-center justify-center shrink-0`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{activity.action}</p>
                        <p className="text-xs text-slate-500 truncate">{activity.target}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Usage Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-gradient-to-r from-violet-600 via-violet-700 to-blue-600 rounded-2xl p-6 text-white"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Running low on credits?</h3>
                  <p className="text-white/80 text-sm">Upgrade to Scale plan for 10x more AI generations and unlimited keywords.</p>
                </div>
                <Link to="/pricing">
                  <Button className="bg-white text-violet-600 hover:bg-white/90 shrink-0">
                    Upgrade Plan
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
