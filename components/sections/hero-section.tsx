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
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      )

      gsap.fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.8 }
      )

      gsap.fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 1.1 }
      )

      gsap.fromTo(dashboardRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.7 }
      )

      // Floating elements animation
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children
        gsap.fromTo(elements,
          { y: 50, opacity: 0, rotation: -10 },
          { y: 0, opacity: 1, rotation: 0, duration: 1, stagger: 0.2, delay: 1.5, ease: "back.out(1.7)" }
        )
      }

      // Continuous floating animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-professional">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-navy-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-navy-500/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm text-white mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Zap className="w-4 h-4 mr-2 text-emerald-400" />
              AI-Powered Marketing Revolution
            </motion.div>

            <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-navy-400 to-emerald-400 bg-clip-text text-transparent">
                {' '}Brand{' '}
              </span>
              with AI Magic
            </h1>

            <p ref={subtitleRef} className="text-xl text-slate-300 mb-8 max-w-2xl">
              Supercharge your marketing campaigns with our AI-powered suite. Generate compelling content, 
              optimize ad performance, and scale your brand like never before.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 text-white px-8 py-4 text-lg group transition-all duration-300 shadow-xl hover:shadow-navy-500/30 btn-glow"
                  onClick={() => window.open('https://demo.admybrand.ai/signup?trial=true', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-navy-400 hover:text-white px-8 py-4 text-lg group transition-all duration-300 backdrop-blur-sm"
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-8 mt-12 text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {[
                { value: "10K+", label: "Active Users" },
                { value: "500%", label: "ROI Increase" },
                { value: "24/7", label: "AI Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-8 p-4 glass rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>14-day free trial</span>
                </div>
                <div className="w-1 h-4 bg-slate-600"></div>
                <span>No credit card required</span>
                <div className="w-1 h-4 bg-slate-600"></div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div ref={dashboardRef} className="relative">
              {/* Main Dashboard */}
              <motion.div 
                className="glass rounded-2xl border border-white/20 p-6 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Campaign Performance</h3>
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-white/5 rounded-lg p-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-navy-400 text-sm">Impressions</div>
                      <div className="text-white text-xl font-bold">2.4M</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/5 rounded-lg p-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-emerald-400 text-sm">Conversions</div>
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

              {/* Floating Elements */}
              <div ref={floatingElementsRef}>
                <motion.div
                  className="floating-element absolute -top-4 -right-4 bg-gradient-to-r from-navy-500 to-emerald-500 rounded-full p-3 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  className="floating-element absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-navy-500 rounded-full p-3 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: -180 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
