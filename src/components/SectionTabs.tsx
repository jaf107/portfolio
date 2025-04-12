import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import {
  Briefcase,
  Code,
  Award,
  GraduationCap,
  Mail,
  Sparkles,
  Brain,
  User,
  ListCollapse,
} from "lucide-react";
import Experience from "./Experience";
import Projects from "./Projects";
import Research from "./Research";
import Skills from "./Skills";
import Awards from "./Awards";
import Education from "./Education";
import Contact from "./Contact";
import Hero from "./Hero";
import {
  Sidebar,
  Nav,
  NavBody,
  NavFooter,
  NavHeader,
  NavItem,
  SidebarToggle,
  Avatar,
  Text,
} from "@optiaxiom/react";

const SectionTabs = () => {
  const { theme, setTheme } = useTheme();

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
    }
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);

    // Update URL hash without scrolling
    const scrollPosition = window.pageYOffset;
    window.location.hash = sectionId;
    window.scrollTo(window.pageXOffset, scrollPosition);
  };

  const navItems = [
    {
      id: "about",
      label: "About",
      icon: <User size={20} />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <Briefcase size={20} />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Code size={20} />,
    },
    {
      id: "research",
      label: "Research",
      icon: <Brain size={20} />,
    },
    {
      id: "skills",
      label: "Skills",
      icon: <Sparkles size={20} />,
    },
    {
      id: "awards",
      label: "Awards",
      icon: <Award size={20} />,
    },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap size={20} />,
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail size={20} />,
    },
  ];

  // About component
  const About = () => (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            I'm Abu Jafar, a software engineer passionate about building
            innovative solutions.
          </p>
          <p className="mb-6">
            Currently, I'm looking for PhD & Masters opportunities in the fields
            of Software Engineering, AI/ML, and Security. My research interests
            include developing secure and efficient software systems powered by
            machine learning.
          </p>
          <p>
            With a strong background in software development and research, I aim
            to contribute to the advancement of technology through rigorous
            academic exploration and practical applications.
          </p>
        </div>
      </div>
    </section>
  );

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <Hero />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "research":
        return <Research />;
      case "skills":
        return <Skills />;
      case "awards":
        return <Awards />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar defaultExpanded>
        <Nav>
          <NavHeader alignItems={"start"} my="4">
            <NavItem icon={<Avatar src="/logo.png" />}>
              <Text fontSize="lg" fontWeight="700">
                Abu Jafar
              </Text>
            </NavItem>
          </NavHeader>
          <NavBody>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                onClick={() => handleSectionChange(item.id)}
              >
                {item.label}
              </NavItem>
            ))}
          </NavBody>
          <NavFooter>
            <NavItem
              id="theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              icon={
                <div className="relative w-5 h-5">
                  <Sun className="h-5 w-5 absolute transition-all dark:scale-0 dark:opacity-0" />
                  <Moon className="h-5 w-5 absolute transition-all scale-0 opacity-0 dark:scale-100 dark:opacity-100" />
                </div>
              }
            >
              Toggle Theme
            </NavItem>
            <SidebarToggle icon={<ListCollapse size={20} />} />
          </NavFooter>
        </Nav>
      </Sidebar>

      <main className="flex-1 overflow-auto p-6 pb-20 bg-background">
        {renderContent()}
      </main>
    </div>
  );
};

export default SectionTabs;
