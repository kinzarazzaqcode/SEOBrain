import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search,
  BookOpen,
  Rocket,
  Settings,
  Zap,
  Code,
  Shield,
  Users,
  CreditCard,
  MessageSquare,
  ChevronRight,
  ExternalLink,
  Menu,
  X
} from "lucide-react"

const docsSections = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { title: "Introduction", slug: "introduction", description: "Learn what SeoBrain is and how it can help you" },
      { title: "Quick Start Guide", slug: "quick-start", description: "Get up and running in 5 minutes" },
      { title: "Creating Your First Project", slug: "first-project", description: "Set up your first SEO project" },
      { title: "Dashboard Overview", slug: "dashboard", description: "Navigate the SeoBrain dashboard" },
    ],
  },
  {
    title: "Core Features",
    icon: Zap,
    items: [
      { title: "SEO Agent", slug: "seo-agent", description: "Automate keyword research and tracking" },
      { title: "Reddit Agent", slug: "reddit-agent", description: "Monitor Reddit for brand mentions" },
      { title: "Brand Monitor", slug: "brand-monitor", description: "Track brand mentions across the web" },
      { title: "Content Writer", slug: "content-writer", description: "Generate SEO-optimized content" },
      { title: "Rank Tracker", slug: "rank-tracker", description: "Monitor your search rankings" },
    ],
  },
  {
    title: "AI Tools",
    icon: BookOpen,
    items: [
      { title: "AI Image Generator", slug: "image-generator", description: "Create images from text prompts" },
      { title: "Background Remover", slug: "background-remover", description: "Remove backgrounds from images" },
      { title: "Content Optimizer", slug: "content-optimizer", description: "Optimize content for SEO" },
      { title: "Blog Ideas Generator", slug: "blog-ideas", description: "Generate blog topic ideas" },
    ],
  },
  {
    title: "API Reference",
    icon: Code,
    items: [
      { title: "Authentication", slug: "api-auth", description: "Authenticate API requests" },
      { title: "Endpoints", slug: "api-endpoints", description: "Available API endpoints" },
      { title: "Rate Limits", slug: "rate-limits", description: "API rate limiting guidelines" },
      { title: "Webhooks", slug: "webhooks", description: "Set up webhook notifications" },
    ],
  },
  {
    title: "Account & Billing",
    icon: CreditCard,
    items: [
      { title: "Managing Your Account", slug: "account", description: "Update account settings" },
      { title: "Billing & Invoices", slug: "billing", description: "View and manage billing" },
      { title: "Team Management", slug: "team", description: "Add and manage team members" },
      { title: "Plan Upgrades", slug: "upgrades", description: "Upgrade your subscription" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      { title: "Two-Factor Authentication", slug: "2fa", description: "Enable 2FA for your account" },
      { title: "API Keys", slug: "api-keys", description: "Manage your API keys securely" },
      { title: "Data Privacy", slug: "data-privacy", description: "How we protect your data" },
      { title: "SSO Setup", slug: "sso", description: "Configure Single Sign-On" },
    ],
  },
]

