'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [isDismissed])

  useEffect(() => {
    if (isVisible && ctaRef.current) {
      gsap.fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0, y: 100 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
      )
    }
  }, [isVisible])

  const handleDismiss = () => {
    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 100,
        duration: 0.5,
        ease: "back.in(1.7)",
        onComplete: () => {
          setIsVisible(false)
          setIsDismissed(true)
        }
      })
    }
  }

  const handleCTA = () => {
    window.open('https://demo.admybrand.ai/signup?trial=true&source=floating-cta', '_blank')
    handleDismiss()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[280px] sm:max-w-xs lg:max-w-sm safe-area-padding">
          <motion.div
            ref={ctaRef}
            className="bg-gradient-to-r from-navy-600 to-emerald-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-2xl border border-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            <motion.button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-white/60 hover:text-white transition-colors touch-target p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
            
            <div className="flex items-center mb-2 sm:mb-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-emerald-300 mr-2" />
              </motion.div>
              <span className="text-white font-semibold text-xs sm:text-sm">Limited Time Offer</span>
            </div>
            
            <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2">
              Start Your Free Trial
            </h3>
            
            <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4">
              Join 10,000+ marketers already using ADmyBRAND AI Suite. No credit card required.
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleCTA}
                className="w-full bg-white text-navy-600 hover:bg-white/90 font-semibold group h-9 sm:h-10 lg:h-11 text-xs sm:text-sm lg:text-base touch-target"
              >
                Get Started Free
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <p className="text-white/70 text-xs mt-2 text-center">
              14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
