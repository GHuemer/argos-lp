import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  dark = false,
}: SectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id={id}
      className={`w-full py-20 md:py-32 ${
        dark ? 'bg-black text-white' : 'bg-white text-black'
      } ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div
            className="mb-16 text-center"
            variants={itemVariants}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg md:text-xl ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Content */}
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
