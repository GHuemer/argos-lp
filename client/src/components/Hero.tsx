import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// A importação do GradientHero foi removida pois não será mais usada.

// --- COMPONENTE DO NOVO FUNDO ESTÁTICO ---
const StaticSwirlBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Verifica se o canvas existe antes de prosseguir
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h;

    // Cores exatas baseadas na sua referência
    const deepPurple = '#3c0078'; // Roxo profundo
    const black = '#050505';       // Preto quase total

    const draw = () => {
      const centerX = w / 2;
      const centerY = h / 2;
      
      // Calcula o raio máximo para cobrir os cantos da tela
      const maxRadius = Math.sqrt(w * w + h * h) / 2;
      
      // Quantidade e espessura dos anéis
      const numRings = 25; 
      const ringThickness = maxRadius / numRings;

      // Limpa o canvas
      ctx.fillStyle = black;
      ctx.fillRect(0, 0, w, h);

      // Desenha os círculos de fora para dentro
      for (let i = numRings + 8; i > 0; i--) {
        // O multiplicador 0.85 ajusta o espaçamento entre as faixas
        const radius = i * ringThickness * 0.85; 
        const isPurple = i % 2 !== 0; // Alterna as cores

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        
        ctx.fillStyle = isPurple ? deepPurple : black;
        ctx.fill();
        
        // Borda sutil para suavizar a transição
        if (isPurple) {
           ctx.lineWidth = 1.5;
           ctx.strokeStyle = '#4b0096';
           ctx.stroke();
        }
      }
    };

    const resize = () => {
      // Verifica novamente se o canvas ainda está montado
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      draw();
    };

    window.addEventListener('resize', resize);
    resize(); // Desenho inicial

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* 1. O Canvas com os círculos estáticos */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* 2. Camada de Ruído (Noise) para textura granulada */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* 3. Vinheta sutil para escurecer os cantos */}
       <div className="absolute inset-0 z-20 bg-radial-gradient pointer-events-none" />

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.95) 100%);
        }
      `}</style>
    </div>
  );
};


// --- SEU COMPONENTE HERO PRINCIPAL ---
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

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden pt-20">
      
      {/* --- SUBSTITUIÇÃO DO FUNDO AQUI --- */}
      {/* O novo componente de fundo é colocado em um container absoluto com z-0 */}
      <div className="absolute inset-0 z-0">
        <StaticSwirlBackground />
      </div>
      {/* ---------------------------------- */}


      {/* Content - Mantido com z-10 para ficar acima do fundo */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title - Logo */}
        <motion.div
          variants={titleVariants}
        >
          <img 
            src="/img/logo-argos.png" 
            alt="Argos Logo" 
            className="h-32 md:h-40 mb-8 mx-auto"
          />
        </motion.div>


        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 mb-12"
        >
          <p className="text-2xl md:text-3xl font-satoshi font-bold tracking-wide">
            Ver antes. Ver mais. Ver além.
          </p>
          <p className="text-lg md:text-xl text-white font-satoshi font-light">
            Marketing digital para empresas do mundo real
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/5516997616141"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-satoshi font-semibold rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chamar no WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - Mantido com z-10 */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
