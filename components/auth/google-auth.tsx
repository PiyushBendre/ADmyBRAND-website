'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GoogleAuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GoogleAuthModal({ isOpen, onClose }: GoogleAuthModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    // Simulate Google OAuth flow
    setTimeout(() => {
      window.open('https://accounts.google.com/oauth/authorize?client_id=demo&redirect_uri=https://demo.admybrand.ai/auth/callback&response_type=code&scope=email profile', '_blank')
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  const handleEmailSignIn = () => {
    window.open('https://demo.admybrand.ai/login', '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 rounded-2xl border border-slate-700 p-8 max-w-md w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Sign In</h2>
          <motion.button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="space-y-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 flex items-center justify-center space-x-3 transition-all duration-300"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </>
              )}
            </Button>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-900 text-slate-400">or</span>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={handleEmailSignIn}
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-slate-500 py-3 flex items-center justify-center space-x-3"
            >
              <Mail className="w-5 h-5" />
              <span>Continue with Email</span>
            </Button>
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-400 text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => window.open('https://demo.admybrand.ai/signup', '_blank')}
              className="text-navy-400 hover:text-navy-300 transition-colors"
            >
              Sign up for free
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-slate-500 text-xs">
            By signing in, you agree to our{' '}
            <a href="https://admybrand.ai/terms" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="https://admybrand.ai/privacy" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
