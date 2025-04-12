import React, { useState, useEffect } from 'react';
import { Briefcase, Code, FileText, Award, GraduationCap, Mail, Sparkles, Brain, User, ChevronLeft, ChevronRight } from 'lucide-react';
import Experience from './Experience';
import Projects from './Projects';
import Research from './Research';
import Skills from './Skills';
import Awards from './Awards';
import Education from './Education';
import Contact from './Contact';
import Hero from './Hero';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Sidebar, SidebarContent, SidebarProvider, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from '@/components/ui/sidebar';
const SectionTabs = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(true);
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
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navItems = [{
    id: "about",
    label: "About",
    icon: <User size={20} />
  }, {
    id: "experience",
    label: "Experience",
    icon: <Briefcase size={20} />
  }, {
    id: "projects",
    label: "Projects",
    icon: <Code size={20} />
  }, {
    id: "research",
    label: "Research",
    icon: <Brain size={20} />
  }, {
    id: "skills",
    label: "Skills",
    icon: <Sparkles size={20} />
  }, {
    id: "awards",
    label: "Awards",
    icon: <Award size={20} />
  }, {
    id: "education",
    label: "Education",
    icon: <GraduationCap size={20} />
  }, {
    id: "contact",
    label: "Contact",
    icon: <Mail size={20} />
  }];

  // About component
  const About = () => <section id="about" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
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
    </section>;
  return <div className="relative flex-1 flex">
      <SidebarProvider defaultOpen={isOpen}>
        <div className="flex min-h-screen w-full">
          <Sidebar className="shadow-md rounded-none border-r h-screen">
            <SidebarContent className="px-[20px] mx-0">
              <div className="py-4 px-3">
                <span className="text-xl font-bold text-primary">Abu Jafar</span>
              </div>
              <SidebarMenu>
                {navItems.map(item => <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton onClick={() => handleSectionChange(item.id)} isActive={activeSection === item.id} tooltip={item.label}>
                      {item.icon}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>)}
              </SidebarMenu>
              <SidebarFooter className="mt-auto">
                <div className="flex flex-col gap-3 p-4">
                  <ThemeToggle />
                  <Button variant="outline" size="icon" onClick={toggleSidebar} className="mt-2" aria-label="Toggle sidebar">
                    {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                  </Button>
                </div>
              </SidebarFooter>
            </SidebarContent>
          </Sidebar>
          
          <main className="flex-1 overflow-auto p-6 pb-20 bg-background">
            {activeSection === "about" && <About />}
            {activeSection === "experience" && <Experience />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "research" && <Research />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "awards" && <Awards />}
            {activeSection === "education" && <Education />}
            {activeSection === "contact" && <Contact />}
          </main>
        </div>
      </SidebarProvider>
    </div>;
};
export default SectionTabs;