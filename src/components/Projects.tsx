
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  demoLink 
}) => {
  return (
    <Card className="h-full flex flex-col card-hover">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubLink && (
          <Button variant="outline" size="sm" asChild className="gap-1">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={14} />
              <span>Code</span>
            </a>
          </Button>
        )}
        {demoLink && (
          <Button variant="default" size="sm" asChild className="gap-1">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              <span>Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Academic Projects</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 staggered-animate">
          <ProjectItem
            title="API Miners GPT"
            description="Engineered enhanced ChatGPT using OpenAI and Stable Diffusion APIs, featuring audio I/O, OCR, and a child book generator, with an integrated bookstore for content distribution."
            technologies={[".NET", "ReactJS", "OpenAI API", "Hackathon"]}
            githubLink="https://github.com/jaf107/API-Miners-GPT"
          />
          
          <ProjectItem
            title="Mr. Bin"
            description="Web app that connects recyclers and sellers in order to encourage recycling and sell useless products. SPL 2 project."
            technologies={["MERN", "SpringBoot", "TensorFlow", "Maps API"]}
            githubLink="https://github.com/jaf107/Mr-Bin"
          />
          
          <ProjectItem
            title="MiniFacebook"
            description="Developed web app with Status, Story services in a Service Oriented Architecture. Distributed system project."
            technologies={["MERN", "NodeJS", "Docker", "Nginx"]}
            githubLink="https://github.com/jaf107/MiniFacebook"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
