'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, Mail } from 'lucide-react'
import { AnimatedBackground } from './animated-background'
import React from 'react'

const roles = ["MERN Stack Developer", "Problem Solver", "Tech Enthusiast"]

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 200])

  const [roleIndex, setRoleIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section>
      <div id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
        {/* <AnimatedBackground /> */}
        <motion.div 
          className="max-w-4xl mx-auto text-center z-10 xl:gap-y-20 xl:flex xl:flex-col xl:justify-between xl:h-[850px]"
          style={{ y }}
        >
          <div></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi 👋  I'm <span className="text-primary">Muthuselvam</span>
            </h1>
            
            <motion.div
              className="h-12 text-2xl md:text-3xl text-muted-foreground"
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {roles[roleIndex]}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a 
                href="My_Resume.pdf"
                target='_blank'
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Download Resume
              </motion.a>
              <motion.button 
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "#contact"}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
          <div className="xl:flex hidden justify-center items-center text-3xl animate-bounce hover:text-violet-600 "><a href='#about'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="hidden md:block lg:block xl:block cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"></path></svg></a></div>

        </motion.div>
        </div>
    </section>
  )
}

