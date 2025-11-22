import { motion } from 'framer-motion';

export default function GradientDesktop() {
  return (
    // pointer-events-none: Garante que este overlay não bloqueie cliques na página
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        // Garante que o fundo do SVG seja transparente
        style={{ background: 'transparent' }}
      >
        <defs>
          {/* Definimos o gradiente apenas para as linhas */}
          <linearGradient id="waveGradientLines" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B3FFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#5A2FE8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2a1a4e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* NÃO HÁ <rect> DE FUNDO AQUI. APENAS LINHAS. */}

        {/* Grupo de linhas superiores */}
        <g opacity="0.5">
          <path d="M 0,100 Q 300,80 600,100 T 1200,100" stroke="url(#waveGradientLines)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 0,150 Q 300,120 600,150 T 1200,150" stroke="url(#waveGradientLines)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 0,200 Q 300,160 600,200 T 1200,200" stroke="url(#waveGradientLines)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 0,250 Q 300,200 600,250 T 1200,250" stroke="url(#waveGradientLines)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 0,300 Q 300,240 600,300 T 1200,300" stroke="url(#waveGradientLines)" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>

        {/* Grupo de linhas centrais */}
        <g opacity="0.8">
          <path d="M 0,350 Q 150,330 300,350 Q 450,370 600,350 Q 750,330 900,350 Q 1050,370 1200,350" stroke="url(#waveGradientLines)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 0,400 Q 200,380 400,400 Q 600,420 800,400 Q 1000,380 1200,400" stroke="url(#waveGradientLines)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 0,450 Q 250,430 500,450 Q 750,470 1000,450 Q 1200,430 1200,450" stroke="url(#waveGradientLines)" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>

        {/* Grupo de linhas inferiores */}
        <g opacity="0.9">
          <path d="M 0,500 Q 150,490 300,500 Q 450,510 600,500 Q 750,490 900,500 Q 1050,510 1200,500" stroke="url(#waveGradientLines)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 0,550 Q 200,540 400,550 Q 600,560 800,550 Q 1000,540 1200,550" stroke="url(#waveGradientLines)" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M 0,600 Q 250,590 500,600 Q 750,610 1000,600 Q 1200,590 1200,600" stroke="url(#waveGradientLines)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <path d="M 0,650 Q 300,640 600,650 Q 900,660 1200,650" stroke="url(#waveGradientLines)" strokeWidth="0.6" fill="none" strokeLinecap="round" />
          <path d="M 0,700 Q 400,690 800,700 Q 1200,710 1200,700" stroke="url(#waveGradientLines)" strokeWidth="0.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Elementos circulares sutis */}
        <circle cx="600" cy="200" r="150" stroke="url(#waveGradientLines)" strokeWidth="1" fill="none" opacity="0.3" />
        <circle cx="200" cy="150" r="100" stroke="url(#waveGradientLines)" strokeWidth="0.8" fill="none" opacity="0.2" />
        <circle cx="1000" cy="300" r="120" stroke="url(#waveGradientLines)" strokeWidth="0.8" fill="none" opacity="0.2" />
      </svg>
    </div>
  );
}
