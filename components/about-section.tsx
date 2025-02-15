'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { PinCard } from './pin-card';
import { Button } from '@/components/ui/button';

const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-6 h-6" />, description: "NoSQL database for scalable apps" },
  { name: "Express.js", icon: <SiNodedotjs className="text-green-400 w-6 h-6" />, description: "Minimalist web framework" },
  { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" />, description: "Building modern UIs" },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500 w-6 h-6" />, description: "Backend development" },
  { name: "HTML",icon: <SiHtml5 className="text-orange-600 w-6 h-6" />,description: "Markup language for web pages",},
  {name: "CSS",icon: <SiCss3 className="text-blue-500 w-6 h-6" />,description: "Style sheet language for web pages", },
  {name: "Tailwind CSS",icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" />,description: "Utility-first CSS framework",},
  {name: "JavaScript",icon: <SiJavascript className="text-yellow-500 w-6 h-6" />,description: "Programming language for web development",}
  
];

export function AboutSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skills : skills.slice(0, 4); // Show first 4 initially

  return (
    <section id="about" className="py-20 px-4 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="rounded-full overflow-hidden w-[300px] h-[300px] mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D12AQEQ91QyjYccMQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174742372?e=2147483647&v=beta&t=77qfS1_SDRvCTpYp_5C4pyVrBj4Qwo-mvU7xjZ5gVtY"
                alt="Profile"
                width={400}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I'm a passionate Full Stack Developer with a love for creating beautiful, 
              functional, and user-friendly applications. With years of experience in 
              web development, I specialize in building modern web applications using 
              cutting-edge technologies.
            </p>

            <motion.div
              initial={{ height: "auto" }}
              animate={{ height: showAll ? "auto" : "220px" }} // Adjust height for collapse effect
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-4 ">
                <AnimatePresence>
                  {displayedSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <PinCard className='h-[100px]'>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </PinCard>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Show More / Show Less Button */}
            <div className="mt-6 text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.3 }}
              >
                <Button 
                  variant="outline" 
                  className="text-primary font-semibold hover:bg-primary/10 transition-all"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : "Show More"}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
