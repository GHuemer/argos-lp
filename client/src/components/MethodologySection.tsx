import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Fingerprint, 
  Zap, 
  Palette, 
  Crown, 
  ShieldCheck, 
  BrainCircuit 
} from 'lucide-react'; // Certifique-se de ter lucide-react instalado
import Section from './Section';
import WavePattern from './WavePattern';

export default function MethodologySection() {
  const pillars = [
    { 
      name: 'Modernidade', 
      icon: Sparkles, 
      desc: 'Antecipamos tendências para manter sua marca à frente do tempo.' 
    },
    { 
      name: 'Singularidade', 
      icon: Fingerprint, 
      desc: 'Identidade única e impossível de ser copiada pela concorrência.' 
    },
    { 
      name: 'Imperatividade', 
      icon: Zap, 
      desc: 'Comunicação que gera ação imediata e desejo incontrolável.' 
    },
    { 
      name: 'Jovialidade', 
      icon: Palette, 
      desc: 'Uma linguagem visual fresca, dinâmica e conectada ao agora.' 
    },
    { 
      name: 'Exclusividade', 
      icon: Crown, 
      desc: 'Posicionamento premium que afasta clientes desqualificados.' 
    },
    { 
      name: 'Autenticidade', 
      icon: ShieldCheck, 
      desc: 'Construção de autoridade baseada na verdade da sua marca.' 
    },
    { 
      name: 'Estratégia', 
      icon: BrainCircuit, 
      desc: 'Cada post, story e legenda tem um propósito matemático de conversão.' 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <section
      id="methodology"
      className="relative w-full py-24 md:py-32 bg-[#050505] text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
         <WavePattern />
      </div>
      
      {/* Ambient Purple Glow (Background Spot) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#6B3FFF] rounded-full opacity-[0.03] blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-satoshi font-bold mb-6 tracking-tight text-white">
            Metodologia <span className="text-[#6B3FFF]">Argos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-satoshi font-medium leading-relaxed max-w-2xl mx-auto">
            Transformando o Instagram em um gerador previsível de autoridade e demanda. 
            Um processo testado, organizado e pensado para longo prazo — <span className="text-white">sem improvisos.</span>
          </p>
        </motion.div>

        {/* Cards Grid - 3-3-1 Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* First row */}
          {pillars.slice(0, 3).map((pillar, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <MethodologyCard pillar={pillar} />
            </motion.div>
          ))}

          {/* Second row */}
          {pillars.slice(3, 6).map((pillar, index) => (
            <motion.div key={index + 3} variants={itemVariants} className="h-full">
              <MethodologyCard pillar={pillar} />
            </motion.div>
          ))}

          {/* Third row - Centered */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-3 flex justify-center"
          >
            <div className="w-full md:w-1/3">
              <MethodologyCard pillar={pillars[6]} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface MethodologyCardProps {
  pillar: {
    name: string;
    icon: React.ElementType;
    desc: string;
  };
}

function MethodologyCard({ pillar }: MethodologyCardProps) {
  const Icon = pillar.icon;

  return (
    <motion.div
      className="group relative p-8 h-full rounded-2xl border border-white/5 bg-[#0A0A0A] hover:bg-[#0F0F0F] transition-all duration-500 overflow-hidden"
      whileHover={{ y: -5 }}
    >
      {/* Hover Gradient Effect (Purple Blob inside card) */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6B3FFF] rounded-full opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500" />
      
      {/* Border Gradient on Hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#6B3FFF]/30 transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start">
        {/* Icon Container */}
        <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#6B3FFF]/30 group-hover:bg-[#6B3FFF]/10 transition-colors duration-300">
          <Icon className="w-6 h-6 text-white group-hover:text-[#6B3FFF] transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-satoshi font-bold text-white mb-3 tracking-wide group-hover:text-[#6B3FFF] transition-colors duration-300">
          {pillar.name}
        </h3>
        
        <p className="text-sm text-gray-400 font-satoshi font-normal leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {pillar.desc}
        </p>
      </div>
    </motion.div>
  );
}
