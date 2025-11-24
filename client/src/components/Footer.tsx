import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative w-full bg-black text-white border-t border-purple-500/20 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <img 
              src="/img/logo-argos.png" 
              alt="Argos Logo" 
              className="h-12 mb-4 object-contain"
            />
            <p className="text-gray-400 font-satoshi">
              Agência de marketing digital que enxerga além.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-satoshi font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Sobre', 'Serviços', 'Clientes', 'Metodologia'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-300 transition-colors font-satoshi"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-satoshi font-bold mb-4">Contato</h4>
            <a
              href="https://wa.me/5516997616141"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors font-satoshi block mb-2"
            >
              WhatsApp: +55 16 99761-6141
            </a>
            <p className="text-gray-400 font-satoshi mb-6">
              Araraquara, SP
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/argos.marketingdigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/daviaraujo0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-purple-500/20 py-8">
          <motion.p
            className="text-center text-gray-500 font-satoshi"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} Argos Marketing Digital. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
