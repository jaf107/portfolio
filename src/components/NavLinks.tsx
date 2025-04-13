
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import contactData from '../data/contact.json';
import { ThemeToggle } from './ThemeToggle';

const NavLinks = () => {
  return (
    <div className="fixed top-0 right-0 z-50 flex items-center gap-2 p-4">
      <Button variant="ghost" size="icon" asChild>
        <a 
          href={contactData.contactInfo.find(item => item.title === "GitHub")?.href || "https://github.com/jaf107"} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      </Button>
      
      <Button variant="ghost" size="icon" asChild>
        <a 
          href={contactData.contactInfo.find(item => item.title === "LinkedIn")?.href || "https://www.linkedin.com/in/abu-jafar-saifullah/"} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      
      <Button variant="ghost" size="icon" asChild>
        <a 
          href={contactData.contactInfo.find(item => item.title === "Email")?.href || "mailto:jafarmahin107@gmail.com"} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      </Button>

      <ThemeToggle />
    </div>
  );
};

export default NavLinks;
