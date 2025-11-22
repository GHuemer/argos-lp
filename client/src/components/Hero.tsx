import { motion } from 'framer-motion';

// =========================================
// COMPONENTE HERO PRINCIPAL (VERSÃO FINAL - LOGO NO BACKGROUND)
// =========================================
export default function Hero() {
  // Variáveis de animação simplificadas (não precisamos mais da variante da logo)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      // Estrutura Flex vertical para empilhar os elementos
      className="relative min-h-screen w-full bg-[#0a0510] text-white flex flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        // --- COLOQUE AQUI O CAMINHO DA NOVA IMAGEM COM A LOGO INTEGRADA ---
        backgroundImage: 'url(/img/c0295c170164767.6459641485952.webp)',
      }}
    >
      {/* Overlay escuro opcional para melhorar contraste se necessário */}
      {/* <div className="absolute inset-0 bg-black/10 z-0" /> */}

      {/* ESPAÇADOR SUPERIOR (O SEGREDO DO POSICIONAMENTO)
        Esta div invisível ocupa uma porcentagem da altura da tela (ex: 55%).
        Ela serve para "empurrar" o conteúdo de texto para baixo, 
        deixando a área da logo no background livre.
      */}
      <div className="w-full h-[50vh] md:h-[55vh] flex-shrink-0 relative z-10" />


      {/* CONTAINER DO CONTEÚDO DE TEXTO */}
      <div className="flex-1 flex flex-col items-center justify-start relative z-10 w-full px-4 pb-20">
        
        {/* BLOCO ANIMADO DE TEXTO E BOTÃO */}
        <motion.div
          className="container mx-auto text-center flex flex-col items-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- LOGO REMOVIDA DAQUI --- */}

          {/* Textos */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-2xl md:text-4xl font-satoshi font-bold text-white tracking-wide leading-tight">
              Ver antes. Ver mais. Ver além.
            </h1>
            <p className="text-base md:text-xl text-white font-satoshi font-bold max-w-2xl mx-auto leading-relaxed">
              Marketing digital para empresas do mundo real
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.a
              href="https://wa.me/5516997616141"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-satoshi font-bold rounded-full transition-all shadow-lg shadow-purple-900/30 text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Chamar no WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
