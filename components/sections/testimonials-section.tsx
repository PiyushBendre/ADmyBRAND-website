'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Filter, Building, Users, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'TechFlow Inc.',
    role: 'Marketing Director',
    avatar: '/images/testimonials/sarah-chen.png',
    rating: 5,
    industry: 'Technology',
    companySize: 'Medium',
    employees: '50-200',
    text: 'ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 400% increase in engagement within the first month. The AI-generated content is incredibly sophisticated and on-brand.'
  },
  {
    name: 'Michael Rodriguez',
    company: 'GrowthCorp',
    role: 'CEO',
    avatar: '/images/testimonials/michael-rodriguez.png',
    rating: 5,
    industry: 'E-commerce',
    companySize: 'Large',
    employees: '500+',
    text: 'The ROI we\'ve achieved with this platform is unprecedented. The automated optimization features saved us countless hours while delivering better results than our previous manual campaigns.'
  },
  {
    name: 'Emily Watson',
    company: 'Creative Agency Pro',
    role: 'Creative Director',
    avatar: '/images/testimonials/emily-watson.png',
    rating: 5,
    industry: 'Marketing',
    companySize: 'Medium',
    employees: '50-200',
    text: 'As a creative professional, I was skeptical about AI-generated content. But ADmyBRAND AI Suite produces content that rivals our best human copywriters. It\'s become an essential tool for our team.'
  },
  {
    name: 'Lisa Thompson',
    company: 'Brand Builders',
    role: 'Brand Strategist',
    avatar: '/images/testimonials/lisa-thompson.png',
    rating: 5,
    industry: 'Consulting',
    companySize: 'Small',
    employees: '10-50',
    text: 'The brand safety features give us complete peace of mind. We can scale our content production without worrying about brand consistency or compliance issues.'
  },
  {
    name: 'David Kim',
    company: 'E-commerce Plus',
    role: 'Marketing Manager',
    avatar: '/images/testimonials/david-kim.png',
    rating: 5,
    industry: 'E-commerce',
    companySize: 'Large',
    employees: '200-500',
    text: 'The multi-platform management feature is a game-changer. We can now manage campaigns across all social media platforms from one dashboard. Our productivity has increased by 300%.'
  },
  {
    name: 'Alex Johnson',
    company: 'FinTech Solutions',
    role: 'Head of Marketing',
    avatar: '/placeholder.svg?height=80&width=80&text=AJ',
    rating: 5,
    industry: 'Finance',
    companySize: 'Large',
    employees: '500+',
    text: 'Security and compliance are crucial in fintech. ADmyBRAND AI Suite not only delivers exceptional results but also meets all our regulatory requirements.'
  },
  {
    name: 'Maria Garcia',
    company: 'HealthTech Innovations',
    role: 'VP Marketing',
    avatar: '/placeholder.svg?height=80&width=80&text=MG',
    rating: 5,
    industry: 'Healthcare',
    companySize: 'Medium',
    employees: '100-200',
    text: 'In healthcare marketing, accuracy and trust are everything. The AI generates content that\'s both engaging and medically accurate, helping us reach more patients effectively.'
  },
  {
    name: 'James Wilson',
    company: 'EduLearn Platform',
    role: 'Marketing Lead',
    avatar: '/placeholder.svg?height=80&width=80&text=JW',
    rating: 5,
    industry: 'Education',
    companySize: 'Small',
    employees: '25-50',
    text: 'As a growing edtech startup, we needed cost-effective marketing solutions. ADmyBRAND AI Suite gave us enterprise-level capabilities at a fraction of the cost.'
  }
]

