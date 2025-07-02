'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  liveUrl: string;
  repoUrl: string | null;
  isProprietary?: boolean;
}

export default function ProjectCard({ title, description, imageSrc, liveUrl, repoUrl, isProprietary = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} screenshot`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="card-title text-xl font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex gap-3 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${repoUrl ? 'flex-1' : 'w-full'} bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            {repoUrl ? 'Live Demo' : 'View Project'}
          </a>
          
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Code
            </a>
          )}
          
          {isProprietary && !repoUrl && (
            <div className="flex-1 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-center py-2 px-4 rounded-lg">
              Proprietary
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 