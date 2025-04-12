
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

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

      // Detect which section is in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
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
    setActiveSection(id);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Abu Jafar</span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => scrollToSection('about')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'about' && "text-primary font-medium"
              )}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'experience' && "text-primary font-medium"
              )}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'projects' && "text-primary font-medium"
              )}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('research')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'research' && "text-primary font-medium"
              )}
            >
              Research
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'skills' && "text-primary font-medium"
              )}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('awards')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'awards' && "text-primary font-medium"
              )}
            >
              Awards
            </button>
            <button 
              onClick={() => scrollToSection('education')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'education' && "text-primary font-medium"
              )}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={cn(
                "px-3 py-2 text-foreground hover:text-primary transition-colors",
                activeSection === 'contact' && "text-primary font-medium"
              )}
            >
              Contact
            </button>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">About</button>
            <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Projects</button>
            <button onClick={() => scrollToSection('research')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Research</button>
            <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Skills</button>
            <button onClick={() => scrollToSection('awards')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Awards</button>
            <button onClick={() => scrollToSection('education')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Education</button>
            <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md w-full text-left">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
