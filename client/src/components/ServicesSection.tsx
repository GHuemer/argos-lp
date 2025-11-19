import { motion } from 'framer-motion';
import { Video, Waypoints, ChartNoAxesCombined } from 'lucide-react';
import WavePattern from './WavePattern';

export default function ServicesSection() {
  const services = [
    {
      title: 'Captação e Edição de Reels',
      description: 'Reels, institucionais, criativos, depoimentos e storytelling profissional.',
      icon: Video,
      gradient: 'from-purple-600/20 to-purple-500/10',
      accentColor: '#A855F7',
    },
    {
      title: 'Gestão de Redes Sociais',
      description: 'Planejamento, copy, design, estratégia e execução completa.',
      icon: Waypoints,
      gradient: 'from-violet-600/20 to-purple-500/10',
      accentColor: '#7C3AED',
    },
    {
      title: 'Tráfego Pago',
      description: 'Campanhas para gerar clientes, autoridade e escala.',
      icon: ChartNoAxesCombined,
      gradient: 'from-indigo-600/20 to-purple-500/10',
      accentColor: '#6D28D9',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    },
  };

  return (
    <section id="services" className="relative w-full py-20 md:py-40 bg-black text-white overflow-hidden">
      {/* Wave Pattern Background */}
      <WavePattern />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi text-white font-bold mb-4">
            Serviços
          </h2>
          <p className="text-lg text-white font-satoshi">
            Soluções completas para sua marca crescer
          </p>
        </motion.div>

        {/* Services Grid - 3 colunas no desktop, 1 no mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group h-full"
              >
                <motion.div
                  className={`relative p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br ${service.gradient} backdrop-blur-md h-full overflow-hidden cursor-pointer transition-all duration-300 flex flex-col`}
                  whileHover={{
                    borderColor: service.accentColor,
                    y: -8,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Glow effect background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl" 
                      style={{ backgroundColor: `${service.accentColor}20` }} 
                    />
                  </div>

                  {/* Icon with blur circle background */}
                  <div className="relative z-10 mb-6">
                    <div className="relative inline-block">
                      {/* Blur circle background */}
                      <div 
                        className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        style={{ backgroundColor: service.accentColor }}
                      />
                      {/* Icon */}
                      <div className="relative bg-black/40 rounded-full p-4 group-hover:bg-black/60 transition-colors duration-300">
                        <IconComponent 
                          size={40} 
                          color={service.accentColor}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-satoshi font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white font-satoshi leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 20px rgba(107, 63, 255, 0)',
                    }}
                    whileHover={{
                      boxShadow: `inset 0 0 30px ${service.accentColor}30`,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
