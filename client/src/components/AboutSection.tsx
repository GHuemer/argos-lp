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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl md:text-5xl font-satoshi font-bold mb-4">
            A Origem do Nome
          </h2>
          <p className="text-lg text-white font-satoshi">
            que define nossa essência
          </p>
        </motion.div>

        {/* Main Content Wrapper */}
        <motion.div
          className="max-w-5xl mx-auto space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Description Text */}
          <motion.p
            className="text-lg leading-relaxed text-white font-satoshi text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Argos Panoptes, na mitologia grega, era conhecido como o gigante de mil olhos — o guardião criado por Hera para vigiar o que era mais importante para ela. Seu corpo era coberto de olhos. Enquanto metade dormia, a outra metade permanecia acordada. Nada escapava ao seu olhar.
          </motion.p>

          {/* --- INÍCIO DA SEÇÃO DA RODA (DESKTOP) --- */}
          <div className="hidden md:block relative w-full h-[500px] max-w-[1000px] mx-auto my-12">
            
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
              {/* Centro da roda */}
              <circle cx="500" cy="250" r="6" fill="#A855F7" className="animate-pulse">
                 <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Linhas conectando o centro às caixas */}
              
              {/* Linha para Vigilância constante (Esquerda-Centro) */}
              <motion.line x1="500" y1="250" x2="80" y2="250" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              {/* Linha para Proteção total (Direita-Centro) */}
              <motion.line x1="500" y1="250" x2="920" y2="250" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              {/* Linha para Visão além do óbvio (Baixo-Esquerda) */}
              <motion.line x1="500" y1="250" x2="150" y2="450" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              {/* Linha para Beleza e presença (Baixo-Direita) */}
              <motion.line x1="500" y1="250" x2="850" y2="450" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              {/* Linha para Atenção absoluta (Inferior-Centro) */}
              <motion.line x1="500" y1="250" x2="500" y2="470" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />

            </motion.svg>

            {/* Box 1: Vigilância constante */}
            <motion.div 
              className="absolute top-1/2 left-0 -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Vigilância constante</span>
            </motion.div>

            {/* Box 2: Proteção total */}
            <motion.div 
              className="absolute top-1/2 right-0 -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Proteção total</span>
            </motion.div>

            {/* Box 3: Visão além do óbvio */}
            <motion.div 
              className="absolute bottom-[30px] left-[5%] w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Visão além do óbvio</span>
            </motion.div>

             {/* Box 4: Beleza e presença */}
             <motion.div 
              className="absolute bottom-[30px] right-[5%] w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Beleza e presença</span>
            </motion.div>

            {/* Box 5: Atenção absoluta */}
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
            {/* Título em branco e maior */}
            <h3 className="text-4xl md:text-5xl font-satoshi font-bold text-center text-white mb-24">
              Somos a Agência que
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Final Message - Minimalista com fundo de ondas suave */}
          <motion.div
            className="relative w-full py-24 md:py-40 overflow-hidden"
            variants={itemVariants}
          >
            {/* SVG Background - Ondas suaves e minimalistas */}
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 600"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Gradiente de fundo */}
              <defs>
                <radialGradient id="waveBg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1a0033" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>
              </defs>
              
              {/* Fundo base */}
              <rect width="1200" height="600" fill="url(#waveBg)" />
              
              {/* Ondas minimalistas - apenas 3 círculos com opacidade reduzida */}
              <circle cx="600" cy="300" r="350" fill="none" stroke="#6B3FFF" strokeWidth="1" opacity="0.1" />
              <circle cx="600" cy="300" r="250" fill="none" stroke="#7C3AED" strokeWidth="1" opacity="0.15" />
              <circle cx="600" cy="300" r="150" fill="none" stroke="#8B5FFF" strokeWidth="1" opacity="0.2" />
            </svg>
            
            {/* Conteúdo centralizado */}
            <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
              {/* Títulos agrupados em um único <p> para remover espaçamento entre eles */}
                <p className="text-2xl md:text-4xl font-satoshi font-bold mb-16 leading-tight">
                  <span className="text-gray-300 block">A Argos nasce da visão.</span>
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">
                    E vive para proteger a visão de quem confia na gente.
                  </span>
                </p>
              <p className="text-gray-300 font-satoshi group-hover:text-white transition-colors text-lg">
                Se você quer apenas posts, qualquer agência serve. <br className="hidden md:block" />
                Se você quer posicionamento, vigilância e estratégia, a Argos existe exatamente para isso.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
