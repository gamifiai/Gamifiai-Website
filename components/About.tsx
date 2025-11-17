
import React from 'react';

// Pixel data for minimalist happy face (8x8 grid)
const pixels = [
  // Eyes
  { x: 2, y: 2 },
  { x: 5, y: 2 },
  // Mouth
  { x: 1, y: 4 },
  { x: 2, y: 5 },
  { x: 3, y: 5 },
  { x: 4, y: 5 },
  { x: 5, y: 5 },
  { x: 6, y: 4 },
];


const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
             <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-25"></div>
             <div className="relative w-full h-80 lg:h-full bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-2xl flex items-center justify-center p-8 border border-cyan-500/20">
                  <svg width="100%" height="100%" viewBox="0 0 8 8" className="opacity-90 max-w-64" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                        </filter>
                    </defs>
                    <g fill="#22d3ee" filter="url(#glow)">
                        {pixels.map((p, i) => <rect key={i} x={p.x} y={p.y} width="1" height="1" />)}
                    </g>
                </svg>
             </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">ABOUT</h2>
            <p className="mt-4 text-lg text-cyan-400 font-semibold">Democratizing growth for small businesses.</p>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Thanks to advances in AI, building apps and creating marketing materials is now up to 80% quicker and more cost-effective. In the past, only big companies could afford custom marketing and loyalty programs, leaving small businesses behind.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Seeing this opportunity, we started Gamifiai to bring powerful, smart marketing and loyalty solutions to small and local businesses. Now, every business can use AI to connect with customers without the old barriers of time and cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
