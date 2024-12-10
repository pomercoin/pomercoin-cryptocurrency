import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onBuyClick: () => void;
}

export function Header({ onBuyClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/pomer-coin.png" 
                alt="PomerCoin" 
                className="h-12 w-12 rounded-full shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.2))'
                }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                PomerCoin
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about" onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink href="#tokenomics" onClick={() => scrollToSection('tokenomics')}>Tokenomics</NavLink>
            <NavLink href="#roadmap" onClick={() => scrollToSection('roadmap')}>Roadmap</NavLink>
            <NavLink href="/how-to-buy">How to Buy</NavLink>
            <button 
              onClick={onBuyClick}
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Buy Now
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col p-4">
            <NavLink href="#about" mobile onClick={() => scrollToSection('about')}>About</NavLink>
            <NavLink href="#tokenomics" mobile onClick={() => scrollToSection('tokenomics')}>Tokenomics</NavLink>
            <NavLink href="#roadmap" mobile onClick={() => scrollToSection('roadmap')}>Roadmap</NavLink>
            <NavLink href="/how-to-buy" mobile>How to Buy</NavLink>
            <button 
              onClick={onBuyClick}
              className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-2 rounded-full font-semibold mt-4"
            >
              Buy Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}