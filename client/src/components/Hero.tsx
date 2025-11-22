import { motion, Variants } from 'framer-motion';
// Certifique-se de que GradientHero está transparente (sem o rect de fundo)
import GradientHero from './GradientHero';

export default function Hero(): JSX.Element {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <section
      className="relative min-h-screen w-full bg-[#0a0510] text-white flex flex-col overflow-hidden"
    >
      {/* ==================================================================
          CAMADAS DE FUNDO (CORRIGIDO)
      ================================================================== */}

      {/*
         CAMADA UNIFICADA: FUNDO MOBILE E DESKTOP
         Esta única div gerencia ambos os fundos para evitar sobreposição.

         1. bg-[radial-gradient(...)]: Define o gradiente roxo como padrão (Mobile).
         2. md:bg-[url(...)]: Sobrescreve o padrão com a imagem em telas médias+ (Desktop).
         3. bg-cover bg-center: Ajusta a imagem do desktop para cobrir a tela.
      */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat
                   bg-[radial-gradient(circle_at_50%_30%,#8B5FFF_0%,#5A2FE8_40%,#0a0510_70%)]
                   md:bg-[url('/img/c0295c170164767.6459641485952.webp')] md:bg-cover md:bg-center"
      />

      {/*
        CAMADA SUPERIOR: SOBREPOSIÇÃO DE LINHAS (GradientHero Transparente)
        Fica sempre por cima de qualquer fundo que esteja ativo.
      */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GradientHero />
      </div>

      {/*
        OVERLAY ESCURO SUTIL (Opcional)
        Ajuda no contraste do texto em ambos os casos.
      */}
      <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none" />


      {/* ==================================================================
          CONTEÚDO (Z-INDEX > 20)
      ================================================================== */}

      {/* ESPAÇADOR DA NAVBAR */}
      <div className="h-20 w-full flex-shrink-0 relative z-30" aria-hidden="true" />

      {/* CONTAINER PRINCIPAL DO CONTEÚDO */}
      <div className="flex-1 flex items-center justify-center relative z-30 w-full px-4 pb-10">

        {/* BLOCO DE CONTEÚDO (Empurrado para baixo no desktop) */}
        <motion.div
          className="container mx-auto text-center flex flex-col items-center justify-center md:justify-start space-y-8 md:space-y-6 md:mt-[59vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LOGO MOBILE (Aparece só se não for md) */}
          <motion.div variants={logoVariants} className="block md:hidden">
            <img
              src="/img/logo-argos.png"
              alt="Argos Logo"
              className="w-56 h-auto mx-auto"
            />
          </motion.div>

          {/* TEXTOS */}
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <h1 className="text-2xl md:text-4xl font-satoshi font-bold text-white tracking-wide leading-tight">
              Ver antes. Ver mais. Ver além.
            </h1>

            <p className="text-base md:text-xl text-white font-satoshi font-bold max-w-2xl mx-auto leading-relaxed px-4">
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
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 opacity-70"
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
