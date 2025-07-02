'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Work Experience
          </h2>
          <div className="text-left space-y-6 sm:space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Lead Developer
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">WorkSource Alliance</p>
                </div>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                <li>• Lead development of the new ATS platform (beta.worksourcealliance.ca) serving non-profits and institutions</li>
                <li>• Architect and implement solutions using Next.js, Supabase, and Makerkit for complex applicant curation workflows</li>
                <li>• Oversee all infrastructure, deployments, and maintenance across the organization's technology stack</li>
                <li>• Manage employer relationship systems and optimize platform performance for high-volume usage</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  Frontend Developer & Infrastructure Support
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">ADL Foods</p>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm sm:text-base">
                <li>• Provide frontend development and infrastructure support for ADL's web presence, primarily adlfoods.ca</li>
                <li>• Implement UX/UI enhancements and performance optimizations for high-traffic commercial website</li>
                <li>• Maintain and improve existing systems while ensuring optimal user experience and site reliability</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 