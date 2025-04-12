
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Abu Jafar</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('awards')} className="text-foreground hover:text-primary transition-colors">Awards</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">About</button>
            <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Skills</button>
            <button onClick={() => scrollToSection('awards')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Awards</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
