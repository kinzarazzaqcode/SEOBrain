"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  LayoutDashboard,
  Search,
  Target,
  FileText,
  Image,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Zap,
  Users,
  Clock,
  ArrowUpRight,
  Eye,
  PenTool,
  MessageSquare,
  Shield,
  Menu,
  X
} from "lucide-react"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Search, label: "Keyword Explorer", href: "#" },
  { icon: Target, label: "Rank Tracker", href: "#" },
  { icon: FileText, label: "Content Tools", href: "#" },
  { icon: Image, label: "Image Tools", href: "#" },
  { icon: BarChart3, label: "Analytics", href: "#" },
  { icon: MessageSquare, label: "Brand Monitor", href: "#" },
]

const bottomItems = [
  { icon: Settings, label: "Settings", href: "#" },
  { icon: HelpCircle, label: "Help Center", href: "#" },
]

const quickTools = [
  { name: "Keyword Explorer", description: "Discover high-value keywords", icon: Target, color: "violet", href: "/tools" },
  { name: "AI Writer", description: "Generate SEO content", icon: PenTool, color: "blue", href: "/tools" },
  { name: "Rank Tracker", description: "Monitor your rankings", icon: TrendingUp, color: "emerald", href: "/tools" },
  { name: "Site Audit", description: "Check technical SEO", icon: Shield, color: "orange", href: "/tools" },
  { name: "Image Generator", description: "Create AI images", icon: Image, color: "pink", href: "/tools" },
  { name: "Brand Monitor", description: "Track mentions", icon: Eye, color: "slate", href: "/tools" },
]

const recentActivity = [
  { action: "Keyword research completed", target: "project: example.com", time: "2 minutes ago", icon: Target, color: "violet" },
  { action: "Content generated", target: "10 SEO Tips for 2025", time: "15 minutes ago", icon: FileText, color: "blue" },
  { action: "Rank improved", target: "+5 positions for 'seo tools'", time: "1 hour ago", icon: TrendingUp, color: "emerald" },
  { action: "Brand mention detected", target: "Reddit: r/SEO", time: "2 hours ago", icon: MessageSquare, color: "orange" },
  { action: "Site audit completed", target: "87 issues found", time: "3 hours ago", icon: Shield, color: "red" },
]

const colorClasses: Record<string, string> = {
  violet: "bg-violet-100 text-violet-600",
  blue: "bg-blue-100 text-blue-600",
  emerald: "bg-emerald-100 text-emerald-600",
  orange: "bg-orange-100 text-orange-600",
  pink: "bg-pink-100 text-pink-600",
  slate: "bg-slate-100 text-slate-600",
  red: "bg-red-100 text-red-600",
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
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/signin")
    }
  }, [user, isLoading, router])

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
    { label: "Total Tools Used", value: 24, change: "+12%", positive: true, icon: Zap },
    { label: "Credits Remaining", value: 847, change: "-53 this week", positive: false, icon: Sparkles },
    { label: "Searches Today", value: 156, change: "+23%", positive: true, icon: Search },
    { label: "Rank Improvements", value: 34, change: "+8 this week", positive: true, icon: TrendingUp },
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

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-slate-200 flex flex-col z-40 transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">SeoBrain</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? "bg-violet-100 text-violet-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom Items */}
        <div className="p-4 border-t border-slate-200 space-y-1">
          {bottomItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search tools, keywords..."
                  className="pl-10 w-64 h-10 bg-slate-50 border-slate-200"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
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
              <h1 className="text-2xl font-bold text-slate-900 mb-1">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-slate-600">
                {"Here's what's happening with your SEO today."}
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
                  className="bg-white rounded-xl border border-slate-200 p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-violet-600" />
                    </div>
                    <Badge
                      variant="outline"
                      className={stat.positive ? "text-green-600 border-green-200 bg-green-50" : "text-slate-600 border-slate-200"}
                    >
                      {stat.positive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Quick Access Tools */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-slate-900">Quick Access</h2>
                    <Link href="/tools" className="text-sm text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1">
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
                          href={tool.href}
                          className="block p-4 rounded-xl border border-slate-200 hover:border-violet-300 hover:shadow-md transition-all group"
                        >
                          <div className={`w-10 h-10 rounded-lg ${colorClasses[tool.color]} flex items-center justify-center mb-3`}>
                            <tool.icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-medium text-slate-900 mb-1 group-hover:text-violet-600 transition-colors">
                            {tool.name}
                          </h3>
                          <p className="text-xs text-slate-500">{tool.description}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-slate-200 p-6">
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
              className="mt-6 bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 rounded-xl p-6 text-white"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Running low on credits?</h3>
                  <p className="text-white/80 text-sm">Upgrade to Scale plan for 10x more AI generations and unlimited keywords.</p>
                </div>
                <Link href="/pricing">
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
