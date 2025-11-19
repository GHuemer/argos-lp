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
      {/* 1. Fundo Preto Absoluto da Seção Principal */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-screen">
         <WavePattern />
      </div>

      {/* --- CONTEÚDO SUPERIOR (TEXTO) --- */}
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
            <span className="text-xs font-satoshi font-bold tracking-wider uppercase text-white">
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

      {/* --- BARRA HORIZONTAL COM DEGRADÊ DA IMAGEM --- */}
      <motion.div 
        className="relative z-10 w-full py-20 border-y border-[#6B3FFF]/30" 
        initial={{ opacity: 0, scaleX: 0.95 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* O GRADIENTE DA IMAGEM:
           Radial gradient que começa roxo vibrante no centro e vai escurecendo para preto.
        */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#6B3FFF_0%,#2e1065_40%,#000000_100%)] opacity-90" />
        
        {/* Camada extra de 'noise' ou textura sutil se desejar, mas mantendo limpo por enquanto */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-white/10 md:divide-none">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                {/* NÚMEROS: White + Bold */}
                <span className="text-5xl md:text-6xl font-satoshi font-bold text-white mb-3 drop-shadow-xl">
                  {stat.value}
                </span>
                {/* LEGENDAS: White + Bold */}
                <span className="text-sm md:text-base text-white font-satoshi font-bold tracking-wide uppercase opacity-90">
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
