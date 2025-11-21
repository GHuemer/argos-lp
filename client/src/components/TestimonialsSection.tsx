import { motion } from 'framer-motion';
import WavePattern from './WavePattern';
import { useState, useEffect } from 'react';

/**
 * YouTubePreviewPlayerWithModal
 * - mostra poster com botão Play
 * - ao clicar, abre modal fullscreen com o embed do YouTube (autoplay, controls)
 * - fecha com ESC, clicando fora ou botão fechar
 */
function YouTubePreviewPlayerWithModal({
  youtubeId,
  title,
  posterPath,
  onOpen, // opcional callback
}: {
  youtubeId: string;
  title: string;
  posterPath: string;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // lock body scroll quando modal aberto
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape' && open) setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const iframeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1`;

  return (
    <>
      {/* Poster card */}
      <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden relative">
        <img
          src={posterPath}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
          style={{ pointerEvents: 'none' }}
        />

        <button
          onClick={() => {
            setOpen(true);
            onOpen?.();
          }}
          aria-label={`Play ${title}`}
          className="absolute z-20 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 p-4 transition cursor-pointer"
          style={{ backdropFilter: 'blur(4px)' }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
            <path d="M5 3v18l15-9L5 3z" fill="white" />
          </svg>
        </button>

        {/* bottom overlay with title */}
        <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-2xl">
          <div className="text-sm text-white/90">{title}</div>
        </div>
      </div>

      {/* Fullscreen modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            // clicar no overlay fecha (mas não fecha se clicar no iframe)
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          {/* Close button (top-right) */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-60 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
            aria-label="Fechar vídeo"
          >
            ✕
          </button>

          {/* iframe container — ocupa 100vw x 100vh */}
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ maxWidth: '100vw', maxHeight: '100vh' }}
          >
            <iframe
              src={iframeSrc}
              title={title}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(0);

  // IDs dos seus YouTube Shorts
  const videos = [
    {
      title: 'Depoimento Bonde Lanches',
      youtubeId: 'aoXF89AYBT0',
      company: 'Bonde Lanches',
      category: 'Alimentos e Bebidas',
    },
    {
      title: 'Depoimento Villela Odontologia',
      youtubeId: 'zEG4HtHn_Vo',
      company: 'Villela Odontologia',
      category: 'Clínica Odontológica',
    },
  ];

  const posterPath = '/mnt/data/83ac7d98-9afe-4618-8b86-91b8adf6497d.png'; // poster enviado por você

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="depoimentos" className="relative w-full py-20 md:py-32 bg-black text-white overflow-hidden">
      <WavePattern />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">Depoimentos de Clientes</h2>
          <p className="text-lg text-gray-300 font-satoshi">Veja o que nossos clientes dizem sobre nós</p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Desktop: dois vídeos lado a lado */}
          <div className="hidden md:grid grid-cols-2 gap-8 mb-8">
            {videos.map((video, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black cursor-pointer"
                  whileHover={{ borderColor: '#6B3FFF', scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Mantém proporção 9/16 no card */}
                  <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                    <YouTubePreviewPlayerWithModal
                      youtubeId={video.youtubeId}
                      title={video.title}
                      posterPath={posterPath}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
                    <p className="font-satoshi font-semibold text-white text-lg">{video.company}</p>
                    <p className="text-sm text-purple-300 font-satoshi">{video.category}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: full-height carousel estilo reel */}
          <div className="md:hidden">
            <div className="w-full h-screen snap-y snap-mandatory overflow-y-auto">
              {videos.map((video, index) => (
                <div key={index} className="w-full h-screen snap-start">
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    <YouTubePreviewPlayerWithModal
                      youtubeId={video.youtubeId}
                      title={video.title}
                      posterPath={posterPath}
                    />
                  </div>

                  <div className="absolute bottom-6 left-4 right-4 z-20">
                    <div className="text-white font-satoshi text-lg">{video.company}</div>
                    <div className="text-purple-300 text-sm">{video.category}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* dots / nav simples */}
            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-2">
              {videos.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${activeVideo === i ? 'bg-purple-500' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
