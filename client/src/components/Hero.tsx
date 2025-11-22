import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- COMPONENTE DO NOVO FUNDO ESTÁTICO (REFEITO) ---
const StaticSwirlBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let w, h;

    // --- DEFINIÇÃO DA PALETA DE CORES ---
    const colors = {
      purple: '#4c1d95',       // Roxo profundo (bola central e ondas principais)
      mediumPurple: '#7c3aed', // Roxo médio (o raio que circula o centro)
      violet: '#a78bfa',       // Violeta (a onda específica mencionada)
      black: '#050505',        // Preto das ondas de intervalo
    };

    // --- DEFINIÇÃO DA SEQUÊNCIA EXATA DE 25 ONDAS ---
    // A ordem é do CENTRO para FORA.
    let colorSequence = [
      colors.purple,       // 0: Bola roxa central
      colors.mediumPurple, // 1: Raio roxo médio circulando
      colors.black,        // 2: Onda preta
      colors.purple,       // 3: Onda roxa
      colors.black,        // 4: Onda preta
      colors.purple,       // 5: Onda roxa
      colors.violet,       // 6: ONDA VIOLETA ESPECÍFICA
      colors.black,        // 7: Onda preta
      colors.purple,       // 8: Onda roxa
      colors.black,        // 9: Onda preta
      // A partir daqui, segue um padrão alternado para preencher até 25
    ];
    // Preenche o restante até 25 alternando Roxo/Preto
    while (colorSequence.length < 25) {
      const nextColor = colorSequence.length % 2 === 0 ? colors.purple : colors.black;
      colorSequence.push(nextColor);
    }

    const draw = () => {
      const centerX = w / 2;
      const centerY = h / 2;
      // Raio máximo para cobrir a tela
      const maxRadius = Math.sqrt(w * w + h * h) / 1.8;
      const numRings = 25;

      // Limpa o canvas com preto
      ctx.fillStyle = colors.black;
      ctx.fillRect(0, 0, w, h);

      // --- DESENHO DAS ONDAS (DE FORA PARA DENTRO) ---
      // Desenhamos de trás para frente (índice alto para baixo) para que
      // as ondas menores do centro fiquem por cima das maiores.
      for (let i = numRings - 1; i >= 0; i--) {
        
        // 1. CÁLCULO DO RAIO NÃO-LINEAR (Espaços menores no centro)
        // Usamos Math.pow para criar uma curva exponencial.
        // O expoente 1.8 define o quão "apertado" é o centro.
        let baseRadius = maxRadius * Math.pow(i / (numRings - 1), 1.8);
        
        // Garante um tamanho mínimo para a bola central (índice 0)
        if (i === 0) baseRadius = Math.max(baseRadius, w * 0.015);

        // 2. DETERMINAR A COR CORRETA DA SEQUÊNCIA
        // Como estamos desenhando de fora (i=24) para dentro (i=0),
        // precisamos inverter o índice para pegar a cor certa do array sequence.
        const sequenceIndex = (numRings - 1) - i;
        const currentColor = colorSequence[sequenceIndex];

        // 3. DESENHAR O FORMATO ORGÂNICO (NÃO CIRCUNFERÊNCIA)
        ctx.beginPath();
        const numPoints = 150; // Quantidade de pontos para suavidade
        for (let j = 0; j <= numPoints; j++) {
          const angle = (j / numPoints) * 2 * Math.PI;
          
          // --- CÁLCULO DA IRREGULARIDADE (ONDA) ---
          // frequency: Quantas "lombadas" a onda tem (ex: 6)
          // phaseShift (+ i * 0.7): Garante que as ondas não se alinhem perfeitamente
          // amplitude (* 0.03): O quão forte é a distorção (3% do raio)
          const wobbleOffset = Math.sin(angle * 6 + i * 0.7) * (baseRadius * 0.03);
          
          // Raio final naquele ponto
          const r = baseRadius + wobbleOffset;
          
          // Converte polar para cartesiano (x, y)
          const x = centerX + r * Math.cos(angle);
          const y = centerY + r * Math.sin(angle);

          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();

        // Aplica a cor
        ctx.fillStyle = currentColor;
        ctx.fill();

        // Opcional: Adiciona uma borda sutil nas ondas coloridas para definição
        if (currentColor !== colors.black && i > 0) {
          ctx.lineWidth = 1;
          // Uma borda ligeiramente mais clara que o preenchimento
          ctx.strokeStyle = currentColor === colors.violet ? '#c4b5fd' : '#6d28d9';
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
      {/* Noise ligeiramente ajustado para o novo visual */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 z-20 bg-radial-gradient pointer-events-none" />
      <style jsx>{`
        .bg-radial-gradient {
          // Vinheta ajustada para focar mais no centro detalhado
          background: radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%);
        }
      `}</style>
    </div>
  );
};


// --- SEU COMPONENTE HERO PRINCIPAL (SEM ALTERAÇÕES) ---
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
      
      {/* --- FUNDO SUBSTITUÍDO --- */}
      <div className="absolute inset-0 z-0">
        <StaticSwirlBackground />
      </div>
      {/* ------------------------- */}


      {/* Content */}
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

      {/* Scroll indicator */}
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
