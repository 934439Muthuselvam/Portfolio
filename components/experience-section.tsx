'use client'

import { Timeline } from './timeline'

const experiences = [
  {
    date: '2024 - Present',
    title: 'Full Stack Developer at Brain Insight',
    description: 'Built responsive web applications,integrated third-party APIs',
    color: 'green'
  },

  {
    date: '2024',
    title: 'Intern at Brain Insight',
    description: 'Built responsive web applications,integrated third-party APIs',
    color: 'purple'
  },

  {
    date: '2023 - 2024',
    title: 'Frontend Developer as a Freelancer',
    description: 'Built responsive web applications with React,implemented responsive designs.',
    color: 'blue'
  },
  // {
  //   date: '2020 - 2024',
  //   title: 'Intern at NSIC Academy',
  //   description: 'Learned the fundamentals of AI in Embedded Systems.',
  //   color: 'purple'
  // },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/50 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <Timeline items={experiences} />
      </div>
    </section>
  )
}

