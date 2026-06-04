import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Sparkles, Target, Users, Zap, Globe, Award, Heart } from "lucide-react"

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Google Search engineer with 10+ years in SEO and AI.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-Founder",
    bio: "Ex-OpenAI researcher specializing in natural language processing.",
    avatar: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Previously led product at Moz and Ahrefs.",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    bio: "Built scalable systems at Stripe and Datadog.",
    avatar: "DK",
  },
  {
    name: "Anna Petrov",
    role: "Head of Design",
    bio: "Design leader from Figma and Linear.",
    avatar: "AP",
  },
  {
    name: "James Wilson",
    role: "Head of Marketing",
    bio: "Growth expert who scaled HubSpot and Semrush.",
    avatar: "JW",
  },
]

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We push the boundaries of what AI can do for SEO and content creation.",
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "Every feature we build starts with understanding our users' needs.",
  },
  {
    icon: Heart,
    title: "Transparency",
    description: "We believe in honest communication with our team, users, and partners.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We help businesses of all sizes succeed in the digital world.",
  },
]

const stats = [
  { label: "Founded", value: "2022" },
  { label: "Team Members", value: "45+" },
  { label: "Users", value: "50K+" },
  { label: "Countries", value: "120+" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50" />
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-1/4 w-72 h-72 bg-violet-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                About SeoBrain
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
                Making SEO accessible through the power of AI
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {"We're on a mission to democratize SEO by giving every business access to the same powerful AI tools that enterprise companies use."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-semibold text-violet-600 uppercase tracking-wide">Our Story</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Born from frustration, built with passion
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  SeoBrain was founded in 2022 by Sarah Chen and Marcus Johnson, two industry veterans who were frustrated by the complexity and cost of existing SEO tools. After spending years at Google and OpenAI respectively, they saw an opportunity to apply cutting-edge AI to make SEO more accessible.
                </p>
                <p>
                  What started as a simple keyword research tool has evolved into a comprehensive platform that helps over 50,000 businesses automate their SEO workflows. Our AI agents work around the clock to monitor rankings, discover opportunities, and provide actionable insights.
                </p>
                <p>
                  {"Today, we're a team of 45+ passionate individuals across 12 countries, united by our mission to democratize SEO. We believe that every business, regardless of size or budget, deserves access to powerful tools that help them grow online."}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-semibold text-violet-600 uppercase tracking-wide">Our Values</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">What drives us forward</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-violet-600" />
                <span className="text-sm font-semibold text-violet-600 uppercase tracking-wide">Our Team</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Meet the people behind SeoBrain</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-blue-500 flex items-center justify-center text-white font-semibold text-lg shrink-0">
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                      <p className="text-sm text-violet-600 font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-slate-600">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join us on our mission
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                {"We're always looking for talented people who share our passion for AI and SEO. Check out our open positions."}
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-violet-600 font-semibold hover:bg-white/90 transition-colors"
              >
                View open positions
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
