'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Twitter, Linkedin, Github, Mail } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (footerRef.current) {
        gsap.fromTo(footerRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="relative py-12 sm:py-16 border-t border-white/10 bg-slate-900/50">
      <div className="container-responsive">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand - Full width on mobile */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-navy-400" />
              </motion.div>
              <span className="text-responsive-lg sm:text-responsive-xl font-bold bg-gradient-to-r from-navy-400 to-emerald-400 bg-clip-text text-transparent">
                ADmyBRAND AI
              </span>
            </div>
            <p className="text-slate-400 mb-4 sm:mb-6 text-responsive-sm sm:text-responsive-base max-w-sm">
              Transform your marketing with AI-powered campaigns that deliver exceptional results.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Twitter, url: 'https://twitter.com/admybrandai' },
                { icon: Linkedin, url: 'https://linkedin.com/company/admybrand-ai' },
                { icon: Github, url: 'https://github.com/admybrand' },
                { icon: Mail, url: 'mailto:hello@admybrand.ai' }
              ].map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => window.open(social.url, '_blank')}
                  className="text-slate-500 hover:text-navy-400 transition-all duration-300 touch-target p-2"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-responsive-sm sm:text-responsive-base">Product</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Features', action: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }) },
                { name: 'Pricing', action: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) },
                { name: 'API', action: () => window.open('https://docs.admybrand.ai/api', '_blank') },
                { name: 'Integrations', action: () => window.open('https://demo.admybrand.ai/integrations', '_blank') },
                { name: 'Changelog', action: () => window.open('https://changelog.admybrand.ai', '_blank') }
              ].map((item, index) => (
                <li key={index}>
                  <motion.button
                    onClick={item.action}
                    className="text-slate-400 hover:text-white transition-colors text-left text-responsive-xs sm:text-responsive-sm touch-target py-1"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-responsive-sm sm:text-responsive-base">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'About', url: 'https://admybrand.ai/about' },
                { name: 'Blog', url: 'https://blog.admybrand.ai' },
                { name: 'Careers', url: 'https://careers.admybrand.ai' },
                { name: 'Press', url: 'https://press.admybrand.ai' },
                { name: 'Partners', url: 'https://partners.admybrand.ai' }
              ].map((item, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => window.open(item.url, '_blank')}
                    className="text-slate-400 hover:text-white transition-colors text-left text-responsive-xs sm:text-responsive-sm touch-target py-1"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-responsive-sm sm:text-responsive-base">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: 'Help Center', url: 'https://help.admybrand.ai' },
                { name: 'Documentation', url: 'https://docs.admybrand.ai' },
                { name: 'Contact', url: 'mailto:support@admybrand.ai' },
                { name: 'Status', url: 'https://status.admybrand.ai' },
                { name: 'Community', url: 'https://community.admybrand.ai' }
              ].map((item, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => window.open(item.url, '_blank')}
                    className="text-slate-400 hover:text-white transition-colors text-left text-responsive-xs sm:text-responsive-sm touch-target py-1"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-responsive-xs sm:text-responsive-sm text-center md:text-left">
            © 2025 ADmyBRAND AI Suite. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
            {[
              { name: 'Privacy Policy', url: 'https://admybrand.ai/privacy' },
              { name: 'Terms of Service', url: 'https://admybrand.ai/terms' },
              { name: 'Cookie Policy', url: 'https://admybrand.ai/cookies' }
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => window.open(item.url, '_blank')}
                className="text-slate-500 hover:text-white text-responsive-xs sm:text-responsive-sm transition-colors touch-target py-1"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
