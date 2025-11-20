import { motion } from 'framer-motion';
import WavePattern from './WavePattern';
import { useState, useRef, useEffect } from 'react';

/**
 * VideoPlayer
 * - tenta carregar o vídeo direto do Google Drive via uc?export=media
 * - se der erro, faz fallback para iframe preview
 * - controles custom: play/pause, -10s, +10s, progress bar (clicável)
 *
 * Observações:
 * - substitua posterPath se quiser outro thumbnail
 * - se cair no iframe, os controles custom não conseguem controlar o player do Drive,
 *   então mostramos um botão "Abrir no Drive".
 */
function VideoPlayer({ fileId, title, className = '' }) {
  const videoSrc = `https://drive.google.com/uc?export=media&id=${fileId}`;
  const iframeSrc = `https://drive.google.com/file/d/${fileId}/preview`;
  // thumbnail local (imagem que você carregou). O dev-instruction pediu usar path do upload.
  const posterPath = '/mnt/data/66b1ac05-c028-41ff-907b-5b5646110a00.png';

  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const [useIframe, setUseIframe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');

  // quando a tag <video> der erro (CORS/HTTP2/etc), ativa fallback
  function onVideoError(e) {
    console.warn('Video load error', e);
    setErrorMsg('Não foi possível carregar o vídeo nativamente. Usando preview.');
    setUseIframe(true);
    setLoading(false);
    setIsPlaying(false);
  }

  useEffect(() => {
    // reset quando troca fileId
    setUseIframe(false);
    setLoading(true);
    setIsPlaying(false);
    setDuration(0);
    setCurrent(0);
    setErrorMsg('');
  }, [fileId]);

  // listeners do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video || useIframe) return;

    function onLoadedMetadata() {
      setDuration(video.duration || 0);
      setLoading(false);
      setErrorMsg('');
    }
    function onTimeUpdate() {
      setCurrent(video.currentTime);
    }
    function onPlay() {
      setIsPlaying(true);
    }
    function onPause() {
      setIsPlaying(false);
    }
    function onEnded() {
      setIsPlaying(false);
    }

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onVideoError);

    // se o browser bloquear por CORS, pode nem chegar no error do <video>, aí o fallback pode ser ativado por timeout:
    const probeTimeout = setTimeout(() => {
      // se ainda sem metadata e sem iframe, assumimos problema e mudamos para iframe
      if (!video.duration || Number.isNaN(video.duration)) {
        console.warn('Probe timeout: ativando fallback para iframe');
        setErrorMsg('Possível bloqueio (CORS/HTTP2). Usando preview.');
        setUseIframe(true);
        setLoading(false);
      }
    }, 6000);

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onVideoError);
      clearTimeout(probeTimeout);
    };
  }, [useIframe, fileId]);

  // play / pause toggle
  function togglePlay() {
    if (useIframe) return window.open(iframeSrc, '_blank', 'noopener');
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  }

  function seekBy(seconds) {
    if (useIframe) return window.open(iframeSrc, '_blank', 'noopener');
    const video = videoRef.current;
    if (!video) return;
    let next = video.currentTime + seconds;
    if (next < 0) next = 0;
    if (next > video.duration) next = video.duration;
    video.currentTime = next;
    // atualiza estado imediatamente
    setCurrent(next);
  }

  function onProgressClick(e) {
    if (useIframe) return;
    const bar = progressRef.current;
    if (!bar || !videoRef.current) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = clickX / rect.width;
    const nextTime = pct * (videoRef.current.duration || 0);
    videoRef.current.currentTime = nextTime;
    setCurrent(nextTime);
  }

  // formato tempo mm:ss
  function fmt(t = 0) {
    if (!isFinite(t) || Number.isNaN(t)) return '0:00';
    const mm = Math.floor(t / 60);
    const ss = Math.floor(t % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  }

  // width pct for progress
  const progressPct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <div className={`relative w-full h-full ${className}`} style={{ position: 'relative' }}>
      {loading && !useIframe && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="text-sm text-gray-300 bg-black/60 px-3 py-1 rounded">Carregando...</div>
        </div>
      )}

      {!useIframe ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterPath}
            controls={false} // usamos controles custom
            playsInline
            className="w-full h-full object-contain bg-black"
            onError={onVideoError}
          />
          {/* overlay big play */}
          <div
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            aria-hidden
          >
            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play"
                className="pointer-events-auto bg-white/10 hover:bg-white/20 transition p-4 rounded-full flex items-center justify-center"
                style={{ backdropFilter: 'blur(4px)' }}
              >
                {/* simple play triangle */}
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 3v18l15-9L5 3z" fill="white" />
                </svg>
              </button>
            )}
          </div>

          {/* bottom custom controls */}
          <div className="absolute left-4 right-4 bottom-4 z-40">
            <div
              ref={progressRef}
              onClick={onProgressClick}
              className="h-2 w-full bg-white/10 rounded-md cursor-pointer overflow-hidden"
              style={{ position: 'relative' }}
            >
              <div
                style={{ width: `${progressPct}%` }}
                className="h-full bg-purple-500 transition-all"
              />
            </div>

            <div className="flex items-center justify-between mt-3 gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => seekBy(-10)}
                  className="bg-black/50 hover:bg-black/60 text-white px-3 py-2 rounded-md transition"
                  aria-label="Retroceder 10 segundos"
                >
                  -10s
                </button>
                <button
                  onClick={togglePlay}
                  className="bg-white text-black px-4 py-2 rounded-md font-semibold transition"
                  aria-label={isPlaying ? 'Pausar' : 'Tocar'}
                >
                  {isPlaying ? 'Pausar' : 'Play'}
                </button>
                <button
                  onClick={() => seekBy(10)}
                  className="bg-black/50 hover:bg-black/60 text-white px-3 py-2 rounded-md transition"
                  aria-label="Avançar 10 segundos"
                >
                  +10s
                </button>
              </div>

              <div className="text-sm text-gray-300">
                {fmt(current)} / {fmt(duration)}
              </div>
            </div>
          </div>
        </>
      ) : (
        // fallback iframe
        <div className="w-full h-full relative bg-black">
          <iframe
            src={iframeSrc}
            title={title}
            className="w-full h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
          <div className="absolute left-4 right-4 bottom-4 z-40 flex items-center justify-between">
            <div className="text-sm text-red-300 bg-black/60 px-3 py-2 rounded">Preview (iframe) — controles não disponíveis</div>
            <div className="flex gap-2">
              <a
                href={iframeSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-3 py-2 rounded-md"
              >
                Abrir no Drive
              </a>
            </div>
          </div>
        </div>
      )}

      {/* mensagem de erro/aviso */}
      {errorMsg && (
        <div className="absolute left-4 top-4 z-50 bg-black/70 text-sm text-red-300 p-2 rounded">
          {errorMsg}
        </div>
      )}
    </div>
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
                    <VideoPlayer
                      fileId={video.id}
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

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <motion.div key={activeVideo} variants={itemVariants} className="group">
              <motion.div
                className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-black"
                whileHover={{ borderColor: '#6B3FFF' }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
                  <VideoPlayer
                    fileId={videos[activeVideo].id}
                    title={videos[activeVideo].title}
                    className="w-full h-full"
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
