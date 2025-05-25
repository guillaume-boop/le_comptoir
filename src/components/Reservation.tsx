
import { useState } from 'react';
import { Calendar, Clock, Users, Phone } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Réservation:', formData);
    // Ici vous pourriez intégrer avec un service de réservation
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/lecomptoirdessaisons', '_blank');
  };

  const handleWhatsappClick = () => {
    window.open('https://instagram.com/lecomptoirdessaisons', '_blank');
  };

  return (
    <section id="reserver" className="py-20 bg-gradient-to-b from-gray-900 to-deep-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-6xl text-pure-white mb-6">
            <span className="text-transparent bg-clip-text bg-neon-gradient">Réservez</span> votre table
          </h2>
          <p className="font-inter text-lg text-pure-white/70 max-w-2xl mx-auto">
            Garantissez-vous une place dans l'expérience cocktail la plus branchée de la ville
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Formulaire */}
            <div className="bg-gradient-to-b from-deep-black/80 to-gray-900/80 border border-neon-pink/20 rounded-2xl p-8">
              <h3 className="font-sora font-bold text-2xl text-pure-white mb-6">
                Informations de réservation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-pure-white/80 font-inter font-medium mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-deep-black/50 border border-white/20 rounded-lg px-4 py-3 text-pure-white placeholder-white/40 focus:border-neon-pink focus:outline-none transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-pure-white/80 font-inter font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-deep-black/50 border border-white/20 rounded-lg px-4 py-3 text-pure-white placeholder-white/40 focus:border-neon-pink focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-pure-white/80 font-inter font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-deep-black/50 border border-white/20 rounded-lg px-4 py-3 text-pure-white placeholder-white/40 focus:border-neon-pink focus:outline-none transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-pure-white/80 font-inter font-medium mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-deep-black/50 border border-white/20 rounded-lg px-4 py-3 text-pure-white focus:border-neon-pink focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-pure-white/80 font-inter font-medium mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Heure
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-deep-black/50 border border-white/20 rounded-lg px-4 py-3 text-pure-white focus:border-neon-pink focus:outline-none transition-colors"
                    >
                      <option value="">Choisir</option>
                      <option value="18:00">18h00</option>
                      <option value="18:30">18h30</option>
                      <option value="19:00">19h00</option>
                      <option value="19:30">19h30</option>
                      <option value="20:00">20h00</option>
                      <option value="20:30">20h30</option>
                      <option value="21:00">21h00</option>
                      <option value="21:30">21h30</option>
                      <option value="22:00">22h00</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-pure-white/80 font-inter font-medium mb-2">
                      <Users className="inline w-4 h-4 mr-2" />
                      Invités
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full bg-deep-black/50 border border-white/20 rounded-lg px-4 py-3 text-pure-white focus:border-neon-pink focus:outline-none transition-colors"
                    >
                      <option value="">Nombre</option>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes</option>
                      <option value="6">6 personnes</option>
                      <option value="7+">7+ personnes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-pure-white/80 font-inter font-medium mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-deep-black/50 border border-white/20 rounded-lg px-4 py-3 text-pure-white placeholder-white/40 focus:border-neon-pink focus:outline-none transition-colors resize-none"
                    placeholder="Demandes spéciales, occasion particulière..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-neon-gradient text-deep-black py-4 rounded-lg font-inter font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-pink/25"
                >
                  Confirmer ma réservation
                </button>
              </form>
            </div>

            {/* Infos pratiques */}
            <div className="space-y-8">
              {/* Contact rapide */}
              <div className="bg-gradient-to-b from-deep-black/80 to-gray-900/80 border border-mint-green/20 rounded-2xl p-8">
                <h3 className="font-sora font-bold text-2xl text-pure-white mb-6">
                  Contact express
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-mint-green/10 rounded-lg border border-mint-green/20">
                    <Phone className="w-6 h-6 text-mint-green" />
                    <div>
                      <p className="text-pure-white font-inter font-semibold">WhatsApp</p>
                      <p className="text-pure-white/70 text-sm">Réponse immédiate</p>
                    </div>
                    <button 
                    onClick={handleWhatsappClick}
                    className="ml-auto bg-mint-green text-deep-black px-4 py-2 rounded-full font-inter font-semibold hover:bg-mint-green/80 transition-colors">
                      Contacter
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-neon-pink/10 rounded-lg border border-neon-pink/20">
                    <svg className="w-6 h-6 text-neon-pink" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div>
                      <p className="text-pure-white font-inter font-semibold">Instagram DM</p>
                      <p className="text-pure-white/70 text-sm">Message privé</p>
                    </div>
                    <button 
                    onClick={handleInstagramClick}
                    className="ml-auto bg-neon-pink text-deep-black px-4 py-2 rounded-full font-inter font-semibold hover:bg-neon-pink/80 transition-colors">
                      Écrire
                    </button>
                  </div>
                </div>
              </div>

              {/* Infos pratiques */}
              <div className="bg-gradient-to-b from-deep-black/80 to-gray-900/80 border border-white/10 rounded-2xl p-8">
                <h3 className="font-sora font-bold text-2xl text-pure-white mb-6">
                  Infos pratiques
                </h3>
                
                <div className="space-y-4 text-pure-white/70 font-inter">
                  <div>
                    <p className="text-pure-white font-semibold mb-1">Horaires</p>
                    <p>Mardi - Dimanche : 18h00 - 2h00</p>
                    <p>Fermé le lundi</p>
                  </div>
                  
                  <div>
                    <p className="text-pure-white font-semibold mb-1">Adresse</p>
                    <p>15 rue des Tendances</p>
                    <p>75001 Paris</p>
                  </div>
                  
                  <div>
                    <p className="text-pure-white font-semibold mb-1">Métro</p>
                    <p>Châtelet-Les Halles (lignes 1, 4, 7, 11, 14)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
