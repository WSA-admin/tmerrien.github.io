'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  // Split by words instead of letters to keep first and last names together
  const nameWords = ["Tanguy", "Merrien"];

  return (
    <section id="home" className="hero min-h-screen flex items-center justify-center relative overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/20250702_1144_Teal Indigo Elegance_simple_compose_01jz5wy74eekhaw0pcbzaktaer.mp4" type="video/mp4" />
      </video>
      
      {/* Simple overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="text-center space-y-6 sm:space-y-8 relative z-20 max-w-4xl mx-auto">
        {/* Main title - animate each word separately to keep names together */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-2 sm:gap-4"
        >
          {nameWords.map((word, wordIndex) => {
            const letters = word.split("");
            return (
              <motion.div
                key={wordIndex}
                className="flex justify-center items-center"
                variants={letterVariants}
              >
                {letters.map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    variants={letterVariants}
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white drop-shadow-lg"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            );
          })}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-2 sm:space-y-4"
        >
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light">
            Full-Stack Developer
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed px-4">
            Building modern web applications with a focus on{' '}
            <span className="text-teal-300 font-medium">AI-assisted development</span>
            {' '}and clean, scalable solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
} 