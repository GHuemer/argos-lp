import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

export default function ServicesSection() {
  const services = [
    {
      title: 'Captação e Edição de Reels',
      description: 'Reels, institucionais, criativos, depoimentos e storytelling profissional.',
      icon: '🎥',
    },
    {
      title: 'Gestão de Redes Sociais',
      description: 'Planejamento, copy, design, estratégia e execução completa.',
      icon: '📱',
    },
    {
      title: 'Tráfego Pago',
      description: 'Campanhas para gerar clientes, autoridade e escala.',
      icon: '📊',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="services" className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Wave Pattern Background */}
      <WavePattern />

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
            Serviços
          </h2>
          <p className="text-lg text-gray-300 font-satoshi">
            Soluções completas para sua marca
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="relative p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm h-full overflow-hidden cursor-pointer"
                whileHover={{
                  borderColor: '#6B3FFF',
                  backgroundColor: 'rgba(107, 63, 255, 0.15)',
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-satoshi font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 font-satoshi leading-relaxed">
                    {service.description}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
