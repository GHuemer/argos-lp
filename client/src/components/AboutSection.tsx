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
    'Atenção absoluta',
    'Vigilância constante',
    'Proteção total',
    'Visão além do óbvio',
    'Beleza e presença',
  ];

  return (
    <section id="about" className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      {/* Wave Pattern Background */}
      <WavePattern />

      {/* --- NOVO ELEMENTO DE GLOW CENTRAL --- */}
      <div 
        className="absolute inset-0 flex justify-center items-center pointer-events-none" 
        style={{ zIndex: 0 }} // Garante que o glow fique no fundo
      >
        <div 
          className="w-[800px] h-[800px] rounded-full" 
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)',
            filter: 'blur(100px)', // Ajuste o blur para mais ou menos intensidade
            opacity: 0.7, // Ajuste a opacidade para mais ou menos visibilidade
          }}
        ></div>
      </div>
      {/* --- FIM DO NOVO ELEMENTO DE GLOW CENTRAL --- */}


      <div className="container mx-auto px-4 relative z-10"> {/* z-10 para o conteúdo ficar acima do glow */}
        {/* Header */}
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

          {/* --- INÍCIO DA SEÇÃO DA RODA (DESKTOP) --- */}
          <div className="hidden md:block relative w-full h-[400px] max-w-[900px] mx-auto my-12">
            
            {/* SVG Lines Animation */}
            <motion.svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 900 400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Definições de gradiente para as linhas (opcional, usando cor sólida por enquanto) */}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B3FFF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Centro da roda */}
              <circle cx="450" cy="200" r="6" fill="#A855F7" className="animate-pulse">
                 <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Linhas conectando o centro às caixas */}
              {/* As coordenadas coincidem aproximadamente com as posições das divs abaixo */}
              <motion.line x1="450" y1="200" x2="450" y2="50" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              <motion.line x1="450" y1="200" x2="150" y2="200" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              <motion.line x1="450" y1="200" x2="750" y2="200" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              <motion.line x1="450" y1="200" x2="280" y2="350" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
              
              <motion.line x1="450" y1="200" x2="620" y2="350" stroke="#A855F7" strokeWidth="2" strokeOpacity="0.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.2 }} />
            </motion.svg>

            {/* Box 1: Topo Centro */}
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Atenção absoluta</span>
            </motion.div>

            {/* Box 2: Esquerda Centro */}
            <motion.div 
              className="absolute top-1/2 left-[5%] -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Vigilância constante</span>
            </motion.div>

            {/* Box 3: Direita Centro */}
            <motion.div 
              className="absolute top-1/2 right-[5%] -translate-y-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Proteção total</span>
            </motion.div>

            {/* Box 4: Baixo Esquerda */}
            <motion.div 
              className="absolute bottom-0 left-[20%] -translate-x-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Visão além do óbvio</span>
            </motion.div>

             {/* Box 5: Baixo Direita */}
             <motion.div 
              className="absolute bottom-0 right-[20%] translate-x-1/2 w-48 p-4 text-center rounded-xl border border-purple-500/40 bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] z-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, borderColor: '#A855F7' }}
            >
              <span className="text-white font-satoshi font-bold">Beleza e presença</span>
            </motion.div>

          </div>
          {/* --- FIM DA SEÇÃO DA RODA (DESKTOP) --- */}


          {/* --- INÍCIO DA LISTA PARA MOBILE (Visível apenas em telas pequenas) --- */}
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
            className="p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm mt-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-satoshi font-bold mb-4 text-center">
              Nossa Filosofia
            </h3>
            <p className="text-xl text-center font-satoshi font-semibold text-purple-400 mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
              Ver antes. Ver mais. Ver além.
            </p>
            <p className="text-gray-300 leading-relaxed font-satoshi text-center max-w-3xl mx-auto">
              Pegamos o significado de Argos Panoptes e transformamos em filosofia. Aqui, trabalhamos como Argos trabalhava: sempre atentos às mudanças, sempre vigilantes quanto à imagem dos nossos clientes, sempre protegendo reputação e posicionamento.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            className="space-y-8 pt-8"
            variants={containerVariants}
          >
            <h3 className="text-3xl font-satoshi font-bold text-center md:text-left">Somos a Agência que</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="flex items-start gap-3 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 bg-black/40 transition-colors group"
                  variants={itemVariants}
                >
                  <span className="text-purple-500 font-bold text-xl mt-1 group-hover:text-purple-300 transition-colors">✓</span>
                  <p className="text-gray-300 font-satoshi group-hover:text-white transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm text-center"
            variants={itemVariants}
          >
            <p className="text-2xl font-satoshi font-bold mb-4 text-white">
              A Argos nasce da visão. <br className="hidden md:block"/>
              <span className="text-purple-400">E vive para proteger a visão de quem confia na gente.</span>
            </p>
            <p className="text-gray-400 font-satoshi text-sm md:text-base mt-4">
              Se você quer apenas posts, qualquer agência serve. <br />
              Se você quer posicionamento, vigilância e estratégia, a Argos existe exatamente para isso.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
