'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power2.inOut" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              ref={buttonRef}
              onClick={scrollToTop}
              size="icon"
              className="glass border border-white/20 text-white hover:bg-white/20 hover:border-navy-400 transition-all duration-300 shadow-lg"
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronUp className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
