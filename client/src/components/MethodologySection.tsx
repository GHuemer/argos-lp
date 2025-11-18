import { motion } from 'framer-motion';
import Section from './Section';
import WavePattern from './WavePattern';

export default function MethodologySection() {
  const pillars = [
    { name: 'Modernidade', icon: '✨' },
    { name: 'Singularidade', icon: '🎯' },
    { name: 'Imperatividade', icon: '⚡' },
    { name: 'Jovialidade', icon: '🎨' },
    { name: 'Exclusividade', icon: '👑' },
    { name: 'Autenticidade', icon: '💎' },
    { name: 'Estratégia', icon: '🧠' },
  ];

  const containerVariants = {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="methodology"
      className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden"
    >
      {/* Wave Pattern Background */}
      <WavePattern />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">
            Metodologia Argos
          </h2>
          <p className="text-lg text-gray-300 font-satoshi">
            Transformando o Instagram em um gerador previsível de autoridade e demanda
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-center text-gray-300 mb-16 max-w-2xl mx-auto font-satoshi"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A Metodologia Argos foi criada para transformar o Instagram em um gerador previsível de autoridade e demanda. É um processo testado, organizado e pensado para longo prazo — sem improvisos.
        </motion.p>

        {/* Cards Grid - Asymmetric Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* First row - 3 cards */}
          {pillars.slice(0, 3).map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <MethodologyCard pillar={pillar} />
            </motion.div>
          ))}

          {/* Second row - 3 cards */}
          {pillars.slice(3, 6).map((pillar, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              className="h-full"
            >
              <MethodologyCard pillar={pillar} />
            </motion.div>
          ))}

          {/* Third row - 1 centered card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 flex justify-center"
          >
            <div className="w-full md:w-1/3">
              <MethodologyCard pillar={pillars[6]} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface MethodologyCardProps {
  pillar: {
    name: string;
    icon: string;
  };
}

function MethodologyCard({ pillar }: MethodologyCardProps) {
  return (
    <motion.div
      className="relative p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm overflow-hidden group cursor-pointer"
      whileHover={{
        scale: 1.05,
        borderColor: '#6B3FFF',
        backgroundColor: 'rgba(107, 63, 255, 0.15)',
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="text-5xl mb-4">{pillar.icon}</div>
        <h3 className="text-xl font-satoshi font-bold text-white mb-2">
          {pillar.name}
        </h3>
        <p className="text-sm text-gray-300 font-satoshi opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Pilar essencial da metodologia
        </p>
      </div>

      {/* Subtle border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-purple-500/0 group-hover:border-purple-500/50 transition-colors duration-300"
        style={{
          boxShadow: 'inset 0 0 20px rgba(107, 63, 255, 0)',
        }}
        whileHover={{
          boxShadow: 'inset 0 0 20px rgba(107, 63, 255, 0.2)',
        }}
      />
    </motion.div>
  );
}
