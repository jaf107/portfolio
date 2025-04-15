
import React, { useEffect } from 'react';
import SectionTabs from '@/components/SectionTabs';
import NavLinks from '@/components/NavLinks';

const Index = () => {
  // Add scroll animation to reveal elements as they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all section content divs and staggered elements
    const hiddenElements = document.querySelectorAll('section > div, .staggered-animate > *');
    hiddenElements.forEach((el) => observer.observe(el));

    // Apply title centering styles to all section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title) => {
      const parent = title.parentElement;
      if (parent && !parent.classList.contains('flex')) {
        parent.classList.add('flex', 'justify-center');
      }
    });

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavLinks />
      <SectionTabs />
    </div>
  );
};

export default Index;
