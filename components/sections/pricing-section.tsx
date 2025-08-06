'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    icon: Star,
    features: [
      '5 AI-generated campaigns per month',
      'Basic analytics dashboard',
      'Email support',
      '1 brand profile',
      'Standard templates'
    ],
    limitations: [
      'Limited customization',
      'Basic reporting only'
    ],
    cta: 'Get Started Free',
    popular: false,
    gradient: 'from-slate-600 to-slate-700'
  },
  {
    name: 'Pro',
    price: 49,
    description: 'For growing businesses',
    icon: Zap,
    features: [
      'Unlimited AI campaigns',
      'Advanced analytics & insights',
      'Priority support',
      '5 brand profiles',
      'Custom templates',
      'A/B testing tools',
      'Multi-platform publishing',
      'Performance optimization'
    ],
    limitations: [],
    cta: 'Start Pro Trial',
    popular: true,
    gradient: 'from-navy-600 to-emerald-600'
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations',
    icon: Crown,
    features: [
      'Everything in Pro',
      'White-label solution',
      'Dedicated account manager',
      'Unlimited brand profiles',
      'Custom AI model training',
      'Advanced integrations',
      'SLA guarantee',
      'Custom reporting'
    ],
    limitations: [],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-emerald-600 to-navy-600'
  }
]

export default function PricingSection() {
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
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards animation with special effect for popular plan
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children)
        
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            { y: 100, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: index === 1 ? 1.05 : 1, // Popular plan slightly larger
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
              }
            }
          )
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="py-24 relative bg-slate-800/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-4 h-4 mr-2 text-emerald-400" />
            Simple Pricing
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-navy-400 to-emerald-400 bg-clip-text text-transparent">
              {' '}Perfect Plan
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core AI features 
            with no hidden fees or long-term commitments.
          </p>
        </div>

        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="bg-gradient-to-r from-navy-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}
              
              <div className={`glass rounded-2xl border p-8 h-full transition-all duration-500 ${
                plan.popular 
                  ? 'border-navy-500/50 shadow-xl shadow-navy-500/20' 
                  : 'border-white/10 hover:border-white/20'
              } group-hover:shadow-2xl`}>
                
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`rounded-xl p-3 bg-gradient-to-r ${plan.gradient} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <plan.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                    <p className="text-slate-400 text-sm">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <motion.span 
                      className="text-4xl font-bold text-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      ${plan.price}
                    </motion.span>
                    <span className="text-slate-400 ml-2">/month</span>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    className={`w-full mb-8 transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-navy-500/30 btn-glow`
                        : 'bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 backdrop-blur-sm'
                    }`}
                    size="lg"
                    onClick={() => {
                      if (plan.name === 'Enterprise') {
                        window.open('https://calendly.com/enterprise-demo-admybrand', '_blank');
                      } else if (plan.name === 'Free') {
                        window.open('https://demo.admybrand.ai/signup?plan=free', '_blank');
                      } else {
                        window.open('https://demo.admybrand.ai/signup?plan=pro&trial=true', '_blank');
                      }
                    }}
                  >
                    {plan.cta}
                  </Button>
                </motion.div>

                <div className="space-y-4">
                  <h4 className="text-white font-medium mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-white/10">
                      <h5 className="text-slate-500 text-sm mb-2">Limitations:</h5>
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start">
                          <div className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0">
                            <div className="w-1 h-1 bg-slate-500 rounded-full mt-2"></div>
                          </div>
                          <span className="text-slate-500 text-sm">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl border border-white/10 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {[
                { icon: Check, title: "30-Day Guarantee", desc: "Full money-back guarantee", color: "from-emerald-500 to-emerald-600" },
                { icon: Shield, title: "Secure & Safe", desc: "Enterprise-grade security", color: "from-navy-500 to-navy-600" },
                { icon: Zap, title: "Instant Setup", desc: "Get started in minutes", color: "from-emerald-600 to-navy-500" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 transition-all duration-300 btn-glow"
                  onClick={() => window.open('https://demo.admybrand.ai/signup?trial=true', '_blank')}
                >
                  Start Risk-Free Trial
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
