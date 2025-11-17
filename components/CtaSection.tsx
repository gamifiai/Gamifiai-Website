
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter font-display">
          Ready to <span className="text-cyan-400">Gamify</span> Your Growth?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Join the businesses that are transforming their marketing into an experience. Let's build something exciting together.
        </p>
        <div className="mt-8">
          <a
            href="mailto:contact@gamifiai.com"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg py-4 px-10 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;