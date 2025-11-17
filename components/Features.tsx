
import React from 'react';

const LoyaltyAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25l-2.25 1.25 1-2.75-2.25-1.75h2.75L12 6l1.25 2.5h2.75L13.75 9.75l1 2.75L12 11.25z" />
    </svg>
);

const MediaGenIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ContentWriterIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const featuresData = [
    {
        icon: <LoyaltyAppIcon />,
        title: 'Develop Fun Loyalty Apps',
        description: 'Engage and retain customers with custom-built, gamified loyalty applications that make rewards exciting and interactive.'
    },
    {
        icon: <MediaGenIcon />,
        title: 'Generate Realistic Product Media',
        description: 'Create stunning, professional-grade product photos and videos with AI, saving you time and the cost of expensive photoshoots.'
    },
    {
        icon: <ContentWriterIcon />,
        title: 'Write Engaging Blog Content',
        description: 'Fuel your content marketing strategy with AI-generated blog posts that are SEO-friendly, informative, and tailored to your brand voice.'
    }
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 transform group">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-900 border-2 border-cyan-500/30 group-hover:border-cyan-500 mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 font-display">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);


const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight font-display">Our AI-Powered Solutions</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            We provide a suite of AI tools designed to make your business stand out, engage customers, and drive growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
