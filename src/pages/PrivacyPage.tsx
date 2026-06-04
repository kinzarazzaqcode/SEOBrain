import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, subscribe to our service, make a purchase, or communicate with us. This information may include your name, email address, postal address, phone number, credit card information, and any other information you choose to provide.

We automatically collect certain information when you use our Services, including your IP address, device and browser type, operating system, referral URLs, your activity on our Services, and other standard server log information.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect to provide, maintain, and improve our Services, to process transactions and send you related information, to send you technical notices, updates, security alerts, and support and administrative messages, and to respond to your comments, questions, and customer service requests.

We also use the information to communicate with you about products, services, offers, promotions, and events offered by SeoBrain, and to monitor and analyze trends, usage, and activities in connection with our Services.`,
    },
    {
      title: "Information Sharing",
      content: `We may share information about you as follows: with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf; in response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process; if we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of SeoBrain or others.

We may also share aggregated or de-identified information, which cannot reasonably be used to identify you.`,
    },
    {
      title: "Data Security",
      content: `We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. All data is encrypted in transit and at rest using industry-standard encryption protocols.

We maintain strict access controls and regularly audit our security practices to ensure your data remains protected.`,
    },
    {
      title: "Your Rights",
      content: `You have the right to access, correct, or delete your personal information at any time. You can update your account information by logging into your account settings. You may also contact us to request access to, correct, or delete any personal information that you have provided to us.

You can opt out of receiving promotional communications from us by following the instructions in those messages. If you opt out, we may still send you non-promotional communications.`,
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to track activity on our Services and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.

We encourage you to review the privacy policy whenever you access our Services to stay informed about our information practices.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this privacy policy, please contact us at privacy@seobrain.ai or by mail at:

SeoBrain, Inc.
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
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-600 mb-8">
              Last updated: January 1, 2025
            </p>
            <p className="text-lg text-slate-700 mb-12 leading-relaxed">
              At SeoBrain, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
