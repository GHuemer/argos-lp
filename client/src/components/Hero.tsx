import { motion } from 'framer-motion';

export default function Hero() {
  // Variáveis de animação (mantidas do seu código original)
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

  // Adicionei uma variante específica para a logo para um surgimento suave
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
        // Certifique-se de que o caminho da imagem está correto no seu projeto
        backgroundImage: 'url(/img/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // 'fixed' pode causar problemas em mobile, 'scroll' ou remover é mais seguro.
        // Se o fundo for um padrão fixo, você pode remover essa propriedade.
        backgroundAttachment: 'scroll', 
      }}
    >
      {/* Overlay escuro sutil para garantir legibilidade */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- INÍCIO DA ADIÇÃO DA LOGO ---
          A logo é o primeiro elemento visual.
          Ajuste o caminho 'src' se necessário.
        */}
        <motion.div variants={logoVariants} className="mb-8">
          <img 
            src="/img/logo-argos.png" 
            alt="Argos Logo" 
            // Classes para centralizar e definir tamanho responsivo
            className="w-48 md:w-64 h-auto mx-auto" 
          />
        </motion.div>
        {/* --- FIM DA ADIÇÃO DA LOGO --- */}


        {/* Tagline e Subtítulo */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 mb-12" // Aumentei o espaçamento vertical entre os textos
        >
          {/* Título Principal - Ajustado para ficar mais fiel à referência */}
          <h1 className="text-3xl md:text-5xl font-satoshi font-medium tracking-wide leading-tight">
            Ver antes. Ver mais. Ver além.
          </h1>
          
          {/* Subtítulo - Ajustado peso e cor */}
          <p className="text-lg md:text-2xl text-gray-200 font-satoshi font-light max-w-2xl mx-auto">
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
            // Botão com gradiente e sombra para destaque, fiel à referência
            className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-satoshi font-bold rounded-full transition-all shadow-lg shadow-purple-900/30 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chamar no WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator (Mantido) */}
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
