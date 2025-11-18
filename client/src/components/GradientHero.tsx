import { motion } from 'framer-motion';

export default function GradientHero() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Radial gradient background - Pitch style */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Radial gradient - vibrant purple to dark */}
          <radialGradient id="heroGradient" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#8B5FFF" stopOpacity="1" />
            <stop offset="30%" stopColor="#7B4FFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#5A2FE8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1a1a2e" stopOpacity="0" />
          </radialGradient>

          {/* Flowing wave pattern gradient */}
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B3FFF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#5A2FE8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2a1a4e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main radial gradient */}
        <rect width="1200" height="800" fill="url(#heroGradient)" />

        {/* Animated flowing lines - top section */}
        <g opacity="0.3">
          <path
            d="M 0,100 Q 300,80 600,100 T 1200,100"
            stroke="url(#waveGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,150 Q 300,120 600,150 T 1200,150"
            stroke="url(#waveGradient)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,200 Q 300,160 600,200 T 1200,200"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,250 Q 300,200 600,250 T 1200,250"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,300 Q 300,240 600,300 T 1200,300"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Transition zone - flowing curves */}
        <g opacity="0.8">
          <path
            d="M 0,350 Q 150,330 300,350 Q 450,370 600,350 Q 750,330 900,350 Q 1050,370 1200,350"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,400 Q 200,380 400,400 Q 600,420 800,400 Q 1000,380 1200,400"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,450 Q 250,430 500,450 Q 750,470 1000,450 Q 1200,430 1200,450"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Bottom wave pattern - topographic lines */}
        <g opacity="0.9">
          <path
            d="M 0,500 Q 150,490 300,500 Q 450,510 600,500 Q 750,490 900,500 Q 1050,510 1200,500"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,550 Q 200,540 400,550 Q 600,560 800,550 Q 1000,540 1200,550"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,600 Q 250,590 500,600 Q 750,610 1000,600 Q 1200,590 1200,600"
            stroke="url(#waveGradient)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,650 Q 300,640 600,650 Q 900,660 1200,650"
            stroke="url(#waveGradient)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0,700 Q 400,690 800,700 Q 1200,710 1200,700"
            stroke="url(#waveGradient)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Circular wave elements for depth */}
        <circle cx="600" cy="200" r="150" stroke="url(#waveGradient)" strokeWidth="1" fill="none" opacity="0.2" />
        <circle cx="200" cy="150" r="100" stroke="url(#waveGradient)" strokeWidth="0.8" fill="none" opacity="0.15" />
        <circle cx="1000" cy="300" r="120" stroke="url(#waveGradient)" strokeWidth="0.8" fill="none" opacity="0.15" />
      </svg>

      {/* Dark overlay at bottom for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </div>
  );
}
