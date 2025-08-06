'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Brain, Target, BarChart3, Zap, Users, Shield, Sparkles, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Create compelling ad copy, social media posts, and marketing materials with advanced AI algorithms.',
    color: 'from-navy-500 to-navy-600'
  },
  {
    icon: Target,
    title: 'Smart Audience Targeting',
    description: 'Identify and reach your ideal customers with precision targeting powered by machine learning.',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Track campaign performance with detailed insights and actionable recommendations.',
    color: 'from-navy-600 to-emerald-500'
  },
  {
    icon: Zap,
    title: 'Automated Optimization',
    description: 'Let AI continuously optimize your campaigns for maximum ROI and performance.',
    color: 'from-emerald-600 to-navy-500'
  },
  {
    icon: Users,
    title: 'Multi-Platform Management',
    description: 'Manage all your marketing channels from one unified, intuitive dashboard.',
    color: 'from-navy-500 to-emerald-600'
  },
  {
    icon: Shield,
    title: 'Brand Safety & Compliance',
    description: 'Ensure your content meets platform guidelines and maintains brand consistency.',
    color: 'from-emerald-500 to-navy-600'
  }
]

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards stagger animation
      if (cardsRef.current) {
        gsap.fromTo(cardsRef.current.children,
          { y: 80, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="features" className="py-24 relative bg-slate-900/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-navy-400" />
            Powerful Features
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-navy-400 to-emerald-400 bg-clip-text text-transparent">
              {' '}Dominate{' '}
            </span>
            Your Market
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our comprehensive AI-powered suite provides all the tools you need to create, 
            optimize, and scale your marketing campaigns like never before.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={() => window.open(`https://demo.admybrand.ai/features/${feature.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
            >
              <div className="glass rounded-2xl border border-white/10 p-8 h-full transition-all duration-500 group-hover:border-navy-400/50 group-hover:shadow-xl group-hover:shadow-navy-500/10 shimmer">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`bg-gradient-to-r ${feature.color} rounded-xl p-3 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-navy-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between">
                  <motion.div 
                    className="flex items-center text-navy-400 group-hover:text-emerald-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium">Try it now</span>
                    <TrendingUp className="w-4 h-4 ml-2" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-slate-400 hover:text-white hover:bg-white/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open('https://demo.admybrand.ai/signup', '_blank');
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 glass rounded-2xl border border-white/10 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500%", label: "Average ROI Increase" },
              { value: "10K+", label: "Active Campaigns" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "24/7", label: "AI-Powered Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-navy-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using ADmyBRAND AI Suite to scale their marketing efforts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 transition-all duration-300 shadow-lg btn-glow"
                  onClick={() => window.open('https://demo.admybrand.ai/signup?trial=true', '_blank')}
                >
                  Start Your Free Trial
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-navy-400 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://calendly.com/demo-admybrand', '_blank')}
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
