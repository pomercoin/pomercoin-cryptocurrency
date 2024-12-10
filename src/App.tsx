import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { Community } from './components/Community';
import { HowToBuy } from './components/HowToBuy';
import { Whitepaper } from './components/Whitepaper';
import { Background } from './components/Background';
import { BuyModal } from './components/Buy';

function ScrollToSection() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return null;
}

interface HomePageProps {
  onBuyClick: () => void;
}

function HomePage({ onBuyClick }: HomePageProps) {
  return (
    <>
      <Hero onBuyClick={onBuyClick} />
      <About />
      <Stats />
      <Tokenomics />
      <Roadmap />
      <Community />
    </>
  );
}

export function App() {
  const [isBuyModalOpen, setIsBuyModalOpen] = React.useState(false);

  const handleBuyClick = () => {
    setIsBuyModalOpen(true);
  };

  return (
    <Router>
      <ScrollToSection />
      <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
        <Background />
        <div className="relative z-10">
          <Header onBuyClick={handleBuyClick} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage onBuyClick={handleBuyClick} />} />
              <Route path="/how-to-buy" element={<HowToBuy />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
            </Routes>
          </main>
        </div>
        <BuyModal isOpen={isBuyModalOpen} onClose={() => setIsBuyModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;