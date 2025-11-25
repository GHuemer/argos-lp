import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WavyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let w, h;

    // CONFIGURAÇÃO DAS LINHAS
    // amplitude: Altura da onda
    // frequency: Quantas curvas a onda tem (menor = mais esticado)
    // speed: Velocidade do movimento
    // yOffset: Posição vertical (0 = meio, negativo = pra cima, positivo = pra baixo)
    const waves = [
      // Ondas Superiores
      { amplitude: 90, frequency: 0.001, speed: 0.005, color: 'rgba(147, 51, 234, 0.3)', yOffset: -150 }, // Lilás bem claro, topo
      { amplitude: 50, frequency: 0.002, speed: 0.008, color: 'rgba(168, 85, 247, 0.4)', yOffset: -100 }, // Roxo médio
      { amplitude: 30, frequency: 0.003, speed: 0.013, color: 'rgba(216, 180, 254, 0.5)', yOffset: -50 },  // Lilás brilhante

      // Ondas Centrais (mais vibrantes)
      { amplitude: 40, frequency: 0.004, speed: 0.013, color: 'rgba(192, 132, 252, 0.5)', yOffset: 0 },    // Quase branco/roxo, centro
      { amplitude: 60, frequency: 0.002, speed: 0.009, color: 'rgba(192, 132, 252, 0.5)', yOffset: 30 },   // Roxo claro

      // Ondas Inferiores
      { amplitude: 40, frequency: 0.003, speed: 0.015, color: 'rgba(168, 85, 247, 0.4)', yOffset: 80 },   // Roxo médio
      { amplitude: 90, frequency: 0.001, speed: 0.009, color: 'rgba(147, 51, 234, 0.3)', yOffset: 140 },  // Roxo escuro
    // { amplitude: 100, frequency: 0.0008, speed: 0.004, color: 'rgba(126, 34, 206, 0.2)', yOffset: 200 }, // Roxo profundo, base
    ];

    let time = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const draw = () => {
      // Fundo preto limpo
      ctx.fillStyle = '#000000'; 
      ctx.fillRect(0, 0, w, h);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 1.5; // Linhas finas e elegantes

        for (let x = 0; x < w; x++) {
          // Cálculo da onda com um pouco de variação para parecer orgânico
          const y =
            h / 2 +
            wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.5) * (wave.amplitude * 0.3); // Segunda onda para irregularidade

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
      // Um leve blur para dar o efeito "glow" (brilho neon)
      style={{ filter: 'blur(0.5px)' }} 
    />
  );
};

export default function CTAFinalSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-black text-white overflow-hidden">
      
      <WavyBackground />

      {/* Gradiente radial para escurecer as bordas e focar no centro */}
      <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent via-black/40 to-black pointer-events-none" />

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
          
          <p className="text-lg text-gray-300 font-satoshi font-bold mb-12">
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

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,1) 100%);
        }
      `}</style>
    </section>
  );
}
