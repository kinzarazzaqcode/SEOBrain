import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing or using SeoBrain's services, website, or any applications (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use the Services.

We may modify these Terms at any time. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.`,
    },
    {
      title: "2. Description of Services",
      content: `SeoBrain provides AI-powered SEO and content optimization tools designed to help users improve their online presence. Our Services include but are not limited to keyword research, content analysis, rank tracking, brand monitoring, and competitive analysis.

We reserve the right to modify, suspend, or discontinue any part of the Services at any time without prior notice.`,
    },
    {
      title: "3. Account Registration",
      content: `To access certain features of the Services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.

You are responsible for safeguarding your password and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.`,
    },
    {
      title: "4. Subscription and Payments",
      content: `Some aspects of the Services require paid subscriptions. By subscribing to a paid plan, you agree to pay all fees associated with your subscription. Fees are non-refundable except as required by law or as explicitly stated in these Terms.

We may change our subscription fees upon reasonable notice. Such notice may be provided by posting the changes on our website or through the Services.`,
    },
    {
      title: "5. Acceptable Use",
      content: `You agree not to use the Services to:
- Violate any applicable law or regulation
- Infringe the rights of any third party
- Send spam or other unsolicited communications
- Transmit malware or other harmful code
- Interfere with or disrupt the Services
- Attempt to gain unauthorized access to any systems or networks
- Collect or harvest user data without consent
- Engage in any fraudulent or deceptive practices`,
    },
    {
      title: "6. Intellectual Property",
      content: `The Services and all content, features, and functionality are owned by SeoBrain and are protected by intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Services without our written permission.

Content you submit or post remains yours, but you grant us a license to use, modify, and display such content in connection with providing the Services.`,
    },
    {
      title: "7. Data and Privacy",
      content: `Your use of the Services is also governed by our Privacy Policy. By using the Services, you consent to the collection and use of your information as described in the Privacy Policy.

We implement reasonable security measures to protect your data, but we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.`,
    },
    {
      title: "8. Disclaimers",
      content: `THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.

We do not guarantee any specific results from using the Services. SEO rankings and performance depend on many factors outside our control.`,
    },
    {
      title: "9. Limitation of Liability",
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, SEOBRAIN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.

Our total liability for any claims under these Terms shall not exceed the amount you paid to us in the twelve months preceding the claim.`,
    },
    {
      title: "10. Termination",
      content: `We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including breach of these Terms.

Upon termination, your right to use the Services will immediately cease. All provisions of these Terms that should survive termination shall survive.`,
    },
    {
      title: "11. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.

Any disputes arising from these Terms shall be resolved in the courts of San Francisco County, California.`,
    },
    {
      title: "12. Contact Information",
      content: `If you have any questions about these Terms, please contact us at:

SeoBrain, Inc.
legal@seobrain.ai
123 AI Street
San Francisco, CA 94105
United States`,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
            <p className="text-slate-600 mb-8">
              Last updated: January 1, 2025
            </p>
            <p className="text-lg text-slate-700 mb-12 leading-relaxed">
              Welcome to SeoBrain. Please read these Terms of Service carefully before using our Services. By using SeoBrain, you agree to be bound by these terms.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h2>
                <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