const industries = ['All', 'Technology', 'E-commerce', 'Marketing', 'Consulting', 'Finance', 'Healthcare', 'Education']
const companySizes = ['All', 'Small', 'Medium', 'Large']

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [selectedCompanySize, setSelectedCompanySize] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)

  // Filter testimonials based on selected criteria
  const filteredTestimonials = testimonials.filter(testimonial => {
    const industryMatch = selectedIndustry === 'All' || testimonial.industry === selectedIndustry
    const sizeMatch = selectedCompanySize === 'All' || testimonial.companySize === selectedCompanySize
    return industryMatch && sizeMatch
  })

  // Reset current index when filters change
  useEffect(() => {
    setCurrentIndex(0)
    setIsAutoPlaying(true)
  }, [selectedIndustry, selectedCompanySize])

  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, filteredTestimonials.length])

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

      // Testimonial card animation
      gsap.fromTo(testimonialRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const getCompanySizeIcon = (size: string) => {
    switch (size) {
      case 'Small': return <Users className="w-4 h-4" />
      case 'Medium': return <Building className="w-4 h-4" />
      case 'Large': return <Zap className="w-4 h-4" />
      default: return <Building className="w-4 h-4" />
    }
  }

  const getIndustryColor = (industry: string) => {
    const colors = {
      'Technology': 'from-blue-500 to-blue-600',
      'E-commerce': 'from-green-500 to-green-600',
      'Marketing': 'from-purple-500 to-purple-600',
      'Consulting': 'from-orange-500 to-orange-600',
      'Finance': 'from-emerald-500 to-emerald-600',
      'Healthcare': 'from-red-500 to-red-600',
      'Education': 'from-indigo-500 to-indigo-600'
    }
    return colors[industry as keyof typeof colors] || 'from-gray-500 to-gray-600'
  }

  if (filteredTestimonials.length === 0) {
    return (
      <section className="py-24 relative bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-2xl border border-white/10 p-12">
            <h3 className="text-2xl font-bold text-white mb-4">No testimonials found</h3>
            <p className="text-slate-400 mb-6">Try adjusting your filters to see more results.</p>
            <Button 
              onClick={() => {
                setSelectedIndustry('All')
                setSelectedCompanySize('All')
              }}
              className="bg-gradient-to-r from-navy-600 to-emerald-600"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 relative bg-slate-900/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 mr-2 text-emerald-400" />
            Customer Stories
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by
            <span className="bg-gradient-to-r from-navy-400 to-emerald-400 bg-clip-text text-transparent">
              {' '}10,000+{' '}
            </span>
            Marketing Teams
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            See how businesses like yours are transforming their marketing with ADmyBRAND AI Suite.
          </p>

          {/* Filter Toggle */}
          <motion.div
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-navy-400 flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filter Testimonials</span>
            </Button>
          </motion.div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="glass rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 mb-6 sm:mb-8 overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Industry Filter */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                      <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-navy-400" />
                      Industry
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {industries.map((industry) => (
                        <motion.button
                          key={industry}
                          onClick={() => setSelectedIndustry(industry)}
                          className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 touch-target ${
                            selectedIndustry === industry
                              ? `bg-gradient-to-r ${getIndustryColor(industry)} text-white shadow-lg`
                              : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {industry}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Company Size Filter */}
                  <div>
                    <h3 className="text-white font-semibold mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-emerald-400" />
                      Company Size
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {companySizes.map((size) => (
                        <motion.button
                          key={size}
                          onClick={() => setSelectedCompanySize(size)}
                          className={`p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 touch-target ${
                            selectedCompanySize === size
                              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {size !== 'All' && getCompanySizeIcon(size)}
                          <span>{size}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Filters Display - Mobile Optimized */}
                {(selectedIndustry !== 'All' || selectedCompanySize !== 'All') && (
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-slate-400 text-xs sm:text-sm">Active filters:</span>
                      {selectedIndustry !== 'All' && (
                        <motion.div
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getIndustryColor(selectedIndustry)} text-white`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {selectedIndustry}
                        </motion.div>
                      )}
                      {selectedCompanySize !== 'All' && (
                        <motion.div
                          className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center space-x-1"
                          whileHover={{ scale: 1.05 }}
                        >
                          {getCompanySizeIcon(selectedCompanySize)}
                          <span>{selectedCompanySize}</span>
                        </motion.div>
                      )}
                      <motion.button
                        onClick={() => {
                          setSelectedIndustry('All')
                          setSelectedCompanySize('All')
                        }}
                        className="text-slate-400 hover:text-white text-xs underline touch-target"
                        whileHover={{ scale: 1.05 }}
                      >
                        Clear all
                      </motion.button>
                    </div>
                  </div>
                )}

                <div className="mt-3 sm:mt-4 text-center">
                  <span className="text-slate-400 text-xs sm:text-sm">
                    Showing {filteredTestimonials.length} of {testimonials.length} testimonials
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div ref={testimonialRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedIndustry}-${selectedCompanySize}-${currentIndex}`}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-navy-400 mr-3 sm:mr-4" />
                  </motion.div>
                  <div className="flex">
                    {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 sm:mb-8">
                  "{filteredTestimonials[currentIndex].text}"
                </blockquote>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img
                        src={filteredTestimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={filteredTestimonials[currentIndex].name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4 sm:mr-6 border-2 sm:border-3 border-white/20 object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    </motion.div>
                    <div>
                      <div className="text-white font-bold text-lg sm:text-xl mb-1">
                        {filteredTestimonials[currentIndex].name}
                      </div>
                      <div className="text-slate-400 font-medium text-sm sm:text-base">
                        {filteredTestimonials[currentIndex].role}
                      </div>
                      <div className="text-navy-400 font-semibold text-sm sm:text-base">
                        {filteredTestimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Industry & Company Size Tags - Mobile Optimized */}
                  <div className="flex flex-row sm:flex-col items-start sm:items-end space-x-2 sm:space-x-0 sm:space-y-2">
                    <motion.div
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getIndustryColor(filteredTestimonials[currentIndex].industry)} text-white`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {filteredTestimonials[currentIndex].industry}
                    </motion.div>
                    <motion.div
                      className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-slate-600 to-slate-700 text-white flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      {getCompanySizeIcon(filteredTestimonials[currentIndex].companySize)}
                      <span>{filteredTestimonials[currentIndex].employees}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-navy-400 w-10 h-10 sm:w-12 sm:h-12 touch-target"
                disabled={filteredTestimonials.length <= 1}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>

            {/* Dots Indicator - Mobile Optimized */}
            <div className="flex space-x-1.5 sm:space-x-2">
              {filteredTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-target ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-navy-400 to-emerald-400'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-navy-400 w-10 h-10 sm:w-12 sm:h-12 touch-target"
                disabled={filteredTestimonials.length <= 1}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Thumbnail Previews */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {filteredTestimonials.slice(0, 5).map((testimonial, index) => (
              <motion.button
                key={`${testimonial.name}-${index}`}
                onClick={() => goToTestimonial(index)}
                className={`p-2 sm:p-4 rounded-lg sm:rounded-xl border transition-all duration-300 touch-target ${
                  index === currentIndex
                    ? 'border-navy-400 glass-strong'
                    : 'border-white/10 glass hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-2 sm:mb-3 border-2 border-white/20 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-500 rounded-full border border-slate-900"></div>
                </div>
                <div className="text-white text-xs sm:text-sm font-medium truncate">
                  {testimonial.name}
                </div>
                <div className="text-slate-400 text-xs truncate">
                  {testimonial.company}
                </div>
                <div className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full mt-1 sm:mt-2 bg-gradient-to-r ${getIndustryColor(testimonial.industry)} text-white`}>
                  {testimonial.industry}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl border border-white/10 p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "4.9/5", label: "Average Rating" },
                { value: "10K+", label: "Happy Customers" },
                { value: "500%", label: "Average ROI Increase" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                  {index === 0 && (
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-emerald-400 fill-current" />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-navy-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Ready to see similar results for your business? Start your journey with ADmyBRAND AI Suite today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-navy-600 to-emerald-600 hover:from-navy-700 hover:to-emerald-700 transition-all duration-300 shadow-lg btn-glow"
                  onClick={() => window.open('https://demo.admybrand.ai/signup?trial=true', '_blank')}
                >
                  Start Free Trial
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-navy-400 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://calendly.com/success-story-admybrand', '_blank')}
                >
                  Book Success Call
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
