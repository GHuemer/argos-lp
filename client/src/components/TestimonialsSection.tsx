import { motion } from 'framer-motion';
import WavePattern from './WavePattern';
import { useState } from 'react';

/**
 * YouTubePreviewPlayer
 * - mostra um poster com botão Play centralizado
 * - ao clicar no Play, carrega o embed do YouTube (autoplay)
 * - com controles nativos do YouTube
 */
function YouTubePreviewPlayer({ 
  youtubeId, 
  title, 
  className = '', 
  playing, 
  setPlaying 
}: { 
  youtubeId: string; 
  title: string; 
  className?: string; 
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}) {
  // autoplay=1 inicia automaticamente
  const iframeSrc = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1`;

  return (
    <div className={`relative w-full h-full ${className}`} style={{ position: 'relative' }}>
      {!playing ? (
        // Poster + Play
        <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden relative">
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />

          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="absolute z-20 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 p-4 transition"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3v18l15-9L5 3z" fill="white" />
            </svg>
          </button>

          {/* bottom overlay with title */}
          <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 rounded-b-2xl">
            <div className="text-sm text-white/90">{title}</div>
          </div>
        </div>
      ) : (
        // YouTube iframe carregado ao clicar
        <iframe
          src={iframeSrc}
          title={title}
          className="w-full h-full rounded-2xl" // Removendo 'overflow-hidden' do iframe, se for o caso.
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      )}
    </div>
  );
}

function DesktopPlayer({ youtubeId, title, className }: { youtubeId: string; title: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  return <YouTubePreviewPlayer youtubeId={youtubeId} title={title} className={className} playing={playing} setPlaying={setPlaying} />;
}

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [activeVideoPlaying, setActiveVideoPlaying] = useState(-1); // -1 indica que nenhum vídeo está tocando. O valor é o índice do vídeo que está tocando.

  // Seus YouTube Shorts (IDs)
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
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-4">
            Depoimentos de Clientes
          </h2>
          <p className="text-lg text-gray-300 font-satoshi">
            Veja o que nossos clientes dizem sobre nós
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Desktop: side by side */}
          <div className="hidden md:grid grid-cols-2 gap-8 mb-8">
            {videos.map((video, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black cursor-pointer"
                  whileHover={{ borderColor: '#6B3FFF', scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                    <DesktopPlayer
                      youtubeId={video.youtubeId}
                      title={video.title}
                      className="w-full h-full"
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

          {/* Mobile: carousel */}
          <div className="md:hidden">
            <motion.div key={activeVideo} variants={itemVariants} className="group">
              <motion.div
                className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black"
                whileHover={{ borderColor: '#6B3FFF' }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                  <YouTubePreviewPlayer
                    youtubeId={videos[activeVideo].youtubeId}
                    title={videos[activeVideo].title}
                    className="w-full h-full"
                    playing={activeVideoPlaying === activeVideo}
                    setPlaying={(playing) => setActiveVideoPlaying(playing ? activeVideo : -1)}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
                  <p className="font-satoshi font-semibold text-white text-lg">{videos[activeVideo].company}</p>
                  <p className="text-sm text-purple-300 font-satoshi">{videos[activeVideo].category}</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="flex justify-center gap-3 mt-8">
              {videos.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setActiveVideo(index);
                    setActiveVideoPlaying(-1); // Reseta o estado de reprodução ao mudar de vídeo
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeVideo === index ? 'bg-purple-500 w-8' : 'bg-purple-500/40 hover:bg-purple-500/60'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
