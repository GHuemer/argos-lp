import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Clientes', href: '#clients' },
    { label: 'Metodologia', href: '#methodology' },
    { label: 'Oferta', href: '#offer' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/img/logo-argos-branco-02.png" 
            alt="Argos Logo" 
            className="h-16 md:h-20"
          />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>

        {/* Nav Items - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-white hover:text-white transition-colors text-sm font-medium"
              whileHover={{ color: '#fff' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/5516997616141"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contato
        </motion.a>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-black/95 border-t border-gray-800 px-4 py-4 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="block text-white hover:text-white transition-colors text-sm font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
