
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-3/5 space-y-6 staggered-animate">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Abu Jafar Saifullah
            </h1>
            <h2 className="text-2xl md:text-3xl text-foreground/80">
              Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate Software Engineer with a strong foundation in Software Engineering
              fundamentals and a drive for innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" asChild className="gap-2">
                <a href="mailto:jafarmahin107@gmail.com">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://github.com/jaf107" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href="https://www.linkedin.com/in/abu-jafar-saifullah/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+880 171 774 3519</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>jafarmahin107@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-6xl font-bold text-primary">AJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
