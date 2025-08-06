'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Target, TrendingUp, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const dashboardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      )

      gsap.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.6 }
      )

      gsap.fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.9 }
      )

      gsap.fromTo(dashboardRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      )

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-professional">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-navy-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-emerald-500/10 rounded-full blur-2xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 pt-20 pb-12">
        <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-1">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-3 py-1.5 rounded-full glass border border-white/20 text-xs text-white mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-3 h-3 mr-2 text-emerald-400" />
              AI-Powered Marketing Revolution
            </motion.div>

            {/* Title */}
            <h1 ref={titleRef} className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-snug sm:leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-navy-400 to-emerald-400 bg-clip-text text-transparent">
                {' '}Brand{' '}
              </span>
              with AI Magic
            </h1>

            {/* Subtitle */}
            <p ref={subtitleRef} className="text-sm sm:text-base text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, 
              optimize ad performance, and scale your brand like never before.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 w-full max-w-md mx-auto lg:mx-0">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base group transition-all duration-300 shadow-xl w-full sm:w-auto h-14"
                  onClick={() => window.open('https://demo.admybrand.ai/signup?trial=true', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-navy-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base group transition-all duration-300 backdrop-blur-sm w-full sm:w-auto h-14"
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { value: "10K+", label: "Users" },
                { value: "500%", label: "ROI" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center w-24"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="glass rounded-xl border border-white/10 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>14-day free trial</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>No credit card required</span>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative order-2 w-full max-w-full sm:max-w-md lg:max-w-none px-4">
            <div ref={dashboardRef} className="relative">
              <motion.div 
                className="glass rounded-xl border border-white/20 p-4 sm:p-6 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Mock UI */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold text-sm sm:text-base">Campaign Performance</h3>
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <motion.div className="bg-white/5 rounded-lg p-3" whileHover={{ scale: 1.05 }}>
                      <div className="text-navy-400 text-xs">Impressions</div>
                      <div className="text-white text-xl font-bold">2.4M</div>
                    </motion.div>
                    <motion.div className="bg-white/5 rounded-lg p-3" whileHover={{ scale: 1.05 }}>
                      <div className="text-emerald-400 text-xs">Conversions</div>
                      <div className="text-white text-xl font-bold">12.8K</div>
                    </motion.div>
                  </div>

                  <div className="bg-gradient-to-r from-navy-500/20 to-emerald-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="w-4 h-4 text-navy-400" />
                      <span className="text-white text-sm">AI Optimization Active</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-navy-400 to-emerald-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ delay: 2, duration: 1.5, ease: "power2.out" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-r from-navy-500 to-emerald-500 rounded-full p-2 shadow-lg animate-float"
                whileHover={{ scale: 1.2, rotate: 180 }}
              >
                <Zap className="w-4 h-4 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -left-3 bg-gradient-to-r from-emerald-500 to-navy-500 rounded-full p-2 shadow-lg animate-float"
                style={{ animationDelay: '2s' }}
                whileHover={{ scale: 1.2, rotate: -180 }}
              >
                <Target className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
