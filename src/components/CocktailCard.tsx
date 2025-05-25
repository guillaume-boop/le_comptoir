
import { ImageIcon } from "lucide-react";

interface CocktailCardProps {
  name: string;
  description: string;
  price: string;
  category: string;
  imageSrc?: string;
}

const CocktailCard = ({ name, description, price, category, imageSrc }: CocktailCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-deep-black to-gray-900 border border-neon-pink/20 rounded-xl overflow-hidden hover:border-neon-pink/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neon-pink/20">
      {/* Image */}
      <div className="w-full h-[30rem] overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-gray-600" />
          </div>
        )}
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span className="bg-mint-green/20 text-mint-green px-3 py-1 rounded-full text-xs font-inter font-medium">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-sora font-bold text-xl text-pure-white mb-3 group-hover:text-neon-pink transition-colors">
          {name}
        </h3>
        
        <p className="font-inter text-pure-white/70 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-sora font-bold text-2xl text-neon-pink">
            {price}€
          </span>
          
          <div className="w-8 h-8 rounded-full bg-neon-gradient opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center hidden">
            <span className="text-deep-black font-bold text-sm">+</span>
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-neon-gradient opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
    </div>
  );
};

export default CocktailCard;
