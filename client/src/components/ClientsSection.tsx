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
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">
            Clientes que Confiam na Argos
          </h2>
        </motion.div>

        {/* GRID MELHORADO */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {clients.map((client) => (
            <motion.div key={client.name} variants={itemVariants}>

              <div
                className="p-4 flex items-center justify-center rounded-2xl bg-white/8 backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  loading="lazy"
                  className="max-h-36 object-contain w-auto"
                  style={{
                    filter: 'brightness(1.5) contrast(1.1)', // deixa mais visível
                  }}
                />
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
