import HeroSection from '@/components/sections/hero-section'
import FeaturesSection from '@/components/sections/features-section'
import PricingSection from '@/components/sections/pricing-section'
import TestimonialsSection from '@/components/sections/testimonials-section'
import FAQSection from '@/components/sections/faq-section'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import FloatingCTA from '@/components/ui/floating-cta'
import ScrollToTop from '@/components/ui/scroll-to-top'

export default function Home() {
  return (
    <div className="min-h-screen bg-professional">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  )
}
