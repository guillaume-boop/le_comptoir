
import { useState } from 'react';
import CocktailCard from './CocktailCard';
import {  mojitoRoyal, neonDreams, gardenFresh, virginMango, cosmopolitan, urbanJungle, midnightExpress, sakuraFizz} from '@/components/assets/img/cocktails';

const Cocktails = () => {
  const [filter, setFilter] = useState('Tous');

  const cocktails = [
    {
      name: "Sakura Fizz",
      description: "La délicatesse du yuzu, l'effervescence du prosecco, une touche de fleur de cerisier",
      price: "14",
      category: "Créations",
      imageSrc: sakuraFizz
    },
    {
      name: "Urban Jungle",
      description: "Gin artisanal, basilic thaï, concombre, sirop de verveine et zeste de citron vert",
      price: "13",
      category: "Créations",
      imageSrc: urbanJungle
    },
    {
      name: "Neon Dreams",
      description: "Vodka premium, liqueur de litchi, eau de rose, champagne rosé et poudre scintillante",
      price: "16",
      category: "Créations",
      imageSrc: neonDreams
    },
    {
      name: "Midnight Express",
      description: "Whisky tourbé, liqueur de café, sirop d'érable, bitter chocolat et écume de lait",
      price: "15",
      category: "Créations",
      imageSrc: midnightExpress
    },
    {
      name: "Mojito Royal",
      description: "Rhum blanc cubain, menthe fraîche, citron vert, eau gazeuse et sucre de canne",
      price: "11",
      category: "Classiques",
      imageSrc: mojitoRoyal
    },
    {
      name: "Cosmopolitan",
      description: "Vodka premium, liqueur de cranberry, triple sec, jus de citron vert frais",
      price: "12",
      category: "Classiques",
      imageSrc: cosmopolitan
    },
    {
      name: "Virgin Mango",
      description: "Purée de mangue, jus de passion, citron vert, eau gazeuse et menthe fraîche",
      price: "8",
      category: "Sans alcool",
      imageSrc: virginMango
    },
    {
      name: "Garden Fresh",
      description: "Concombre, basilic, citron vert, sirop d'agave et eau pétillante artisanale",
      price: "7",
      category: "Sans alcool",
      imageSrc: gardenFresh
    }
  ];

  const categories = ['Tous', 'Créations', 'Classiques', 'Sans alcool'];

  const filteredCocktails = filter === 'Tous' 
    ? cocktails 
    : cocktails.filter(cocktail => cocktail.category === filter);

  return (
    <section id="cocktails" className="py-20 bg-gradient-to-b from-deep-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-bold text-4xl md:text-6xl text-pure-white mb-6">
            Nos <span className="text-transparent bg-clip-text bg-neon-gradient">Cocktails</span>
          </h2>
          <p className="font-inter text-lg text-pure-white/70 max-w-2xl mx-auto">
            Des créations uniques imaginées par nos mixologues, entre tradition et innovation
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-neon-gradient text-deep-black shadow-lg shadow-neon-pink/25'
                  : 'bg-deep-black/50 text-pure-white border border-mint-green/30 hover:border-mint-green hover:text-mint-green'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cocktails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCocktails.map((cocktail, index) => (
            <CocktailCard
              key={index}
              name={cocktail.name}
              description={cocktail.description}
              price={cocktail.price}
              category={cocktail.category}
              imageSrc={cocktail.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
