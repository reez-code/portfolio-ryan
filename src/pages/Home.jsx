import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
import Index from "../components/Index";
import PortfolioSection from "../components/portfolio/PortfolioSection";

function Home() {
  return (
    <>
      <HeroSection />
      <Contact />
      <Experience />
      <Index />
      <PortfolioSection />
    </>
  );
}

export default Home;
