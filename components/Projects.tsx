'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'WorkSource Alliance ATS Platform',
    description: 'A comprehensive applicant tracking system built with Next.js, Supabase, and Makerkit. Serves non-profits and institutions with advanced applicant curation, employer relationship management, and workflow automation features.',
    imageSrc: '/logos/WorkSource-Alliance-Logo-gradient-1280x301.png',
    liveUrl: 'https://beta.worksourcealliance.ca',
    repoUrl: null,
    isProprietary: true,
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'],
    category: 'Enterprise Platform'
  },
  {
    title: 'Kirkwood Gaps Analysis',
    description: 'A physics research project investigating orbital resonance gaps in the asteroid belt. Combines computational analysis with theoretical physics to model and visualize the gravitational dynamics.',
    imageSrc: null,
    liveUrl: 'https://github.com/tmerrien/kirkwood_gaps',
    repoUrl: 'https://github.com/tmerrien/kirkwood_gaps',
    isProprietary: false,
    tech: ['Python', 'NumPy', 'Matplotlib', 'Physics'],
    category: 'Research Project'
  },
  {
    title: 'ADL Foods Website Enhancement',
    description: 'Frontend development and infrastructure improvements for ADL Foods\' commercial website. Focused on UX/UI enhancements, performance optimization, and maintaining high availability.',
    imageSrc: '/logos/NEW-ADL-LOGO-04.png',
    liveUrl: 'https://adlfoods.ca',
    repoUrl: null,
    isProprietary: true,
    tech: ['React', 'WordPress', 'PHP', 'CSS'],
    category: 'Web Development'
  }
];

// Enhanced ProjectCard with 3D effects
const FloatingProjectCard = ({ project, index, mouseX, mouseY }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        y: 100,
        scale: 0.8,
        rotateZ: index % 2 === 0 ? -5 : 5
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotateZ: index % 2 === 0 ? -2 : 2
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative group cursor-pointer"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: 1.05,
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="relative w-full h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          }}
        />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: isHovered ? [-20, -40, -20] : [0],
            x: isHovered ? [10, -10, 10] : [0],
            opacity: isHovered ? [0.5, 1, 0.5] : [0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            y: isHovered ? [20, 40, 20] : [0],
            x: isHovered ? [-10, 10, -10] : [0],
            opacity: isHovered ? [0.5, 1, 0.5] : [0]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />

        {/* Category badge */}
        <motion.div
          className="absolute top-6 left-6 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          {project.category}
        </motion.div>

        {/* Project logo/image - only show if imageSrc exists */}
        {project.imageSrc && (
          <motion.div
            className="w-16 h-16 mb-6 mt-8 relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src={project.imageSrc} 
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className={`text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight ${!project.imageSrc ? 'mt-8' : ''}`}
            style={{ transform: 'translateZ(20px)' }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p
            className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6"
            style={{ transform: 'translateZ(10px)' }}
          >
            {project.description}
          </motion.p>

          {/* Tech stack */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            style={{ transform: 'translateZ(5px)' }}
          >
            {project.tech.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 + 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex gap-3"
            style={{ transform: 'translateZ(30px)' }}
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-medium text-center transition-all duration-300 hover:shadow-lg"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {project.isProprietary ? 'View Live' : 'View Project'}
            </motion.a>
            
            {project.repoUrl && (
              <motion.a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium text-center transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Code
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Enhanced 3D depth indicator */}
        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ transform: 'translateZ(40px)' }}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : [1],
            rotate: isHovered ? [0, 180, 360] : [0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const floatingY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="projects" className="py-16 lg:py-32 relative overflow-hidden" ref={containerRef}>
      {/* Dynamic background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"
        style={{ y: backgroundY }}
      />
      
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        style={{ y: floatingY1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-[15%] w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        style={{ y: floatingY2 }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Geometric shapes */}
      <motion.div
        className="absolute top-32 right-[20%] text-6xl text-blue-500/5 dark:text-blue-400/5 font-mono"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        ⬢
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-[25%] text-8xl text-purple-500/5 dark:text-purple-400/5 font-mono"
        animate={{
          rotate: [360, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        ◆
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Exploring the intersection of{' '}
            <motion.span
              className="text-blue-500 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              technology
            </motion.span>
            {' '}and{' '}
            <motion.span
              className="text-purple-500 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              innovation
            </motion.span>
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="relative mx-auto"
            style={{ width: '200px', height: '4px' }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>

        {/* Dynamic grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {projects.map((project, index) => (
            <FloatingProjectCard
              key={project.title}
              project={project}
              index={index}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>
        
        {/* Call to action with magnetic effect */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 cursor-pointer group"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(59, 130, 246, 0.05)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition-colors"
            >
              More innovative projects in development
            </motion.span>
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-2xl"
            >
              ⚡
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 