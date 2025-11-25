import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

export default function OfferSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="offer" className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Wave Pattern Background */}
      <WavePattern />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Offer Card */}
          <motion.div
            className="p-12 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm text-center"
            variants={itemVariants}
            whileHover={{
              borderColor: '#6B3FFF',
              backgroundColor: 'rgba(107, 63, 255, 0.15)',
            }}
          >
            <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-6">
              Oferta Exclusiva
            </h2>

            <p className="text-xl text-gray-300 font-satoshi font-bold mb-8 leading-relaxed">
              Fechando qualquer serviço, ganhe um ensaio fotográfico. Vamos analisar sua marca, sua presença atual e criar um plano de ação personalizado.
            </p>

            <div className="mb-8 space-y-4">
              <p className="text-lg font-satoshi font-bold text-purple-300">
                ✓ Análise completa de sua presença digital
              </p>
              <p className="text-lg font-satoshi font-bold text-purple-300">
                ✓ Plano de ação personalizado
              </p>
              <p className="text-lg font-satoshi font-bold text-purple-300">
                ✓ Recomendações estratégicas
              </p>
              <p className="text-lg font-satoshi font-bold text-purple-300">
                ✓ Sem compromisso
              </p>
            </div>

            <motion.a
              href="https://wa.me/5516997616141"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-satoshi font-bold rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consultoria Gratuita
            </motion.a>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            className="text-center text-gray-300 font-satoshi font-bold mt-8"
            variants={itemVariants}
          >
            Limitado a 10 consultorias por mês. Aproveite enquanto houver vagas!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
