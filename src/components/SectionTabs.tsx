
import React, { useState, useEffect } from 'react';
import { Briefcase, Code, FileText, Award, GraduationCap, Mail, Sparkles, Brain } from 'lucide-react';
import Experience from './Experience';
import Projects from './Projects';
import Research from './Research';
import Skills from './Skills';
import Awards from './Awards';
import Education from './Education';
import Contact from './Contact';
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const SectionTabs = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    
    // Update section visibility
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: "experience", label: "Experience", icon: <Briefcase size={20} /> },
    { id: "projects", label: "Projects", icon: <Code size={20} /> },
    { id: "research", label: "Research", icon: <Brain size={20} /> },
    { id: "skills", label: "Skills", icon: <Sparkles size={20} /> },
    { id: "awards", label: "Awards", icon: <Award size={20} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  return (
    <div className="py-10 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <SidebarProvider defaultOpen={true}>
            <Sidebar className="!fixed !static w-auto shadow-md rounded-lg">
              <SidebarContent>
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
              </SidebarContent>
            </Sidebar>
          
            <div className="flex-1">
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
