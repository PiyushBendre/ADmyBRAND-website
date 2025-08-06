'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle, Mail, Sparkles, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const faqs = [
  {
    question: 'How does ADmyBRAND AI Suite generate content?',
    answer: 'Our AI uses advanced natural language processing and machine learning algorithms trained on millions of high-performing marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate personalized, on-brand content that resonates with your customers.'
  },
  {
    question: 'Can I customize the AI-generated content?',
    answer: 'All AI-generated content is fully editable. You can modify, refine, or use it as inspiration for your own content. The AI learns from your edits to better match your preferences over time.'
  },
  {
    question: 'Which platforms does ADmyBRAND AI Suite support?',
    answer: 'We support all major marketing platforms including Facebook, Instagram, Google Ads, LinkedIn, Twitter, TikTok, YouTube, and more. You can manage campaigns across multiple platforms from our unified dashboard.'
  },
  {
    question: 'Is my data secure with ADmyBRAND AI Suite?',
    answer: 'Yes, security is our top priority. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and never share your data with third parties. Your campaigns and customer data remain completely private and secure.'
  },
  {
    question: 'How quickly can I see results?',
    answer: 'Most customers see improvements in their campaign performance within the first week. Our AI optimization algorithms work continuously to improve your results, with significant improvements typically visible within 30 days.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes! We provide 24/7 customer support through chat, email, and phone. Pro and Enterprise customers get priority support with dedicated account managers and faster response times.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you can export all your data before cancellation.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes! We offer a 14-day free trial for our Pro plan with no credit card required. You can also use our Free plan indefinitely with limited features to get started.'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // FAQ items stagger animation
      if (faqsRef.current) {
        gsap.fromTo(faqsRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: faqsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} id="faq" className="py-24 relative bg-slate-800/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <HelpCircle className="w-4 h-4 mr-2 text-navy-400" />
            Frequently Asked Questions
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got
            <span className="bg-gradient-to-r from-navy-400 to-emerald-400 bg-clip-text text-transparent">
              {' '}Questions?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300">
            Find answers to the most common questions about ADmyBRAND AI Suite.
          </p>
        </div>

        <div ref={faqsRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl border border-white/10 overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-navy-400 flex-shrink-0" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.div 
                  className="px-8 pb-6"
                  initial={{ y: -10 }}
                  animate={{ y: openIndex === index ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-navy-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you succeed. Get personalized answers and see ADmyBRAND AI Suite in action.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { 
                  icon: Mail, 
                  title: "Email Support", 
                  desc: "Get help within 24 hours",
                  action: () => window.open('mailto:support@admybrand.ai', '_blank'),
                  buttonText: "Email Us",
                  gradient: "from-navy-500 to-navy-600"
                },
                { 
                  icon: MessageCircle, 
                  title: "Live Chat", 
                  desc: "Instant help available",
                  action: () => window.open('https://tawk.to/chat/admybrand', '_blank'),
                  buttonText: "Start Chat",
                  gradient: "from-emerald-500 to-emerald-600"
                },
                { 
                  icon: Sparkles, 
                  title: "Demo Call", 
                  desc: "Personalized walkthrough",
                  action: () => window.open('https://calendly.com/demo-admybrand', '_blank'),
                  buttonText: "Book Demo",
                  gradient: "from-navy-600 to-emerald-500"
                }
              ].map((support, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-lg p-4 border border-white/10"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className={`w-8 h-8 bg-gradient-to-r ${support.gradient} rounded-lg flex items-center justify-center mx-auto mb-2`}
                    whileHover={{ rotate: 5 }}
                  >
                    <support.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <h4 className="text-white font-medium mb-1">{support.title}</h4>
                  <p className="text-slate-400 text-sm mb-3">{support.desc}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="sm" 
                      variant={index === 2 ? "default" : "outline"}
                      className={index === 2 
                        ? `bg-gradient-to-r ${support.gradient} w-full`
                        : "border-slate-600 text-slate-300 hover:bg-slate-800/50 w-full"
                      }
                      onClick={support.action}
                    >
                      {support.buttonText}
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 transition-all duration-300 btn-glow"
                onClick={() => window.open('https://demo.admybrand.ai/signup?trial=true', '_blank')}
              >
                Try It Risk-Free
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
