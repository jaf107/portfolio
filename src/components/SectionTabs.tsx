
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Experience from './Experience';
import Projects from './Projects';
import Research from './Research';
import Skills from './Skills';
import Awards from './Awards';
import Education from './Education';
import Contact from './Contact';

const SectionTabs = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // Update URL hash without scrolling
    const scrollPosition = window.pageYOffset;
    window.location.hash = value;
    window.scrollTo(window.pageXOffset, scrollPosition);
    
    // Update section visibility for scroll detection
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <Tabs defaultValue="experience" value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-0">
            <Experience />
          </TabsContent>
          
          <TabsContent value="projects" className="mt-0">
            <Projects />
          </TabsContent>
          
          <TabsContent value="research" className="mt-0">
            <Research />
          </TabsContent>
          
          <TabsContent value="skills" className="mt-0">
            <Skills />
          </TabsContent>
          
          <TabsContent value="awards" className="mt-0">
            <Awards />
          </TabsContent>
          
          <TabsContent value="education" className="mt-0">
            <Education />
          </TabsContent>
          
          <TabsContent value="contact" className="mt-0">
            <Contact />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SectionTabs;
