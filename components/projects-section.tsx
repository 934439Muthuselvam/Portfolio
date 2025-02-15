'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Globe, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination , Autoplay } from 'swiper/modules';
import { PinContainer } from "./ui/3d-pin";

const projects = [
  {
    title: 'IT-consulting-website',
   description: 'A responsive website built with HTML and Tailwind CSS for a modern and sleek user experience.',
    tech: ['Html','Css','Tailwindcss','Javascript'],
    demo: 'https://it-consulting-website-mu.vercel.app/',
    image: "WebTeck.gif",
    urlName:"IT-consulting-website"
  },
  {
    title: 'Task Manager',
    description: 'A MERN stack-based task manager for efficient employee task allocation and team lead oversight.',
    tech: ['MongoDB','Express.js','React.js','Node.js'],
    demo: 'https://task-manager-frontend-ivory-delta.vercel.app/',
    image: 'Task_Manager.gif',
    urlName:"Task_Manager"
  },
  {
    title: 'Event Management',
    description: 'A MERN stack-based event management system for Suvidha International Foundation.',
    tech: ['MongoDB','Express.js','React.js','Node.js'],
    demo: '',
    image: 'Event_Management.gif',
    urlName:"Event_Management"
  },
  {
    title: 'Dashboard Ui design',
    description: 'A hospital dashboard UI built with HTML, Tailwind CSS, React, and JavaScript.',
    tech: ['Html','Tailwindcss','JavaScript','React.js'],
    demo: 'https://dashboard-five-liard-32.vercel.app/',
    image: 'Dashboard.gif',
    urlName:"Dashboard Ui design"
  },
  // {
  //   title: 'CRM Tool',
  //   description: 'A CRM tool with real-time updates to track progress seamlessly using Socket.io.',
  //   tech: ['React.js', 'Express.js','MongoDB','Socket.io','AWS'],
  //   demo: 'https://dashboard-five-liard-32.vercel.app/',
  //   image: 'Dashboard.gif',
  //   urlName:"Dashboard Ui design"
  // }
  
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4 bg-muted/50 relative z-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <h5 className='text-lg font-bold mb-12 text-center text-slate-400'>Key Collaborative Projects & Contributions</h5>
        
        <Swiper
          modules={[ Autoplay,Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          suppressHydrationWarning={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.title} className='py-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PinContainer
        title={project.urlName}
        href={project.demo} 
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {project.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            {project.description}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
                      {project.tech.map(tech => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 rounded-full text-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ArrowUpRight className="w-10 h-10 text-primary" />
                      </div>
        </div>
      </PinContainer>
               
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
