export default function WavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.15 }}
    >
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B3FFF" />
          <stop offset="100%" stopColor="#8B5FFF" />
        </linearGradient>
      </defs>

      {/* Wave patterns - topographic lines */}
      <path
        d="M 0,200 Q 150,150 300,200 T 600,200 T 900,200 T 1200,200"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0,250 Q 150,200 300,250 T 600,250 T 900,250 T 1200,250"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0,300 Q 150,250 300,300 T 600,300 T 900,300 T 1200,300"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0,350 Q 150,300 300,350 T 600,350 T 900,350 T 1200,350"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0,400 Q 150,350 300,400 T 600,400 T 900,400 T 1200,400"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0,450 Q 150,400 300,450 T 600,450 T 900,450 T 1200,450"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0,500 Q 150,450 300,500 T 600,500 T 900,500 T 1200,500"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 0,550 Q 150,500 300,550 T 600,550 T 900,550 T 1200,550"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
      />

      {/* Circular wave elements */}
      <circle cx="200" cy="150" r="80" stroke="url(#waveGradient)" strokeWidth="1" fill="none" />
      <circle cx="1000" cy="600" r="120" stroke="url(#waveGradient)" strokeWidth="1" fill="none" />
      <circle cx="600" cy="400" r="100" stroke="url(#waveGradient)" strokeWidth="1" fill="none" />
    </svg>
  );
}
