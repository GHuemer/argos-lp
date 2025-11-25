import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

export default function MethodologySection() {
  const stats = [
    { value: '10+', label: 'Empresas Transformadas' },
    { value: '3x', label: 'Aumento de Engajamento' },
    { value: '97%', label: 'Taxa de Satisfação' },
    { value: '30', label: 'Dias de Resultado' },
  ];

  return (
    <section
      id="methodology"
      className="relative w-full pt-24 pb-0 bg-black text-white overflow-hidden flex flex-col justify-center"
    >
      {/* 1. Fundo Preto Absoluto com Ondas Sutis */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-screen">
         <WavePattern />
      </div>

      {/* --- CONTEÚDO SUPERIOR (TEXTO) --- */}
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* REMOVIDO O BADGE "MÉTODO EXCLUSIVO" AQUI */}

          {/* Título */}
          <h2 className="text-5xl md:text-7xl font-satoshi font-bold mb-6 tracking-tight text-white">
            Metodologia <span className="text-[#8B5FFF]">Argos</span>
          </h2>

          {/* Descrição */}
          <p className="text-lg text-gray-300 font-satoshi font-bold leading-relaxed max-w-2xl mx-auto">
            Transformando o Instagram em um gerador previsível de autoridade e demanda. 
            É um processo testado, organizado e pensado para longo prazo — <span className="text-gray-100">sem improvisos.</span>
          </p>
        </motion.div>
      </div>

      {/* --- BARRA DE ESTATÍSTICAS --- */}
      <motion.div 
        className="relative w-full py-24 overflow-hidden" // Adicionado overflow-hidden para cortar as ondas se sobrarem
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* 1. O DEGRADÊ (A LUZ) - Fica atrás */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#5b21b6_0%,#170a28_40%,#000000_80%)] opacity-90 z-0" />
        
        {/* 2. AS LINHAS (WAVE PATTERN) - Ficam NA FRENTE da luz para serem iluminadas */}
        {/* Adicionei opacity-40 e mix-blend-overlay para interagir com o roxo */}
        <div className="absolute inset-0 z-10 opacity-40 mix-blend-plus-lighter pointer-events-none">
           <WavePattern />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4">
                {/* Ajuste o tamanho da fonte aqui no 'text-...' */}
                <span className="text-5xl md:text-6xl font-satoshi font-bold text-white mb-3 drop-shadow-xl">
                  {stat.value}
                </span>
                <span className="text-sm md:text-sm text-white font-satoshi font-bold tracking-widest uppercase">
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
