import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Card({
  title,
  description,
  children,
  icon,
  className = '',
  dark = false,
}: CardProps) {
  return (
    <motion.div
      className={`p-8 rounded-lg border transition-all ${
        dark
          ? 'bg-gray-900 border-gray-800 hover:border-white'
          : 'bg-gray-50 border-gray-200 hover:border-black'
      } ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-4xl">
          {icon}
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-2xl font-display font-bold mb-3">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className={`text-base leading-relaxed mb-4 ${
          dark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}

      {/* Children */}
      {children}
    </motion.div>
  );
}
