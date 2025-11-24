import { motion } from 'framer-motion';
import WavePattern from './WavePattern';
import Image from 'next/image'; // Importe o componente Image do Next.js

export default function ClientsSection() {
  // Array de objetos com nome do cliente e caminho da logo
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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
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
            Clientes que Confiam na Argos
          </h2>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="p-6 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur-sm flex items-center justify-center text-center h-full cursor-pointer"
                whileHover={{
                  borderColor: '#6B3FFF',
                  backgroundColor: 'rgba(107, 63, 255, 0.15)',
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Componente Image para renderizar a logo */}
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  width={150} // Ajuste a largura conforme necessário
                  height={80} // Ajuste a altura conforme necessário
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
