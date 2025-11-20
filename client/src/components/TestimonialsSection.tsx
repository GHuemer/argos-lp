import { motion } from 'framer-motion';
import WavePattern from './WavePattern';
import { useState, useRef } from 'react';

function VideoOrIframe({ fileId, title, className }) {
  // tenta vídeo nativo; se der erro, usa iframe preview
  const [fallback, setFallback] = useState(false);
  const videoRef = useRef(null);

  // url para <video>
  const videoSrc = `https://drive.google.com/uc?export=media&id=${fileId}`;
  // url para iframe preview
  const iframeSrc = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <>
      {!fallback ? (
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          playsInline
          className={className}
          onError={() => {
            // se erro, ativa fallback para iframe
            setFallback(true);
          }}
        />
      ) : (
        <iframe
          src={iframeSrc}
          title={title}
          className={className}
          allow="autoplay; encrypted-media; picture-in-picture"
        />
      )}
    </>
  );
}

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      title: 'Depoimento Bonde Lanches',
      // IDs extraídos das suas URLs
      id: '15bvYQp39j3jdZFP6IdhtmNuQrHSF1G5N',
      company: 'Bonde Lanches',
      category: 'Alimentos e Bebidas',
    },
    {
      title: 'Depoimento Villela Odontologia',
      id: '1BAQEdUP3IdgvGSKKqZBTF-UaghHno5q5',
      company: 'Villela Odontologia',
      category: 'Clínica Odontológica',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
          {/* Desktop: Side by side */}
          <div className="hidden md:grid grid-cols-2 gap-8 mb-8">
            {videos.map((video, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black cursor-pointer"
                  whileHover={{ borderColor: '#6B3FFF', scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                    <VideoOrIframe
                      fileId={video.id}
                      title={video.title}
                      className="w-full h-full object-cover"
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

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <motion.div key={activeVideo} variants={itemVariants} className="group">
              <motion.div
                className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black"
                whileHover={{ borderColor: '#6B3FFF' }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                  <VideoOrIframe
                    fileId={videos[activeVideo].id}
                    title={videos[activeVideo].title}
                    className="w-full h-full object-cover"
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
                  onClick={() => setActiveVideo(index)}
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
