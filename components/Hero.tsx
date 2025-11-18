import React from 'react';

const Hero: React.FC = () => {

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 backdrop-brightness-50"></div>

      <div className="relative z-10 p-4">
        <div className="inline-block border-2 border-cyan-400 text-cyan-400 font-display py-2 px-4 mb-4 text-sm md:text-base tracking-widest animate-pulse">
          PRESS START
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 font-display">
          <span className="text-cyan-400">AI Makes</span> Marketing and Loyalty <span className="text-cyan-400">Fun</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          Experience how AI can make your marketing and loyalty programs fun, simple, and affordable! Our solutions help you attract new customers, reward regulars, and share creative promotions that spark real excitement.
        </p>
        <a href="#contact" onClick={handleNavClick} className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-md hover:bg-cyan-600 transition-all duration-300 text-lg shadow-lg shadow-cyan-500/40 transform hover:scale-105">
          Discover How
        </a>
      </div>
    </section>
  );
};

export default Hero;