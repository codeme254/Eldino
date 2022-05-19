import './App.css';

import Hero from './Hero/Hero';
import MiniExplanation from './MiniExplanations/MiniExplanation';
import Cards from './CardsSection/Cards';
import SuccessSection from './Success/SuccessSection';
import Services from './Services/Services';
import Goals from './Goals/Goals';
import Testimonies from './Testimonies/Testimonies';
import Opportunities from './Opportunities/Opportunities';
import NewsAndUpdates from './News/News';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <MiniExplanation />
      <Cards />
      <SuccessSection />
      <Services />
      <Goals />
      <Testimonies />
      <Opportunities />
      <NewsAndUpdates />
      <Footer />
    </div>
  );
}

export default App;
