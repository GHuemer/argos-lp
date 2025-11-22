import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- COMPONENTE DO FUNDO ESTÁTICO (VERSÃO FINAL APERFEIÇOADA) ---
const StaticSwirlBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h;

    // --- PALETA DE CORES REFINADA (Baseada na Referência image_5.png) ---
    const colors = {
      brightCenter: '#7c3aed', // Roxo mais luminoso para o centro exato (combina com o 'o')
      deepPurple: '#4c1d95',   // O roxo profundo e vibrante principal
      violetAccent: '#8b5cf6', // O tom violeta específico solicitado
      nearBlack: '#0a0510',    // Um "preto" que na verdade é um roxo muito escuro e profundo
    };

    // --- SEQUÊNCIA APROVADA ---
    // Ordem: do CENTRO para FORA.
    let colorSequence = [
      colors.brightCenter, // 0: Bola central luminosa
      colors.deepPurple,   // 1: Anel roxo médio circulando
      colors.nearBlack,    // 2: Onda escura
      colors.deepPurple,   // 3: Onda roxa
      colors.nearBlack,    // 4: Onda escura
      colors.deepPurple,   // 5: Onda roxa
      colors.violetAccent, // 6: ONDA VIOLETA ESPECÍFICA
      colors.nearBlack,    // 7: Onda escura
      colors.deepPurple,   // 8: Onda roxa
      colors.nearBlack,    // 9: Onda escura
      // ... segue alternando
    ];
    // Preenche até 25 alternando Roxo Profundo / "Preto"
    while (colorSequence.length < 25) {
      const nextColor = colorSequence.length % 2 === 0 ? colors.deepPurple : colors.nearBlack;
      colorSequence.push(nextColor);
    }

    const draw = () => {
      const centerX = w / 2;
      const centerY = h / 2;
      // Raio ligeiramente aumentado para garantir cobertura total com a distorção
      const maxRadius = Math.sqrt(w * w + h * h) / 1.7;
      const numRings = 25;

      // Fundo base com o "preto" profundo
      ctx.fillStyle = colors.nearBlack;
      ctx.fillRect(0, 0, w, h);

      // --- DESENHO (DE FORA PARA DENTRO) ---
      for (let i = numRings - 1; i >= 0; i--) {
        // 1. Espaçamento Não-Linear (Mais denso no centro)
        // O expoente 1.9 aumenta a sensação de túnel profundo.
        let baseRadius = maxRadius * Math.pow(i / (numRings - 1), 1.9);
        
        // Garante tamanho mínimo para o centro visual
        if (i === 0) baseRadius = Math.max(baseRadius, w * 0.012);

        // 2. Cor da sequência inversa
        const sequenceIndex = (numRings - 1) - i;
        const currentColor = colorSequence[sequenceIndex];

        // 3. DESENHO DO FORMATO ESPIRALADO
        ctx.beginPath();
        const numPoints = 180; // Mais pontos para curvas mais suaves
        for (let j = 0; j <= numPoints; j++) {
          const angle = (j / numPoints) * 2 * Math.PI;
          
          // --- CÁLCULO DA FORMA (O SEGREDO DO FORMATO) ---
          
          // Fator de Espiral: Faz a espessura da onda mudar ao longo do giro.
          // Cria o efeito de "compressão" em um lado e "expansão" no outro.
          // O deslocamento de fase (i * 0.4) faz cada anel girar um pouco em relação ao anterior.
          let spiralThicknessVar = Math.sin(angle + i * 0.4) * (baseRadius * 0.18);
          
          // Fator de Ruído Orgânico: Pequenas ondulações extras para textura.
          let organicNoise = Math.sin(angle * 5 + i) * (baseRadius * 0.03);

          // **IMPORTANTE PARA CENTRALIZAÇÃO DA LOGO:**
          // Se forem os anéis centrais (i < 2), forçamos a distorção a ser quase zero.
          // Isso cria um círculo perfeito no meio para encaixar o "o" da logo.
          if (sequenceIndex <= 1) {
              spiralThicknessVar *= 0.1;
              organicNoise = 0;
          }

          // Raio final no ponto
          const r = baseRadius + spiralThicknessVar + organicNoise;
          
          const x = centerX + r * Math.cos(angle);
          const y = centerY + r * Math.sin(angle);

          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        // Aplica a cor
        ctx.fillStyle = currentColor;
        ctx.fill();

        // Borda sutil para definição, exceto nas ondas escuras
        if (currentColor !== colors.nearBlack && i > 1) {
          ctx.lineWidth = Math.max(1, w * 0.0015); // Borda escala levemente com a tela
          // Cor da borda ligeiramente mais clara que o preenchimento para efeito 3D sutil
          ctx.strokeStyle = currentColor === colors.violetAccent ? '#c4b5fd' : '#7c3aed';
          ctx.stroke();
        }
      }
    };

    const resize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      draw();
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      
      {/* TEXTURA DE FILME/RUÍDO (Essencial para o look da referência) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.28] mix-blend-overlay"
        style={{
          // Frequência ajustada para um grão fino e cinematográfico
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* VINHETA DRAMÁTICA (Escurece as bordas, foca o centro) */}
      <div className="absolute inset-0 z-20 bg-radial-gradient pointer-events-none" />
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(
            circle at center, 
            transparent 25%, 
            rgba(10, 5, 16, 0.4) 50%, 
            rgba(10, 5, 16, 0.9) 85%,
            rgba(10, 5, 16, 1) 100%
          );
        }
      `}</style>
    </div>
  );
};


// --- COMPONENTE HERO PRINCIPAL (Sem alterações na estrutura, apenas o fundo novo) ---
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0a0510] text-white flex items-center justify-center overflow-hidden pt-20">
      
      {/* --- FUNDO ESTÁTICO FINAL --- */}
      <div className="absolute inset-0 z-0">
        <StaticSwirlBackground />
      </div>
      
      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Centralizada */}
        <motion.div variants={titleVariants}>
          <img 
            src="/img/logo-argos.png" 
            alt="Argos Logo" 
            // Ajuste de margem para garantir que o 'o' caia no centro ótico
            className="h-32 md:h-40 mb-6 mx-auto"
          />
        </motion.div>

        {/* Textos */}
        <motion.div variants={itemVariants} className="space-y-4 mb-12">
          <p className="text-2xl md:text-3xl font-satoshi font-bold tracking-wide">
            Ver antes. Ver mais. Ver além.
          </p>
          <p className="text-lg md:text-xl text-gray-200 font-satoshi font-light">
            Marketing digital para empresas do mundo real
          </p>
        </motion.div>

        {/* CTA Button (Cor ajustada para combinar com o novo fundo) */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <motion.a
            href="https://wa.me/5516997616141"
            target="_blank"
            rel="noopener noreferrer"
            // Usando o roxo vibrante do centro para o botão
            className="px-8 py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-satoshi font-semibold rounded-lg transition-colors shadow-lg shadow-purple-900/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Chamar no WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 opacity-70"
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
