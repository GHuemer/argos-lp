import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// --- COMPONENTE DO FUNDO ANIMADO (CANVAS) ---
const WavyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let w, h;

    // Configurações das ondas
    // Cada objeto é uma "camada" de linha com velocidade e altura diferentes
    const waves = [
      { amplitude: 30, frequency: 0.002, speed: 0.02, color: 'rgba(147, 51, 234, 0.3)', yOffset: 0 }, // Roxo
      { amplitude: 50, frequency: 0.001, speed: 0.015, color: 'rgba(168, 85, 247, 0.2)', yOffset: 20 }, // Violeta claro
      { amplitude: 20, frequency: 0.003, speed: 0.01, color: 'rgba(88, 28, 135, 0.4)', yOffset: -20 }, // Roxo escuro
    ];

    let time = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const draw = () => {
      // Limpa o canvas a cada frame (com um leve rastro preto para suavidade, opcional)
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, w, h);

      // Desenha cada onda
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;

        for (let x = 0; x < w; x++) {
          // A mágica matemática: y = centro + amplitude * sin(x * frequencia + tempo * velocidade)
          // Adicionamos ondas secundárias para dar o efeito "topográfico" irregular
          const y =
            h / 2 +
            wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude / 2);

          ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ filter: 'blur(1px)' }} // Um leve blur deixa as linhas mais "neon"
    />
  );
};

// --- SUA SEÇÃO PRINCIPAL ---
export default function CTAFinalSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-black text-white overflow-hidden">
      
      {/* 1. O Fundo Programático */}
      <WavyBackground />

      {/* 2. Um gradiente sutil por cima para focar a atenção no centro e escurecer as bordas */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-black/60 to-black pointer-events-none" />

      {/* 3. O Conteúdo Centralizado */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-satoshi font-bold mb-6">
            Pronto para posicionar sua marca em um novo nível?
          </h2>
          
          <p className="text-lg text-gray-300 font-satoshi mb-12">
            Entre em contato e receba uma avaliação gratuita.
          </p>

          <motion.a
            href="https://wa.me/5516997616141"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-satoshi font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 border border-purple-500/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            Chamar a Argos no WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Estilo inline para o radial gradient customizado (ou adicione ao tailwind.config) */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,1) 100%);
        }
      `}</style>
    </section>
  );
}
