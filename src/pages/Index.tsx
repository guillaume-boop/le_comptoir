
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Cocktails from '../components/Cocktails';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import Reservation from '../components/Reservation';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-black text-pure-white">
      <Navigation />
      <Hero />
      <Cocktails />
      <Gallery />
      <Events />
      <Reservation />
      <div className="container mx-auto py-12">
         {/*<h2 className="font-sora font-bold text-3xl mb-8 text-center">Nous <span className="text-neon-pink">Trouver</span></h2>*/}
        <GoogleMap />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
