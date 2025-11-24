import { motion } from 'framer-motion';
import WavePattern from './WavePattern'; // Certifique-se que este import continua correto

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
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

  // Dados dos pilares para a versão Mobile (Lista simples)
  const pillarsList = [
    'Vigilância constante',
    'Proteção total',
    'Visão além do óbvio',
    'Beleza e presença',
    'Atenção absoluta', // Ordem para mobile
  ];

  return (
    <section id="about" className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Wave Pattern Background */}
      <WavePattern />

      {/* Glow roxo será posicionado dentro da seção da roda no desktop */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header - RECOLOCADO AQUI */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">
            A Origem do Nome
          </h2>
          <p className="text-lg text-gray-300 font-satoshi">
            que define nossa essência
          </p>
        </motion.div>

        {/* Main Content Wrapper */}
        <motion.div
          className="max-w-5xl mx-auto space-y-20" // Aumentei o espaçamento vertical
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Description Text */}
          <motion.p
            className="text-lg leading-relaxed text-gray-300 font-satoshi text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Argos Panoptes, na mitologia grega, era conhecido como o gigante de mil olhos — o guardião criado por Hera para vigiar o que era mais importante para ela. Seu corpo era coberto de olhos. Enquanto metade dormia, a outra metade permanecia acordada. Nada escapava ao seu olhar.
          </motion.p>

          {/* Frase de Transição */}
          <motion.p
            className="text-2xl md:text-3xl font-satoshi font-bold text-center text-purple-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Aqui, trabalhamos como Argos trabalhava:
          </motion.p>

          {/* --- INÍCIO DA SEÇÃO DA RODA (DESKTOP) --- */}
          <div className="hidden md:block relative w-full h-[500px] max-w-[1000px] mx-auto mt-[-60px] mb-12">
            {/* Glow Central Roxo */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-5"
            >
              <div
                className="w-[300px] h-[300px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(217, 70, 239, 0.6) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)',
                  filter: 'blur(60px)',
                  opacity: 1,
                }}
              ></div>
            </div>

            {/* SVG Lines Animation */}
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

              <motion.line x1="500" y1="250" x2="80" y2="250" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="920" y2="250" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="150" y2="450" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="850" y2="450" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              <motion.line x1="500" y1="250" x2="500" y2="470" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
            </motion.svg>

            {/* Boxes... */}
            <motion.div
              className="absolute top-1/2 left-0 -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Vigilância constante</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-0 -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Proteção total</span>
            </motion.div>

            <motion.div
              className="absolute bottom-[30px] left-[5%] w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Visão além do óbvio</span>
            </motion.div>

            <motion.div
              className="absolute bottom-[30px] right-[5%] w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Beleza e presença</span>
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Atenção absoluta</span>
            </motion.div>
          </div>
          {/* --- FIM DA SEÇÃO DA RODA (DESKTOP) --- */}

          {/* --- INÍCIO DA LISTA PARA MOBILE --- */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {pillarsList.map((pillar, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm text-center"
                variants={itemVariants}
              >
                <p className="text-base font-satoshi font-bold text-white">
                  {pillar}
                </p>
              </motion.div>
            ))}
          </div>
          {/* --- FIM DA LISTA MOBILE --- */}

          {/* Philosophy Box */}
          <motion.div
            className="mt-60 mb-32"
            variants={itemVariants}
          >
            <h3 className="text-4xl md:text-5xl text-white font-satoshi font-bold mb-20 text-center">
              Nossa Filosofia
            </h3>

            <p className="text-4xl md:text-5xl text-center font-satoshi font-bold mb-20 py-4 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]">
              Ver antes. Ver mais. Ver além.
            </p>

            <p className="text-white leading-relaxed font-satoshi text-center max-w-3xl mx-auto text-lg">
              Pegamos o significado de Argos Panoptes e transformamos em filosofia. Aqui, trabalhamos como Argos trabalhava: sempre atentos às mudanças, sempre vigilantes quanto à imagem dos nossos clientes, sempre protegendo reputação e posicionamento.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            className="space-y-8 pt-8"
            variants={containerVariants}
          >
            <h3 className="text-4xl md:text-5xl font-satoshi font-bold text-center text-white mb-24">
              Somos a Agência que
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              {[
                'Previne erros antes que aconteçam',
                'Enxerga oportunidades antes dos concorrentes',
                'Observa cada detalhe',
                'Entrega conteúdo com propósito e estética',
                'Protege a marca como se fosse nossa',
                'Cria estratégias que duram, posicionam e elevam',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  variants={itemVariants}
                >
                  <span className="text-purple-500 font-bold text-xl mt-1 group-hover:text-purple-300 transition-colors">✓</span>
                  <p className="text-gray-300 font-satoshi group-hover:text-white transition-colors text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ====== SPACER ADICIONADO: garante que o bloco final fique mais para baixo ====== */}
          <div className="h-16 md:h-32 lg:h-48" />

          {/* Final Message - AGORA COM O SVG DO OLHO ROXO */}
          <motion.div
            className="relative w-full py-24 md:py-40 overflow-hidden"
            variants={itemVariants}
          >
            {/* SVG Background - Olho Roxo (substitua o bloco antigo por este) */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradiente do anel externo */}
                <linearGradient id="ringGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#A855F7" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.9" />
                </linearGradient>
            
                {/* Gradiente radial da pupila */}
                <radialGradient id="pupilGrad" cx="40%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#4C1D95" stopOpacity="1" />
                </radialGradient>
            
                {/* Glow central (blur) */}
                <filter id="bigBlur">
                  <feGaussianBlur stdDeviation="40" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
            
                {/* Máscara para "pontas" laterais — corta o elipse para criar o formato pontudo */}
                <mask id="eyeMask">
                  {/* área branca = visível */}
                  <rect x="0" y="0" width="1200" height="600" fill="white" />
                  {/* polígonos pretos = recorte (esquerda e direita) */}
                  <polygon points="0,220 120,300 0,380" fill="black" />
                  <polygon points="1200,220 1080,300 1200,380" fill="black" />
                </mask>
              </defs>
            
              {/* Fundo preto sólido */}
              <rect width="1200" height="600" fill="#000" />
            
              {/* Anel externo (elipse com stroke grosso), recortado pelas pontas via máscara */}
              <g mask="url(#eyeMask)">
                <ellipse
                  cx="600"
                  cy="300"
                  rx="520"
                  ry="260"
                  fill="none"
                  stroke="url(#ringGrad)"
                  strokeWidth="120"
                  strokeLinecap="round"
                  opacity="0.88"
                />
              </g>
            
              {/* Glow grande por trás do centro (suaviza e dá aquele halo roxo) */}
              <ellipse
                cx="600"
                cy="300"
                rx="300"
                ry="200"
                fill="url(#pupilGrad)"
                opacity="0.22"
                filter="url(#bigBlur)"
              />
            
              {/* Elipse interna (pupila / íris) — levemente deslocada e rotacionada para ficar mais orgânica */}
              <ellipse
                cx="600"
                cy="300"
                rx="170"
                ry="120"
                fill="url(#pupilGrad)"
                transform="rotate(-6 600 300)"
                opacity="0.96"
              />
            
              {/* Ponto mais escuro dentro da pupila para profundidade */}
              <ellipse
                cx="620"
                cy="290"
                rx="45"
                ry="34"
                fill="#2A0F46"
                opacity="0.75"
                transform="rotate(-6 620 290)"
              />
            
              {/* Reflexo sutil (brilho) */}
              <ellipse
                cx="560"
                cy="255"
                rx="12"
                ry="8"
                fill="#FFFFFF"
                opacity="0.16"
                transform="rotate(-6 560 255)"
              />
            
              {/* Linha inferior fina que remete ao contorno mais claro da imagem */}
              <path
                d="M120 430 C 350 500, 850 500, 1080 430"
                stroke="#7C3AED"
                strokeWidth="6"
                strokeOpacity="0.12"
                fill="none"
              />
            </svg>
            {/* Conteúdo centralizado */}
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
              <p className="text-2xl md:text-4xl font-satoshi font-bold mb-16 leading-tight">
                <span className="text-gray-300 block">A Argos nasce da visão.</span>
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">
                  E vive para proteger a visão de quem confia na gente.
                </span>
              </p>
              <p className="text-white font-satoshi group-hover:text-white transition-colors text-lg">
                Se você quer apenas posts, qualquer agência serve. <br className="hidden md:block" />
                Se você quer posicionamento, vigilância e estratégia, a Argos existe exatamente para isso.
              </p>
            </div>
          </motion.div>
        </motion.div> {/* <-- fecha o Main Content Wrapper */}
      </div> {/* <-- fecha o container */}
    </section>
  );
}