const quickLinks = [
  { title: "API Reference", href: "#", icon: Code },
  { title: "Community Forum", href: "#", icon: MessageSquare },
  { title: "Support Center", href: "#", icon: Users },
  { title: "System Status", href: "#", icon: Settings },
]

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("introduction")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const activeContent = docsSections
    .flatMap((s) => s.items)
    .find((item) => item.slug === activeSection)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        <div className="flex">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="fixed bottom-4 right-4 z-50 lg:hidden w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-lg flex items-center justify-center"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Sidebar */}
          <aside
            className={`fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-72 border-r border-slate-200 bg-white overflow-y-auto z-40 transition-transform lg:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-4">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10 bg-slate-50 border-slate-200 text-sm"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                  /
                </kbd>
              </div>

              {/* Navigation */}
              <nav className="space-y-6">
                {docsSections.map((section) => (
                  <div key={section.title}>
                    <div className="flex items-center gap-2 mb-2 px-2">
                      <section.icon className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-semibold text-slate-900 uppercase tracking-wide">
                        {section.title}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {section.items
                        .filter(
                          (item) =>
                            !searchQuery ||
                            item.title.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((item) => (
                          <li key={item.slug}>
                            <button
                              onClick={() => {
                                setActiveSection(item.slug)
                                setSidebarOpen(false)
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                activeSection === item.slug
                                  ? "bg-violet-100 text-violet-700 font-medium"
                                  : "text-slate-600 hover:bg-slate-100"
                              }`}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </nav>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="px-2 text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  Quick Links
                </p>
                <ul className="space-y-1">
                  {quickLinks.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                      >
                        <link.icon className="w-4 h-4" />
                        {link.title}
                        <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                  <Link to="/docs" className="hover:text-slate-700">
                    Docs
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-slate-900">{activeContent?.title}</span>
                </nav>

                {/* Page Title */}
                <h1 className="text-3xl font-bold text-slate-900 mb-4">
                  {activeContent?.title}
                </h1>
                <p className="text-lg text-slate-600 mb-8">
                  {activeContent?.description}
                </p>

                {/* Content Area */}
                <div className="prose prose-slate max-w-none">
                  {activeSection === "introduction" && (
                    <>
                      <h2>What is SeoBrain?</h2>
                      <p>
                        SeoBrain is an AI-powered SEO platform that helps businesses of all sizes improve their online presence. Our suite of intelligent agents works around the clock to monitor rankings, discover opportunities, and provide actionable insights.
                      </p>
                      
                      <h2>Key Features</h2>
                      <ul>
                        <li><strong>SEO Agent</strong> - Automated keyword research and rank tracking</li>
                        <li><strong>Reddit Agent</strong> - Monitor Reddit for brand mentions and trending topics</li>
                        <li><strong>Brand Monitor</strong> - Real-time alerts for brand mentions across the web</li>
                        <li><strong>AI Content Tools</strong> - Generate and optimize content at scale</li>
                        <li><strong>Image Generation</strong> - Create stunning visuals with AI</li>
                      </ul>

                      <h2>Who is SeoBrain for?</h2>
                      <p>
                        SeoBrain is designed for marketers, content creators, agencies, and businesses who want to improve their search visibility without spending hours on manual SEO tasks.
                      </p>

                      <div className="not-prose mt-8 p-6 bg-violet-50 rounded-xl border border-violet-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Rocket className="w-5 h-5 text-violet-600" />
                          Ready to get started?
                        </h3>
                        <p className="text-slate-600 mb-4">
                          Follow our quick start guide to set up your first project in just 5 minutes.
                        </p>
                        <button
                          onClick={() => setActiveSection("quick-start")}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors"
                        >
                          Quick Start Guide
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </>
                  )}

                  {activeSection === "quick-start" && (
                    <>
                      <h2>Prerequisites</h2>
                      <p>Before you begin, make sure you have:</p>
                      <ul>
                        <li>A SeoBrain account (sign up at seobrain.ai)</li>
                        <li>Access to your website or domain</li>
                        <li>Basic understanding of SEO concepts</li>
                      </ul>

                      <h2>Step 1: Create Your Account</h2>
                      <p>
                        Visit seobrain.ai and click &quot;Get Started Free&quot; to create your account. You can sign up with your email or use Google/GitHub authentication.
                      </p>

                      <h2>Step 2: Add Your First Project</h2>
                      <p>
                        Once logged in, click &quot;New Project&quot; in your dashboard. Enter your website URL and project name. SeoBrain will automatically analyze your site and set up initial tracking.
                      </p>

                      <h2>Step 3: Configure Your Settings</h2>
                      <p>
                        Set your target location and language. Add competitors you want to track. Configure notification preferences for ranking changes.
                      </p>

                      <h2>Step 4: Start Tracking Keywords</h2>
                      <p>
                        Use the Keyword Explorer to discover relevant keywords. Add keywords to your tracking list. SeoBrain will monitor rankings daily.
                      </p>

                      <div className="not-prose mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <p className="text-sm text-blue-800">
                          <strong>Tip:</strong> Start with 10-20 high-priority keywords and expand as you learn more about your search landscape.
                        </p>
                      </div>
                    </>
                  )}

                  {/* Default content for other sections */}
                  {!["introduction", "quick-start"].includes(activeSection) && (
                    <>
                      <p>
                        This documentation page is coming soon. In the meantime, check out our other guides or reach out to support if you have questions.
                      </p>

                      <div className="not-prose mt-8 grid gap-4 sm:grid-cols-2">
                        <button
                          onClick={() => setActiveSection("introduction")}
                          className="p-4 border border-slate-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-colors text-left"
                        >
                          <h3 className="font-semibold text-slate-900 mb-1">Introduction</h3>
                          <p className="text-sm text-slate-600">Learn the basics of SeoBrain</p>
                        </button>
                        <button
                          onClick={() => setActiveSection("quick-start")}
                          className="p-4 border border-slate-200 rounded-xl hover:border-violet-300 hover:bg-violet-50 transition-colors text-left"
                        >
                          <h3 className="font-semibold text-slate-900 mb-1">Quick Start</h3>
                          <p className="text-sm text-slate-600">Get up and running quickly</p>
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Page Navigation */}
                <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
                  <Badge variant="outline" className="text-slate-500">
                    Last updated: January 2025
                  </Badge>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-slate-500">Was this helpful?</span>
                    <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                      Yes
                    </button>
                    <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                      No
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
