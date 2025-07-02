'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactText = "Get In Touch";
  const letters = contactText.split("");

  if (!mounted) {
    return null;
  }

  return (
    <section id="contact" className="py-16 lg:py-32 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900" ref={containerRef}>
      {/* Simplified background elements */}
      <motion.div
        className="absolute top-20 left-[10%] w-32 h-32 border border-gray-300/30 dark:border-white/10 rounded-full"
        style={{ y: y1, rotate }}
      />
      <motion.div
        className="absolute bottom-20 right-[15%] w-20 h-20 bg-blue-200/30 dark:bg-blue-500/10 rounded-full"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-[5%] w-16 h-16 bg-purple-200/30 dark:bg-purple-500/10"
        style={{ y: y1 }}
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated main title */}
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12"
            key={mounted ? 'mounted' : 'unmounted'} // Force re-render on mount
          >
            {letters.map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                variants={letterVariants}
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
                  letter === ' ' ? 'w-2 sm:w-4' : ''
                } text-gray-900 dark:text-white drop-shadow-lg transition-colors duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  color: "#60A5FA",
                  transition: { duration: 0.2 }
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtitle with typing effect */}
          <motion.p
            className="text-lg sm:text-xl text-gray-700 dark:text-gray-100 mb-12 leading-relaxed max-w-2xl mx-auto transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            Let's discuss your next project or collaboration opportunity.
          </motion.p>

          {/* Interactive contact button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.a
              href="mailto:tmerrien@outlook.com"
              className="group relative inline-block"
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-lg opacity-75"
                animate={{
                  scale: isHovering ? 1.1 : 1,
                  opacity: isHovering ? 1 : 0.75
                }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative bg-white text-gray-900 px-12 py-4 rounded-full font-semibold text-lg border border-gray-300 dark:border-white/20 backdrop-blur-sm transition-colors duration-300">
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  animate={{ x: isHovering ? [0, 5, 0] : 0 }}
                  transition={{ duration: 0.5, repeat: isHovering ? Infinity : 0 }}
                >
                  →
                </motion.div>
              </div>
            </motion.a>
          </motion.div>

          {/* Contact info cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-600 shadow-lg transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-3">📧</div>
              <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-2 transition-colors duration-300">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">tmerrien@outlook.com</p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-600 shadow-lg transition-colors duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-2 transition-colors duration-300">Location</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Ottawa, Canada</p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
} 