"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 20)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${scrolled ? 0.95 : 0.8})`,
        backdropFilter: `blur(${scrolled ? 16 : 8}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">SeoBrain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-slate-600" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white border-0" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-600" />
            ) : (
              <Menu className="w-6 h-6 text-slate-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-slate-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="block text-sm font-medium text-slate-600 hover:text-slate-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-blue-500 text-white border-0" asChild>
                <Link href="/signup">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
