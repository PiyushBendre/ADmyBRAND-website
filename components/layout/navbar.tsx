'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import GoogleAuthModal from '@/components/auth/google-auth'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP navbar entrance animation
    if (navRef.current && logoRef.current && menuRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      
      gsap.fromTo(logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
      )
      
      gsap.fromTo(menuRef.current.children,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.5, stagger: 0.1, ease: "power2.out" }
      )
    }
  }, [])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Main Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              ref={logoRef}
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-7 w-7 text-navy-400" />
              </motion.div>
              <span className="text-xl font-bold text-white">
                ADmyBRAND AI
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div ref={menuRef} className="hidden md:flex items-center space-x-8">
              {['features', 'pricing', 'testimonials', 'faq'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-slate-300 hover:text-white transition-all duration-300 font-medium capitalize"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item === 'faq' ? 'FAQ' : item}
                </motion.button>
              ))}
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 hover:text-white transition-all duration-300"
                  onClick={() => setShowAuthModal(true)}
                >
                  Sign In
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white transition-all duration-300 shadow-lg"
                  onClick={() => window.open('https://demo.admybrand.ai/signup', '_blank')}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-3 rounded-lg hover:bg-slate-800/50 transition-colors touch-target"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ 
              height: isOpen ? 'auto' : 0,
              opacity: isOpen ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-slate-900/98 backdrop-blur-md"
          >
            <div className="py-6 px-4 space-y-6 border-t border-slate-700/50">
              {['features', 'pricing', 'testimonials', 'faq'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-slate-300 hover:text-white transition-colors font-medium capitalize py-3 px-4 rounded-lg hover:bg-slate-800/50 touch-target"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item === 'faq' ? 'FAQ' : item}
                </motion.button>
              ))}
              
              <div className="pt-4 space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-800/50 h-12 text-base touch-target"
                  onClick={() => setShowAuthModal(true)}
                >
                  Sign In
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-navy-600 to-emerald-600 h-12 text-base touch-target"
                  onClick={() => window.open('https://demo.admybrand.ai/signup', '_blank')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* AI-Powered Marketing Revolution Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="fixed top-20 left-8 z-40"
      >
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 text-sm text-white shadow-lg">
          <Zap className="w-4 h-4 mr-2 text-emerald-400" />
          AI-Powered Marketing Revolution
        </div>
      </motion.div>

      {/* Google Auth Modal */}
      <AnimatePresence>
        {showAuthModal && (
          <GoogleAuthModal 
            isOpen={showAuthModal} 
            onClose={() => setShowAuthModal(false)} 
          />
        )}
      </AnimatePresence>
    </>
  )
}
