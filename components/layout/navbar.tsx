'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import GoogleAuthModal from '@/components/auth/google-auth'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
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
        className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 safe-area-inset"
      >
        <div className="mobile-container">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-6 w-6 text-navy-400" />
              </motion.div>
              <span className="text-lg font-bold text-white">
                ADmyBRAND AI
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['features', 'pricing', 'testimonials', 'faq'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="text-slate-300 hover:text-white transition-all duration-300 font-medium capitalize"
                  whileHover={{ y: -2 }}
                >
                  {item === 'faq' ? 'FAQ' : item}
                </motion.button>
              ))}
              
              <Button 
                variant="outline" 
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50"
                onClick={() => setShowAuthModal(true)}
              >
                Sign In
              </Button>
              
              <Button 
                size="sm"
                className="bg-gradient-to-r from-navy-600 to-emerald-600"
                onClick={() => window.open('https://demo.admybrand.ai/signup', '_blank')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors touch-target"
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50"
              >
                <div className="py-4 space-y-1">
                  {['features', 'pricing', 'testimonials', 'faq'].map((item) => (
                    <motion.button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left text-slate-300 hover:text-white transition-colors font-medium capitalize py-3 px-4 rounded-lg hover:bg-slate-800/50 touch-target"
                    >
                      {item === 'faq' ? 'FAQ' : item}
                    </motion.button>
                  ))}
                  
                  <div className="pt-4 space-y-3 px-4">
                    <Button 
                      variant="outline" 
                      className="w-full border-slate-600 text-slate-300 hover:bg-slate-800/50 h-12 touch-target"
                      onClick={() => {
                        setShowAuthModal(true)
                        setIsOpen(false)
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="w-full bg-gradient-to-r from-navy-600 to-emerald-600 h-12 touch-target"
                      onClick={() => {
                        window.open('https://demo.admybrand.ai/signup', '_blank')
                        setIsOpen(false)
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

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
