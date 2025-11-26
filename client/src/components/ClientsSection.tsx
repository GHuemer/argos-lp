import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

export default function ClientsSection() {

  const clients = [
    { name: 'Villela Odontologia', logo: '/img/logo-villela.png' },
    { name: 'Gold Cut', logo: '/img/logo-goldcut.png' },
    { 
      name: 'Grupo Bonde', 
      logo: '/img/logo-bonde.png',
      images: [
        '/img/logo-bonde.png',
        '/img/bonde-bebidas.png',
        '/img/bonde-crepes.png'
      ]
    },
    { name: 'Mavin Imóveis', logo: '/img/logo-mavin.png' },
    { name: 'Xprime Academia', logo: '/img/logo-xprime.png' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="clients" className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      <WavePattern />

      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">
            Clientes que Confiam na Argos
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          /* Adicionei 'auto-rows-fr' para ajudar a alinhar as alturas no mobile */
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-7xl mx-auto auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {clients.map((client) => {
            const isBonde = client.name === 'Grupo Bonde' && client.images;

            return (
              <motion.div 
                key={client.name} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group h-full flex flex-col" // flex-col garante que o texto fique embaixo do card
              >
                <div
                  // CORREÇÃO DE ALTURA:
                  // min-h-[160px] no celular (pequeno)
                  // md:min-h-[220px] no PC (grande, como vc gostou)
                  className="flex-grow p-3 md:p-5 flex flex-col items-center justify-center rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-white/30 transition-all duration-300 hover:ring-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] min-h-[160px] md:min-h-[220px]"
                >
                  {isBonde ? (
                    /* --- BONDE --- */
                    <div className="flex flex-col items-center justify-center gap-2">
                      {client.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${client.name} - ${idx + 1}`}
                          // CORREÇÃO DE TAMANHO BONDE:
                          // h-10 no celular (pequeno para caberem os 3)
                          // md:h-16 no PC (grande)
                          className="h-10 md:h-16 object-contain w-auto hover:scale-110 transition-transform duration-300"
                        />
                      ))}
                    </div>
                  ) : (
                    /* --- OUTROS --- */
                    <img
                      src={client.logo}
                      alt={`Logo ${client.name}`}
                      loading="lazy"
                      // CORREÇÃO DE TAMANHO GERAL:
                      // max-h-24 no celular (aprox 96px, ideal para grid de 2 colunas)
                      // md:max-h-64 no PC (gigante como vc queria)
                      className="max-h-24 md:max-h-64 object-contain w-auto transition-all duration-300 group-hover:scale-110"
                    />
                  )}
                </div>
                
                {/* Título com margem segura */}
                <p className="text-center text-xs md:text-base text-white font-satoshi font-bold mt-4 mb-2 group-hover:text-white transition-colors">
                  {client.name}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
