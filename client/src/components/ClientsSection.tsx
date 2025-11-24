import { motion } from 'framer-motion';
import WavePattern from './WavePattern';

export default function ClientsSection() {
  const clients = [
    { name: 'Bonde Pizzas', logo: '/img/logo-bonde.png' },
    { name: 'Gold Cut', logo: '/img/logo-goldcut.png' },
    { name: 'Villela Odontologia', logo: '/img/logo-villela.png' },
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

        {/* GRID OTIMIZADO */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {clients.map((client) => (
            <motion.div 
              key={client.name} 
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group"
            >
              <div
                className="p-4 md:p-5 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-white/30 transition-all duration-300 hover:ring-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] min-h-[180px] md:min-h-[220px]"
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  loading="lazy"
                  className="max-h-56 md:max-h-72 object-contain w-auto transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-center text-sm md:text-base text-white font-satoshi font-bold mt-4 group-hover:text-white transition-colors">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
