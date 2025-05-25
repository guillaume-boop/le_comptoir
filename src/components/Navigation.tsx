
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-black/90 backdrop-blur-md border-b border-neon-pink/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-sora font-bold text-xl text-pure-white">
            Le <span className="text-neon-pink">Comptoir</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('cocktails')}
              className="text-pure-white hover:text-neon-pink transition-colors font-inter"
            >
              Cocktails
            </button>
            <button 
              onClick={() => scrollToSection('galerie')}
              className="text-pure-white hover:text-neon-pink transition-colors font-inter"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('evenements')}
              className="text-pure-white hover:text-neon-pink transition-colors font-inter"
            >
              Événements
            </button>
            <button 
              onClick={() => scrollToSection('reserver')}
              className="bg-neon-gradient text-deep-black px-6 py-2 rounded-full font-inter font-semibold hover:scale-105 transition-transform"
            >
              Réserver
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-pure-white hover:text-neon-pink transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-deep-black/95 border-t border-neon-pink/20">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('cocktails')}
                className="block text-pure-white hover:text-neon-pink transition-colors font-inter"
              >
                Cocktails
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="block text-pure-white hover:text-neon-pink transition-colors font-inter"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('evenements')}
                className="block text-pure-white hover:text-neon-pink transition-colors font-inter"
              >
                Événements
              </button>
              <button 
                onClick={() => scrollToSection('reserver')}
                className="block bg-neon-gradient text-deep-black px-6 py-3 rounded-full font-inter font-semibold text-center"
              >
                Réserver
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
