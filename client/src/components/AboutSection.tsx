"use client"; // 1. Essencial para Next.js + Framer Motion

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import WavePattern from './WavePattern'; 

export default function AboutSection() {
  // --- Lógica de Scroll para o Efeito "Radar" ---
  const radarRef = useRef(null);
  
  // Monitora o scroll apenas na seção final
  const { scrollYProgress } = useScroll({
    target: radarRef,
    offset: ["start end", "end start"]
  });

  // O SVG vai crescer (scale) e mudar opacidade conforme você passa por ele
  const radarScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.4]);
  const radarOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.8, 1], [0, 1, 1, 1, 0]);
  
  // Efeito de parallax suave para o texto não ficar "preso"
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // --- Variantes Padrão ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const pillarsList = [
    'Vigilância constante', 'Proteção total', 'Visão além do óbvio', 'Beleza e presença', 'Atenção absoluta'
  ];

  return (
    <section id="about" className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      <WavePattern />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">A Origem do Nome</h2>
          <p className="text-lg text-gray-300 font-satoshi">que define nossa essência</p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="max-w-5xl mx-auto space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            className="text-lg leading-relaxed text-gray-300 font-satoshi text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Argos Panoptes, na mitologia grega, era conhecido como o gigante de mil olhos — o guardião criado por Hera para vigiar o que era mais importante para ela. Seu corpo era coberto de olhos. Enquanto metade dormia, a outra metade permanecia acordada. Nada escapava ao seu olhar.
          </motion.p>

          {/* --- SEÇÃO DA RODA (DESKTOP) --- */}
          <div className="hidden md:block relative w-full h-[500px] max-w-[1000px] mx-auto my-12">
             {/* Glow Central */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5">
               <div className="w-[300px] h-[300px] rounded-full bg-radial-purple filter blur-[60px] opacity-100"
                    style={{ background: 'radial-gradient(circle, rgba(217, 70, 239, 0.6) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)' }}
               ></div>
             </div>
            
            {/* SVG Lines */}
            <motion.svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 1000 500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <circle cx="500" cy="250" r="6" fill="#A855F7" className="animate-pulse">
                 <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
              </circle>
              {/* Linhas */}
              <motion.line x1="500" y1="250" x2="80" y2="250" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="920" y2="250" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="150" y2="450" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="850" y2="450" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="500" y2="470" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
            </motion.svg>

            {/* Boxes (Resumido para brevidade, mantenha o seu conteúdo original dos boxes aqui se tiver mudado algo, mas a estrutura é esta) */}
            <motion.div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-purple-glow" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <span className="text-white font-satoshi font-bold">Vigilância constante</span>
            </motion.div>
            <motion.div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-purple-glow" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <span className="text-white font-satoshi font-bold">Proteção total</span>
            </motion.div>
            <motion.div className="absolute bottom-[30px] left-[5%] w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-purple-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <span className="text-white font-satoshi font-bold">Visão além do óbvio</span>
            </motion.div>
             <motion.div className="absolute bottom-[30px] right-[5%] w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-purple-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <span className="text-white font-satoshi font-bold">Beleza e presença</span>
            </motion.div>
            <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-purple-glow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <span className="text-white font-satoshi font-bold">Atenção absoluta</span>
            </motion.div>
          </div>

          {/* Mobile List */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {pillarsList.map((pillar, index) => (
              <motion.div key={index} className="p-4 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm text-center" variants={itemVariants}>
                <p className="text-base font-satoshi font-bold text-white">{pillar}</p>
              </motion.div>
            ))}
          </div>

          {/* Philosophy */}
          <motion.div className="mt-60 mb-32" variants={itemVariants}>
            <h3 className="text-4xl md:text-5xl font-satoshi font-bold mb-20 text-center">Nossa Filosofia</h3>
            <p className="text-4xl md:text-5xl text-center font-satoshi font-bold mb-20 py-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">Ver antes. Ver mais. Ver além.</p>
            <p className="text-gray-300 leading-relaxed font-satoshi text-center max-w-3xl mx-auto text-lg">
              Pegamos o significado de Argos Panoptes e transformamos em filosofia. Aqui, trabalhamos como Argos trabalhava: sempre atentos às mudanças, sempre vigilantes quanto à imagem dos nossos clientes, sempre protegendo reputação e posicionamento.
            </p>
          </motion.div>

          {/* Somos a Agência que... */}
          <motion.div className="space-y-8 pt-8" variants={containerVariants}>
            <h3 className="text-4xl md:text-5xl font-satoshi font-bold text-center text-white mb-24">Somos a Agência que</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {['Previne erros antes que aconteçam', 'Enxerga oportunidades antes dos concorrentes', 'Observa cada detalhe', 'Entrega conteúdo com propósito e estética', 'Protege a marca como se fosse nossa', 'Cria estratégias que duram, posicionam e elevam'].map((item, index) => (
                <motion.div key={index} className="flex items-start gap-3 group" variants={itemVariants}>
                  <span className="text-purple-500 font-bold text-xl mt-1 group-hover:text-purple-300 transition-colors">✓</span>
                  <p className="text-gray-300 font-satoshi group-hover:text-white transition-colors text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Final Message - CORRIGIDA COM SCROLL PULSE --- */}
          <div 
            ref={radarRef} // Referência para o hook useScroll
            className="relative w-full py-32 mt-32 overflow-hidden"
          >
            {/* 🔹 Elementos Visuais de Fundo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Glow suave que reage ao scroll */}
              <motion.div
                className="absolute w-[650px] h-[650px] bg-purple-900/25 rounded-full blur-[120px]"
                style={{ scale: radarScale, opacity: radarOpacity }} // Animação via Scroll
              />
          
              {/* Linhas concêntricas animadas via Scroll */}
              <motion.svg
                className="absolute w-[1200px] h-[1200px]"
                viewBox="0 0 1200 1200"
                fill="none"
                style={{ scale: radarScale, opacity: radarOpacity }} // O SVG inteiro pulsa com o scroll
              >
                {[150, 250, 350, 450, 550].map((r, i) => (
                  <circle
                    key={i}
                    cx="600"
                    cy="600"
                    r={r}
                    stroke="#A855F7"
                    strokeWidth="1"
                    strokeOpacity={0.25 - i * 0.04}
                  />
                ))}
              </motion.svg>
            </div>
          
            {/* 🔹 Conteúdo com Parallax */}
            <motion.div
              className="relative z-10 text-center px-4"
              style={{ y: textY }} // Parallax suave
            >
              <h2 className="text-white font-satoshi font-bold mb-8 leading-tight text-4xl md:text-6xl">
                A Argos nasce da visão. <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500">
                  E vive para proteger a visão de quem confia na gente.
                </span>
              </h2>
          
              {/* Separador */}
              <div className="w-24 h-[2px] mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500/50 to-purple-300/30"/>
          
              {/* Texto de apoio */}
              <p className="text-gray-400 font-satoshi max-w-2xl mx-auto leading-relaxed text-base md:text-xl">
                Se você quer apenas posts, qualquer agência serve.
                <br />
                <span className="text-gray-100 font-semibold">
                  Se você quer posicionamento, vigilância e estratégia, a Argos existe exatamente para isso.
                </span>
              </p>
            </motion.div>
          </div>
          {/* --- Fim da Seção Corrigida --- */}

        </motion.div>
      </div>
    </section>
  );
}
