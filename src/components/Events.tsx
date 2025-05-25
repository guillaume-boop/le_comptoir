import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();

  const handleReservation = () => {
    const reservationSection = document.getElementById('reserver');
    if (reservationSection) {
      reservationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const events = [
    {
      id: 1,
      name: "Soirée Glow Up",
      date: "22 juin",
      time: "21h00",
      description: "Dress code fluo obligatoire ! 2 cocktails achetés = 1 offert",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=500&fit=crop",
      tag: "Événement spécial",
      color: "neon-pink"
    },
    {
      id: 2,
      name: "Girls Night",
      date: "Tous les jeudis",
      time: "19h00 - 2h00",
      description: "Entre copines, cocktails à -20% et playlist spéciale",
      image: "https://images.pexels.com/photos/3394310/pexels-photo-3394310.jpeg",
      tag: "Hebdomadaire",
      color: "mint-green"
    },
    {
      id: 3,
      name: "Mixology Masterclass",
      date: "15 juillet",
      time: "18h30",
      description: "Apprenez à créer vos cocktails signature avec nos experts",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=500&fit=crop",
      tag: "Atelier",
      color: "neon-pink"
    },
    {
      id: 4,
      name: "Rooftop Sessions",
      date: "Vendredis d'été",
      time: "20h00",
      description: "DJ sets en terrasse avec vue panoramique sur la ville",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop",
      tag: "Musique live",
      color: "mint-green"
    }
  ];

   return (
    <section id="evenements" className="py-20 bg-gradient-to-b from-deep-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-6xl text-pure-white mb-6">
            Nos <span className="text-transparent bg-clip-text bg-neon-gradient">Événements</span>
          </h2>
          <p className="font-inter text-lg text-pure-white/70 max-w-2xl mx-auto">
            Des soirées uniques qui marquent les esprits. Rejoignez-nous pour vivre l'extraordinaire.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group relative bg-gradient-to-b from-deep-black to-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-neon-pink/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/20 z-10"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-inter font-semibold ${
                    event.color === 'neon-pink' 
                      ? 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30' 
                      : 'bg-mint-green/20 text-mint-green border border-mint-green/30'
                  }`}>
                    {event.tag}
                  </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <h3 className="font-sora font-bold text-xl text-pure-white mb-3 group-hover:text-neon-pink transition-colors">
                  {event.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-mint-green"></div>
                    <span className="text-mint-green font-inter font-semibold text-sm">
                      {event.date}
                    </span>
                  </div>
                  <span className="text-pure-white/60 font-inter text-sm">
                    {event.time}
                  </span>
                </div>
                
                <p className="text-pure-white/70 font-inter text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* CTA Button */}
                <button 
                  onClick={handleReservation}
                  className="relative z-30 w-full bg-gradient-to-r from-neon-pink/20 to-mint-green/20 border border-neon-pink/30 text-pure-white py-3 rounded-full font-inter font-semibold hover:bg-neon-gradient hover:text-deep-black transition-all duration-300 cursor-pointer"
                >
                  Réserver ma place
                </button>
              </div>

              {/* Hover Glow Effect - positioned behind content */}
              <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none z-0"></div>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 text-center hidden">
          <div className="max-w-lg mx-auto bg-gradient-to-r from-deep-black/50 to-gray-900/50 border border-mint-green/20 rounded-2xl p-8">
            <h3 className="font-sora font-bold text-2xl text-pure-white mb-4">
              Ne ratez aucun événement
            </h3>
            <p className="text-pure-white/70 font-inter mb-6">
              Inscrivez-vous à notre newsletter pour être informé en premier de nos soirées exclusives
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Votre email"
                className="flex-1 bg-deep-black/50 border border-white/20 rounded-full px-4 py-3 text-pure-white placeholder-white/40 focus:border-mint-green focus:outline-none"
              />
              <button className="bg-mint-green text-deep-black px-6 py-3 rounded-full font-inter font-semibold hover:bg-mint-green/80 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
