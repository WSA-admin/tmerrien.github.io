'use client';

import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Academic foundation and research focus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="content-title text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                B.S. (Honors) Computer Science
              </h3>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2">
                University of Prince Edward Island
              </p>
              <p className="meta text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Minor: Physics
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="meta text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Expected December 2025
              </span>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
            <h4 className="subtitle text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Honors Thesis
            </h4>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              <em className="emphasis">
                "Analyzing AI Tool Adoption Patterns in Software Development: 
                A Study of Developer Productivity and Code Quality Metrics"
              </em>
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Research focuses on the measurable impact of AI-assisted development tools 
              on programmer efficiency, code maintainability, and software quality. 
              The study examines adoption patterns across different experience levels 
              and project types, providing insights into how AI tools are reshaping 
              modern software development practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 