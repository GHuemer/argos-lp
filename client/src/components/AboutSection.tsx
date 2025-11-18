import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

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

  const pillars = [
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

      <div className="container mx-auto px-4 relative z-10">
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

        {/* Main Content */}
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Description */}
          <motion.p
            className="text-lg leading-relaxed text-gray-300 font-satoshi"
            variants={itemVariants}
          >
            Argos Panoptes, na mitologia grega, era conhecido como o gigante de mil olhos — o guardião criado por Hera para vigiar o que era mais importante para ela. Seu corpo era coberto de olhos. Enquanto metade dormia, a outra metade permanecia acordada. Nada escapava ao seu olhar.
          </motion.p>

          {/* Pillars Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            variants={containerVariants}
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm text-center group cursor-pointer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: '#6B3FFF',
                  backgroundColor: 'rgba(107, 63, 255, 0.15)',
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-satoshi font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {pillar}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy Box */}
          <motion.div
            className="p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-satoshi font-bold mb-4 text-center">
              Nossa Filosofia
            </h3>
            <p className="text-xl text-center font-satoshi font-semibold text-purple-300 mb-6">
              Ver antes. Ver mais. Ver além.
            </p>
            <p className="text-gray-300 leading-relaxed font-satoshi">
              Pegamos o significado de Argos Panoptes e transformamos em filosofia. Aqui, trabalhamos como Argos trabalhava: sempre atentos às mudanças, sempre vigilantes quanto à imagem dos nossos clientes, sempre protegendo reputação e posicionamento.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            <h3 className="text-3xl font-satoshi font-bold">Somos a Agência que</h3>
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
                  className="flex items-start gap-3 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                  variants={itemVariants}
                >
                  <span className="text-purple-400 font-bold text-xl mt-1">✓</span>
                  <p className="text-gray-300 font-satoshi">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            className="p-8 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm text-center"
            variants={itemVariants}
          >
            <p className="text-xl font-satoshi font-semibold mb-4">
              A Argos nasce da visão. E vive para proteger a visão de quem confia na gente.
            </p>
            <p className="text-gray-300 font-satoshi">
              Se você quer apenas posts, qualquer agência serve. Se você quer posicionamento, vigilância e estratégia, a Argos existe exatamente para isso.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
