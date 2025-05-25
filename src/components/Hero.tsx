
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-gradient overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-deep-black/90 to-neon-pink/10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-neon-pink/20 animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-mint-green/20 animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-neon-pink/30 animate-float blur-lg" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="font-sora font-bold text-5xl md:text-7xl text-pure-white mb-6">
          Le <span className="text-transparent bg-clip-text bg-neon-gradient animate-neon-pulse">Comptoir</span>
          <br />
          des <span className="text-mint-green">Saisons</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-pure-white/80 mb-2 tracking-wide">
          Cocktails. Lumières. Stories.
        </p>
        
        <p className="font-inter text-lg text-pure-white/60 mb-12 max-w-2xl mx-auto">
          L'expérience cocktail nouvelle génération dans un cadre contemporain et vibrant
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('cocktails')}
            className="group relative bg-neon-gradient text-deep-black px-8 py-4 rounded-full font-inter font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-pink/25"
          >
            <span className="relative z-10">Découvrir nos cocktails</span>
            <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-100 rounded-full blur transition-opacity duration-300"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('reserver')}
            className="border-2 border-mint-green text-mint-green px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-mint-green hover:text-deep-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-mint-green/25"
          >
            Réserver une table
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-neon-pink to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
