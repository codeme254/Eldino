import "./App.css";

import Nav from "./Nav/Nav";
import Hero from "./Hero/Hero";
import MiniExplanation from "./MiniExplanations/MiniExplanation";
import Cards from "./CardsSection/Cards";
import SuccessSection from "./Success/SuccessSection";
import Services from "./Services/Services";
import Goals from "./Goals/Goals";
import Testimonies from "./Testimonies/Testimonies";
import { useRef } from "react";
import Opportunities from "./Opportunities/Opportunities";
import NewsAndUpdates from "./News/News";
import Footer from "./Footer/Footer";

function App() {
  const scrollerRef = useRef(null);
  const handleScroll = () => {
    scrollerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Nav />
      <Hero handleClick={handleScroll} />
      <MiniExplanation />
      <Cards />
      <SuccessSection />
      <div ref={scrollerRef}>
        <Services />
      </div>
      <Goals />
      <Testimonies />
      <Opportunities />
      <NewsAndUpdates />
      <Footer />
    </div>
  );
}

export default App;
