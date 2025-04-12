
import React, { useState, useEffect } from 'react';
import { Briefcase, Code, FileText, Award, GraduationCap, Mail, Sparkles, Brain, User, Home } from 'lucide-react';
import Experience from './Experience';
import Projects from './Projects';
import Research from './Research';
import Skills from './Skills';
import Awards from './Awards';
import Education from './Education';
import Contact from './Contact';
import { ThemeToggle } from './ThemeToggle';
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';

const SectionTabs = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    // Handle initial hash in URL
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
    }
  }, []);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Update URL hash without scrolling
    const scrollPosition = window.pageYOffset;
    window.location.hash = sectionId;
    window.scrollTo(window.pageXOffset, scrollPosition);
  };

  const navItems = [
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={20} /> },
    { id: "projects", label: "Projects", icon: <Code size={20} /> },
    { id: "research", label: "Research", icon: <Brain size={20} /> },
    { id: "skills", label: "Skills", icon: <Sparkles size={20} /> },
    { id: "awards", label: "Awards", icon: <Award size={20} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  // Simple About component
  const About = () => (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            I'm Abu Jafar, a software engineer passionate about building innovative solutions.
          </p>
          <p className="mb-6">
            Currently, I'm looking for PhD & Masters opportunities in the fields of Software Engineering, AI/ML, and Security.
            My research interests include developing secure and efficient software systems powered by machine learning.
          </p>
          <p>
            With a strong background in software development and research, I aim to contribute to the advancement of technology
            through rigorous academic exploration and practical applications.
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="py-10 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <SidebarProvider defaultOpen={true}>
            <Sidebar className="w-auto shadow-md rounded-lg">
              <SidebarContent>
                <div className="py-4 px-3">
                  <span className="text-xl font-bold text-primary">Abu Jafar</span>
                </div>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton 
                        onClick={() => handleSectionChange(item.id)}
                        isActive={activeSection === item.id}
                        tooltip={item.label}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
                <SidebarFooter className="mt-auto">
                  <div className="flex justify-center py-4">
                    <ThemeToggle />
                  </div>
                </SidebarFooter>
              </SidebarContent>
            </Sidebar>
          
            <div className="flex-1">
              <div className={activeSection === "about" ? "block" : "hidden"}>
                <About />
              </div>
              <div className={activeSection === "experience" ? "block" : "hidden"}>
                <Experience />
              </div>
              <div className={activeSection === "projects" ? "block" : "hidden"}>
                <Projects />
              </div>
              <div className={activeSection === "research" ? "block" : "hidden"}>
                <Research />
              </div>
              <div className={activeSection === "skills" ? "block" : "hidden"}>
                <Skills />
              </div>
              <div className={activeSection === "awards" ? "block" : "hidden"}>
                <Awards />
              </div>
              <div className={activeSection === "education" ? "block" : "hidden"}>
                <Education />
              </div>
              <div className={activeSection === "contact" ? "block" : "hidden"}>
                <Contact />
              </div>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </div>
  );
};

export default SectionTabs;
