
const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg",
      alt: "Cocktail dans un verre design",
      span: "col-span-1 row-span-1"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=400&h=600&fit=crop",
      alt: "Ambiance bar avec lumières tamisées",
      span: "col-span-1 row-span-2"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop",
      alt: "Cocktails colorés alignés sur le bar",
      span: "col-span-2 row-span-1"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
      alt: "Bar avec bouteilles de spiritueux",
      span: "col-span-1 row-span-1"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&h=400&fit=crop",
      alt: "Décoration néon du bar",
      span: "col-span-1 row-span-1"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg",
      alt: "Soirée dansantes",
      span: "col-span-1 row-span-1"
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://instagram.com/lecomptoirdessaisons', '_blank');
  };

  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-gray-900 to-deep-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-6xl text-pure-white mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Insta</span>-worthy
          </h2>
          <p className="font-inter text-lg text-pure-white/70 max-w-2xl mx-auto mb-8">
            Plongez dans l'univers du Comptoir des Saisons. Chaque moment mérite d'être partagé.
          </p>
          
           {/* Instagram CTA */}
          <div 
            onClick={handleInstagramClick}
            className="relative z-30 inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full cursor-pointer hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-white font-inter font-semibold">@lecomptoirdessaisons</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className={`${image.span} group relative overflow-hidden rounded-xl cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-pure-white text-sm font-inter">
                    {image.alt}
                  </p>
                </div>
              </div>

              {/* Neon Effect */}
              <div className="absolute inset-0 border-2 border-neon-pink/0 group-hover:border-neon-pink/50 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-pure-white/60 font-inter mb-4">
            Partagez vos moments avec #ComptoirDesSaisons
          </p>
          <button
           onClick={handleInstagramClick}
           className="bg-mint-green/20 border border-mint-green text-mint-green px-6 py-3 rounded-full font-inter font-semibold hover:bg-mint-green hover:text-deep-black transition-all duration-300">
            Voir plus sur Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
