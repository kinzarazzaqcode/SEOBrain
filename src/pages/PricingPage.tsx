import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles, HelpCircle, Minus } from "lucide-react"

const plans = [
  {
    name: "Grow",
    description: "Perfect for individuals and small projects",
    price: 15,
    popular: false,
    features: [
      { name: "5 projects", included: true },
      { name: "10,000 keywords tracked", included: true },
      { name: "50 AI content generations/mo", included: true },
      { name: "Basic SEO audit", included: true },
      { name: "Email support", included: true },
      { name: "API access", included: false },
      { name: "White-label reports", included: false },
      { name: "Priority support", included: false },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    name: "Scale",
    description: "Best for growing businesses and agencies",
    price: 29,
    popular: true,
    features: [
      { name: "25 projects", included: true },
      { name: "50,000 keywords tracked", included: true },
      { name: "500 AI content generations/mo", included: true },
      { name: "Advanced SEO audit", included: true },
      { name: "Priority email support", included: true },
      { name: "API access", included: true },
      { name: "White-label reports", included: true },
      { name: "Priority support", included: false },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    name: "Team",
    description: "For agencies and large teams",
    price: 79,
    popular: false,
    features: [
      { name: "Unlimited projects", included: true },
      { name: "Unlimited keywords tracked", included: true },
      { name: "Unlimited AI generations", included: true },
      { name: "Enterprise SEO audit", included: true },
      { name: "24/7 phone & email support", included: true },
      { name: "API access", included: true },
      { name: "White-label reports", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integrations", included: true },
    ],
  },
]

const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "Projects", grow: "5", scale: "25", team: "Unlimited" },
      { name: "Keywords tracked", grow: "10,000", scale: "50,000", team: "Unlimited" },
      { name: "AI content generations", grow: "50/mo", scale: "500/mo", team: "Unlimited" },
      { name: "Site audits", grow: "Basic", scale: "Advanced", team: "Enterprise" },
      { name: "Rank tracking frequency", grow: "Weekly", scale: "Daily", team: "Real-time" },
    ],
  },
  {
    category: "AI Tools",
    features: [
      { name: "AI Writer", grow: true, scale: true, team: true },
      { name: "AI Image Generator", grow: "50/mo", scale: "250/mo", team: "Unlimited" },
      { name: "Content optimization", grow: true, scale: true, team: true },
      { name: "Blog ideas generator", grow: true, scale: true, team: true },
      { name: "Custom AI models", grow: false, scale: false, team: true },
    ],
  },
  {
    category: "Reporting & Analytics",
    features: [
      { name: "Custom reports", grow: false, scale: true, team: true },
      { name: "White-label reports", grow: false, scale: true, team: true },
      { name: "API access", grow: false, scale: true, team: true },
      { name: "Data export", grow: "CSV", scale: "CSV, PDF", team: "All formats" },
      { name: "Analytics dashboard", grow: "Basic", scale: "Advanced", team: "Custom" },
    ],
  },
  {
    category: "Support & Security",
    features: [
      { name: "Support", grow: "Email", scale: "Priority email", team: "24/7 phone & email" },
      { name: "Response time", grow: "48 hours", scale: "24 hours", team: "1 hour" },
      { name: "SSO/SAML", grow: false, scale: false, team: true },
      { name: "Dedicated account manager", grow: false, scale: false, team: true },
      { name: "Custom integrations", grow: false, scale: false, team: true },
    ],
  },
]

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! Save 20% when you choose annual billing on any plan.",
  },
  {
    question: "What happens if I exceed my limits?",
    answer: "We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional credits.",
  },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

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
              Simple, transparent pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Choose the plan that fits your needs
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Start free, upgrade when you need to. All plans include a 14-day trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-3 p-1 bg-slate-100 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  billingCycle === "annual"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600"
                }`}
              >
                Annual
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 ${
                  plan.popular
                    ? "bg-slate-900 text-white ring-2 ring-violet-500"
                    : "bg-white border border-slate-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                      ${billingCycle === "annual" ? Math.round(plan.price * 0.8) : plan.price}
                    </span>
                    <span className={plan.popular ? "text-slate-300" : "text-slate-600"}>/month</span>
                  </div>
                  {billingCycle === "annual" && (
                    <p className={`text-sm mt-1 ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                      Billed annually (${Math.round(plan.price * 0.8 * 12)}/year)
                    </p>
                  )}
                </div>

                <Link to="/signup">
                  <Button
                    className={`w-full h-11 font-medium mb-6 ${
                      plan.popular
                        ? "bg-white text-slate-900 hover:bg-slate-100"
                        : "bg-gradient-to-r from-violet-600 to-blue-500 text-white hover:from-violet-700 hover:to-blue-600"
                    }`}
                  >
                    Start free trial
                  </Button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? "text-green-400" : "text-green-600"}`} />
                      ) : (
                        <Minus className={`w-5 h-5 shrink-0 ${plan.popular ? "text-slate-500" : "text-slate-300"}`} />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.popular ? "text-slate-200" : "text-slate-700"
                          : plan.popular ? "text-slate-500" : "text-slate-400"
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Compare all features
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 font-medium text-slate-600">Feature</th>
                    <th className="text-center py-4 px-4 font-medium text-slate-600">Grow</th>
                    <th className="text-center py-4 px-4 font-medium text-slate-900 bg-violet-50">Scale</th>
                    <th className="text-center py-4 px-4 font-medium text-slate-600">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category) => (
                    <>
                      <tr key={category.category}>
                        <td colSpan={4} className="py-4 px-4">
                          <span className="text-sm font-semibold text-slate-900">{category.category}</span>
                        </td>
                      </tr>
                      {category.features.map((feature) => (
                        <tr key={feature.name} className="border-b border-slate-100">
                          <td className="py-3 px-4 text-sm text-slate-600">{feature.name}</td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.grow === "boolean" ? (
                              feature.grow ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-slate-600">{feature.grow}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center bg-violet-50">
                            {typeof feature.scale === "boolean" ? (
                              feature.scale ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-slate-900 font-medium">{feature.scale}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.team === "boolean" ? (
                              feature.team ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-slate-600">{feature.team}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-violet-600" />
              Frequently asked questions
            </h2>

            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border border-slate-200 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-sm">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
