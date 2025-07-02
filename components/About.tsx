'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  const words = "I'm a Full-Stack Developer with a Computer Science background from UPEI. I specialize in building modern web applications and exploring AI-assisted development tools to enhance productivity and code quality.".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-16 lg:py-32 relative overflow-hidden" ref={containerRef}>
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        style={{ opacity }}
      />
      
      {/* Floating code symbols */}
      <motion.div
        className="absolute top-20 left-[10%] text-6xl text-blue-500/10 dark:text-blue-400/10 font-mono"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
      >
        {'</>'}
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-[15%] text-8xl text-purple-500/10 dark:text-purple-400/10 font-mono"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      >
        {'{}'}
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-[5%] text-4xl text-green-500/10 dark:text-green-400/10 font-mono"
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -150]) }}
      >
        {'[]'}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with creative reveal */}
        <motion.div
          className="text-center mb-20"
          style={{ scale }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Animated text */}
          <motion.div
            ref={textRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-800 dark:text-gray-200 font-light">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-2 mb-2"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#3B82F6",
                    transition: { duration: 0.2 }
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats with counter animations */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  2025
                </motion.div>
                <div className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Graduation</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  AI
                </motion.div>
                <div className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">Focus Area</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  className="text-4xl font-black text-green-600 dark:text-green-400 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  UPEI
                </motion.div>
                <div className="text-sm uppercase tracking-wide text-gray-600 dark:text-gray-400">University</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Interactive visual element */}
          <motion.div
            className="relative"
            style={{ y }}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl"
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Code snippet animation */}
              <motion.div
                className="font-mono text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-green-500 dark:text-green-400 mb-2">// About me</div>
                <div className="text-blue-500 dark:text-blue-400">const</div>{" "}
                <span className="text-purple-500 dark:text-purple-400">tanguy</span>{" "}
                <span className="text-gray-700 dark:text-gray-300">=</span>{" "}
                <span className="text-yellow-500 dark:text-yellow-400">{'{'}</span>
                
                <div className="ml-4 my-2 space-y-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-red-500 dark:text-red-400">role</span>
                    <span className="text-gray-700 dark:text-gray-300">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">'Student & Developer'</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-red-500 dark:text-red-400">focus</span>
                    <span className="text-gray-700 dark:text-gray-300">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">'AI-assisted tools'</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-red-500 dark:text-red-400">passion</span>
                    <span className="text-gray-700 dark:text-gray-300">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">'Innovation'</span>,
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-red-500 dark:text-red-400">location</span>
                    <span className="text-gray-700 dark:text-gray-300">:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">'PEI, Canada'</span>
                  </motion.div>
                </div>
                
                <span className="text-yellow-500 dark:text-yellow-400">{'}'}</span>
              </motion.div>

              {/* Floating elements around the card */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  y: [0, -10, 0] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 