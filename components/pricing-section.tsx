"use client"

import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Grow",
    price: "$15",
    period: "/month",
    description: "Perfect for individuals and small projects",
    features: [
      "5 AI Agent runs per day",
      "10,000 keywords tracked",
      "Basic analytics dashboard",
      "Email support",
      "1 team member",
    ],
    cta: "Start Growing",
    popular: false,
  },
  {
    name: "Scale",
    price: "$29",
    period: "/month",
    description: "For growing businesses and marketing teams",
    features: [
      "Unlimited AI Agent runs",
      "50,000 keywords tracked",
      "Advanced analytics & reports",
      "Priority support",
      "5 team members",
      "API access",
      "Custom integrations",
    ],
    cta: "Start Scaling",
    popular: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/month",
    description: "For agencies and enterprise teams",
    features: [
      "Everything in Scale",
      "Unlimited keywords",
      "White-label reports",
      "Dedicated account manager",
      "Unlimited team members",
      "Custom AI training",
      "SLA guarantee",
      "SSO & advanced security",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-violet-600 uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 text-balance">
            Simple pricing for every stage
          </h2>
          <p className="mt-4 text-lg text-slate-600 text-pretty">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-slate-900 text-white ring-4 ring-violet-500/20"
                  : "bg-white border border-slate-200"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.popular ? "text-slate-400" : "text-slate-500"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.popular ? "text-slate-400" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${
                      plan.popular ? "text-violet-400" : "text-violet-600"
                    }`} />
                    <span className={`text-sm ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white border-0"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
                asChild
              >
                <Link to="/signup">{plan.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-slate-500">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
