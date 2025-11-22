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
      // Adicionei 'md:pt-0' para permitir melhor centralização vertical em telas maiores
      className="relative min-h-screen w-full text-white flex items-center justify-center overflow-hidden pt-24 md:pt-0"
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
        // Adicionei um padding-top base e removi em md para melhor controle vertical
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LOGO CONTAINER
          Aumentei MUITO a margem inferior (mb-24) para empurrar os textos para baixo
          e deixar a logo mais isolada no centro visual dos círculos.
        */}
        <motion.div variants={logoVariants} className="mb-24 md:mb-32">
          <img 
            src="/img/logo-argos.png" 
            alt="Argos Logo" 
            // Aumentei ligeiramente a logo em desktop para mais presença no centro
            className="w-48 md:w-72 h-auto mx-auto" 
          />
        </motion.div>


        {/* TAGLINE E SUBTÍTULO */}
        <motion.div
          variants={itemVariants}
          // Aumentei o espaçamento entre este bloco e o botão
          className="space-y-4 mb-16" 
        >
          {/* Título Principal - Agora BOLD */}
          <h1 className="text-3xl md:text-5xl font-satoshi font-bold text-white tracking-wide leading-tight">
            Ver antes. Ver mais. Ver além.
          </h1>
          
          {/* Subtítulo - Agora WHITE e BOLD */}
          <p className="text-lg md:text-2xl text-white font-satoshi font-bold max-w-3xl mx-auto leading-relaxed">
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
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-satoshi font-bold rounded-full transition-all shadow-lg shadow-purple-900/30 text-lg"
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
