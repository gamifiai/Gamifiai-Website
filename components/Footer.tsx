import React from 'react';

const Logo: React.FC<{ onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ onClick }) => (
    <a href="#" aria-label="Gamifiai Home" className="text-xl font-bold font-display text-white tracking-tighter" onClick={onClick}>
        Gamifiai
    </a>
);

const Footer: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Contact', href: '#contact' },
      ];

  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex-shrink-0">
                <Logo onClick={handleNavClick} />
            </div>
            <div className="flex space-x-6">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={handleNavClick} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                        {link.name}
                    </a>
                ))}
            </div>
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Gamifiai. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;