import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

export default function MethodologySection() {
  const stats = [
    { value: '500+', label: 'Alunos Transformados' },
    { value: '3x', label: 'Aumento de Engajamento' },
    { value: '97%', label: 'Taxa de Satisfação' },
    { value: '30', label: 'Dias de Resultado' },
  ];

  return (
    <section
      id="methodology"
      className="relative w-full py-24 bg-black text-white overflow-hidden flex flex-col justify-center"
    >
      {/* 1. Fundo Preto Absoluto com Ondas Sutis */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-screen">
         <WavePattern />
      </div>

      {/* Luz Ambiente (Glow) para não ficar "morto", mas mantendo o fundo preto */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6B3FFF] opacity-10 blur-[150px] rounded-full pointer-events-none" />

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <div className="container mx-auto px-4 relative z-10 mb-20">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6B3FFF] mr-2 animate-pulse" />
            <span className="text-xs font-satoshi font-medium tracking-wider uppercase text-gray-300">
              Método Exclusivo
            </span>
          </div>

          {/* Título */}
          <h2 className="text-5xl md:text-7xl font-satoshi font-bold mb-6 tracking-tight text-white">
            Metodologia <span className="text-[#8B5FFF]">Argos</span>
          </h2>

          {/* Descrição */}
          <p className="text-lg text-gray-400 font-satoshi font-normal leading-relaxed max-w-2xl mx-auto">
            Transformando o Instagram em um gerador previsível de autoridade e demanda. 
            É um processo testado, organizado e pensado para longo prazo — <span className="text-gray-200">sem improvisos.</span>
          </p>
        </motion.div>
      </div>

      {/* --- A BARRA ROXA DE ESTATÍSTICAS (SUBSTITUINDO OS CARDS) --- */}
      <motion.div 
        className="relative z-10 w-full py-16 bg-[#1a0b2e] border-y border-[#6B3FFF]/20" 
        initial={{ opacity: 0, scaleX: 0.95 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Brilho interno na barra */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/5 md:divide-none">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                {/* Número Roxo Claro */}
                <span className="text-5xl md:text-6xl font-satoshi font-bold text-[#d8b4fe] mb-3 drop-shadow-lg">
                  {stat.value}
                </span>
                {/* Legenda Branca */}
                <span className="text-sm md:text-base text-gray-300 font-satoshi font-medium tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
