import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function CTAFinalSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-black text-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-6">
            Pronto para posicionar sua marca em um novo nível?
          </h2>
          
          <p className="text-lg text-gray-400 font-satoshi mb-12">
            Entre em contato e receba uma avaliação gratuita.
          </p>

          <motion.a
            href="https://wa.me/5516997616141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-satoshi font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4 )] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            Chamar a Argos no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
