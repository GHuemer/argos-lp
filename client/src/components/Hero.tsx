import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1 }
    },
  };

  return (
    <section
      className="relative min-h-screen w-full text-white flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/img/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay escuro sutil */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <motion.div
        // MUDANÇA 1: Aumentei drasticamente o 'mt-' para empurrar tudo para baixo.
        // MUDANÇA 4: Ajustei ligeiramente o space-y para os textos menores.
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center space-y-8 md:space-y-10 mt-32 md:mt-56"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LOGO CONTAINER */}
        <motion.div variants={logoVariants}>
          <img 
            src="/img/logo-argos.png" 
            alt="Argos Logo" 
            // MUDANÇA 2: Aumentei o tamanho da logo (w-64 md:w-96)
            className="w-64 md:w-96 h-auto mx-auto" 
          />
        </motion.div>


        {/* TAGLINE E SUBTÍTULO */}
        <motion.div
          variants={itemVariants}
          // MUDANÇA 4: Espaçamento interno reduzido para textos menores
          className="space-y-3" 
        >
          {/* Título Principal - MUDANÇA 3: Tamanho reduzido (text-2xl md:text-4xl) */}
          <h1 className="text-2xl md:text-4xl font-satoshi font-bold text-white tracking-wide leading-tight">
            Ver antes. Ver mais. Ver além.
          </h1>
          
          {/* Subtítulo - MUDANÇA 3: Tamanho reduzido (text-base md:text-xl) e max-width ajustado */}
          <p className="text-base md:text-xl text-white font-satoshi font-bold max-w-2xl mx-auto leading-relaxed">
            Marketing digital para empresas do mundo real
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
        >
          <motion.a
            href="https://wa.me/5516997616141"
            target="_blank"
            rel="noopener noreferrer"
            // MUDANÇA 4: Ajustei ligeiramente o padding e texto do botão para ficar proporcional
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-satoshi font-bold rounded-full transition-all shadow-lg shadow-purple-900/30 text-base md:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chamar no WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 opacity-80"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
