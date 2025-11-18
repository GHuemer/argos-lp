import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Villela Odontologia',
      role: 'Clínica Odontológica',
      quote: 'A Argos transformou nossa presença digital e aumentou significativamente nossos agendamentos.',
      icon: '🦷',
    },
    {
      name: 'Pati Pilates',
      role: 'Studio de Pilates',
      quote: 'Excelente trabalho em redes sociais. Nossas aulas estão sempre lotadas graças à estratégia deles.',
      icon: '🧘',
    },
    {
      name: 'Bonde',
      role: 'Alimentos e Bebidas',
      quote: 'A Argos entende o que fazemos e comunica com perfeição. Resultados incríveis em tráfego pago.',
      icon: '🍔',
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
    <section className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
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
            Depoimentos de Clientes
          </h2>
          <p className="text-lg text-gray-300 font-satoshi">
            O que nossos clientes dizem sobre nós
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm h-full cursor-pointer"
                whileHover={{
                  borderColor: '#6B3FFF',
                  backgroundColor: 'rgba(107, 63, 255, 0.15)',
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl mb-4">{testimonial.icon}</div>
                <p className="text-gray-300 font-satoshi italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-purple-500/20 pt-4">
                  <p className="font-satoshi font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-purple-300 font-satoshi">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
