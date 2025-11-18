import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function ParallaxSection({
  title,
  subtitle,
  children,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative w-full py-20 md:py-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900"
        style={{ y }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-400">{subtitle}</p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
}
