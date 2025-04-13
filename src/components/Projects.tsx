
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import projectsData from '../data/projects.json';

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
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
